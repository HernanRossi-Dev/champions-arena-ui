import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import CharacterFilter from "./CharacterFilter.jsx";
import { setNumberOfCharacters } from '../../actions/CharacterActionCreators';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import CharacterTable from "./CharacterTable";
import * as cssStyles from '../../../styles/Styles.css';

export const CharacterList = (props) => {
 
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacters() {
      axios.defaults.headers.common['authorization'] = props.Auth;
      setLoading(true);
      await loadData();
    }
    fetchCharacters();
  }, []);

  useEffect(() => {
    async function fetchCharacters() {
      setLoading(true);
      await loadData();
    }
    fetchCharacters();
  }, [props.location.search, props.location.query]);

  const setFilter = (query) => {
    let filter = "";
    for (let key in query) {
      filter += "&" + key + "=" + query[key];
    }
    props.history.push({
      pathname: props.location.pathname,
      search: filter
    });
  }

  const loadData = async () => {
    const { currentUserName, location } = props;
    let filter = "";
    if (props.location.query !== undefined) {
      let currentUser = currentUserName;
      filter += '?user=' + currentUser;
      for (let key in location.query) {
        filter += "&" + key + "=" + location.query[key];
      }
    } else {
      let currentUser = currentUserName;
      filter += '?user=' + currentUser;
      filter += location.search.substring(1);
    }
    let getResult;
    try {
      getResult = await axios.get(`/api/characters${filter}`);
    } catch (err) {
      console.log("Error fetching characters: ", err);
    }
    const characters = getResult.data.characters
    const action = setNumberOfCharacters(characters.length);
    props.dispatch(action);
    setCharacters(characters);
    setLoading(false);
  }

  const deleteCharacter = async (id) => {
    try {
      let updateCharacters = characters.filter((character) => {
        return character._id !== id
      });
      await axios.delete(`/api/characters/${id}`);
      const action = setNumberOfCharacters(updateCharacters.length);
      props.dispatch(action);
      setCharacters(updateCharacters);
      setLoading(false);
    } catch (err) {
      console.log("Error deleting characters: ", err);
    }
  }

  return (
    <React.Fragment>
      <CharacterFilter
        setFilter={setFilter}
        initFilter={props.location.search}
      />
      <hr />
      <CharacterTable
        characters={characters}
        deleteCharacter={deleteCharacter}
        isLoading={isLoading}
      />
      <hr className={cssStyles.hrCharacterList} />
      <LinkContainer to="/createCharacter">
        <Button type="button" bsClass={cssStyles.deleteButton}>
          <i class="fas fa-plus-circle" style={{ marginRight: '10px', marginLeft: '85px' }}></i> Create Character
        </Button>
      </LinkContainer>
    </React.Fragment>
  );
};

CharacterList.prototypes = {
  location: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    numberOfCharacters: state.characterReducer.numberOfCharacters,
    currentUserName: state.userReducer.currentUserName,
    Auth: state.userReducer.authToken,
  }
};

export default withRouter(connect(mapStateToProps)(CharacterList));
