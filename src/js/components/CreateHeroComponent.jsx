import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import store from "../store/index.js";
import * as HeroActionCreators from "../actions/index.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cssStyles from "../../styles/Styles.css";
import {
  FormGroup,
  FormControl,
  ControlLabel,
  ButtonToolbar,
  Button,
  Panel,
  Form,
  Col,
    ToggleButton,
    ToggleButtonGroup
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class CreateHeroComponent extends React.Component {
  constructor(props) {
    super(props);
    // STR, DEX, CON, INT, WIS, CHA
    this.generateStats = this.generateStats.bind(this);
    // this.createNewHero = this.createNewHero.bind(this);
    this.state = {
      heroStats: {
        STR: 15,
        DEX: 14,
        CON: 13,
        INT: 12,
        WIS: 10,
        CHA: 8,
          gender: null

      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeGender = this.changeGender.bind(this);
    const { dispatch } = props;
    this.boundActionCreators = bindActionCreators(HeroActionCreators, dispatch);
  }

  generateStats() {
    const newStats = [];

    let i;
    let j;
    let currentStat = 0;
    let statRolls = [];
    for (i = 0; i < 6; i += 1) {
      statRolls = [];
      currentStat = 0;
      for (j = 0; j < 4; j += 1) {
        statRolls.push(Math.floor(Math.random() * 6) + 1);
      }
      statRolls.sort();
      currentStat = statRolls[1] + statRolls[2] + statRolls[3];
      newStats.push(currentStat);
    }
    this.setState({
      heroStats: {
        STR: newStats[0],
        DEX: newStats[1],
        CON: newStats[2],
        INT: newStats[3],
        WIS: newStats[4],
        CHA: newStats[5],
      }
    });
  }

  createNewHero(newHero) {
    let { dispatch } = this.props;
    let action = HeroActionCreators.createHero(newHero);
    dispatch(action);
  }

  changeGender(e) {
      this.setState({gender: e.value});
  }


  handleSubmit(e) {
    e.preventDefault();
    this.createNewHero({
      name: this.heroName.value,
      class: this.heroClass.value,
      race: this.heroRace.value,
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
    });
    this.setState({
      heroStats: {
        STR: 15,
        DEX: 14,
        CON: 13,
        INT: 12,
        WIS: 10,
        CHA: 8
      }
    });
  }

  render() {
    return (
      <Panel className={cssStyles.createHeroPanelParent}>
        <Panel.Heading>
          <Panel.Title toggle>Create Character</Panel.Title>
        </Panel.Heading>
        <Form horizontal>
          <FormGroup className={cssStyles.createHeroFormPadding}>
            <Col sm={1} />
            <Col
              componentClass={ControlLabel}
              sm={2}
              className={cssStyles.createColLabelStyle}
            >
              Name:
            </Col>
            <Col sm={5}>
              <FormControl
                name={"name"}
                inputRef={ref => {
                  this.heroName = ref;
                }}
                placeholder="Enter Name"
              />
            </Col>
          </FormGroup>
            <FormGroup>
                <Col sm={1} />

                <Col sm={2} className={cssStyles.createColLabelStyle}>
                    <ButtonToolbar>
                        <Button bsStyle="primary" onClick={this.generateStats}>
                            Roll For Stats
                        </Button>
                    </ButtonToolbar>
                </Col>
            </FormGroup>
            {/*<FormGroup>*/}
                {/*<Col sm={1} />*/}

                {/*<Col*/}
                    {/*componentClass={ControlLabel}*/}
                    {/*sm={2}*/}
                    {/*className={cssStyles.createColLabelStyle}*/}
                {/*>*/}
                    {/*Character Stats:*/}
                {/*</Col>*/}
            {/*</FormGroup>*/}
            <FormGroup>
                <Col
                    componentClass={ControlLabel}
                    sm={2}
                    className={cssStyles.createColStyle}
                >
                    STR
                </Col>
                <Col
                    componentClass={ControlLabel}
                    sm={2}
                    className={cssStyles.createColStyle}
                >
                    DEX
                </Col>
                <Col
                    componentClass={ControlLabel}
                    sm={2}
                    className={cssStyles.createColStyle}
                >
                    CON
                </Col>
                <Col
                    componentClass={ControlLabel}
                    sm={2}
                    className={cssStyles.createColStyle}
                >
                    INT
                </Col>
                <Col
                    componentClass={ControlLabel}
                    sm={2}
                    className={cssStyles.createColStyle}
                >
                    WIS
                </Col>
                <Col
                    componentClass={ControlLabel}
                    sm={2}
                    className={cssStyles.createColStyle}
                >
                    CHA
                </Col>
            </FormGroup>
            <FormGroup>
                <Col sm={2}>
                    <FormControl.Static className={cssStyles.createColStyle}>
                        {" "}
                        {this.state.heroStats.STR}{" "}
                    </FormControl.Static>
                </Col>
                <Col sm={2}>
                    <FormControl.Static className={cssStyles.createColStyle}>
                        {" "}
                        {this.state.heroStats.DEX}{" "}
                    </FormControl.Static>
                </Col>
                <Col sm={2}>
                    <FormControl.Static className={cssStyles.createColStyle}>
                        {" "}
                        {this.state.heroStats.CON}{" "}
                    </FormControl.Static>
                </Col>
                <Col sm={2}>
                    <FormControl.Static className={cssStyles.createColStyle}>
                        {" "}
                        {this.state.heroStats.INT}{" "}
                    </FormControl.Static>
                </Col>
                <Col sm={2}>
                    <FormControl.Static className={cssStyles.createColStyle}>
                        {" "}
                        {this.state.heroStats.WIS}{" "}
                    </FormControl.Static>
                </Col>
                <Col sm={2}>
                    <FormControl.Static className={cssStyles.createColStyle}>
                        {" "}
                        {this.state.heroStats.CHA}
                    </FormControl.Static>
                </Col>
            </FormGroup>

            <hr className={cssStyles.hr}></hr>

          <FormGroup>
            <Col sm={1} />

            <Col
              componentClass={ControlLabel}
              sm={2}
              className={cssStyles.createColLabelStyle}
            >
              Select Race
            </Col>
            <Col sm={5}>
              <FormControl
                componentClass="select"
                name={"race"}
                inputRef={ref => {
                  this.heroRace = ref;
                }}
              >
                <option value="Human">Human</option>
                <option value="Dwarf">Dwarf</option>
                <option value="Elf">Elf</option>
                <option value="Halfling">Halfling</option>
                <option value="Half-Elf">Half-Elf</option>
                <option value="Gnome">Gnome</option>
                <option value="Half-Orc">Half-Orc</option>
              </FormControl>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={1} />
            <Col
              componentClass={ControlLabel}
              sm={2}
              className={cssStyles.createColLabelStyle}
            >
              Select Class:
            </Col>
            <Col sm={5}>
              <FormControl
                componentClass="select"
                name={"class"}
                inputRef={ref => {
                  this.heroClass = ref;
                }}
              >
                <option value="Warlock">Warlock</option>
                <option value="Monk">Monk</option>
                <option value="Wizard">Wizard</option>
                <option value="Ranger">Ranger</option>
                <option value="Druid">Druid</option>
                <option value="Paladin">Paladin</option>
                <option value="Sorcerer">Sorcerer</option>
                <option value="Rogue">Rogue</option>
                <option value="Cleric">Cleric</option>
                <option value="Fighter">Fighter</option>
              </FormControl>
            </Col>
          </FormGroup>



            <FormGroup>
                <Col sm={1} />

                <Col
                    componentClass={ControlLabel}
                    sm={2}
                    className={cssStyles.createColLabelStyle}
                >
                    Select Gender
                </Col>
                <Col sm={4} >

                    <ToggleButtonGroup type="radio" name="gender" onClick={this.changeGender} className={cssStyles.genderButtonGroup}>
                        <ToggleButton value={1} className={cssStyles.genderButtonGroup}>Male</ToggleButton>
                        <ToggleButton value={2} className={cssStyles.genderButtonGroup}>Female</ToggleButton>
                    </ToggleButtonGroup>
                </Col>
            </FormGroup>





          <FormGroup>
            <Col smOffset={3} sm={6}>
              <ButtonToolbar>
                <Button bsStyle="primary" onClick={this.handleSubmit}>
                  Create
                </Button>
                <LinkContainer to={"/heros"}>
                  <Button bsStyle={"link"}>Back</Button>
                </LinkContainer>
              </ButtonToolbar>
            </Col>
          </FormGroup>
        </Form>
      </Panel>
    );
  }
}
{
  /*<div>*/
}
{
  /*<button onClick={this.generateStats}> Roll for Stats</button>*/
}
{
  /*<form name="heroForm" onSubmit={this.handleSubmit}>*/
}
{
  /*<input type="text" name="name" placeholder="Name" />*/
}
{
  /*<select name="race">*/
}
{
  /*<option value="Human">Human</option>*/
}
{
  /*<option value="Dwarf">Dwarf</option>*/
}
{
  /*<option value="Half-Orc">Half-Orc</option>*/
}
{
  /*<option value="Elf">Elf</option>*/
}
{
  /*<option value="Gnome">Gnome</option>*/
}
{
  /*<option value="Half-Elf">Half-Elf</option>*/
}
{
  /*<option value="Halfling">Halfling</option>*/
}
{
  /*</select>*/
}
{
  /*<select name="class">*/
}
{
  /*<option value="Monk">Monk</option>*/
}
{
  /*<option value="Ranger">Ranger</option>*/
}
{
  /*<option value="Wizard">Wizard</option>*/
}
{
  /*<option value="Druid">Druid</option>*/
}
{
  /*<option value="Fighter">Fighter</option>*/
}
{
  /*<option value="Paladin">Paladin</option>*/
}
{
  /*<option value="Sorcerer">Sorcerer</option>*/
}
{
  /*<option value="Rogue">Rogue</option>*/
}
{
  /*<option value="Cleric">Cleric</option>*/
}
{
  /*<option value="Cleric">Warlock</option>*/
}
{
  /*</select>*/
}
{
  /*/!*<input type="text" name="title" placeholder="Title" />*!/*/
}
{
  /*<input type="text" name="age" placeholder="Age" />*/
}
{
  /*<StatsTable stats={this.state.heroStats} />*/
}
{
  /*<button style={styles.buttonStyle}>Create New Hero</button>*/
}
{
  /*</form>*/
}
{
  /*<Link to="/heros">Back to hero list</Link>*/
}
{
  /*</div>*/
}
function StatsTable(props) {
  const borderedStyle = { border: "1px solid silver", padding: 4 };
  return (
    <table className={borderedStyle}>
      <tbody>
        <tr>
          <td>STR: {props.stats.STR}</td>
          <td>DEX: {props.stats.DEX}</td>
          <td>CON: {props.stats.CON}</td>
          <td>INT: {props.stats.INT}</td>
          <td>WIS: {props.stats.WIS}</td>
          <td>CHA: {props.stats.CHA}</td>
        </tr>
      </tbody>
    </table>
  );
}

const { number, shape } = PropTypes;
StatsTable.propTypes = {
  stats: shape({
    STR: number.isRequired,
    DEX: number.isRequired,
    CON: number.isRequired,
    INT: number.isRequired,
    WIS: number.isRequired,
    CHA: number.isRequired
  }).isRequired
};

export default withRouter(connect()(CreateHeroComponent));
