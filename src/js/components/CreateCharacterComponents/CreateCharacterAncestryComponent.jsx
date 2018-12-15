import React from "react";
import PropTypes from 'prop-types';
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
import {
  HumanData,
  DwarfData,
  ElfData,
  GnomeData,
  HalflingData,
  GoblinData
} from './create-character-utils/select-ancestry-info';

const raceDivStyle = {
  fontSize: "17px !important",
  fontFamily: "'Josefin Sans', sans-serif",
  textAlign: "left"
};

class CreateCharacterAncestryComponent extends React.Component {
  constructor(props, context) {
    super();
    this.state = {
      AncestryInfo: "",
      showRaceInfo: false,
      prevButtonPressed: ""
    };
  }

  changeAncestryInfo = (currentAncestry) => {
    let ancestryData;
    switch (currentAncestry) {
      case "Human":
        ancestryData = HumanData();
        break;
      case "Dwarf":
        ancestryData = DwarfData();
        break;
      case "Elf":
        ancestryData = ElfData();
        break;
      case "Gnome":
        ancestryData = GnomeData();
        break;
      case "Halfling":
        ancestryData = HalflingData();
        break;
      case "Goblin":
        ancestryData = GoblinData();
        break;
      default:
        this.setState({ AncestryInfo: '' });
    }
    const ancestryText = ancestryData.ancestryText.props.children;
    const { ancestryProps } = ancestryData;
    this.setState({ AncestryInfo: ancestryText });
    return { ancestryProps };
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

CreateCharacterAncestryComponent.propTypes = {
  setAncestry: PropTypes.func.isRequired,
};

export default CreateCharacterAncestryComponent;
