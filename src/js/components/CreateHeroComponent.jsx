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
        alignmentInfo: ""
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.changeGender = this.changeGender.bind(this);
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
    const alignmentDivStyle = {
      fontSize: "15px !important",
      fontFamily: "'Crimson Text', serif",
      textAlign: "center"
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

          {this.ClassFormGroup()}
          <hr className={cssStyles.hr} />
          {this.RaceFormGroup()}
          <hr className={cssStyles.hr} />
          {this.GenderFormGroup()}
          <hr className={cssStyles.hr} />
          {this.AlignmentFormGroup()}
          <div id="demo" className="collapse" style={alignmentDivStyle}>
            {this.state.alignmentInfo}
            this has been clicked
          </div>
          <FormGroup>
            <Col smOffset={3} sm={6}>
              <ButtonToolbar>
                <Button bsStyle="primary" onClick={this.handleSubmit}>
                  Create
                </Button>
                <LinkContainer to={"/heros"}>
                  <Button bsStyle={"link"}>To Character List</Button>
                </LinkContainer>
              </ButtonToolbar>
            </Col>
          </FormGroup>
        </Form>
      </Panel>
    );
  }

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

  ClassFormGroup() {
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
    );
  }

  RaceFormGroup() {
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
      </FormGroup>
    );
  }

  GenderFormGroup() {
    const changeGender = e => {
        console.log("e gender");

        console.log(e.target.textContent);

      this.setState({ gender: e.target.textContent.toString() });
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
        <Col sm={4}>
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
          </ToggleButtonGroup>
        </Col>
      </FormGroup>
    );
  }

  AlignmentFormGroup() {
    const changeAlignment = e => {
      console.log("e value");

      console.log(e.target.textContent);

      this.setState({ alignment: e.target.textContent.toString() });
      this.changeAlignmentInfo(e.target.textContent.toString());
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
              // onChange={changeAlignment}
              // onClick={changeAlignment}
              //  handleChange={changeAlignment}
              ref="alignmentValue"
              className={cssStyles.alignmentButtonGroupParent}
            >
              <ToggleButton
                value={"Lawful Good"}
                className={cssStyles.alignmentButtonGroup}
                data-toggle="collapse"
                data-target="#demo"
                onClick={changeAlignment}
              >
                Lawful Good
              </ToggleButton>
              <ToggleButton
                value={2}
                className={cssStyles.alignmentButtonGroup}
                data-toggle="collapse"
                data-target="#demo"
                onClick={changeAlignment}
              >
                Neutral Good
              </ToggleButton>
              <ToggleButton
                value={3}
                className={cssStyles.alignmentButtonGroup}
                data-toggle="collapse"
                data-target="#demo"
                onClick={changeAlignment}
              >
                Chaotic Good
              </ToggleButton>
              <ToggleButton
                value={4}
                className={cssStyles.alignmentButtonGroup}
                data-toggle="collapse"
                data-target="#demo"
                onClick={changeAlignment}
              >
                Lawful Neutral
              </ToggleButton>
              <ToggleButton
                value={5}
                className={cssStyles.alignmentButtonGroup}
                data-toggle="collapse"
                data-target="#demo"
                onClick={changeAlignment}
              >
                Neutral
              </ToggleButton>

              <ToggleButton
                value={6}
                className={cssStyles.alignmentButtonGroup}
                data-toggle="collapse"
                data-target="#demo"
                onClick={changeAlignment}
              >
                Chaotic Neutral
              </ToggleButton>

              <ToggleButton
                value={7}
                className={cssStyles.alignmentButtonGroup}
                data-toggle="collapse"
                data-target="#demo"
                onClick={changeAlignment}
              >
                Lawful Evil
              </ToggleButton>

              <ToggleButton
                value={8}
                className={cssStyles.alignmentButtonGroup}
                data-toggle="collapse"
                data-target="#demo"
                onClick={changeAlignment}
              >
                Neutral Evil
              </ToggleButton>

              <ToggleButton
                value={9}
                className={cssStyles.alignmentButtonGroup}
                data-toggle="collapse"
                data-target="#demo"
                onClick={changeAlignment}
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

  changeAlignmentInfo(e) {
    console.log("alignemnt info e");
    console.log(e);
    switch (e) {
      case "Lawful Good":
        this.setState({
          alignmentInfo:
            "Lawful Good: A lawful good character acts as a good person is expected or required to act. " +
            "She combines a commitment to oppose evil with the discipline to fight relentlessly. " +
            "She tells the truth, keeps her word, helps those in need, and speaks out against injustice. " +
            "A lawful good character hates to see the guilty go unpunished.\n\nLawful good combines honor with compassion.\n"
        });
        break;
      case "Neutral Good":
        this.setState({
          alignmentInfo:
            "Neutral Good: A neutral good character does the best that a good person can do. " +
            "He is devoted to helping others. He works with kings and magistrates but does not feel beholden to them.\n" +
            "\n" +
            "Neutral good means doing what is good and right without bias for or against order."
        });
        break;
      case "Chaotic Good":
        this.setState({
          alignmentInfo:
            "Chaotic Good: A chaotic good character acts as his conscience directs him with little regard for what others expect of him. He makes his own way, but he's kind and benevolent. He believes in goodness and right but has little use for laws and regulations. He hates it when people try to intimidate others and tell them what to do. He follows his own moral compass, which, although good, may not agree with that of society.\n" +
            "\n" +
            "Chaotic good combines a good heart with a free spirit."
        });
        break;
      case " Lawful Neutral":
        this.setState({
          alignmentInfo:
            "Lawful Neutral: A lawful neutral character acts as law, tradition, or a personal code directs her. Order and organization are paramount. She may believe in personal order and live by a code or standard, or she may believe in order for all and favor a strong, organized government.\n" +
            "\n" +
            "Lawful neutral means you are reliable and honorable without being a zealot."
        });
        break;
      case "Neutral":
        this.setState({
          alignmentInfo:
            "Neutral: A neutral character does what seems to be a good idea. She doesn't feel strongly one way or the other when it comes to good vs. evil or law vs. chaos (and thus neutral is sometimes called \"true neutral\"). Most neutral characters exhibit a lack of conviction or bias rather than a commitment to neutrality. Such a character probably thinks of good as better than evil—after all, she would rather have good neighbors and rulers than evil ones. Still, she's not personally committed to upholding good in any abstract or universal way.\n" +
            "\n" +
            "Some neutral characters, on the other hand, commit themselves philosophically to neutrality. They see good, evil, law, and chaos as prejudices and dangerous extremes. They advocate the middle way of neutrality as the best, most balanced road in the long run.\n" +
            "\n" +
            "Neutral means you act naturally in any situation, without prejudice or compulsion."
        });
        break;
      case "Chaotic Neutral":
        this.setState({
          alignmentInfo:
            "Chaotic Neutral: A chaotic neutral character follows his whims. He is an individualist first and last. He values his own liberty but doesn't strive to protect others' freedom. He avoids authority, resents restrictions, and challenges traditions. A chaotic neutral character does not intentionally disrupt organizations as part of a campaign of anarchy. To do so, he would have to be motivated either by good (and a desire to liberate others) or evil (and a desire to make those others suffer). A chaotic neutral character may be unpredictable, but his behavior is not totally random. He is not as likely to jump off a bridge as he is to cross it.\n" +
            "\n" +
            "Chaotic neutral represents freedom from both society's restrictions and a do-gooder's zeal."
        });
        break;
      case "Lawful Evil":
        this.setState({
          alignmentInfo:
            "Lawful Evil: A lawful evil villain methodically takes what he wants within the limits of his code of conduct without regard for whom it hurts. He cares about tradition, loyalty, and order, but not about freedom, dignity, or life. He plays by the rules but without mercy or compassion. He is comfortable in a hierarchy and would like to rule, but is willing to serve. He condemns others not according to their actions but according to race, religion, homeland, or social rank. He is loath to break laws or promises.\n" +
            "\n" +
            "This reluctance comes partly from his nature and partly because he depends on order to protect himself from those who oppose him on moral grounds. Some lawful evil villains have particular taboos, such as not killing in cold blood (but having underlings do it) or not letting children come to harm (if it can be helped). They imagine that these compunctions put them above unprincipled villains.\n" +
            "\n" +
            "Some lawful evil people and creatures commit themselves to evil with a zeal like that of a crusader committed to good. Beyond being willing to hurt others for their own ends, they take pleasure in spreading evil as an end unto itself. They may also see doing evil as part of a duty to an evil deity or master.\n" +
            "\n" +
            "Lawful evil represents methodical, intentional, and organized evil."
        });
        break;
      case "Neutral Evil":
        this.setState({
          alignmentInfo:
            "Neutral Evil: A neutral evil villain does whatever she can get away with. She is out for herself, pure and simple. She sheds no tears for those she kills, whether for profit, sport, or convenience. She has no love of order and holds no illusions that following laws, traditions, or codes would make her any better or more noble. On the other hand, she doesn't have the restless nature or love of conflict that a chaotic evil villain has.\n" +
            "\n" +
            "Some neutral evil villains hold up evil as an ideal, committing evil for its own sake. Most often, such villains are devoted to evil deities or secret societies.\n" +
            "\n" +
            "Neutral evil represents pure evil without honor and without variation."
        });
        break;
      case "Chaotic Evil":
        this.setState({
          alignmentInfo:
            "Chaotic Evil: A chaotic evil character does what his greed, hatred, and lust for destruction drive him to do. He is vicious, arbitrarily violent, and unpredictable. If he is simply out for whatever he can get, he is ruthless and brutal. If he is committed to the spread of evil and chaos, he is even worse. Thankfully, his plans are haphazard, and any groups he joins or forms are likely to be poorly organized. Typically, chaotic evil people can be made to work together only by force, and their leader lasts only as long as he can thwart attempts to topple or assassinate him.\n" +
            "\n" +
            "Chaotic evil represents the destruction not only of beauty and life, but also of the order on which beauty and life depend.\n" +
            "\n"
        });
        break;
    }
  }
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
