import React from "react";
import {
  ButtonToolbar,
  Col,
  ControlLabel,
  FormGroup,
  ToggleButton,
  ToggleButtonGroup,
  Collapse,
  Well
} from "react-bootstrap";
import * as cssStyles from "../../../styles/Styles.css";

const raceDivStyle = {
  fontSize: "17px !important",
  fontFamily: "'Josefin Sans', sans-serif",
  textAlign: "left"
};


export default class CreateCharacterAncestryComponent extends React.Component {
  constructor(props, context) {
    super();
    this.state = {
      AncestryInfo: "",
      showRaceInfo: false,
      prevButtonPressed: ""
    };
  }

  changeAncestryInfo = (currentAncestry) => {
    switch (currentAncestry) {
      case "Human":
        this.setState({
          AncestryInfo: (
            <p>
              <strong>
                Description:
              </strong>Humans are incredibly diverse in terms of everything
               from their body size to their perspectives and
              personalities.<br />
              <strong>Ability Boosts: </strong>
              Free, Free<br />
              <strong>Ability Flaw: </strong>
              None<br />
              <strong>Note: </strong>
              Half-Elf and Half-Orc ancestries are accessible through Human ancestry traits.
              <strong>Properties:</strong><br />
              Hit Points: 8<br />
              Size: Medium<br />
              Speed: 25 feet<br />
              <strong>Languages: </strong>Common and One additional language, selected
               from those to which you have access.<br />
              <strong>Bonus Languages: </strong>At 1st level, if your intelligence
              score is 14 or higher, you can select one of the languages from the list
               of common languages of from other languages you have access to.<br />
              <strong>Traits: </strong>Human, Humanoid<br />
            </p>
          ),
        });
        return {
          ancestryProps: {
            statsBonus: {},
            freeAbilityPoints: 2,
            hp: 8,
            size: 'Medium',
            speed: 25,
            languages: ['common'],
            traits: ['human', 'humanoid'],
            attributes: {
            }
          }
        };
      case "Dwarf":
        this.setState({
          AncestryInfo: (
            <p>
              <strong>
                Description:
              </strong>Dwarves are a short, stocky people who are often stubborn,
              fierce, and devoted.<br />
              <strong>Ability Boosts: </strong>
              Constitution, Wisdom, Free<br />
              <strong>Ability Flaw: </strong>
              Charisma<br />
              <strong>Properties:</strong><br />
              Hit Points: 10<br />
              Size: Medium<br />
              Speed: 20 feet<br />
              <strong>Languages: </strong>Common and Dwarf<br />
              <strong>Bonus Languages: </strong>At 1st level, if your intelligence
              score is 14 or higher, you can also select one of the
              following languages: Giant, Gnome, Goblin, Orc, Terran, or Undercommon.<br />
              <strong>Traits: </strong>Dwarf, Humanoid<br />
              <strong>Dark Vision: </strong>You can see in darkness and dim light just as well
              as you can see in bright light, though your vision in darkness is in black and white.<br />
              <strong>Unburdened: </strong>If your Speed would be reduced by armor you wear or the
              encumbered condition you ignore 5 feet of that reduction.<br />
            </p>
          ),
        });

        return {
          ancestryProps: {
            statsBonus: {
              CON: 2, WIS: 2, CHA: -2
            },
            freeAbilityPoints: 1,
            hp: 10,
            size: 'Medium',
            speed: 20,
            languages: ['common', 'dwarf'],
            traits: ['dwarf', 'humanoid'],
            attributes: {
              'dark vision': 'You can see in darkness and dim light just as well as ' +
              'you can see in bright light, though your vision in darkness is in black and white',
              unburdened: 'If your Speed would be reduced by armor you wear or the encumbered ' +
              'condition you ignore 5 feet of that reduction.',
            }
          }
        };
      case "Elf":
        this.setState({
          AncestryInfo: (
            <p>
              <strong>
              Description:
              </strong> Elves are a tall, slender, long-lived people whose culture
               peaked long ago.<br />
              <strong>Ability Boosts: </strong>
              Dexterity, Intelligence, Free<br />
              <strong>Ability Flaw: </strong>
              Constitution<br />
              <strong>Properties:</strong><br />
              Hit Points: 6<br />
              Size: Medium<br />
              Speed: 30 feet<br />
              <strong>Languages: </strong>Elven and Common<br />
              <strong>Bonus Languages: </strong>At 1st level, if your intelligence
              score is 14 or higher, you can also select one of the
              following languages: Celestial, Draconic, Gnoll, Gnomish, Goblin,
               Orcish, or Sylvan.<br />
              <strong>Traits: </strong>Elf, Humanoid<br />
              <strong>Low-Light Vision: </strong>You can see in dim light as
               though it were bright light.<br />
            </p>
          ),
        });
        return {
          ancestryProps: {
            statsBonus: {
              DEX: 2, INT: 2, CON: -2
            },
            freeAbilityPoints: 1,
            hp: 6,
            size: 'Medium',
            speed: 30,
            languages: ['common', 'elven'],
            traits: ['elf', 'humanoid'],
            attributes: {
              'low-light vision': 'You can see in dim light as though it were bright light.'
            }
          }
        };
      case "Gnome":
        this.setState({
          AncestryInfo: (
            <p>
              <strong>
                Description:
              </strong> Gnomes are a short, slight, mercurial people
              who crave change and excitement.<br />
              <strong>Ability Boosts: </strong>
              Constitution, Charisma Free<br />
              <strong>Ability Flaw: </strong>
              Strength<br />
              <strong>Properties:</strong><br />
              Hit Points: 8<br />
              Size: Small<br />
              Speed: 20 feet<br />
              <strong>Languages: </strong>Gnomish, Sylvan and Common<br />
              <strong>Bonus Languages: </strong>At 1st level, if your intelligence
              score is 14 or higher, you can also select one of the
              following languages: Draconic, Dwarven, Elven, Goblin, Jotun, or Orcish.<br />
              <strong>Traits: </strong>Gnome, Humanoid<br />
              <strong>Low-Light Vision: </strong>You can see in dim light as
               though it were bright light.<br />
            </p>
          ),
        });
        return {
          ancestryProps: {
            statsBonus: {
              CON: 2, CHA: 2, STR: -2
            },
            freeAbilityPoints: 1,
            hp: 8,
            size: 'small',
            speed: 20,
            languages: ['gnomish', 'sylvan', 'common'],
            traits: ['gnome', 'humanoid'],
            attributes: {
              'low-light vision': 'You can see in dim light as though it were bright light.'
            }
          }
        };
      case "Halfling":
        this.setState({
          AncestryInfo: (
            <p>
              <strong>
                Description:
              </strong> Halflings are short, adaptable people who exhibit
               remarkable curiosity and humor.<br />
              <strong>Ability Boosts: </strong>
              Dexterity, Wisdom, Free<br />
              <strong>Ability Flaw: </strong>
              Strength<br />
              <strong>Properties:</strong><br />
              Hit Points: 6<br />
              Size: Small<br />
              Speed: 25 feet<br />
              <strong>Languages: </strong>Halfling and Common<br />
              <strong>Bonus Languages: </strong>At 1st level, if your intelligence
              score is 14 or higher, you can also select one of the
              following languages: Dwarven, Elven, Gnomish, or Goblin.<br />
              <strong>Traits: </strong>Halfling, Humanoid<br />
            </p>
          ),
        });
        return {
          ancestryProps: {
            statsBonus: {
              DEX: 2, WIS: 2, STR: -2
            },
            freeAbilityPoints: 1,
            hp: 6,
            size: 'small',
            speed: 25,
            languages: ['halfling', 'common'],
            traits: ['halfling', 'humanoid'],
            attributes: {
            }
          }
        };
      case "Goblin":
        this.setState({
          AncestryInfo: (
            <p>
              <strong>Description: </strong>
              Goblins are a short, scrappy, energetic people who have spent
               millenia maligned and feared.<br />
              <strong>Ability Boosts: </strong>
              Dexterity, Charisma, Free<br />
              <strong>Ability Flaw: </strong>
              Wisdom<br />
              <strong>Properties:</strong><br />
              Hit Points: 6<br />
              Size: Small<br />
              Speed: 25 feet<br />
              <strong>Languages: </strong>Goblin and Common<br />
              <strong>Bonus Languages: </strong>At 1st level, if your intelligence
              score is 14 or higher, you can also select one of the
              following languages: Draconic, Dwarven, Gnoll, Gnomish, Halfling, or Orcish.<br />
              <strong>Traits: </strong>Goblin, Humanoid<br />
              <strong>Dark Vision: </strong>You can see in darkness and dim light just as well
              as you can see in bright light, though your vision in darkness is in black and white.<br />
            </p>
          ),
        });
        return {
          ancestryProps: {
            statsBonus: {
              DEX: 2, CHA: 2, WIS: -2
            },
            freeAbilityPoints: 1,
            hp: 6,
            size: 'small',
            speed: 25,
            languages: ['goblin', 'common'],
            traits: ['goblin', 'humanoid'],
            attributes: {
              'dark vision': 'You can see in darkness and dim light just as well as ' +
              'you can see in bright light, though your vision in darkness is in black and white',
            }
          }
        };
      default:
        this.setState({ AncestryInfo: '' });
    }
    return null;
  }

