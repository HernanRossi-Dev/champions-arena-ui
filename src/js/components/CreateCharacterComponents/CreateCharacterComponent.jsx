import React from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {
  Button,
  ButtonToolbar,
  Col,
  Form,
  FormGroup,
  Panel,
  Modal, ControlLabel,
} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import * as cssStyles from "../../../styles/Styles.css";
import store from "../../store/index.js";
import CreateCharacterAncestryComponent from "./CreateCharacterAncestryComponent.jsx";
import CharacterBackgroundComponent from "./CharacterBackgroundComponent";
import CreateCharacterClassComponent from "./CharacterClassComponents/CreateCharacterClassComponent.jsx";
import CreateCharacterGenderComponent from "./CreateCharacterGenderComponent.jsx";
import CreateCharacterAlignmentComponent from "./CreateCharacterAlignmentComponent.jsx";
import CreateCharacterNameComponent from "./CreateCharacterNameComponent.jsx";
import CreateCharacter20StatsComponent from "./CreateCharacter20StatsComponent";
import CreateCharacterCustomStatsInput from "./CreateCharacterCustomStatsInput";
import CreateCharacterArcaneSchool from "./CharacterClassComponents/CreateCharacterArcaneSchool";
import CreateCharacterDeity from "./CharacterClassComponents/CreateCharacterDeity";
import CreateCharacterBloodlines from "./CharacterClassComponents/CreateCharacterBloodlines";
import CreateCharacterSetFreeBoosts from "./CreateCharacterSetFreeBoosts";
import SaveCharacterFormat from './models/SaveCharacterFormat';


const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
  success: {
    backgroundColor: '#34AA31',
  },
});

class CreateCharacterComponent extends React.Component {
  constructor(props, context) {
    super();
    this.state = {
      backgroundInfo: {
        selectedStat: null,
        background: "",
      },
      showAssignAbilityBoosts: false,
      open: false,
      show: false,
      showChangeStat: false,
      showChangeStatCust: false,
      toastMessage: '',
      characterStats: {
        STR: 10,
        DEX: 10,
        CON: 10,
        INT: 10,
        WIS: 10,
        CHA: 10
      },
      baseCharacterStats: {
        STR: 10,
        DEX: 10,
        CON: 10,
        INT: 10,
        WIS: 10,
        CHA: 10
      },
      type: '',
      gender: "",
      alignment: "",
      name: "",
      class: "",
      background: "",
      characterAncestry: "",
      hitPoints: 0,
      racialBonus: {},
      allowedAlignments: ["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"],
      numberOfInvalidFields: 0,
      invalidFields: [""],
      showToast: false,
      numberOfCharacters: store.getState().characterReducer.numberOfCharacters,
      chooseStatsMethod: "2.0",
      previousStatsMethod: "2.0",
      showStatsMethod: true,
      freeAbilityPoints: 4,
      baseFreeAbilityPoints: 4,
      classAbilityBoost: null,
      classProps: {
        hp: 0,
        class: ""
      }
    };
  }

  componentDidMount() {
    const { Auth, history } = this.props;
    axios.defaults.headers.common.authorization = Auth;
    if (store.getState().userReducer.currentUser.isGuest) {
      const characterCount = store.getState().characterReducer.numberOfCharacters;
      if (characterCount > 10) {
        alert("Guest accounts limited to 10 characters. Please register to create more.");
        history.push("/characters");
      }
    }
  }

  setGender = (newGender) => {
    this.setState({ gender: newGender });
  }

  setAlignment = (newAlignment) => {
    this.setState({ alignment: newAlignment });
  }

  setStateStats = (newStatsObject) => {
    this.setState({
      characterStats: newStatsObject,
      baseCharacterStats: newStatsObject
    });
  }

  setName = (newName) => {
    this.setState({ name: newName });
  }

