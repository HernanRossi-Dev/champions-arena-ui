import React from "react";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class HeroFilter extends React.Component {
  constructor () {
    super();
    this.clearFilter = this.clearFilter.bind(this);
    this.setFilterWizard = this.setFilterWizard.bind(this);
    this.setFilterFighter = this.setFilterFighter.bind(this);
  }

  setFilterWizard(e) {
    e.preventDefault();
    this.props.setFilter({ class: 'Wizard'});
  }

	setFilterFighter(e) {
		e.preventDefault();
		this.props.setFilter({ class: 'Fighter'});
	}

	clearFilter(e) {
		e.preventDefault();
		this.props.setFilter({});
	}

  render() {
    const Separator = () => <span> | </span>;
    return <div>
        <a href="#" onClick={this.clearFilter}>
          All Heros
        </a>
        <Separator />
        <a href="#" onClick={this.setFilterWizard}>
          Wizards
        </a>
        <Separator />
        <a href="#" onClick={this.setFilterFighter}>
          Fighters
        </a>
      </div>;
  };
}

HeroFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default withRouter(HeroFilter);