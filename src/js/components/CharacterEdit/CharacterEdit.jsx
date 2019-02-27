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
import CharacterEditActionsComponent from './CharacterEditActionsComponent';
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
    const { data } = getResult;
    this.setState({ editCharacter: data });
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

  updateCharacter = (updatedChar) => {
    this.setState({editCharacter: updatedChar});
  }

  saveChanges = async () => {
    const updateCharacter = Object.assign({}, this.state.editCharacter);
    if (!this.props) {
      return null;
    }
    if (updateCharacter.actions.melee) {
      updateCharacter.actions.melee = updateCharacter.actions.melee.filter((entry) => entry !== '');
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
    return null;
  }

  discardChanges = () => {
    this.setState({editCharacter: new Character()});
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
            updateCharacter={this.updateCharacter}
          />

          <hr className={cssStyles.hrEdit} />
          <CharacterEditStatsComponent
            editCharacter={this.state.editCharacter}
            updateCharacter={this.updateCharacter}
           />
          <hr className={cssStyles.hr} />
          <CharacterEditActionsComponent
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
                  <Button bsStyle="link" onClick={this.discardChanges}>
                    Back (Discard Unsaved Changes)
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
