import React, { useState, useEffect } from "react";
import {
  withRouter
} from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import {
  withStyles
} from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
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
import {
  LinkContainer
} from "react-router-bootstrap";
import { cloneDeep } from "lodash";
import Character from "./characterModel.js";
import * as cssStyles from "../../../styles/Styles.css";
import CharacterEditBasicInfoComponent from "./CharacterEditBasicInfoComponent.jsx";
import CharacterEditStatsComponent from "./CharacterEditStatsComponent.jsx";
import CharacterEditActionsComponent from "./CharacterEditActionsComponent";
import store from "../../store/index.js";

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2
  },
  success: {
    backgroundColor: "#34AA31"
  }
});

export const CharacterEdit = (props) => {
  const { classes, match } = props;
  const [editCharacter, setEditCharacter] = useState(new Character());
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (message) => {
    setOpen(true);
    setToastMessage(message);
  };

  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setToastMessage("");
  };

  const loadCharacter = async () => {
    const characterID = match.params.id;
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
      showToast("Error fetching character.");
      return null;
    }
    const {
      data
    } = getResult;
    setEditCharacter(data);
  };

  useEffect(() => {
    axios.defaults.headers.common.authorization = store.getState().userReducer.authToken;
    loadCharacter();
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  const rejectChanges = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const updateCharacter = (updatedChar) => {
    const updatedCharacter = cloneDeep(updatedChar);
    setEditCharacter(updatedCharacter);
  };

  const saveChanges = async () => {
    const updatedCharacter = cloneDeep(editCharacter);
    if (!props) {
      return null;
    }
    if (updatedCharacter.actions.melee) {
      updatedCharacter.actions.melee = updatedCharacter.actions.melee.filter(
        entry => entry !== ""
      );
    }
    const characterID = match.params.id;

    let getResult;
    try {
      getResult = await axios.put(
        `/api/characters/${characterID}`,
        updatedCharacter
      );
      if (!getResult) {
        return null;
      }
    } catch (err) {
      showToast("Error updating character.");
      return null;
    }
    showToast("Character saved.");
    return null;
  };

  const acceptChanges = () => {
    setShow(false);
    saveChanges();
  };

  const discardChanges = () => {
    setEditCharacter(new Character());
  };

  return (
    <div>
      <Panel className={cssStyles.editCharacterPanelParent}>
        <Panel.Heading className={cssStyles.createCharacterPanelHeaderStyle}>
          <Panel.Title
            className={cssStyles.createCharacterPanelHeaderStyleText}
          > Character
          </Panel.Title>
        </Panel.Heading>
        <Form horizontal>
          <CharacterEditBasicInfoComponent
            editCharacter={editCharacter}
            updateCharacter={updateCharacter}
          />
          <hr className={cssStyles.hrEdit} />
          <CharacterEditStatsComponent
            editCharacter={editCharacter}
            updateCharacter={updateCharacter}
          />
          <hr className={cssStyles.hr} />
          <CharacterEditActionsComponent
            editCharacter={editCharacter}
            updateCharacter={updateCharacter}
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
                  <Button bsStyle="link" onClick={discardChanges}>
                    Back (Discard Unsaved Changes)
                  </Button>
                </LinkContainer>
                <Button bsStyle="primary" onClick={handleShow}>
                  Save Changes
                </Button>
              </ButtonToolbar>
            </Col>
            <Modal
              show={show}
              onHide={handleClose}
              className={cssStyles.createCharacterClassModal}
            >
              <Modal.Header closeButton>
                <Modal.Title>Confirm Character Change</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>Are you sure you want to make these changes?</div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={acceptChanges}>Accept</Button>
                <Button onClick={rejectChanges}>Cancel</Button>
              </Modal.Footer>
            </Modal>
          </FormGroup>
        </Form>
      </Panel>
      <Snackbar
        style={{ zIndex: 8002 }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleCloseToast}
        ContentProps={{
          'aria-describedby': 'message-id',
          classes: {
            root: classes.success
          }
        }}
        message={<span id="message-id" style={{ fontSize: 14 }}>{toastMessage}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={handleCloseToast}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </div>
  );
};

CharacterEdit.propTypes = {
  params: PropTypes.object,
  classes: PropTypes.object.isRequired,
  match: PropTypes.object
};

export default withRouter(withStyles(styles)(CharacterEdit));
