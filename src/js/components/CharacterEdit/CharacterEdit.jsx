import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import { connect } from "react-redux";
import { cloneDeep } from 'lodash';
import CloseIcon from '@material-ui/icons/Close';
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
import Character from './characterModel.js';
import * as cssStyles from "../../../styles/Styles.css";
import CharacterEditBasicInfoComponent from "./CharacterEditBasicInfoComponent.jsx";
import CharacterEditStatsComponent from './CharacterEditStatsComponent.jsx';
import CharacterEditSkillsComponent from './CharacterEditSkillsComponent.jsx';
import store from "../../store/index.js";

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
  success: {
    backgroundColor: '#34AA31',
  },
});


class CharacterEdit extends React.Component {
  constructor(props) {
    super();
    this.state = {
      editCharacter: new Character(),
      open: false,
      show: false,
      toastMessage: '',
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['authorization'] = this.props.Auth;
    this.loadCharacter();
  }

  showToast = (toastMessage) => {
    this.setState({ open: true, toastMessage });
  };

  handleCloseToast = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false, toastMessage: '' });
  };

  loadCharacter = async () => {
    const characterID = this.props.match.params.id;
    if (!characterID) {
      return null;
    }

    let getResult;
    try {
      getResult = await axios.get(`/api/characters/${characterID}`);
      if (!getResult) {
        return null;
      }
    } catch (err) {
      this.showToast('Error fetching character.');
      return null;
    }
    console.log('CHARACTER: ', getResult.data);
    this.setState({ editCharacter: getResult.data });
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  acceptChanges = () => {
    this.setState({ show: false });
    this.saveChanges();
  }

  rejectChanges = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  changeName = (newName) => {
    const updateCharacter = Object.assign({}, this.state.editCharacter);
    updateCharacter.name = newName;
    this.setState({ editCharacter: updateCharacter });
  }

  changeAlignment = (newAlignment) => {
    const updateCharacter = Object.assign({}, this.state.editCharacter);
    updateCharacter.alignment = newAlignment;
    this.setState({ editCharacter: updateCharacter });
  }

  changeAncestry = (newAncestry) => {
    const updateCharacter = Object.assign({}, this.state.editCharacter);
    updateCharacter.ancestry = newAncestry;
    this.setState({ editCharacter: updateCharacter });
  }

  changeClass = (newClass) => {
    const updateCharacter = Object.assign({}, this.state.editCharacter);
    updateCharacter.class = newClass;
    this.setState({ editCharacter: updateCharacter });
  }

  changeBackground = (newBackground) => {
    const updateCharacter = Object.assign({}, this.state.editCharacter);
    updateCharacter.background = newBackground;
    this.setState({ editCharacter: updateCharacter });
  }

  changeLevel = (newLevel) => {
    const updateCharacter = Object.assign({}, this.state.editCharacter);
    updateCharacter.level = newLevel;
    this.setState({ editCharacter: updateCharacter });
  }

  changeAge = (newAge) => {
    const updateCharacter = Object.assign({}, this.state.editCharacter);
    updateCharacter.age = newAge;
    this.setState({ editCharacter: updateCharacter });
  }

  changeHeight = (newHeight) => {
    const updateCharacter = Object.assign({}, this.state.editCharacter);
    updateCharacter.height = newHeight;
    this.setState({ editCharacter: updateCharacter });
  }

  changeWeight = (newWeight) => {
    const updateCharacter = Object.assign({}, this.state.editCharacter);
    updateCharacter.weight = newWeight;
    this.setState({ editCharacter: updateCharacter });
  }

  changeHair = (newHair) => {
    const updateCharacter = Object.assign({}, this.state.editCharacter);
    updateCharacter.hair = newHair;
    this.setState({ editCharacter: updateCharacter });
  }

  changeEyes = (newEyes) => {
    const updateCharacter = Object.assign({}, this.state.editCharacter);
    updateCharacter.eyes = newEyes;
    this.setState({ editCharacter: updateCharacter });
  }

  changePlayer = (newPlayer) => {
    const updateCharacter = Object.assign({}, this.state.editCharacter);
    updateCharacter.player = newPlayer;
    this.setState({ editCharacter: updateCharacter });
  }

  changeDeity = (newDeity) => {
    const updateCharacter = Object.assign({}, this.state.editCharacter);
    updateCharacter.deity = newDeity;
    this.setState({ editCharacter: updateCharacter });
  }

  changeHomeland = (newHomeland) => {
    const updateCharacter = Object.assign({}, this.state.editCharacter);
    updateCharacter.homeland = newHomeland;
    this.setState({ editCharacter: updateCharacter });
  }

  changeSize = (newSize) => {
    const updateCharacter = Object.assign({}, this.state.editCharacter);
    updateCharacter.size = newSize;
    this.setState({ editCharacter: updateCharacter });
  }

  changeGender = (newGender) => {
    const updateCharacter = Object.assign({}, this.state.editCharacter);
    updateCharacter.gender = newGender;
    this.setState({ editCharacter: updateCharacter });
  }

  updateCharacter = (updatedChar) => {
    this.setState({editCharacter: updatedChar});
  }

  saveChanges = async () => {
    const updateCharacter = Object.assign({}, this.state.editCharacter);
    // const characterProperties = Object.keys(updateCharacter);
    // for (let prop of characterProperties) {
    //   updateCharacter[prop] = updateCharacter[prop] ? updateCharacter[prop] : '';
    // }
    if (!this.props) {
      return null;
    }
    const characterID = this.props.match.params.id;

    let getResult;
    try {
      getResult = await axios.put(`/api/characters/${characterID}`, updateCharacter);
      if (!getResult) {
        return null;
      }
    } catch (err) {
      this.showToast('Error updating character.');
      return null;
    }
    this.showToast('Character saved.');
    // this.setState({ editCharacter: updateCharacter });
    return null;
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
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
            changeAncestry={this.changeAncestry}
            changeClass={this.changeClass}
            changeBackground={this.changeBackground}
            updateCharacter={this.updateCharacter}
          />

          <hr className={cssStyles.hrEdit} />
          <CharacterEditStatsComponent
            editCharacter={this.state.editCharacter}
            updateCharacter={this.updateCharacter}
           />
          <hr className={cssStyles.hr} />

          <hr className={cssStyles.hr} />

          <hr className={cssStyles.hr} />

          <hr className={cssStyles.hr} />

          <hr className={cssStyles.hr} />
          <FormGroup className={cssStyles.createColStyle}>
            <Col sm={8} />
            <Col sm={4}>
              <ButtonToolbar>
              <LinkContainer to="/characters">
                  <Button bsStyle="link" >
                    Back (Discard Changes)
                  </Button>
                </LinkContainer>
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
        </Form>
      </Panel>
        <Snackbar
          style={{ zIndex: 8002  }}

          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={this.state.open}
          autoHideDuration={3000}
          onClose={this.handleCloseToast}
          ContentProps={{
            'aria-describedby': 'message-id',
            classes: {
              root: classes.success
            }
          }}
          message={<span id="message-id" style={{fontSize: 14}}>{this.state.toastMessage}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleCloseToast}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

CharacterEdit.propTypes = {
  params: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return ({
    Auth: store.getState().userReducer.authToken,
  });
};

export default withRouter(connect(mapStateToProps)(withStyles(styles)(CharacterEdit)));