  RaceTextToggle = () => {
    if (this.state.showRaceInfo) {
      return <div style={raceDivStyle}> {this.state.AncestryInfo}</div>;
    }
    return <div />;
  };

  changeAncestry = (e) => {
    const targetText = e.target.textContent.toString();
    if (!targetText) {
      return;
    }
    if (!this.state.showRaceInfo) {
      this.setState({ showRaceInfo: true });
    }
    if (targetText === this.state.prevButtonPressed) {
      if (this.state.showRaceInfo) {
        this.setState({ showRaceInfo: !this.state.showRaceInfo });
      }
    } else {
      this.setState({ showRaceInfo: true });
    }
    const racialBonus = this.changeAncestryInfo(targetText);
    this.setState({ prevButtonPressed: targetText });
    this.props.setAncestry(targetText, racialBonus.ancestryProps);
  };

  render() {
    return (
      <div>
        <FormGroup>
          <Col sm={1} />
          <Col
            componentClass={ControlLabel}
            sm={2}
            className={cssStyles.createColLabelStyle}
          ><div style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: '19px' }}>Ancestry:</div>
          </Col>
          <Col sm={7}>
            <ButtonToolbar>
              <ToggleButtonGroup
                type="radio"
                name="raceValue"
                onClick={this.changeAncestry}
                className={cssStyles.alignmentButtonGroupParent}
              >
                <ToggleButton
                  value="Human"
                  className={cssStyles.alignmentButtonGroup}
                >
                  Human
                </ToggleButton>
                <ToggleButton
                  value="Dwarf"
                  className={cssStyles.alignmentButtonGroup}
                >
                  Dwarf
                </ToggleButton>
                <ToggleButton
                  value="Elf"
                  className={cssStyles.alignmentButtonGroup}
                >
                  Elf
                </ToggleButton>
                <ToggleButton
                  value="Halfling"
                  className={cssStyles.alignmentButtonGroup}
                >
                  Halfling
                </ToggleButton>
                <ToggleButton
                  value="Gnome"
                  className={cssStyles.alignmentButtonGroup}
                >
                  Gnome
                </ToggleButton>
                <ToggleButton
                  value="Goblin"
                  className={cssStyles.alignmentButtonGroup}
                >
                  Goblin
                </ToggleButton>
              </ToggleButtonGroup>
            </ButtonToolbar>
          </Col>
        </FormGroup>
        <Col sm={1} />
        <FormGroup>
          <Col sm={1} />
          <Col sm={8}>
            <Collapse in={this.state.showRaceInfo} style={raceDivStyle}>
              <div>
                <Well style={{ backgroundColor: 'transparent' }}>
                  {this.state.AncestryInfo}
                </Well>
              </div>
            </Collapse>
          </Col>
          <Col sm={2} />
        </FormGroup>
      </div>
    );
  }
}
