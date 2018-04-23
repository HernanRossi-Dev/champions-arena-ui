import "whatwg-fetch";
import React from "react";
import PropTypes from "prop-types";
import CreateHeroComponent from "./CreateHeroComponents/CreateHeroComponent.jsx";
import HeroFilter from "./HeroFilter.jsx";
import { withRouter } from "react-router-dom";
import store from "../store/index.js";
import * as HeroActionCreators from "../actions/index.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import HeroTable from "./HeroTable";
import { Panel} from 'react-bootstrap';

class HeroList extends React.Component {
  constructor(props) {
    super(props);

    this.setFilter = this.setFilter.bind(this);
    this.deleteHero = this.deleteHero.bind(this);
    const { dispatch } = props;
    this.boundActionCreators = bindActionCreators(HeroActionCreators, dispatch);
  }

  componentDidMount() {
    let { dispatch } = this.props;
    this.loadData(dispatch);
  }

  setFilter(query) {
    let filter = "?";
    for (let key in query) {
      filter +=  key + "=" + query[key] + "&";
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
      for (let key in this.props.location.query) {
        filter += "?" + key + "=" + this.props.location.query[key];
      }
    } else {
      filter += this.props.location.search;
    }
    let action = HeroActionCreators.fetchHeros(filter);
    dispatch(action);
  }

  deleteHero(id) {
    let { dispatch } = this.props;
    let action = HeroActionCreators.deleteHero(id);
    dispatch(action);
  }

  createNewHero(newHero) {
    let { dispatch } = this.props;
    let action = HeroActionCreators.createHero(newHero);
    dispatch(action);
  }

  render() {
    return (
      <div>

        <HeroFilter
          setFilter={this.setFilter}
          initFilter={this.props.location.search}
        />

        <hr />
        <HeroTable
          heros={store.getState().heros}
          deleteHero={this.deleteHero}
        />
      </div>
    );
  }
}

const { object } = PropTypes;
HeroList.prototypes = {
  location: object.isRequired,
  fetchHeros: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  heros: state.heros
});

export default withRouter(connect(mapStateToProps)(HeroList));
