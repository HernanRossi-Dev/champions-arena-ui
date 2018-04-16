import "whatwg-fetch";
import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

export default class HeroEdit extends React.Component {

	// constructor () {
	// 	super();
	// 	this.state = { hero: [] }
	// }
	//
	// componentDidMount() {
	// 	this.loadHero();
	// }
	//
	// loadHero() {
	// 	// fetch("api/heros/")
	// }

	render() {
		console.log(this.props)

		return (
			<div>
				<p>This is a placeholder for the hero editing page {this.props.match.params.id}</p>
				<Link to="/">Back to hero list</Link>
			</div>
		);
	}
}


HeroEdit.propTypes = {
	params: PropTypes.object.isRequired
};