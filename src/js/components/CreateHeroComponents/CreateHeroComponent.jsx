import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import * as HeroActionCreators from "../../actions/index.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cssStyles from "../../../styles/Styles.css";
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
import CreateHeroRaceComponent from "./CreateHeroRaceComponent.jsx";
import CreateHeroNameComponent from "./CreateHeroNameComponent.jsx";
import CreateHeroGenStatsComponent from "./CreateHeroGenStatsComponent.jsx";
import CreateHeroClassComponent from "./CreateHeroClassComponent.jsx";
import CreateHeroGenderComponent from "./CreateHeroGenderComponent.jsx";
import CreateHeroAlignmentComponent from "./CreateHeroAlignmentComponent.jsx";
import CreateHeroFavouredClassComponent from "./CreateHeroFavouredClassComponent";

class CreateHeroComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.createNewHero = this.createNewHero.bind(this);
    this.state = {
      heroStats: {
        STR: 15,
        DEX: 14,
        CON: 13,
        INT: 12,
        WIS: 10,
        CHA: 8
      },
      baseHeroStats: {
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
      heroRace: "",
      favouredClass: "",
      racialBonus: {},
      allowedAlignments: ["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"],
      alignRenderKey: Math.random(),
      numberOfInvalidFields: 0,
      invalidFields: [""],
      show: false
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
    const { dispatch } = props;
    this.boundActionCreators = bindActionCreators(HeroActionCreators, dispatch);
  }

  createNewHero(newHero) {
    let { dispatch } = this.props;
    let action = HeroActionCreators.createHero(newHero);
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
      "heroRace",
      "alignment",
      "favouredClass",
      "gender"
    ];
    const invalidFields = [];
    let numInvalidFields = 0;
    for ( let i =0; i < validationFields.length; i += 1) {
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

    this.createNewHero({
      name: this.state.name,
      class: this.state.class,
      race: this.state.heroRace,
      level: 1,
      XP: 0,
      STR: this.state.heroStats.STR,
      DEX: this.state.heroStats.DEX,
      CON: this.state.heroStats.CON,
      INT: this.state.heroStats.INT,
      WIS: this.state.heroStats.WIS,
      CHA: this.state.heroStats.CHA,
      attributePointsToSpend: 0,
      items: {},
      abilities: {},
      traits: {},
      type: "Player",
      gender: this.state.gender,
      alignment: this.state.alignment,
      favouredClass: this.state.favouredClass,
      racialBonus: this.state.racialBonus,
      user: 'dev'
    });
  }

  setRace(selectedRace, racialBonus) {
    if (racialBonus.statsBonus) {
      const rBon = racialBonus.statsBonus;
      let key;
      let newStats = Object.assign({}, this.state.baseHeroStats);
      for (key in rBon) {
        newStats[key] = newStats[key] + rBon[key];
      }
      this.setState({ heroStats: newStats });
    } else {
      this.setState({ heroStats: this.state.baseHeroStats });
    }
    this.setState({ heroRace: selectedRace, racialBonus: racialBonus });
  }

  setName(newName) {
    this.setState({ name: newName });
  }

  setStateStats(newStatsObject) {
    this.setState({ heroStats: newStatsObject, baseHeroStats: newStatsObject });
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
	    })
      return (
        <ul>
          {this.state.invalidFields.map(invalidField =>  {
            return(
              <li>{invalidField}</li>
            )
          })}
        </ul>
      )
    };
    return (
      <Panel className={cssStyles.createHeroPanelParent}>
        <Panel.Heading className={cssStyles.createHeroPanelHeaderStyle}>
          <Panel.Title
            toggle
            className={cssStyles.createHeroPanelHeaderStyleText}
          >
            Create Character
          </Panel.Title>
        </Panel.Heading>
        <Form horizontal>
          <CreateHeroNameComponent updateName={this.setName} />
          <hr className={cssStyles.hr} />
          <CreateHeroGenStatsComponent
            saveStats={this.setStateStats}
            heroStatsUpdate={this.state.heroStats}
            racialBonus={this.state.racialBonus}
          />
          <hr className={cssStyles.hr} />
          <CreateHeroRaceComponent setRace={this.setRace.bind(this)} />
          <hr className={cssStyles.hr} />
          <CreateHeroClassComponent updateClass={this.setClass} />
          <hr className={cssStyles.hr} />
          <CreateHeroFavouredClassComponent
            updateFavClass={this.setFavouredClass}
          />
          <hr className={cssStyles.hr} />
          <CreateHeroGenderComponent updateGender={this.setGender} />
          <hr className={cssStyles.hr} />
          <CreateHeroAlignmentComponent
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
              className={cssStyles.createHeroClassModal}
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
                {/*<LinkContainer to={"/createHero/skills"}>*/}
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

export default withRouter(connect()(CreateHeroComponent));
