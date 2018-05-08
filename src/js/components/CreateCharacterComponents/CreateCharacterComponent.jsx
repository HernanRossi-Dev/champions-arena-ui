import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import * as CharacterActionCreators from "../../actions/CharacterActionCreators";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cssStyles from "../../../styles/Styles.css";
import store from "../../store/index.js";

import {
	Button,
	ButtonToolbar,
	Col,
	Form,
	FormGroup,
	Panel,
	Modal, ControlLabel,
	Collapse,
	Well
} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import CreateCharacterRaceComponent from "./CreateCharacterRaceComponent.jsx";
import CreateCharacterNameComponent from "./CreateCharacterNameComponent.jsx";
import CreateCharacterGenStatsComponent from "./CreateCharacterGenStatsComponent.jsx";
import CreateCharacterClassComponent from "./CreateCharacterClassComponent.jsx";
import CreateCharacterGenderComponent from "./CreateCharacterGenderComponent.jsx";
import CreateCharacterAlignmentComponent from "./CreateCharacterAlignmentComponent.jsx";
import CreateCharacterFavouredClassComponent from "./CreateCharacterFavouredClassComponent";
import CreateCharacterPointBuyStatsComponent from "./CreateCharacterPointBuyStatsComponent";
import CreateCharacterCustomStatsInput from "./CreateCharacterCustomStatsInput";

