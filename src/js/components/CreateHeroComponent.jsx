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
  ToggleButtonGroup,
  Tooltip,
  OverlayTrigger
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import * as ReactDOM from "react-dom";

class CreateHeroComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
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
        gender: "",
        alignment: "",
        alignmentInfo: "",
        showAlignment: false,
        prevButtonPressed: ""
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.changeGender = this.changeGender.bind(this);
    //   this.AlignmentTextToggle = this.AlignmentTextToggle.bind(this);
    this.GenderFormGroup = this.GenderFormGroup.bind(this);
    this.RaceFormGroup = this.RaceFormGroup.bind(this);
    this.ClassFormGroup = this.ClassFormGroup.bind(this);
    this.StatsDisplayFormGroup = this.StatsDisplayFormGroup.bind(this);
    this.StatsHeaderFormGroup = this.StatsHeaderFormGroup.bind(this);
    this.GenerateStatsFormGroup = this.GenerateStatsFormGroup.bind(this);
    this.NameFormGroup = this.NameFormGroup.bind(this);
    // this.changeAlignment = this.changeAlignment.bind(this);
    this.AlignmentFormGroup = this.AlignmentFormGroup.bind(this);
    this.changeAlignmentInfo = this.changeAlignmentInfo.bind(this);
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
      alignment: this.state.alignment
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
    const AlignmentTextToggle = () => {
      const alignmentDivStyle = {
        fontSize: "17px !important",
        fontFamily: "'Josefin Sans', sans-serif",
        textAlign: "left"
      };
      if (this.state.showAlignment) {
        return <div style={alignmentDivStyle}> {this.state.alignmentInfo}</div>;
      } else {
        return <div />;
      }
    };

    return (
      <Panel className={cssStyles.createHeroPanelParent}>
        <Panel.Heading>
          <Panel.Title toggle>Create Character</Panel.Title>
        </Panel.Heading>
        <Form horizontal>
          {this.NameFormGroup()}
          <hr className={cssStyles.hr} />
          {this.GenerateStatsFormGroup()}
          {this.StatsHeaderFormGroup()}
          {this.StatsDisplayFormGroup()}
          <hr className={cssStyles.hr} />

          {this.RaceFormGroup()}
          <hr className={cssStyles.hr} />
            {this.ClassFormGroup()}
            <hr className={cssStyles.hr} />
          {this.GenderFormGroup()}
          <hr className={cssStyles.hr} />
          {this.AlignmentFormGroup()}
          <FormGroup>
            <Col sm={1} />
            <Col sm={8}>
              <AlignmentTextToggle />
            </Col>
            <Col sm={2} />
          </FormGroup>
          <hr className={cssStyles.hr} />
          <FormGroup className={cssStyles.createColStyle}>
            <Col sm={3} />
            <Col sm={3}>
              <ButtonToolbar>
                <Button bsStyle="primary" onClick={this.handleSubmit}>
                  Create
                </Button>
                <LinkContainer to={"/heros"}>
                  <Button bsStyle={"link"}>To Character List</Button>
                </LinkContainer>
              </ButtonToolbar>
            </Col>
            <Col sm={3} />
          </FormGroup>
        </Form>
      </Panel>
    );
  }

  /**
   *
   * @returns {*}
   * @constructor
   */
  NameFormGroup() {
    return (
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
    );
  }

  /**
   *
   * @returns {*}
   * @constructor
   */
  generateStats() {
    const newStats = [];
    // Use 4d6 lowest drop method
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
        CHA: newStats[5]
      }
    });
  }

  /**
   *
   * @returns {*}
   * @constructor
   */
  GenerateStatsFormGroup() {
    const tooltip = <Tooltip id="tooltip">Roll 4d6 keep best 3 dice</Tooltip>;
    return (
      <FormGroup>
        <Col sm={1} />
        <Col sm={2} className={cssStyles.createColLabelStyle}>
          <ButtonToolbar>
            <OverlayTrigger placement="right" overlay={tooltip}>
              <Button bsStyle="primary" onClick={this.generateStats}>
                Roll For Stats
              </Button>
            </OverlayTrigger>
          </ButtonToolbar>
        </Col>
      </FormGroup>
    );
  }

  /**
   *
   * @returns {*}
   * @constructor
   */
  StatsHeaderFormGroup() {
    return (
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
    );
  }

  /**
   *
   * @returns {*}
   * @constructor
   */
  StatsDisplayFormGroup() {
    return (
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
    );
  }

  /**
   *
   * @returns {*}
   * @constructor
   */
  RaceFormGroup() {
    const changeRace = e => {
      const targetText = e.target.textContent.toString();
      // if (!this.state.race) {
      //   this.setState({ showAlignment: true });
      // }
      // if (targetText === this.state.prevButtonPressed) {
      //   if (this.state.showAlignment) {
      //     this.setState({ showAlignment: !this.state.showAlignment });
      //   } else {
      //   }
      // } else {
      //   this.setState({ showAlignment: true });
      // }
      //   this.changeAlignmentInfo(e.target.textContent.toString());
      //   this.setState({ prevButtonPressed: targetText });
      this.setState({ race: targetText });
    };
    return (
      <FormGroup>
        <Col sm={1} />
        <Col
          componentClass={ControlLabel}
          sm={2}
          className={cssStyles.createColLabelStyle}
        >
          Race:

        </Col>
        <Col sm={7}>
          <ButtonToolbar>
            <ToggleButtonGroup
              type="radio"
              name="raceValue"
              onClick={changeRace}
              className={cssStyles.alignmentButtonGroupParent}
            >
              <ToggleButton
                value={"Human"}
                className={cssStyles.alignmentButtonGroup}
              >
                Human
              </ToggleButton>
              <ToggleButton
                value={"Dwarf"}
                className={cssStyles.alignmentButtonGroup}
              >
                Dwarf
              </ToggleButton>
              <ToggleButton
                value={"Elf"}
                className={cssStyles.alignmentButtonGroup}
              >
                Elf
              </ToggleButton>
              <ToggleButton
                value={"Halfling"}
                className={cssStyles.alignmentButtonGroup}
              >
                Halfling
              </ToggleButton>
              <ToggleButton
                value={"Gnome"}
                className={cssStyles.alignmentButtonGroup}
              >
                Gnome
              </ToggleButton>

              <ToggleButton
                value={"Half-Orc"}
                className={cssStyles.alignmentButtonGroup}
              >
                Half-Orc
              </ToggleButton>
                <ToggleButton
                value={"Half-Elf"}
                className={cssStyles.alignmentButtonGroup}
              >
                Half-Elf
              </ToggleButton>

            </ToggleButtonGroup>
          </ButtonToolbar>
        </Col>

        <Col sm={2} />
      </FormGroup>
    );
  }

  /**
   *
   * @returns {*}
   * @constructor
   */
  ClassFormGroup() {
    return (
      <FormGroup>
        <Col sm={1} />
        <Col
          componentClass={ControlLabel}
          sm={2}
          className={cssStyles.createColLabelStyle}
        >
          Class:

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
        <Col sm={1}/>
          <Col ><img
              src={require("../../assets/Fighter.png")}
              width="75"
              height="75"
              alt=""

          /></Col>
      </FormGroup>
    );
  }

  /**
   *
   * @returns {*}
   * @constructor
   */
  GenderFormGroup() {
    const changeGender = e => {
      this.setState({ gender: e.target.textContent.toString() });
    };

    const ShowGenderImage =(props) => {
      if(this.state.gender === "Male"){
        return (
            <img
                src={require("../../assets/maleGender.png")}
                width="50"
                height="50"
                alt=""
            />
        );
      } else if (this.state.gender === "Female"){
        return (
            <img
                src={require("../../assets/femaleGender.png")}
                width="50"
                height="50"
                alt=""
            />
        );
      } else {
        return (
            <img
                src={require("../../assets/otherSexSymbol.png")}
                width="33"
                height="50"
                alt=""
            />
        );
      }
    };
    return (
      <FormGroup>
        <Col sm={1} />
        <Col
          componentClass={ControlLabel}
          sm={2}
          className={cssStyles.createColLabelStyle}
        >
          Gender:
        </Col>
        <Col sm={5}>
          <ToggleButtonGroup
            type="radio"
            name="gender"
            className={cssStyles.genderButtonGroup}
          >
            <ToggleButton
              value={"Male"}
              className={cssStyles.genderButtonGroup}
              onClick={changeGender}
            >
              Male
            </ToggleButton>
            <ToggleButton
              value={"Female"}
              className={cssStyles.genderButtonGroup}
              onClick={changeGender}
            >
              Female
            </ToggleButton>
              <ToggleButton
                  value={"Unknown"}
                  className={cssStyles.genderButtonGroup}
                  onClick={changeGender}
              >
                  Unknown
              </ToggleButton>

          </ToggleButtonGroup>
        </Col>
        <Col sm={1}/>
        <Col sm={1}>
               <ShowGenderImage />
            </Col>

      </FormGroup>
    );
  }

  /**
   *
   * @returns {*}
   * @constructor
   */
  AlignmentFormGroup() {
    const changeAlignment = e => {
      const targetText = e.target.textContent.toString();
      if (!this.state.showAlignment) {
        this.setState({ showAlignment: true });
      }
      if (targetText === this.state.prevButtonPressed) {
        if (this.state.showAlignment) {
          this.setState({ showAlignment: !this.state.showAlignment });
        } else {
        }
      } else {
        this.setState({ showAlignment: true });
      }
      this.setState({ alignment: e.target.textContent.toString() });
      this.changeAlignmentInfo(e.target.textContent.toString());
      this.setState({ prevButtonPressed: targetText });
    };
    return (
      <FormGroup controlId="alignmentValue">
        <Col sm={1} />
        <Col
          componentClass={ControlLabel}
          sm={2}
          className={cssStyles.createColLabelStyle}
        >
          Alignment:
        </Col>
        <Col sm={8}>
          <ButtonToolbar>
            <ToggleButtonGroup
              type="radio"
              name="alignmentValue"
              ref="alignmentValue"
              onClick={changeAlignment}
              className={cssStyles.alignmentButtonGroupParent}
            >
              <ToggleButton
                value={"Lawful Good"}
                className={cssStyles.alignmentButtonGroup}
              >
                Lawful Good
              </ToggleButton>
              <ToggleButton
                value={"Neutral Good"}
                className={cssStyles.alignmentButtonGroup}
              >
                Neutral Good
              </ToggleButton>
              <ToggleButton
                value={"Chaotic Good"}
                className={cssStyles.alignmentButtonGroup}
              >
                Chaotic Good
              </ToggleButton>
              <ToggleButton
                value={"Lawful Neutral"}
                className={cssStyles.alignmentButtonGroup}
              >
                Lawful Neutral
              </ToggleButton>
              <ToggleButton
                value={"Neutral"}
                className={cssStyles.alignmentButtonGroup}
              >
                Neutral
              </ToggleButton>

              <ToggleButton
                value={"Chaotic Neutral"}
                className={cssStyles.alignmentButtonGroup}
              >
                Chaotic Neutral
              </ToggleButton>

              <ToggleButton
                value={"Lawful Evil"}
                className={cssStyles.alignmentButtonGroup}
              >
                Lawful Evil
              </ToggleButton>

              <ToggleButton
                value={"Neutral Evil"}
                className={cssStyles.alignmentButtonGroup}
              >
                Neutral Evil
              </ToggleButton>

              <ToggleButton
                value={"Chaotic Evil"}
                className={cssStyles.alignmentButtonGroup}
              >
                Chaotic Evil
              </ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </Col>

        <Col sm={1} />
      </FormGroup>
    );
  }

  /**
   *
   * @param e
   */
  changeAlignmentInfo(e) {
    switch (e) {
      case "Lawful Good":
        this.setState({
          alignmentInfo: (
            <p>
              <strong>Lawful Good:</strong>
              <br /> A lawful good character acts as a good person is expected
              or required to act. She combines a commitment to oppose evil with
              the discipline to fight relentlessly. She tells the truth, keeps
              her word, helps those in need, and speaks out against injustice.<br />
              <br />
              A lawful good character hates to see the guilty go unpunished.
              Lawful good combines honor with compassion.
            </p>
          )
        });
        break;
      case "Neutral Good":
        this.setState({
          alignmentInfo: (
            <p>
              <strong>Neutral Good:</strong>
              <br />A neutral good character does the best that a good person
              can do. He is devoted to helping others. He works with kings and
              magistrates but does not feel beholden to them.
              <br />
              <br />Neutral good means doing what is good and right without bias
              for or against order.
            </p>
          )
        });
        break;
      case "Chaotic Good":
        this.setState({
          alignmentInfo: (
            <p>
              <strong>Chaotic Good:</strong>
              <br />A chaotic good character acts as his conscience directs him
              with little regard for what others expect of him. He makes his own
              way, but he's kind and benevolent. He believes in goodness and
              right but has little use for laws and regulations.
              <br />
              <br />
              Chaotic good combines a good heart with a free spirit.
            </p>
          )
        });
        break;
      case "Lawful Neutral":
        this.setState({
          alignmentInfo: (
            <p>
              <strong>Chaotic Good:</strong>
              <br />A lawful neutral character acts as law, tradition, or a
              personal code directs her. Order and organization are paramount.
              She may believe in personal order and live by a code or standard,
              or she may believe in order for all and favor a strong, organized
              government.
              <br />
              <br />
              Lawful neutral means you are reliable and honorable without being
              a zealot.
            </p>
          )
        });
        break;
      case "Neutral":
        this.setState({
          alignmentInfo: (
            <p>
              <strong>Neutral:</strong>
              <br />A neutral character does what seems to be a good idea. She
              doesn't feel strongly one way or the other when it comes to good
              vs. evil or law vs. chaos (and thus neutral is sometimes called
              "true neutral"). Most neutral characters exhibit a lack of
              conviction or bias rather than a commitment to neutrality.
              <br />
              <br />
              Neutral means you act naturally in any situation, without
              prejudice or compulsion.
            </p>
          )
        });
        break;
      case "Chaotic Neutral":
        this.setState({
          alignmentInfo: (
            <p>
              <strong>Chaotic Neutral:</strong>
              <br />A chaotic neutral character follows his whims. He is an
              individualist first and last. He values his own liberty but
              doesn't strive to protect others' freedom. He avoids authority,
              resents restrictions, and challenges traditions. <br />
              <br />
              Chaotic neutral represents freedom from both society's
              restrictions and a do-gooder's zeal.{" "}
            </p>
          )
        });
        break;
      case "Lawful Evil":
        this.setState({
          alignmentInfo: (
            <p>
              <strong>Lawful Evil:</strong>
              <br />A lawful evil villain methodically takes what he wants
              within the limits of his code of conduct without regard for whom
              it hurts. He cares about tradition, loyalty, and order, but not
              about freedom, dignity, or life. He plays by the rules but without
              mercy or compassion. <br />
              <br />
              Lawful evil represents methodical, intentional, and organized
              evil.
            </p>
          )
        });
        break;
      case "Neutral Evil":
        this.setState({
          alignmentInfo: (
            <p>
              <strong>Neutral Evil:</strong>
              <br />A neutral evil villain does whatever she can get away with.
              She is out for herself, pure and simple. She sheds no tears for
              those she kills, whether for profit, sport, or convenience. Some
              neutral evil villains hold up evil as an ideal, committing evil
              for its own sake. <br />
              <br />
              Neutral evil represents pure evil without honor and without
              variation.
            </p>
          )
        });
        break;
      case "Chaotic Evil":
        this.setState({
          alignmentInfo: (
            <p>
              <strong>Chaotic Evil:</strong>
              <br />A chaotic evil character does what his greed, hatred, and
              lust for destruction drive him to do. He is vicious, arbitrarily
              violent, and unpredictable. If he is simply out for whatever he
              can get, he is ruthless and brutal.
              <br />
              <br />
              Chaotic evil represents the destruction not only of beauty and
              life, but also of the order on which beauty and life depend.
            </p>
          )
        });
        break;
    }
  }
}

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
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
