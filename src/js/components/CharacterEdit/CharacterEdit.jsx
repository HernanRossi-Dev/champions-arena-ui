import "whatwg-fetch";
import React from "react";
import {Link, withRouter} from 'react-router-dom';
import PropTypes from "prop-types";
import store from "../../store/index.js";
import * as CharacterActionCreators from "../../actions/CharacterActionCreators.js";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as cssStyles from '../../../styles/Styles.css'
import {TextField} from 'material-ui';
import { withStyles } from 'material-ui/styles';
import {
	Button,
	ButtonToolbar,
	Col,
	Form,
	FormGroup,
	Panel,
	Modal, ControlLabel, FormControl
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const styles = {
  root: {
    fontColor:'white'
  },
  input: {
    color: "white",
    fontSize: 20,
    fontColor:'white',
    fontFamily: "'Josefin Sans', sans-serif"
  },
  helperText: {
    color: "white",
    fontSize: 17,
    fontColor:'white',
    fontFamily: "'Crimson Text', sans-serif"
  },

};
class CharacterEdit extends React.Component {

	constructor (props) {
		super();
		const {dispatch } = props;
		this.onSubmit = this.onSubmit.bind(this);
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.changeName = this.changeName.bind(this);
		this.alignment = this.alignment.bind(this);
		this.boundActionsCreator = bindActionCreators(CharacterActionCreators, dispatch);
		this.state = {
			editCharacter: {
				name:''
			},
			show: false,
		}
	}

	componentDidMount() {
		this.loadCharacter()
	}

	loadCharacter() {
		const that = this;
		let { dispatch } = this.props;
		const callBackSetState = () => (that.setState({ editCharacter: store.getState().characterReducer.editCharacter}));
		let action = CharacterActionCreators.fetchCharacter(this.props.match.params.id, callBackSetState);
		dispatch(action);
	}
	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	onSubmit(event) {
		// event.preventDefault();
		// let { dispatch } = this.props;
		// const updateHero = store.getState().characterReducer.editCharacter;
		// let action = CharacterActionCreators.updateCharacter(updateHero);
		// dispatch(action);

	}

	componentWillUnmount(){
		let { dispatch } = this.props;
		let action = CharacterActionCreators.clearCharacterEdit();
		dispatch(action);
	}

	changeName() {
		let updateCharName = Object.assign({},this.state.editCharacter);
		updateCharName.name = this.characterName.value.trim()
		this.setState({editCharacter: updateCharName});
	};
	alignment() {

	};

	render() {
    const { classes } = this.props;

    return (
			<Panel className={cssStyles.editCharacterPanelParent}>
				<Panel.Heading className={cssStyles.createCharacterPanelHeaderStyle}>
					<Panel.Title
						className={cssStyles.createCharacterPanelHeaderStyleText}
					>
						Character
					</Panel.Title>
				</Panel.Heading>
				<Form horizontal>

					<hr className={cssStyles.hr} />
							<FormGroup >
								<Col sm={1}/>
								<Col sm={2}>
                  <TextField
                    onChange={this.changeName}
                    id="characterName"
                    helperText="Character Name"
                    value={this.state.editCharacter.name}
                    inputRef={ref => {
                      this.characterName = ref;}}
                    className={classes.root}
                    InputProps={{
                      className: classes.input

                    }}
										FormHelperTextProps={{
                      className: classes.helperText

                    }}
                  />
								</Col>
                <Col sm={2}>
                  <TextField
                    id="alignment"
                    helperText="Alignment"
                    onChange={this.alignment}
                    inputRef={ref => {
                      this.alignment = ref;
                    }}
                    value={this.state.editCharacter.alignment}
                    className={classes.root}
                    InputProps={{
                      className: classes.input

                    }}
                    FormHelperTextProps={{
                      className: classes.helperText

                    }}
                  />
                </Col>
                <Col sm={2}>
                  <TextField
                    id="player"
                    helperText="Player"
                    inputRef={ref => {
                      this.player = ref;
                    }}
                    value={this.state.editCharacter.user}
                    className={classes.root}
                    InputProps={{
                      className: classes.input

                    }}
                    FormHelperTextProps={{
                      className: classes.helperText

                    }}
                  />
                </Col>
								<Col sm={1}>
                  <TextField
                    id="level"
                    helperText="Level"
                    inputRef={ref => {
                      this.level = ref;
                    }}
                    value={this.state.editCharacter.level}
                    className={classes.root}
                    InputProps={{
                      className: classes.input

                    }}
                    FormHelperTextProps={{
                      className: classes.helperText

                    }}
										style={{width:'75%'}}
                  />
								</Col>
									<Col sm={1}>
                  <TextField
                    id="deity"
                    helperText="Deity"
                    inputRef={ref => {
                      this.level = ref;
                    }}
                    value={this.state.editCharacter.deity}
                    className={classes.root}
                    InputProps={{
                      className: classes.input

                    }}
                    FormHelperTextProps={{
                      className: classes.helperText

                    }}
                    style={{ width:'150px'}}

                  />
                </Col>	<Col sm={2}>
                  <TextField
                    id="homeland"
                    helperText="Homeland"
                    inputRef={ref => {
                      this.level = ref;
                    }}
                    value={this.state.editCharacter.homeland}
                    className={classes.root}
                    InputProps={{
                      className: classes.input

                    }}
                    FormHelperTextProps={{
                      className: classes.helperText

                    }}
                    style={{ marginLeft: '50px', width:'90%'}}

                  />
                </Col>
                <Col sm={1}/>
							</FormGroup>



					<hr className={cssStyles.hr} />

					<hr className={cssStyles.hr} />

					<hr className={cssStyles.hr} />

					<hr className={cssStyles.hr} />

					<hr className={cssStyles.hr} />

					<hr className={cssStyles.hr} />
					<FormGroup className={cssStyles.createColStyle}>
						<Col sm={8} />
						<Col sm={4}>
							<ButtonToolbar>
								<Button bsStyle="primary" onClick={this.onSubmit}>
									Save Changes
								</Button>
							</ButtonToolbar>
						</Col>
						<Modal
							show={this.state.show}
							onHide={this.handleClose}
							className={cssStyles.createCharacterClassModal}
						>
							<Modal.Header closeButton>
								<Modal.Title>Invalid Submission</Modal.Title>
							</Modal.Header>
							<Modal.Body>


							</Modal.Body>
							<Modal.Footer>
								<Button onClick={this.handleClose}>Close</Button>
							</Modal.Footer>
						</Modal>
					</FormGroup>
					<FormGroup>
						<Col sm={7} />
						<Col sm={4}>
							<ButtonToolbar>
								<LinkContainer to={"/characters"}>
								<Button bsStyle={"link"}>
									Back to Character List
								</Button>
								</LinkContainer>
							</ButtonToolbar>
						</Col>
					</FormGroup>
				</Form>
			</Panel>
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

export default withRouter(connect(mapStateToProps) (withStyles(styles)(CharacterEdit)));