class CreateCharacterComponent extends React.Component {
  constructor(props, context) {
    super();
    this.createNewCharacter = this.createNewCharacter.bind(this);
    this.state = {
      characterStats: {
        STR: 15,
        DEX: 14,
        CON: 13,
        INT: 12,
        WIS: 10,
        CHA: 8
      },
      baseCharacterStats: {
        STR: 15,
        DEX: 14,
        CON: 13,
        INT: 12,
        WIS: 10,
        CHA: 8
      },
      gender: "",
      alignment: "",
      name: "",
      class: "",
      characterRace: "",
      favouredClass: "",
      racialBonus: {},
      allowedAlignments: ["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"],
      alignRenderKey: Math.random(),
      numberOfInvalidFields: 0,
      invalidFields: [""],
      show: false,
      numberOfCharacters: store.getState().characterReducer.numberOfCharacters,
      choseStatsMethod: "Roll",
      previousStatsMethod: "Roll",
	    showStatsMethod: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setRace = this.setRace.bind(this);
    this.setName = this.setName.bind(this);
    this.setStateStats = this.setStateStats.bind(this);
    this.setClass = this.setClass.bind(this);
    this.setGender = this.setGender.bind(this);
    this.setAlignment = this.setAlignment.bind(this);
    this.setFavouredClass = this.setFavouredClass.bind(this);
    this.restrictAlignments = this.restrictAlignments.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.setStateMethod = this.setStateMethod.bind(this);
    // this.GenStatsMethod = this.GenStatsMethod.bind(this);
    const { dispatch } = props;
    this.boundActionCreators = bindActionCreators(
      CharacterActionCreators,
      dispatch
    );
  }

  componentDidMount() {
    if(store.getState().userReducer.currentUser.isGuest) {
	    let characterCount = store.getState().characterReducer.numberOfCharacters;
	    if (characterCount > 10) {
		    alert(
			    "Guest accounts limited to 10 characters. Please register to create more."
		    );
		    this.props.history.push("/characters");
	    }
    }
  }

  createNewCharacter(newCharacter) {
    let thisInst = this;
    let callbackRedirect = () => {
      thisInst.props.history.push("/characters");
    };
    let { dispatch } = this.props;
    let action = CharacterActionCreators.createCharacter(
      newCharacter,
      callbackRedirect
    );
    dispatch(action);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleSubmit(e) {
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
      let field = validationFields[i];
      if (this.state[field].toString() === "") {
        numInvalidFields += 1;
        invalidFields.push(field);
      }
    }
    if (numInvalidFields > 0) {
      this.setState({
        numberOfInvalidFields: numInvalidFields,
        invalidFields: invalidFields,
        show: true
      });
      return;
    }
    if (this.state.numberOfCharacters > 10) {
      alert(
        "Guest accounts limited to 10 characters. Please register to create more."
      );
      this.props.history.push("/characters");
    }
    this.createNewCharacter({

      name: this.state.name,
      class: this.state.class,
      race: this.state.characterRace,
      level: 1,
      XP: 0,
      STR: this.state.characterStats.STR,
      DEX: this.state.characterStats.DEX,
      CON: this.state.characterStats.CON,
      INT: this.state.characterStats.INT,
      WIS: this.state.characterStats.WIS,
      CHA: this.state.characterStats.CHA,
      attributePointsToSpend: 0,
      items: {},
      abilities: {},
      traits: {},
      characterNotes: [],
      type: "Player",
      gender: this.state.gender,
      alignment: this.state.alignment,
      favouredClass: this.state.favouredClass,
      racialBonus: this.state.racialBonus,
      user: store.getState().userReducer.currentUserName
    });
    this.setState({ numberOfCharacters: this.state.numberOfCharacters + 1 });
  }

  setRace(selectedRace, racialBonus) {
    if (racialBonus.statsBonus) {
      const rBon = racialBonus.statsBonus;
      let key;
      let newStats = Object.assign({}, this.state.baseCharacterStats);
      for (key in rBon) {
        newStats[key] = newStats[key] + rBon[key];
      }
      this.setState({ characterStats: newStats });
    } else {
      this.setState({ characterStats: this.state.baseCharacterStats });
    }
    this.setState({ characterRace: selectedRace, racialBonus: racialBonus });
  }

  setName(newName) {
    this.setState({ name: newName });
  }

  setStateStats(newStatsObject) {
    this.setState({
      characterStats: newStatsObject,
      baseCharacterStats: newStatsObject
    });
  }

  setClass(newClass) {
    this.restrictAlignments(newClass);
    this.setState({
      class: newClass,
      alignment: "",
      alignRenderKey: Math.random()
    });
  }

  setFavouredClass(newFavClass) {
    this.setState({ favouredClass: newFavClass });
  }
  setGender(newGender) {
    this.setState({ gender: newGender });
  }

  setAlignment(newAlignment) {
    this.setState({ alignment: newAlignment });
  }

  setStateMethod(e) {
    const prevMethod = this.state.choseStatsMethod;
    this.setState({ previousStatsMethod: prevMethod, choseStatsMethod: e.target.innerHTML });
  }



  render() {
    const ValidationModal = () => {
      return (
        <div>
          {this.state.numberOfInvalidFields} errors on submission.<br />
          Please select character's:
          <InvalidFields />
        </div>
      );
    };
    const InvalidFields = () => {
      this.state.invalidFields.map(field => {
        console.log(field);
      });
      return (
        <ul>
          {this.state.invalidFields.map(invalidField => {
            return <li>{invalidField}</li>;
          })}
        </ul>
      );
    };

	  const GenStatsMethod = () => {
		  if (this.state.choseStatsMethod === "Roll") {
			  return (
				  <CreateCharacterGenStatsComponent
					  setStateStats={this.setStateStats}
					  characterStats={this.state.characterStats}
					  racialBonus={this.state.racialBonus}
				  />
			  );
		  } else if (this.state.choseStatsMethod === "Buy") {
			  return <CreateCharacterPointBuyStatsComponent />;
		  } else if (this.state.choseStatsMethod === "Custom") {
			  return <CreateCharacterCustomStatsInput
				  setStateStats={this.setStateStats}
				  characterStats={this.state.characterStats}
				  racialBonus={this.state.racialBonus}/>;
		  }
	  };
    return (
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
	          ><div style={{fontSize:'19px',fontFamily: "'Josefin Sans', sans-serif"}}>Choose Stats method:</div>
	          </Col>
            <Col sm={7} style={{marginLeft:'45px'}}>
              <ButtonToolbar>
                <Button onClick={this.setStateMethod} className={cssStyles.statsMethodButtons}>Roll</Button>
                <Button onClick={this.setStateMethod} className={cssStyles.statsMethodButtons}>Buy</Button>
                <Button onClick={this.setStateMethod} className={cssStyles.statsMethodButtons}>Custom</Button>
              </ButtonToolbar>
            </Col>
          </FormGroup>
	        <FormGroup  >

              <GenStatsMethod />

          </FormGroup>
          <hr className={cssStyles.hr} />
          <CreateCharacterRaceComponent setRace={this.setRace.bind(this)} />
          <hr className={cssStyles.hr} />
          <CreateCharacterClassComponent updateClass={this.setClass} />
          <hr className={cssStyles.hr} />
          <CreateCharacterFavouredClassComponent
            updateFavClass={this.setFavouredClass}
          />
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

                <LinkContainer to={"/home"}>
                  <Button bsStyle={"link"}>Discard</Button>
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
                <ValidationModal />
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
                {/*<LinkContainer to={"/createCharacter/skills"}>*/}
                <Button bsStyle={"link"}>
                  Proceed to Skills (Under Construction)
                </Button>
                {/*</LinkContainer>*/}
              </ButtonToolbar>
            </Col>
          </FormGroup>
        </Form>
      </Panel>
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
    }
  }
}

export default withRouter(connect()(CreateCharacterComponent));
