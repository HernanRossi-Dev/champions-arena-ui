import React, { useState } from "react";
import PropTypes, { checkPropTypes } from 'prop-types';
import styled from "styled-components";
import { cloneDeep } from 'lodash';
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
import * as BackGroundData from './create-character-utils/select-background-info';
import CharacterBackgrounds from '../../constants/CharacterBackgrounds';

const ChooseStateTitle = styled.div`
  font-size: 17px !important;
  font-family: 'Josefin Sans', sans-serif;
  text-align: center;
`;
const ancestryDivStyle = {
  fontSize: "17px !important",
  fontFamily: "'Josefin Sans', sans-serif",
  textAlign: "left"
};

export const CharacterBackgroundComponent = (props) => {
  const { setBackground } = props;
  const [bGInfo, setBGInfo] = useState('');
  const [showBGInfo, setShowBGInfo] = useState(false);
  const [selectedBGProps, setSelectedBGProps] = useState({});
  const [selectedStat, setSelectedStat] = useState('');
  const [choiceOne, setChoiceOne] = useState('');
  const [choiceTwo, setChoiceTwo] = useState('');
  const [styleState, setStyleState] = useState();
  const [styleParent, setStyleParent] = useState();
  const [ancestryStyle, setAncestryStyle] = useState();

  const changeBackgroundInfo = (selected) => {
    const { backgroundProps } = BackGroundData[selected]();
    const backgroundText = backgroundProps.backgroundText.props.children;
    const statChoices = backgroundProps.selectBoost;
    setBGInfo(backgroundText);
    setShowBGInfo(true);
    setChoiceOne(statChoices[0]);
    setChoiceTwo(statChoices[1]);
    return backgroundProps;
  };

  const changeBackground = (e) => {
    if (!e || !e.target || !e.target.value) {
      return;
    }
    const targetText = e.target.value;
    const selectedBackgroundProps = changeBackgroundInfo(targetText);
    setSelectedBGProps(selectedBackgroundProps);
    setSelectedStat('');
    setStyleState(cssStyles.selectStatButton2);
    setStyleParent(cssStyles.selectStatButtonParent);
    setAncestryStyle(ancestryDivStyle);
    setBackground('reset');
  };

  const saveBackground = (e) => {
    const { selectBoost } = selectedBGProps;
    if (!e || !e.target || !e.target.value) {
      return;
    }
    const buttonValue = e.target.value;
    const [cOne, cTwo] = selectBoost;
    const statChoice = buttonValue === 'ChoiceOne' ? cOne : cTwo;
    if (statChoice === selectedStat) {
      return;
    }
    setSelectedStat(statChoice);
    setStyleState(cssStyles.selectStatButton);
    const tempBGProps = cloneDeep(selectedBGProps);
    tempBGProps.selectedStat = statChoice;
    setSelectedBGProps(tempBGProps);
    setBackground(tempBGProps);
  };

  const renderBackgrounds = () => {
    const renderItems = Object.keys(CharacterBackgrounds).map((background) => {
      return (
        <ToggleButton
          value={`${background}`}
          className={cssStyles.alignmentButtonGroup}
        >
          {CharacterBackgrounds[background]}
        </ToggleButton>
      );
    });
    return renderItems;
  };

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
              onClick={changeBackground}
              className={cssStyles.alignmentButtonGroupParent}
            >
              {renderBackgrounds()}
            </ToggleButtonGroup>
          </ButtonToolbar>
        </Col>
      </FormGroup>
      <Col sm={1} />
      <FormGroup>
        <Col sm={1} />
        <Col sm={8}>
          <Collapse in={showBGInfo} style={ancestryStyle}>
            <div>
              <Well style={{ backgroundColor: 'transparent' }}>
                <div>
                  <ChooseStateTitle>Select backgound ability boost</ChooseStateTitle>
                  <ToggleButtonGroup
                    type="radio"
                    name="backgroundStat"
                    className={styleParent}
                    onClick={saveBackground}
                  >
                    <ToggleButton
                      value="ChoiceOne"
                      className={styleState}
                    >
                      {choiceOne}
                    </ToggleButton>
                    <ToggleButton
                      value="ChoiceTwo"
                      className={styleState}
                    >
                      {choiceTwo}
                    </ToggleButton>
                  </ToggleButtonGroup>
                  <div> {bGInfo}</div>
                </div>
              </Well>
            </div>
          </Collapse>
        </Col>
        <Col sm={2} />
      </FormGroup>
    </div>
  );
};

CharacterBackgroundComponent.propTypes = {
  setBackground: PropTypes.func.isRequired,
};

export default CharacterBackgroundComponent;
