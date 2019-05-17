import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import axios from 'axios';
import { Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import CharacterFilter from "./CharacterFilter.jsx";
import { setNumberOfCharacters } from '../../actions/CharacterActionCreators';
import CharacterTable from "./CharacterTable";
import * as cssStyles from '../../../styles/Styles.css';

export const CharacterList = (props) => {
  const {
    Auth, location, currentUserName, history, dispatch
  } = props;
  const { search, query, pathname } = location;
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const setFilter = (filterQuery) => {
    let filter = "";
    Object.keys(filterQuery).forEach((key) => {
      const filterKey = filterQuery[key];
      filter = `${filter}&${key}=${filterKey}`;
    });
    history.push({
      pathname,
      search: filter
    });
  };

  const loadData = async () => {
    let filter = "";
    if (query !== undefined) {
      const currentUser = currentUserName;
      filter += `${filter}?user=${currentUser}`;
      Object.keys(query).forEach((key) => {
        const queryKey = query[key];
        filter = `${filter}&${key}=${queryKey}`;
      });
    } else {
      const currentUser = currentUserName;
      filter = `${filter}?user=${currentUser}`;
      filter += location.search.substring(1);
    }
    let getResult;
    try {
      getResult = await axios.get(`/api/characters${filter}`);
    } catch (err) {
      console.log("Error fetching characters: ", err);
    }
    const { characters: chars } = getResult.data;
    const action = setNumberOfCharacters(chars.length);
    dispatch(action);
    setCharacters(chars);
    setLoading(false);
  };

  useEffect(() => {
    async function fetchCharacters() {
      axios.defaults.headers.common.authorization = Auth;
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
  }, [search, query]);

  const deleteCharacter = async (id) => {
    try {
      const updateCharacters = characters.filter(char => char._id !== id);
      await axios.delete(`/api/characters/${id}`);
      const action = setNumberOfCharacters(updateCharacters.length);
      dispatch(action);
      setCharacters(updateCharacters);
      setLoading(false);
    } catch (err) {
      console.log("Error deleting characters: ", err);
    }
  };

  return (
    <React.Fragment>
      <CharacterFilter
        setFilter={setFilter}
        initFilter={search}
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
          <i className="fas fa-plus-circle" style={{ marginRight: '10px', marginLeft: '85px' }} />
          Create Character
        </Button>
      </LinkContainer>
    </React.Fragment>
  );
};

CharacterList.prototypes = {
  location: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    numberOfCharacters: state.characterReducer.numberOfCharacters,
    currentUserName: state.userReducer.currentUserName,
    Auth: state.userReducer.authToken,
  };
};

export default withRouter(connect(mapStateToProps)(CharacterList));
