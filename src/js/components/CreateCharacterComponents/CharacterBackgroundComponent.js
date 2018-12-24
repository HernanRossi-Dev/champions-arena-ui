import React from "react";
import PropTypes, { checkPropTypes } from 'prop-types';
import styled from "styled-components";

import {
  Button,
  ButtonGroup,
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
import * as BackGroundData from './create-character-utils/select-background-info';

const ChooseStateTitle = styled.div`
  font-size: 17px !important;
  font-family: 'Josefin Sans', sans-serif;
  text-align: center;
`;
const raceDivStyle = {
  fontSize: "17px !important",
  fontFamily: "'Josefin Sans', sans-serif",
  textAlign: "left"
};

class CharacterBackgroundComponent extends React.Component {
  constructor(props, context) {
    super();
    this.state = {
      backgroundInfo: "",
      showBackgroundInfo: false,
      selectedBackgroundProps: {},
      selectedStat: '',
    };
  }

  changeBackgroundInfo = (selected) => {
    const { backgroundProps } = BackGroundData[selected]();
    const backgroundText = backgroundProps.backgroundText.props.children;
    const statChoices = backgroundProps.selectBoost;
    this.setState({
      backgroundInfo: backgroundText,
      showBackgroundInfo: true,
      choiceOne: statChoices[0],
      choiceTwo: statChoices[1]
    });
    return backgroundProps;
  }

  changeBackground = (e) => {
    if (!e || !e.target || !e.target.value) {
      return;
    }
    const targetText = e.target.value;
    const selectedBackgroundProps = this.changeBackgroundInfo(targetText);
    this.setState({
      selectedBackgroundProps,
      style: cssStyles.selectStatButton2,
      styleParent: cssStyles.selectStatButtonParent,
      raceDivStyle,
      selectedStat: '',
    });
    this.props.setBackground('reset');
  };

  saveBackground = (e) => {
    if (!e || !e.target || !e.target.value) {
      return;
    }
    const buttonValue = e.target.value;
    let statChoice;
    if (buttonValue === 'ChoiceOne') {
      statChoice = this.state.selectedBackgroundProps.selectBoost[0];
    } else {
      statChoice = this.state.selectedBackgroundProps.selectBoost[1];
    }
    if (statChoice === this.state.selectedStat) {
      return;
    }
    this.setState({ selectedStat: statChoice, style: cssStyles.selectStatButton });
    this.state.selectedBackgroundProps.selectedStat = statChoice;
    this.props.setBackground(this.state.selectedBackgroundProps);
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
          ><div style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: '19px' }}>Background:</div>
          </Col>
          <Col sm={7}>
            <ButtonToolbar>
              <ToggleButtonGroup
                type="radio"
                name="backgroundValue"
                onClick={this.changeBackground}
                className={cssStyles.alignmentButtonGroupParent}
              >
                <ToggleButton
                  value="Acolyte"
                  className={cssStyles.alignmentButtonGroup}
                >
                Acolyte
                </ToggleButton>
                <ToggleButton
                  value="Acrobat"
                  className={cssStyles.alignmentButtonGroup}
                >
                Acrobat
                </ToggleButton>
                <ToggleButton
                  value="AnimalWhisperer"
                  className={cssStyles.alignmentButtonGroup}
                >
                Animal Whisperer
                </ToggleButton>
                <ToggleButton
                  value="Barkeep"
                  className={cssStyles.alignmentButtonGroup}
                >
                Barkeep
                </ToggleButton>
                <ToggleButton
                  value="Blacksmith"
                  className={cssStyles.alignmentButtonGroup}
                >
                Blacksmith
                </ToggleButton>
                <ToggleButton
                  value="Criminal"
                  className={cssStyles.alignmentButtonGroup}
                >
                Criminal
                </ToggleButton>
                <ToggleButton
                  value="Entertainer"
                  className={cssStyles.alignmentButtonGroup}
                >
                Entertainer
                </ToggleButton>
                <ToggleButton
                  value="Gladiator"
                  className={cssStyles.alignmentButtonGroup}
                >
                Gladiator
                </ToggleButton>
                <ToggleButton
                  value="Hunter"
                  className={cssStyles.alignmentButtonGroup}
                >
                Hunter
                </ToggleButton>
                <ToggleButton
                  value="Laborer"
                  className={cssStyles.alignmentButtonGroup}
                >
                Laborer
                </ToggleButton>
                <ToggleButton
                  value="Merchant"
                  className={cssStyles.alignmentButtonGroup}
                >
                Merchant
                </ToggleButton>
                <ToggleButton
                  value="Noble"
                  className={cssStyles.alignmentButtonGroup}
                >
                Noble
                </ToggleButton>
                <ToggleButton
                  value="Nomad"
                  className={cssStyles.alignmentButtonGroup}
                >
                Nomad
                </ToggleButton>
                <ToggleButton
                  value="Sailor"
                  className={cssStyles.alignmentButtonGroup}
                >
                Sailor
                </ToggleButton>
                <ToggleButton
                  value="Scholar"
                  className={cssStyles.alignmentButtonGroup}
                >
                Scholar
                </ToggleButton>
                <ToggleButton
                  value="Scout"
                  className={cssStyles.alignmentButtonGroup}
                >
                Scout
                </ToggleButton>
                <ToggleButton
                  value="StreetUrchin"
                  className={cssStyles.alignmentButtonGroup}
                >
                Street Urchin
                </ToggleButton>
                <ToggleButton
                  value="Warrior"
                  className={cssStyles.alignmentButtonGroup}
                >
                Warrior
                </ToggleButton>
              </ToggleButtonGroup>
            </ButtonToolbar>
          </Col>
        </FormGroup>
        <Col sm={1} />
        <FormGroup>
          <Col sm={1} />
          <Col sm={8}>
            <Collapse in={this.state.showBackgroundInfo} style={this.state.raceDivStyle}>
              <div>
                <Well style={{ backgroundColor: 'transparent' }}>
                  <div>
                    <ChooseStateTitle>Select backgound ability boost</ChooseStateTitle>

                    <ToggleButtonGroup
                    type="radio"
                    name="backgroundStat"
                    className={this.state.styleParent}
                    onClick={this.saveBackground}
                  >
                    <ToggleButton
                      value="ChoiceOne"
                      className={this.state.style}
                    >
                      {this.state.choiceOne}
                    </ToggleButton>
                    <ToggleButton
                      value="ChoiceTwo"
                      className={this.state.style}
                    >
                      {this.state.choiceTwo}
                    </ToggleButton>
                  </ToggleButtonGroup>
                    <div> {this.state.backgroundInfo}</div>
                  </div>
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

CharacterBackgroundComponent.propTypes = {
  setBackground: PropTypes.func.isRequired,
};

export default CharacterBackgroundComponent;
