import React from "react";
import * as cssStyles from "../../../styles/Styles.css";
import {
  ButtonToolbar,
  Col,
  ControlLabel,
  FormGroup,
  ToggleButton,
  ToggleButtonGroup
} from "react-bootstrap";

export default class CreateHeroRaceComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.changeRaceInfo = this.changeRaceInfo.bind(this);
    this.state = {
      race: "",
      raceInfo: "",
      showRaceInfo: false,
      prevButtonPressed: ""
    };
  }

  render() {
    const RaceTextToggle = () => {
      const raceDivStyle = {
        fontSize: "17px !important",
        fontFamily: "'Josefin Sans', sans-serif",
        textAlign: "left"
      };
      if (this.state.showRaceInfo) {
        return <div style={raceDivStyle}> {this.state.raceInfo}</div>;
      } else {
        return <div />;
      }
    };
    const changeRace = e => {
      const targetText = e.target.textContent.toString();
      console.log(targetText);
      console.log("targetText");
      if (!this.state.showRaceInfo) {
        this.setState({ showRaceInfo: true });
      }
      if (targetText === this.state.prevButtonPressed) {
        if (this.state.showRaceInfo) {
          this.setState({ showRaceInfo: !this.state.showRaceInfo });
        } else {
        }
      } else {
        this.setState({ showRaceInfo: true });
      }
      this.changeRaceInfo(targetText);
      this.setState({ prevButtonPressed: targetText });
      this.props.setRace(targetText);
      this.setState({ race: targetText });
    };
    return (
      <div>
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
        </FormGroup>
        <Col sm={1} />
        <FormGroup>
          <Col sm={1} />
          <Col sm={8}>
            <RaceTextToggle />
          </Col>
          <Col sm={2} />
        </FormGroup>
      </div>
    );
  }

  changeRaceInfo(currentRace) {
    switch (currentRace) {
      case "Human":
       this.setState({
         raceInfo: (
            <p>
              {" "}
              <strong>Humans get +2 to One Ability Score </strong>
              <br />
              <strong>Medium:</strong> Humans are medium sized creatures,
              receiving no bonuses or penalties for their size.<br />
              <strong>Normal Speed:</strong> Humans possess a 30 foot move speed
              .<br />
              <strong>Bonus Feat:</strong> Select <i>One</i> extra feat and
              level 1.<br />
              <strong>Skilled:</strong> Gain <i>One</i> additional skill rank at
              level 1, and <i>One</i> additional rank when leveling up.<br/>
              <strong>Languages:</strong> Humans speak common. Humans with high
              intelligence can choose any languages excluding hidden languages.
            </p>

        )});
       break;
      case "Dwarf":
	      this.setState({
		      raceInfo: (

          <p>
            <strong>
              Dwarves receive +2 Constitution, +2 Wisdom, -2 Charisma:
            </strong>
            Dwarves are tough and wise, but can be blunt.<br />
	          <strong>Medium:</strong> Dwarves are medium sized creatures,
	          receiving no bonuses or penalties for their size.<br />
	          <strong>Slow and Steady:</strong> Dwarves possess a 20 foot move speed
	           but their speed is never modified by armor or encumbrance.<br />
	          <strong>Dark Vision:</strong> Can see in the dark up to 60 feet.<br />
            <strong>Defensive Training:</strong> +4 to dodge bonus AC against <i>giant</i> monsters.<br/>
	          <strong>Greed:</strong> +2 bonus to <i>Appraise</i> skill checks made to determine the price of nonmagical
            goods containing precious metals or gemstones.<br/>
	          <strong>Hatred:</strong> +1 bonus attack rolls against orc and goblin subtypes.<br/>
	          <strong>Hardy:</strong> +2 racial bonus saving throws against poison, spells, and spell-like abilities.<br/>
            <strong>Stability:</strong> +4 racial bonus to <i>Combat Maneuver Defense</i> when resisting bull rush or trip attempts while standing
          on ground.<br/>
	          <strong>Stonecunning:</strong> Dwarves receive a +2 bonus on Perception checks to potentially notice unusual stonework, such as traps and
            hidden doors located in stone walls or floors. They receive a check to notice such features whenever they pass within 10 feet of them,
            whether or not they are actively looking.<br/>
	          <strong>Weapon Familiarity:</strong> Dwarves are proficient with battleaxes, heavy picks, and warhammers, and treat any weapon with the
            word "dwarven" in its name as a martial weapon.<br/>
	          <strong>Languages:</strong> Dwarves begin play speaking Common and Dwarven. Dwarves with high Intelligence scores can choose from the following:
            Giant, Gnome, Goblin, Orc, Terran, and Undercommon.<br/>

          </p>

          )});
	      break;
	    case "Elf":
		    this.setState({
			    raceInfo: (
				    <p>
					    <strong>
						    +2 Dexterity, +2 Intelligence, –2 Constitution:</strong> Elves are nimble, both in body and mind, but their form is frail.<br />
					    <strong>Medium:</strong> Elves are medium sized creatures,
					    receiving no bonuses or penalties for their size.<br />
					    <strong>Normal Speed:</strong> Elves have a base speed of 30 feet.<br />
					    <strong>Low-Light Vision:</strong> Elves can see twice as far as humans in conditions of dim light.<br />
					    <strong>Elven Immunities:</strong> Elves are immune to magic sleep effects and get a +2 racial saving throw bonus against
              enchantment spells and effects.<br/>
					    <strong>Elven Magic:</strong> Elves receive a +2 racial bonus on caster level checks made to overcome spell resistance.
              In addition, elves receive a +2 racial bonus on Spellcraft skill checks made to identify the properties of magic items.<br/>
					    <strong>Keen Senses:</strong> Elves receive a +2 racial bonus on Perception skill checks.<br/>
					    <strong>Weapon Familiarity:</strong> Elves are proficient with longbows (including composite longbows), longswords, rapiers,
              and shortbows (including composite shortbows), and treat any weapon with the word "elven" in its name as a martial weapon.<br/>
					    <strong>Languages:</strong> Elves begin play speaking Common and Elven. Elves with high Intelligence scores can choose from the
              following: Celestial, Draconic, Gnoll, Gnome, Goblin, Orc, and Sylvan.
					    <br/>
				    </p>
			    )});
		    break;
	    case "Gnome":
		    this.setState({
			    raceInfo: (
				    <p>
					    <strong>
						    +2 Constitution, +2 Charisma, –2 Strength:</strong> Gnomes are physically weak but surprisingly hardy, and their attitude makes them
              naturally agreeable.<br />
					    <strong>Small:</strong> Gnomes are Small creatures and gain a +1 size bonus to their AC, a +1 size bonus on attack rolls, a –1 penalty
              to their Combat Maneuver Bonus and Combat Maneuver Defense, and a +4 size bonus on Stealth checks.<br />
					    <strong>Slow Speed:</strong> Gnomes have a base speed of 20 feet.<br />
					    <strong>Low-Light Vision:</strong> Gnomes can see twice as far as humans in conditions of dim light.<br />
					    <strong>Defensive Training:</strong> Gnomes get a +4 dodge bonus to AC against monsters of the giant type.<br/>
					    <strong>Gnome Magic: </strong> Gnomes add +1 to the DC of any saving throws against illusion spells that they cast. Gnomes with a
              Charisma of 11 or higher also gain the following spell-like abilities: 1/day—dancing lights, ghost sound, prestidigitation,
              and speak with animals. The caster level for these effects is equal to the gnome's level. The DC for these spells is equal to 10 +
              the spell's level + the gnome's Charisma modifier.<br/>
					    <strong>Hatred:</strong> Gnomes receive a +1 bonus on attack rolls against humanoid creatures of the reptilian and goblinoid subtypes
              due to special training against these hated foes.<br/>
					    <strong>Keen Senses:</strong> Gnomes receive a +2 racial bonus on Perception skill checks.<br/>
					    <strong>Obsessive:</strong> Gnomes receive a +2 racial bonus on a Craft or Profession skill of their choice.<br/>
					    <strong>Weapon Familiarity:</strong> Gnomes treat any weapon with the word "gnome" in its name as a martial weapon.<br/>
					    <strong>Languages: </strong> Gnomes begin play speaking Common, Gnome, and Sylvan. Gnomes with high Intelligence scores can
              choose from the following: Draconic, Dwarven, Elven, Giant, Goblin, and Orc.<br/>
				    </p>
			    )});
		    break;
		    case "Half-Elf":
		    this.setState({
			    raceInfo: (
				    <p>
					    <strong>
						    +2 to One Ability Score: </strong> Half-elf characters get a +2 bonus to one ability score of their choice at creation
              to represent their varied nature.<br />
					    <strong>Medium: </strong> Half-elves are Medium creatures and have no bonuses or penalties due to their size.<br />
					    <strong>Normal Speed: </strong> Half-elves have a base speed of 30 feet.<br />
					    <strong>Low-Light Vision:</strong> Half-elves can see twice as far as humans in conditions of dim light. <br />
					    <strong>Adaptability:</strong>Half-elves receive Skill Focus as a bonus feat at 1st level.<br/>
					    <strong>Elf Blood:</strong> Half-elves count as both elves and humans for any effect related to race.<br/>
					    <strong>Elven Immunities:</strong> Half-elves are immune to magic sleep effects and get a +2 racial saving throw
              bonus against enchantment spells and effects.<br/>
					    <strong>Keen Senses:</strong> Half-elves receive a +2 racial bonus on Perception skill checks.<br/>
					    <strong>Multitalented: </strong> Half-elves choose two favored classes at first level and gain +1 hit point or +1
              skill point whenever they take a level in either one of those classes.<br/>
					    <strong>Languages: </strong> Half-elves begin play speaking Common and Elven. Half-elves with high Intelligence
              scores can choose any languages they want (except secret languages, such as Druidic).<br/>
				    </p>
			    )});
		    break;
		    case "Half-Orc":
		    this.setState({
			    raceInfo: (
				    <p>
					    <strong>
						    +2 to One Ability Score: </strong> Half-orc characters get a +2 bonus to one ability
              score of their choice at creation to represent their varied nature.<br />
					    <strong>Medium: </strong> Half-orcs are Medium creatures and have no bonuses or penalties due to their size.<br />
					    <strong>Normal Speed: </strong> Half-orcs have a base speed of 30 feet.<br />
					    <strong>Darkvision:</strong> Half-orcs can see in the dark up to 60 feet.<br />
					    <strong>Intimidating: </strong>Half-orcs receive a +2 racial bonus on Intimidate skill checks due to their fearsome nature.<br/>
					    <strong>Orc Blood: </strong> Half-orcs count as both humans and orcs for any effect related to race.
					    <br/>
					    <strong>Orc Ferocity:</strong> Once per day, when a half-orc is brought below 0 hit points but not killed, he can fight on for one
              more round as if disabled. At the end of his next turn, unless brought to above 0 hit points, he immediately falls unconscious
              and begins dying.<br/>
					    <strong>Weapon Familiarity: </strong> Half-orcs are proficient with greataxes and falchions and treat any weapon with the word
              "orc" in its name as a martial weapon.<br/>
					    <strong>Languages: </strong> Half-orcs begin play speaking Common and Orc. Half-orcs with high Intelligence scores can
              choose from the following: Abyssal, Draconic, Giant, Gnoll, and Goblin.<br/>
				    </p>
			    )});
		    break;
		    case "Halfling":
		    this.setState({
			    raceInfo: (
				    <p>
					    <strong>
						    +2 Dexterity, +2 Charisma, –2 Strength: </strong> Halflings are nimble and strong-willed, but their small stature makes
              them weaker than other races.<br />
					    <strong>Small: </strong> Halflings are Small creatures and gain a +1 size bonus to their AC, a +1 size bonus on attack rolls,
              a –1 penalty to their Combat Maneuver Bonus and Combat Maneuver Defense, and a +4 size bonus on Stealth checks.<br />
					    <strong>Slow Speed:</strong> Halflings have a base speed of 20 feet.<br />
					    <strong>Fearless:</strong> Halflings receive a +2 racial bonus on all saving throws against fear. This bonus
              stacks with the bonus granted by halfling luck.<br />
					    <strong>Halfling Luck:</strong> Halflings receive a +1 racial bonus on all saving throws.

					    <br/>
					    <strong>Keen Senses:</strong> Halflings receive a +2 racial bonus on Perception skill checks.
					    <br/>
					    <strong>Sure-Footed:</strong> Halflings receive a +2 racial bonus on Acrobatics and Climb skill checks.<br/>
					    <strong>Weapon Familiarity: </strong> Halflings are proficient with slings and treat any weapon with the word
              "halfling" in its name as a martial weapon.<br/>
					    <strong>Languages: </strong> Halflings begin play speaking Common and Halfling. Halflings with high Intelligence
              scores can choose from the following: Dwarven, Elven, Gnome, and Goblin.<br/>
				    </p>
			    )});
		    break;
      default:
	      this.setState({raceInfo: ''});
    }
  }
}
