import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  Col,
  ControlLabel,
  FormGroup,
  Modal,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  ButtonToolbar,
  Collapse,
  Well
} from "react-bootstrap";
import getClassProps from "../create-character-utils/class-props-helper";
import * as cssStyles from "../../../../styles/Styles.css";
import SelectedClassModalBodyV2 from "./CreateCharacterClassModalV2";

const ChooseStateTitle = styled.div`
  font-size: 17px !important;
  font-family: 'Josefin Sans', sans-serif;
  text-align: center;
`;

const ancestryDivStyle = {
  fontSize: "17px !important",
  fontFamily: "'Josefin Sans', sans-serif",
  textAlign: "left",
  marginLeft: "35px",
};

export default class CreateCharacterClassComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      show: false,
      selectedClass: "",
      showMonkAbilitySelect: false,
    };
  }

  setClass = (e) => {
    const targetText = e.target.textContent.toString();
    if (!targetText) {
      return;
    }
   
    if(targetText === 'Monk') {
      this.setState({showMonkAbilitySelect: true, selectedClass: 'Monk'});
    } else {
      this.setState({ selectedClass: targetText, showMonkAbilitySelect: false});
      const classProps = getClassProps(targetText);
      this.props.updateClass(classProps);    
    }
    this.handleShow();
  }

  saveMonkAbility = (e) => {
    if (!e || !e.target || !e.target.value) {
      return;
    }
    const buttonValue = e.target.value;
    const classProps = getClassProps('Monk');
    classProps.keyAbility = buttonValue;
    this.props.updateClass(classProps);
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
      <FormGroup>
        <Col sm={1} />
        <Col
          componentClass={ControlLabel}
          sm={2}
          className={cssStyles.createColLabelStyle}
        ><div style={{ fontSize: '19px', fontFamily: "'Josefin Sans', sans-serif" }}>Class:</div>
        </Col>
        <Col sm={7}>
          <ButtonToolbar>
            <ToggleButtonGroup
              type="radio"
              name="ancestryValue"
              onClick={this.setClass}
              className={cssStyles.alignmentButtonGroupParent}

            >
              <ToggleButton
                value="Barbarian"
                className={cssStyles.alignmentButtonGroup}
              >
                Barbarian
              </ToggleButton>
              <ToggleButton
                value="Monk"
                className={cssStyles.alignmentButtonGroup}
              >
                Monk
              </ToggleButton>
              <ToggleButton
                value="Wizard"
                className={cssStyles.alignmentButtonGroup}
              >
                Wizard
              </ToggleButton>
              <ToggleButton
                value="Ranger"
                className={cssStyles.alignmentButtonGroup}
              >
                Ranger
              </ToggleButton>
              <ToggleButton
                value="Druid"
                className={cssStyles.alignmentButtonGroup}
              >
                Druid
              </ToggleButton>
              <ToggleButton
                value="Paladin"
                className={cssStyles.alignmentButtonGroup}
              >
                Paladin
              </ToggleButton>
              <ToggleButton
                value="Sorcerer"
                className={cssStyles.alignmentButtonGroup}
              >
                Sorcerer
              </ToggleButton>
              <ToggleButton
                value="Rogue"
                className={cssStyles.alignmentButtonGroup}
              >
                Rogue
              </ToggleButton>
              <ToggleButton
                value="Fighter"
                className={cssStyles.alignmentButtonGroup}
              >
                Fighter
              </ToggleButton>
              <ToggleButton
                value="Cleric"
                className={cssStyles.alignmentButtonGroup}
              >
                Cleric
              </ToggleButton>
              <ToggleButton
                value="Bard"
                className={cssStyles.alignmentButtonGroup}
              >
                Bard
              </ToggleButton>
              <ToggleButton
                value="Alchemist"
                className={cssStyles.alignmentButtonGroup}
              >
                Alchemist
              </ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </Col>
        <Modal show={this.state.show} onHide={this.handleClose} className={cssStyles.createHeroClassModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.selectedClass}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SelectedClassModalBodyV2 selectedClass={this.state.selectedClass} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </FormGroup>
      <FormGroup>
      <Col sm={2} />
      <Col sm={8}>
        <Collapse in={this.state.showMonkAbilitySelect} style={ancestryDivStyle}>
          <div>
            <Well style={{ backgroundColor: 'transparent', marginBottom: '-50px' }}>
              <div>
                <ChooseStateTitle>Select Monk Ability Boost</ChooseStateTitle>
                <ToggleButtonGroup
                type="radio"
                name="MonkBoost"
                className={cssStyles.selectStatButtonParent}
                onClick={this.saveMonkAbility}
              >
                <ToggleButton
                  value="STR"
                  className={cssStyles.selectStatButton}
                >
                  STR
                </ToggleButton>
                <ToggleButton
                  value="DEX"
                  className={cssStyles.selectStatButton}
                >
                  DEX
                </ToggleButton>
              </ToggleButtonGroup>
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

CreateCharacterClassComponent.propTypes = {
  updateClass: PropTypes.func.isRequired,
};
