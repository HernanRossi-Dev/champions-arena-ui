import "whatwg-fetch";
import React from "react";
import {Link, withRouter} from 'react-router-dom';
import PropTypes from "prop-types";
import {store} from "../../store/index.js";
import * as CharacterActionCreators from "../../actions/CharacterActionCreators.js";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class CharacterEdit extends React.Component {

	constructor (props) {
		super(props);
		const {dispatch } = props;
		this.onSubmit = this.onSubmit.bind(this);
		this.boundActionsCreator = bindActionCreators(CharacterActionCreators, dispatch);
		this.state = {
			character: {
				title: "",
			},
			title: ""
		}

	}

	componentDidMount() {
		this.loadCharacter()
	}

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.id !== this.props.match.params.id) {
			this.loadCharacter();
		}
	}

	loadCharacter() {
		let { dispatch } = this.props;
		const URL = `/api/characters/${this.props.match.params.id}`
		let action = CharacterActionCreators.fetchCharacter(URL);
		dispatch(action);
		this.setState({ character: store.getState().editCharacter});
	}


	onSubmit(event) {
		event.preventDefault();
		let { dispatch } = this.props;
		const updateHero = store.getState().editCharacter;
		const editableFields = ["title"];
		const form = document.forms.editForm;
		for (let i = 0; i < editableFields.length; i+=1) {
			let key = editableFields[i];
			updateHero[key] = form[key].value;
		}
		let action = CharacterActionCreators.updateCharacter(updateHero);
		dispatch(action);
	}

	componentWillUnmount(){
		let { dispatch } = this.props;
		let action = CharacterActionCreators.clearCharacterEdit();
		dispatch(action);
	}
	render() {
		return (
			<div>
				<h3>Character Info Under Construction</h3>
				<form name="editForm" onSubmit={this.onSubmit}>
					Name: {store.getState().editCharacter.name }
					<br/>
					Class: {store.getState().editCharacter.class }
					<br/>
					Race: {store.getState().editCharacter.race }
					<br/>
					<Link to="/characters">Back to character list</Link>
				</form>
			</div>
		);
	}
}


CharacterEdit.propTypes = {
	params: PropTypes.object.isRequired,
	updateCharacter: PropTypes.func.isRequired,
	fetchCharacter: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	editCharacter: state.editCharacter
});

export default withRouter(connect(mapStateToProps) (CharacterEdit));