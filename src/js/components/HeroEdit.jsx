import "whatwg-fetch";
import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import store from "../store/index.js";
import { withRouter } from "react-router-dom";
import * as HeroActionCreators from "../actions/index.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class HeroEdit extends React.Component {

	constructor (props) {
		super(props);
		const {dispatch } = props;
		this.onSubmit = this.onSubmit.bind(this);
		this.boundActionsCreator = bindActionCreators(HeroActionCreators, dispatch);
		this.state = {
			hero: {
				title: "",
			},
			title: ""
		}

	}

	componentDidMount() {
		this.loadHero()
	}

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.id !== this.props.match.params.id) {
			this.loadHero();
		}
	}

	loadHero() {
		let { dispatch } = this.props;
		const URL = `/api/heros/${this.props.match.params.id}`
		let action = HeroActionCreators.fetchHero(URL);
		dispatch(action);
		this.setState({ hero: store.getState().editHero});
	}


	onSubmit(event) {
		event.preventDefault();
		let { dispatch } = this.props;
		const updateHero = store.getState().editHero;
		const editableFields = ["title"];
		const form = document.forms.editForm;
		for (let i = 0; i < editableFields.length; i+=1) {
			let key = editableFields[i];
			updateHero[key] = form[key].value;
		}
		let action = HeroActionCreators.updateHero(updateHero);
		dispatch(action);
	}

	componentWillUnmount(){
		let { dispatch } = this.props;
		let action = HeroActionCreators.clearHeroEdit();
		dispatch(action);
	}
	render() {
		return (
			<div>
				<form name="editForm" onSubmit={this.onSubmit}>
					Name: {store.getState().editHero.name }
					<br/>
					Class: {store.getState().editHero.class }
					<br/>
					Race: {store.getState().editHero.race }
					<br/>
					Title:
					<input type={"text"} name={"title"} placeholder={store.getState().editHero.title}
					       />
					<br/>
					<button type="submit">Submit</button>
					<br/>
					<Link to="/heros">Back to hero list</Link>
				</form>
			</div>
		);
	}
}


HeroEdit.propTypes = {
	params: PropTypes.object.isRequired,
	updateHero: PropTypes.func.isRequired,
	fetchHero: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	editHero: state.editHero
});

export default withRouter(connect(mapStateToProps) (HeroEdit));