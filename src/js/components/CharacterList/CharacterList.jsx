import "whatwg-fetch";
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import CharacterFilter from "./CharacterFilter.jsx";
import { setNumberOfCharacters } from '../../actions/CharacterActionCreators';
import store from "../../store/index.js";
import axios from 'axios';
import _ from 'lodash';
import * as CharacterActionCreators from "../../actions/CharacterActionCreators.js";
import CharacterTable from "./CharacterTable";
import * as cssStyles from '../../../styles/Styles.css';

class CharacterList extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    }
  }

  componentDidMount() {
    axios.defaults.headers.common['authorization'] = this.props.Auth;
    this.loadData();
  }

  setFilter = (query) => {
    let filter = "";
    for (let key in query) {
      filter += "&"+ key + "=" + query[key]  ;
    }
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: filter
    });
  }

  componentDidUpdate(prevProps) {
    const oldQuery = prevProps;
    const newQuery = this.props;
    if (oldQuery.location.search === newQuery.location.search) {
      return;
    } else if (oldQuery.location.query && newQuery.location.query) {
      return;
    } else {
      this.loadData();
    }
  }

  loadData = async  () => {
    const { currentUserName, location } = this.props;
    let filter = "";

    if (this.props.location.query !== undefined) {
      let currentUser = currentUserName;
	    filter += '?user=' + currentUser;
      for (let key in location.query) {
        filter += "&" + key + "=" + location.query[key];
      }
    } else {
	    let currentUser = currentUserName;
	    filter +=  '?user=' + currentUser;
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
   this.props.dispatch(action);
   this.setState({ characters });
  }

  deleteCharacter = async (id) => {
    try {
      let characters = _.map(this.state.characters, _.cloneDeep);
      await axios.delete(`/api/characters/${id}`);
      _.remove(characters, (char) => char._id === id);
      const action = setNumberOfCharacters(characters.length);
      this.props.dispatch(action);
      this.setState({ characters });
    } catch (err) {
      console.log("Error deleting characters: ", err);
    }
  }

  render() {
    return (
      <div>

        <CharacterFilter
          setFilter={this.setFilter}
          initFilter={this.props.location.search}
        />

        <hr />
        <CharacterTable
          characters={this.state.characters}
          deleteCharacter={this.deleteCharacter}
        />
	      <hr className={cssStyles.hrCharacterList} />

      </div>
    );
  }
}

const { object } = PropTypes;
CharacterList.prototypes = {
  location: object.isRequired,
};

const mapStateToProps = state => {
  return{
    numberOfCharacters: state.characterReducer.numberOfCharacters,
    currentUserName: state.userReducer.currentUserName,
    Auth: state.userReducer.authToken,
  }
};

export default withRouter(connect(mapStateToProps)(CharacterList));