  setType = (newType) => {
    this.setState({ type: newType });
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
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

  saveNewCharacter = async (newCharacter) => {
    const { history } = this.props;
    let postResult;
    const postResponse = {
      message: 'Character Created',
      status_code: 200,
      status: 'OK',
    };
    console.log('Save payload: ', newCharacter);
    try {
      postResult = await axios.post(`/api/characters`, newCharacter);
      if (!postResult) {
        postResponse.message = 'Failed to create character.';
        postResponse.status_code = 500;
        postResponse.status = 'ERROR';
        return postResponse;
      }
    } catch (err) {
      this.showToast('Error creating character.');
      postResponse.message = err.message;
      postResponse.status_code = 500;
      postResponse.status = 'ERROR';
      return postResponse;
    }
    this.showToast('Creating character success.');
    history.push("/characters");
    return postResponse;
  };

  handleSubmit = (setAbilityStats) => {
    this.setState({
      numberOfInvalidFields: 0,
      invalidFields: []
    });
    const validationFields = [
      "name",
      "class",
      "characterAncestry",
      "background",
      "alignment",
      "gender",
      "backgroundBoost",
    ];
    const invalidFields = [];
    let numInvalidFields = 0;
    for (let i = 0; i < validationFields.length; i += 1) {
      const field = validationFields[i];
      if (this.state[field] && this.state[field].toString() === "") {
        numInvalidFields += 1;
        invalidFields.push(field);
      }
    }
    if (numInvalidFields > 0) {
      this.setState({
        numberOfInvalidFields: numInvalidFields,
        invalidFields,
        show: true
      });
      return;
    }
    if (this.state.numberOfCharacters > 10) {
      alert("Guest accounts limited to 10 characters. Please register to create more.");
      this.props.history.push("/characters");
    }
    const userName = store.getState().userReducer.currentUserName;
    const formattedCharacter = SaveCharacterFormat(this.state, setAbilityStats, userName);
    this.saveNewCharacter(formattedCharacter);
    this.setState({ numberOfCharacters: this.state.numberOfCharacters + 1 });
  }

  setClass = (classProps) => {
    const newClassBoost = classProps.keyAbility;
    let classBoost = this.state.characterStats;
    const prevClassBoost = this.state.classAbilityBoost;
    if (prevClassBoost) {
      classBoost[prevClassBoost] -= 2;
    }
    classBoost[newClassBoost] += 2;
    this.restrictAlignments(classProps.class);
    this.setState({
      class: classProps.class,
      alignment: "",
      classProps,
      characterStats: classBoost,
      classAbilityBoost: newClassBoost
    });
  }

  setAncestry = (newAncestry, ancestryProps) => {
    const bonusPoints = ancestryProps.statsBonus;
    const { freeAbilityPoints } = ancestryProps;
    let newFreeAbilityPoints = this.state.freeAbilityPoints;
    const humanAncestries = ['Human', 'Half-Elf', 'Half-Orc'];
    if (this.state.freeAbilityPoints !== 4) {
      const subtractPrevPoints = humanAncestries.includes(this.state.characterAncestry) ? 2 : 1;
      newFreeAbilityPoints -= subtractPrevPoints;
    }
    newFreeAbilityPoints += freeAbilityPoints;
    if (newAncestry === this.state.characterAncestry) {
      return;
    }
    if (bonusPoints) {
      const prevrBon = this.state.racialBonus;
      const newStats = this.state.characterStats;
      Object.keys(prevrBon).forEach((key) => {
        newStats[key] -= prevrBon[key];
      });

      const rBon = bonusPoints;
      Object.keys(rBon).forEach((key) => {
        newStats[key] += rBon[key];
      });

      this.setState({
        characterStats: newStats,
        characterAncestry: newAncestry,
        racialBonus: bonusPoints,
        freeAbilityPoints: newFreeAbilityPoints,
        ancestryProps
      });
    }
  }

  setBackground = (newProps) => {
    const {
      characterStats, backgroundBoost, freeAbilityPoints, backgroundInfo
    } = this.state;
    const newStats = characterStats;
    const prevBB = backgroundBoost;
    let abilityBoost = freeAbilityPoints;
    if (newProps === 'reset') {
      newStats[prevBB] -= 2;
      if (prevBB) {
        abilityBoost -= 1;
      }
      const resetBackgroundInfo = {
        selectedStat: '',
      };
      this.setState({
        backgroundInfo: resetBackgroundInfo,
        characterStats: newStats,
        freeAbilityPoints: abilityBoost,
        backgroundBoost: ''
      });
      return;
    }
    const { selectedStat } = newProps;
    let freeAbilityBoost = freeAbilityPoints;
    if (!backgroundInfo.background) {
      freeAbilityBoost += 1;
      newStats[selectedStat] += 2;
    } else {
      newStats[prevBB] -= 2;
      newStats[selectedStat] += 2;
    }
    this.setState({
      characterStats: newStats,
      freeAbilityPoints: freeAbilityBoost,
      backgroundInfo: newProps,
      backgroundBoost: selectedStat,
      background: newProps.background,
    });
  };

  resetBaseStats = () => {
    const { racialBonus, baseFreeAbilityPoints } = this.state;
    const characterStats = {
      STR: 10,
      DEX: 10,
      CON: 10,
      INT: 10,
      WIS: 10,
      CHA: 10
    };
    Object.keys(racialBonus).forEach((key) => {
      characterStats[key] += racialBonus[key];
    });
    this.setState({
      characterStats,
      freeAbilityPoints: baseFreeAbilityPoints
    });
  };

  GenStatsMethod = (props) => {
    const {
      chooseStatsMethod, setStateStats, characterStats, racialBonus,
      backgroundBoost, classAbilityBoost, freeAbilityPoints
    } = this.state;
    let stateMethod = null;
    if (chooseStatsMethod === "2.0") {
      stateMethod = (
        <CreateCharacter20StatsComponent
          setStateStats={setStateStats}
          characterStats={characterStats}
          racialBonus={racialBonus}
          backgroundBoost={backgroundBoost}
          classBoost={classAbilityBoost}
          freeAbilityPoints={freeAbilityPoints}
        />
      );
    } else if (chooseStatsMethod === "Custom") {
      stateMethod = (
        <CreateCharacterCustomStatsInput
          setStateStats={setStateStats}
          characterStats={characterStats}
          racialBonus={racialBonus}
          backgroundBoost={backgroundBoost}
          classBoost={classAbilityBoost}
          freeAbilityPoints={freeAbilityPoints}
        />
      );
    }
    return stateMethod;
  };

  setArcaneSchool = (newSchool) => {
    const { classProps } = this.state;
    const wizardProps = classProps;
    wizardProps.arcaneSchool = newSchool;
    this.setState({ classProps: wizardProps });
  }

  setDeity = (newDeityProps) => {
    const { classProps } = this.state;
    const name = newDeityProps.Name;
    const clericProps = classProps;
    clericProps.deityProps = newDeityProps;
    const allowedAlignments = newDeityProps.Alignment;
    this.setState({ classProps: clericProps, allowedAlignments, deity: name });
  }

  setBloodline = (newBloodline) => {
    const { classProps } = this.state;
    const sorcererProps = classProps;
    sorcererProps.bloodline = newBloodline;
    this.setState({ classProps: sorcererProps });
  }

  setClassExtras = () => {
    const { class: charClass } = this.state;
    let renderClassExtra;
    if (charClass === "Cleric") {
      renderClassExtra = (
        <div>
          <hr className={cssStyles.hr} />
          <CreateCharacterDeity setDeity={this.setDeity} />
        </div>
      );
    } else if (charClass === "Sorcerer") {
      renderClassExtra = (
        <div>
          <hr className={cssStyles.hr} />
          <CreateCharacterBloodlines setBloodline={this.setBloodline} />
        </div>
      );
    } else if (charClass === "Wizard") {
      renderClassExtra = (
        <div>
          <hr className={cssStyles.hr} />
          <CreateCharacterArcaneSchool setArcaneSchool={this.setArcaneSchool} />
        </div>
      );
    } else {
      renderClassExtra = null;
    }
    return renderClassExtra;
  };

  InvalidFields = () => {
    const { invalidFields } = this.state;
    return (
      <ul>
        {invalidFields.map((invalidField, i) => {
          return <li key={`${i * 5}${invalidField}`}>{invalidField}</li>;
        })}
      </ul>
    );
  };

  ValidationModal = () => {
    const { numberOfInvalidFields } = this.state;
    return (
      <div>
        {numberOfInvalidFields} errors on submission.<br />
        Please select character's:
        <this.InvalidFields />
      </div>
    );
  };

  handleCloseStat = () => {
    this.setState({ showChangeStat: false });
  }

  handleOpenStat = () => {
    const { chooseStatsMethod } = this.state;
    if (chooseStatsMethod === '2.0') {
      return;
    }
    this.setState({ showChangeStat: true });
  }

  handleCloseStatCust = () => {
    this.setState({ showChangeStatCust: false });
  }

  handleOpenStatCust = () => {
    const { chooseStatsMethod } = this.state;
    if (chooseStatsMethod === 'Custom') {
      return;
    }
    this.setState({ showChangeStatCust: true });
  }

  setStateMethodCust = () => {
    this.resetBaseStats();
    this.setState({ showChangeStatCust: false, chooseStatsMethod: 'Custom' });
  }

  setStateMethodPlaytest = () => {
    this.resetBaseStats();
    this.setState({ chooseStatsMethod: '2.0', showChangeStat: false });
  }

  setFreeAbilityBoosts = () => {
    this.setState({ showAssignAbilityBoosts: true });
  }

  handleCloseAssignAbilityBoosts = () => {
    this.setState({ showAssignAbilityBoosts: false });
  }

  restrictAlignments(newClass) {
    switch (newClass) {
      case "Paladin":
        this.setState({ allowedAlignments: ["LG"] });
        break;
      default:
        this.setState({
          allowedAlignments: [
            "LG",
            "NG",
            "CG",
            "LN",
            "N",
            "CN",
            "LE",
            "NE",
            "CE"
          ]
        });
        break;
    }
  }

  render() {
    const { classes } = this.props;
    const {
      allowedAlignments, class: charClass, show, showChangeStat, open, toastMessage,
      showChangeStatCust, showAssignAbilityBoosts, characterStats, freeAbilityPoints
    } = this.state;
    return (
      <div>
        <Panel className={cssStyles.createCharacterPanelParent}>
          <Panel.Heading className={cssStyles.createCharacterPanelHeaderStyle}>
            <Panel.Title
              className={cssStyles.createCharacterPanelHeaderStyleText}
            >
              Create Character
            </Panel.Title>
          </Panel.Heading>
          <Form horizontal>
            <CreateCharacterNameComponent updateName={this.setName} updateType={this.setType} />
            <hr className={cssStyles.hr} />
            <FormGroup>
              <Col sm={1} />
              <Col
                componentClass={ControlLabel}
                sm={3}
                className={cssStyles.createColLabelStyle}
              ><div style={{ fontSize: '19px', fontFamily: "'Josefin Sans', sans-serif" }}>Choose Stats method:</div>
              </Col>
              <Col sm={7} style={{ marginLeft: '45px' }}>
                <ButtonToolbar>
                  <Button
                    onClick={this.handleOpenStat}
                    className={cssStyles.statsMethodButtons}
                  >2.0
                  </Button>
                  <Button
                    onClick={this.handleOpenStatCust}
                    className={cssStyles.statsMethodButtons}
                  >
                    Custom
                  </Button>
                </ButtonToolbar>
              </Col>
            </FormGroup>
            <div />
            <div />
            <this.GenStatsMethod />
            <hr className={cssStyles.hr} />
            <CreateCharacterAncestryComponent setAncestry={this.setAncestry} />
            <hr className={cssStyles.hr} />
            <CharacterBackgroundComponent setBackground={this.setBackground} />
            <hr className={cssStyles.hr} />
            <CreateCharacterClassComponent updateClass={this.setClass} />
            <this.setClassExtras />
            <hr className={cssStyles.hr} />
            <CreateCharacterGenderComponent updateGender={this.setGender} />
            <hr className={cssStyles.hr} />
            <CreateCharacterAlignmentComponent
              updateAlignment={this.setAlignment}
              allowedAlignments={allowedAlignments}
              charClass={charClass}
            />
            <hr className={cssStyles.hr} />
            <FormGroup className={cssStyles.createColStyle}>
              <Col sm={8} />
              <Col sm={4}>
                <ButtonToolbar>
                  <LinkContainer to="/home">
                    <Button bsStyle="link">Discard</Button>
                  </LinkContainer>
                  <Button bsStyle="primary" onClick={this.setFreeAbilityBoosts}>
                    Proceed
                  </Button>
                </ButtonToolbar>
              </Col>
              <Modal
                show={show}
                onHide={this.handleClose}
                className={cssStyles.createCharacterClassModal}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Invalid Submission</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <this.ValidationModal />
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
              </Modal>
              <Modal
                show={showChangeStat}
                onHide={this.handleCloseStat}
                className={cssStyles.createCharacterClassModal}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Playtest 2.0 stat method</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Warning: changing your stat selection method will reset current stats.
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.handleCloseStat}>Cancel</Button>
                  <Button onClick={this.setStateMethodPlaytest}>Proceed</Button>
                </Modal.Footer>
              </Modal>
              <Modal
                show={showChangeStatCust}
                onHide={this.handleCloseStatCust}
                className={cssStyles.createCharacterClassModal}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Switch to Custom Stats</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Warning: changing your stat selection method will reset current stats.
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.handleCloseStatCust}>Cancel</Button>
                  <Button onClick={this.setStateMethodCust}>Proceed</Button>
                </Modal.Footer>
              </Modal>
              <Modal
                show={showAssignAbilityBoosts}
                onHide={this.handleCloseAssignAbilityBoosts}
                className={cssStyles.createCharacterBoostModal}
              >
                <Modal.Header closeButton style={{ textAlign: "center" }}>
                  <Modal.Title>Assign Free Ability Boosts</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                  <CreateCharacterSetFreeBoosts
                    characterStats={characterStats}
                    freeAbilityPoints={freeAbilityPoints}
                    handleSubmit={this.handleSubmit}
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.handleCloseAssignAbilityBoosts}>Cancel</Button>
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
          onClose={this.handleCloseToast}
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

const mapStateToProps = (state) => {
  return ({
    Auth: store.getState().userReducer.authToken,
  });
};

CreateCharacterComponent.propTypes = {
  history: PropTypes.object,
  classes: PropTypes.object,
  Auth: PropTypes.string.isRequired,
};

export default withRouter(connect(mapStateToProps)(withStyles(styles)(CreateCharacterComponent)));
