import React from "react";
import PropTypes, { object } from "prop-types";
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
import { calcAbilityModifierFunc } from "../../CharacterUtils/ability-helpers";
import CreateCharacterAncestryComponent from "./CreateCharacterAncestryComponent.jsx";
import CharacterBackgroundComponent from "./CharacterBackgroundComponent";
import CreateCharacterClassComponent from "./CreateCharacterClassComponent.jsx";
import CreateCharacterGenderComponent from "./CreateCharacterGenderComponent.jsx";
import CreateCharacterAlignmentComponent from "./CreateCharacterAlignmentComponent.jsx";
import CreateCharacterNameComponent from "./CreateCharacterNameComponent.jsx";
import CreateCharacterFavouredClassComponent from "./CreateCharacterFavouredClassComponent";
import CreateCharacter20StatsComponent from "./CreateCharacter20StatsComponent";
import CreateCharacterCustomStatsInput from "./CreateCharacterCustomStatsInput";


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
      },
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
      gender: "",
      alignment: "",
      name: "",
      class: "",
      characterRace: "",
      hitPoints: 0,
      racialBonus: {},
      allowedAlignments: ["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"],
      alignRenderKey: Math.random(),
      numberOfInvalidFields: 0,
      invalidFields: [""],
      showToast: false,
      numberOfCharacters: store.getState().characterReducer.numberOfCharacters,
      chooseStatsMethod: "2.0",
      previousStatsMethod: "2.0",
      showStatsMethod: true,
      freeAbilityPoints: 0,
      baseFreeAbilityPoints: 0,
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['authorization'] = this.props.Auth;
    if (store.getState().userReducer.currentUser.isGuest) {
      const characterCount = store.getState().characterReducer.numberOfCharacters;
      if (characterCount > 10) {
        alert("Guest accounts limited to 10 characters. Please register to create more.");
        this.props.history.push("/characters");
      }
    }
  }

  setFavouredClass = (newFavClass) => {
    this.setState({ favouredClass: newFavClass });
  }

  setGender = (newGender) => {
    this.setState({ gender: newGender });
  }

  setAlignment = (newAlignment) => {
    this.setState({ alignment: newAlignment });
  }

  setClass = (newClass) => {
    this.restrictAlignments(newClass);
    this.setState({
      class: newClass,
      alignment: "",
      alignRenderKey: Math.random()
    });
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
    let postResult;
    const postResponse = {
      message: 'Character Created',
      status_code: 201,
      status: 'OK',
    };
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
    this.props.history.push("/characters");
    return postResponse;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      numberOfInvalidFields: 0,
      invalidFields: []
    });
    const validationFields = [
      "name",
      "class",
      "characterRace",
      "alignment",
      "favouredClass",
      "gender"
    ];
    const invalidFields = [];
    let numInvalidFields = 0;
    for (let i = 0; i < validationFields.length; i += 1) {
      const field = validationFields[i];
      if (this.state[field].toString() === "") {
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
    const ancestryHP = this.state.ancestryProps.hp;
    const classHP = this.state.classProps.hp;
    const constModifier = calcAbilityModifierFunc(this.state.characterStats.CON);
    const characterHP = ancestryHP + classHP + constModifier;
    this.saveNewCharacter({
      name: this.state.name,
      class: this.state.class,
      race: this.state.characterRace,
      hitPoints: characterHP,
      level: 1,
      XP: 0,
      STR: this.state.characterStats.STR,
      DEX: this.state.characterStats.DEX,
      CON: this.state.characterStats.CON,
      INT: this.state.characterStats.INT,
      WIS: this.state.characterStats.WIS,
      CHA: this.state.characterStats.CHA,
      freeAbilityPoints: this.state.freeAbilityPoints,
      items: {},
      abilities: {},
      traits: {},
      characterNotes: [],
      type: "Player",
      gender: this.state.gender,
      alignment: this.state.alignment,
      racialBonus: this.state.racialBonus,
      user: userName,
      ancestryProps: this.state.ancestryProps,
      backgroundProps: this.state.backgroundInfo,
    });
    this.setState({ numberOfCharacters: this.state.numberOfCharacters + 1 });
  }

  setAncestry = (newRace, ancestryProps) => {
    const bonusPoints = ancestryProps.statsBonus;
    const { freeAbilityPoints } = ancestryProps;
    const subtractPrevPoints = this.state.characterRace === 'Human' ? 2 : 1;
    let newBaseFreeAbilityPoints = this.state.baseFreeAbilityPoints - subtractPrevPoints;
    newBaseFreeAbilityPoints += freeAbilityPoints;
    if (newRace === this.state.characterRace) {
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
        characterRace: newRace,
        racialBonus: bonusPoints,
        freeAbilityPoints,
        baseFreeAbilityPoints: newBaseFreeAbilityPoints,
        ancestryProps
      });
    }
  }

  setBackground = (newProps) => {
    const newStats = this.state.characterStats;
    const prevBB = this.state.backgroundBoost;
    let abilityBoost = this.state.freeAbilityPoints;
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
    let freeAbilityBoost = this.state.freeAbilityPoints;
    if (!this.state.backgroundInfo.background) {
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
    });
  };

  resetBaseStats = () => {
    const characterStats = {
      STR: 10,
      DEX: 10,
      CON: 10,
      INT: 10,
      WIS: 10,
      CHA: 10
    };
    Object.keys(this.state.racialBonus).forEach((key) => {
      characterStats[key] += this.state.racialBonus[key];
    });
    // TODO add all other stat modifiers
    this.setState({
      characterStats,
      freeAbilityPoints: this.state.baseFreeAbilityPoints
    });
  };

  GenStatsMethod = (props) => {
    if (this.state.chooseStatsMethod === "2.0") {
      return (<CreateCharacter20StatsComponent
        setStateStats={this.setStateStats}
        characterStats={this.state.characterStats}
        racialBonus={this.state.racialBonus}
        backgroundBoost={this.state.backgroundBoost}
        freeAbilityPoints={this.state.freeAbilityPoints}

      />);
    } else if (this.state.chooseStatsMethod === "Custom") {
      return (<CreateCharacterCustomStatsInput
        setStateStats={this.setStateStats}
        characterStats={this.state.characterStats}
        racialBonus={this.state.racialBonus}
        backgroundBoost={this.state.backgroundBoost}
        freeAbilityPoints={this.state.freeAbilityPoints}
      />);
    }
    return null;
  };

  InvalidFields = () => {
    return (
      <ul>
        {this.state.invalidFields.map((invalidField, i) => {
          return <li key={`${i * 5}${invalidField}`}>{invalidField}</li>;
        })}
      </ul>
    );
  };

  ValidationModal = () => {
    return (
      <div>
        {this.state.numberOfInvalidFields} errors on submission.<br />
        Please select character's:
        <this.InvalidFields />
      </div>
    );
  };

  handleCloseStat = () => {
    this.setState({ showChangeStat: false });
  }

  handleOpenStat = () => {
    if (this.state.chooseStatsMethod === '2.0') {
      return;
    }
    this.setState({ showChangeStat: true });
  }

  handleCloseStatCust = () => {
    this.setState({ showChangeStatCust: false });
  }

  handleOpenStatCust = () => {
    if (this.state.chooseStatsMethod === 'Custom') {
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


  render() {
    const { classes } = this.props;

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
          <Form horizontal >
            <CreateCharacterNameComponent updateName={this.setName} />
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
            <hr className={cssStyles.hr} />

            <CreateCharacterGenderComponent updateGender={this.setGender} />
            <hr className={cssStyles.hr} />
            <CreateCharacterAlignmentComponent
              updateAlignment={this.setAlignment}
              allowedAlignments={this.state.allowedAlignments}
              renderKey={this.state.alignRenderKey}
            />
            <hr className={cssStyles.hr} />
            <FormGroup className={cssStyles.createColStyle}>
              <Col sm={8} />
              <Col sm={4}>
                <ButtonToolbar>
                  <Button bsStyle="primary" onClick={this.handleSubmit}>
                    Create
                  </Button>
                  <LinkContainer to="/home">
                    <Button bsStyle="link">Discard</Button>
                  </LinkContainer>
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
                  <this.ValidationModal />
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
              </Modal>
              <Modal
                show={this.state.showChangeStat}
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
                show={this.state.showChangeStatCust}
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
            </FormGroup>
            <FormGroup>
              <Col sm={7} />
              <Col sm={4}>
                <ButtonToolbar>
                  <Button bsStyle="link">
                    Proceed to Skills (Under Construction)
                  </Button>
                </ButtonToolbar>
              </Col>
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

  restrictAlignments(newClass) {
    switch (newClass) {
      case "Monk":
        this.setState({ allowedAlignments: ["LG", "LN", "LE"] });
        break;
      case "Wizard":
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
      case "Fighter":
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
      case "Druid":
        this.setState({ allowedAlignments: ["NG", "LN", "N", "CN", "NE"] });
        break;
      case "Ranger":
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
      case "Cleric":
        this.setState({
          allowedAlignments: []
        });
        break;
      case "Rogue":
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
      case "Sorcerer":
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
      case "Paladin":
        this.setState({ allowedAlignments: ["LG"] });
        break;
      case "Barbarian":
        this.setState({
          allowedAlignments: ["NG", "CG", "N", "CN", "NE", "CE"]
        });
        break;
      default:
        break;
    }
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
