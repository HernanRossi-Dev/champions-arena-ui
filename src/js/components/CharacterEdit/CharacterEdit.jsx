import "whatwg-fetch";
import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import store from "../../store/index.js";
import * as CharacterActionCreators from "../../actions/CharacterActionCreators.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cssStyles from "../../../styles/Styles.css";
import { withStyles } from "material-ui/styles";
import CharacterEditBasicInfoComponent from "./CharacterEditBasicInfoComponent.jsx";
import {
  Button,
  ButtonToolbar,
  Col,
  Form,
  FormGroup,
  Panel,
  Modal
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import * as types from "../../constants/ActionTypes";

class CharacterEdit extends React.Component {
  constructor(props) {
    super();
    const { dispatch } = props;
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeAlignment = this.changeAlignment.bind(this);
    this.changeLevel = this.changeLevel.bind(this);
    this.changeAge = this.changeAge.bind(this);
    this.changeHeight = this.changeHeight.bind(this);
    this.changeWeight = this.changeWeight.bind(this);
    this.changeHair = this.changeHair.bind(this);
    this.changeEyes = this.changeEyes.bind(this);
    this.changePlayer = this.changePlayer.bind(this);
    this.changeDeity = this.changeDeity.bind(this);
    this.changeHomeland = this.changeHomeland.bind(this);
    this.changeSize = this.changeSize.bind(this);
    this.changeGender = this.changeGender.bind(this);
    this.acceptChanges = this.acceptChanges.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.rejectChanges = this.rejectChanges.bind(this);
    this.boundActionsCreator = bindActionCreators(
      CharacterActionCreators,
      dispatch
    );
    this.state = {
      editCharacter: {
        name: ""
      },
      saveCharacter: false,
      show: false
    };
  }

  componentDidMount() {
    this.loadCharacter();
  }

  loadCharacter() {
    const that = this;
    let { dispatch } = this.props;
    const callBackSetState = () =>
      that.setState({
        editCharacter: store.getState().characterReducer.editCharacter
      });
    let action = CharacterActionCreators.fetchCharacter(
      this.props.match.params.id,
      callBackSetState
    );
    dispatch(action);
  }
  handleClose() {
    this.setState({ show: false });
  }
  acceptChanges() {
    this.setState({ show: false });
    this.saveChanges();
  }
  rejectChanges() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  componentWillUnmount() {
    let { dispatch } = this.props;
    let action = CharacterActionCreators.clearCharacterEdit();
    dispatch(action);
  }

  changeName(newName) {
    let updateCharacter = Object.assign({}, this.state.editCharacter);
    updateCharacter.name = newName;
    this.setState({ editCharacter: updateCharacter });
  }

  changeAlignment(newAlignment) {
    let updateCharacter = Object.assign({}, this.state.editCharacter);
    updateCharacter.alignment = newAlignment;
    this.setState({ editCharacter: updateCharacter });
  }

  changeLevel(newLevel) {
    let updateCharacter = Object.assign({}, this.state.editCharacter);
    updateCharacter.level = newLevel;
    this.setState({ editCharacter: updateCharacter });
  }
  changeAge(newAge) {
    let updateCharacter = Object.assign({}, this.state.editCharacter);
    updateCharacter.age = newAge;
    this.setState({ editCharacter: updateCharacter });
  }
  changeHeight(newHeight) {
    let updateCharacter = Object.assign({}, this.state.editCharacter);
    updateCharacter.height = newHeight;
    this.setState({ editCharacter: updateCharacter });
  }
  changeWeight(newWeight) {
    let updateCharacter = Object.assign({}, this.state.editCharacter);
    updateCharacter.weight = newWeight;
    this.setState({ editCharacter: updateCharacter });
  }
  changeHair(newHair) {
    let updateCharacter = Object.assign({}, this.state.editCharacter);
    updateCharacter.hair = newHair;
    this.setState({ editCharacter: updateCharacter });
  }
  changeEyes(newEyes) {
    let updateCharacter = Object.assign({}, this.state.editCharacter);
    updateCharacter.eyes = newEyes;
    this.setState({ editCharacter: updateCharacter });
  }
  changePlayer(newPlayer) {
    let updateCharacter = Object.assign({}, this.state.editCharacter);
    updateCharacter.player = newPlayer;
    this.setState({ editCharacter: updateCharacter });
  }
  changeDeity(newDeity) {
    let updateCharacter = Object.assign({}, this.state.editCharacter);
    updateCharacter.deity = newDeity;
    this.setState({ editCharacter: updateCharacter });
  }
  changeHomeland(newHomeland) {
    let updateCharacter = Object.assign({}, this.state.editCharacter);
    updateCharacter.homeland = newHomeland;
    this.setState({ editCharacter: updateCharacter });
  }
  changeSize(newSize) {
    let updateCharacter = Object.assign({}, this.state.editCharacter);
    updateCharacter.size = newSize;
    this.setState({ editCharacter: updateCharacter });
  }

  changeGender(newGender) {
    let updateCharacter = Object.assign({}, this.state.editCharacter);
    updateCharacter.gender = newGender;
    this.setState({ editCharacter: updateCharacter });
  }

  saveChanges() {
    let that = this;
    let updateCharacter = Object.assign({}, this.state.editCharacter);
    for (let attribute in updateCharacter) {
      if (updateCharacter.hasOwnProperty(attribute)) {
        updateCharacter[attribute] = updateCharacter[attribute].toString().trim();
      }
    }
    let { dispatch } = this.props;
    const callBackSetState = () =>
      that.setState({
        editCharacter: store.getState().characterReducer.editCharacter
      });
    let action = CharacterActionCreators.updateCharacter(
	    updateCharacter,
      callBackSetState
    );
    dispatch(action);
  }

  render() {
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
          <CharacterEditBasicInfoComponent
            editCharacter={this.state.editCharacter}
            changeName={this.changeName}
            changeAlignment={this.changeAlignment}
            changeLevel={this.changeLevel}
            changeAge={this.changeAge}
            changeHeight={this.changeHeight}
            changeWeight={this.changeWeight}
            changeHair={this.changeHair}
            changeEyes={this.changeEyes}
            changePlayer={this.changePlayer}
            changeDeity={this.changeDeity}
            changeHomeland={this.changeHomeland}
            changeSize={this.changeSize}
            changeGender={this.changeGender}
          />

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
                <Button bsStyle="primary" onClick={this.handleShow}>
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
                <Modal.Title>Confirm Character Change</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>Are you sure you want to make these changes?</div>
              </Modal.Body>.
              <Modal.Footer>
                <Button onClick={this.acceptChanges}>Accept</Button>
                <Button onClick={this.rejectChanges}>Cancel</Button>
              </Modal.Footer>
            </Modal>
          </FormGroup>
          <FormGroup>
            <Col sm={7} />
            <Col sm={4}>
              <ButtonToolbar>
                <LinkContainer to={"/characters"}>
                  <Button bsStyle={"link"}>
                    Back to Character List (discard changes)
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
  params: PropTypes.object,
  updateCharacter: PropTypes.func,
  fetchCharacter: PropTypes.func
};

const mapStateToProps = state => ({
  editCharacter: state.editCharacter
});

export default withRouter(connect(mapStateToProps)(CharacterEdit));
