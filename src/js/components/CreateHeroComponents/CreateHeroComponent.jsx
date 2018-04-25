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
  Panel
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CreateHeroRaceComponent from "./CreateHeroRaceComponent.jsx";
import CreateHeroNameComponent from "./CreateHeroNameComponent.jsx";
import CreateHeroGenStatsComponent from "./CreateHeroGenStatsComponent.jsx";
import CreateHeroClassComponent from "./CreateHeroClassComponent.jsx";
import CreateHeroGenderComponent from "./CreateHeroGenderComponent.jsx";
import CreateHeroAlignmentComponent from "./CreateHeroAlignmentComponent.jsx";
import CreateHeroFavouredClassComponent from './CreateHeroFavouredClassComponent'

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
        CHA: 8,
        gender: "",
        alignment: "",
        alignmentInfo: "",
        showAlignment: false,
        prevButtonPressed: "",
        name: "",
        class: "",
	      favouredClass: "",
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setRace = this.setRace.bind(this);
    this.setName = this.setName.bind(this);
    this.setStateStats = this.setStateStats.bind(this);
    this.setClass = this.setClass.bind(this);
    this.setGender = this.setGender.bind(this);
    this.setAlignment = this.setAlignment.bind(this);
    this.setFavouredClass = this.setFavouredClass.bind(this);
    const { dispatch } = props;
    this.boundActionCreators = bindActionCreators(HeroActionCreators, dispatch);
  }

  createNewHero(newHero) {
    let { dispatch } = this.props;
    let action = HeroActionCreators.createHero(newHero);
    dispatch(action);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.createNewHero({
      name: this.state.name,
      class: this.state.class,
      race: this.state.heroRace,
      level: 5,
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
	    favouredClass: this.state.favouredClass
    });
    // this.setState({
    //   heroStats: {
    //     STR: 15,
    //     DEX: 14,
    //     CON: 13,
    //     INT: 12,
    //     WIS: 10,
    //     CHA: 8
    //   }
    // });
  }

  setRace(selectedRace) {
    this.setState({ heroRace: selectedRace });
  }

  setName(newName) {
    this.setState({ name: newName });
  }

  setStateStats(newStatsObject) {
    this.setState({ heroStats: newStatsObject });
  }

  setClass(newClass) {
    this.setState({ class: newClass });
  }

  setFavouredClass(newFavClass) {
    this.setState({favouredClass: newFavClass});
  }
  setGender(newGender) {
    this.setState({ gender: newGender });
  }

  setAlignment(newAlignment) {
    this.setState({ alignment: newAlignment });
  }

  render() {


	  return (
      <Panel className={cssStyles.createHeroPanelParent}>
        <Panel.Heading className={cssStyles.createHeroPanelHeaderStyle}>
          <Panel.Title toggle className={cssStyles.createHeroPanelHeaderStyleText}>Create Character</Panel.Title>
        </Panel.Heading>
        <Form horizontal>
          <CreateHeroNameComponent updateName={this.setName} />
          <hr className={cssStyles.hr} />
          <CreateHeroGenStatsComponent saveStats={this.setStateStats} />
          <hr className={cssStyles.hr} />
          <CreateHeroRaceComponent setRace={this.setRace.bind(this)} />
          <hr className={cssStyles.hr} />
          <CreateHeroClassComponent updateClass={this.setClass} />
          <hr className={cssStyles.hr} />
	        <CreateHeroFavouredClassComponent updateFavClass={this.setFavouredClass}/>
	        <hr className={cssStyles.hr} />
          <CreateHeroGenderComponent updateGender={this.setGender} />
          <hr className={cssStyles.hr} />
          <CreateHeroAlignmentComponent updateAlignment={this.setAlignment} />
          <hr className={cssStyles.hr} />
          <hr className={cssStyles.hr} />
          <FormGroup className={cssStyles.createColStyle}>
            <Col sm={7} />
            <Col sm={5}>
              <ButtonToolbar>
                <Button bsStyle="primary" onClick={this.handleSubmit}>
                  Create
                </Button>

                <LinkContainer to={"/home"}>
                  <Button bsStyle={"link"}>Discard</Button>
                </LinkContainer>
	              <LinkContainer to={"/createHero/skills"}>
                  <Button bsStyle={"link"}>Proceed to Skills</Button>
                </LinkContainer>
              </ButtonToolbar>
            </Col>

          </FormGroup>
        </Form>
      </Panel>
    );
  }
}

export default withRouter(connect()(CreateHeroComponent));
