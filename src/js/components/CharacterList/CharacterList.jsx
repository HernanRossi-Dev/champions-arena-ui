import "whatwg-fetch";
import React from "react";
import PropTypes from "prop-types";
import CharacterFilter from "./CharacterFilter.jsx";
import store from "../../store/index.js";
import * as CharacterActionCreators from "../../actions/CharacterActionCreators.js";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import CharacterTable from "./CharacterTable";
import * as cssStyles from '../../../styles/Styles.css'
import characterReducer from '../../reducers/CharacterReducers'
import { withRouter } from 'react-router-dom'

class CharacterList extends React.Component {
  constructor(props) {
    super();

    this.setFilter = this.setFilter.bind(this);
    this.deleteCharacter = this.deleteCharacter.bind(this);
    const { dispatch } = props;
    this.boundActionCreators = bindActionCreators(CharacterActionCreators, dispatch);
    this.state={
      characters: []
    }
  }

  componentDidMount() {
    let { dispatch } = this.props;
    this.loadData(dispatch);
  }

  setFilter(query) {
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
    } else if (oldQuery.location.query && newQuery.location.query) {
    } else {
      let { dispatch } = this.props;
      this.loadData(dispatch);
    }
  }

  loadData(dispatch) {
    let filter = "";

    if (this.props.location.query !== undefined) {
      let currentUser = store.getState().userReducer.currentUserName;
	    filter += '?user=' + currentUser;
      for (let key in this.props.location.query) {
        filter += "&" + key + "=" + this.props.location.query[key];
      }
    } else {
	    let currentUser = store.getState().userReducer.currentUserName;
	    filter +=  '?user=' + currentUser;
      filter += this.props.location.search.substring(1);
    }
    let action = CharacterActionCreators.fetchCharacters(filter);
    dispatch(action);
  }

  deleteCharacter(id) {
    let { dispatch } = this.props;
    let action = CharacterActionCreators.deleteCharacter(id);
    dispatch(action);
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
          characters={store.getState().characterReducer.characters}
          isFetching={store.getState().characterReducer.isFetching}
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
  fetchCharacters: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return{
	  characters: state.characterReducer.characters
  }
};

export default withRouter(connect(mapStateToProps)(CharacterList));
