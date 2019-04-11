import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  Col,
  ControlLabel,
  FormGroup,
  Collapse,
  Well,
  ToggleButtonGroup,
  ToggleButton,
  ButtonToolbar
} from "react-bootstrap";
import ArcaneSchools from '../../../characterUtils/arcaneSchools';
import * as cssStyles from "../../../../styles/Styles.css";

const ArcaneSchoolText = styled.div`
  font-size: 16px !important;
  font-family: 'Josefin Sans', sans-serif;
  text-align: center;
  padding-left: 25%;
  margin-bottom: -40px;
  width: 100%;
`;

export default class CreateCharacterArcaneSchool extends React.Component {
  constructor(props) {
    super();
    this.state = {
      showArcaneInfo: false,
      selectedArcaneSchool: "",
      arcaneSchoolText: "",
    };
  }

  setArcaneSchool = (e) => {
    const selectedSchool = e.target.textContent.toString();
    if (!selectedSchool) {
      return;
    }
    if (!this.state.showArcaneInfo) {
        this.setState({ showArcaneInfo: true });
    } else {
        const prevSchool = this.state.arcaneSchool;
        if(prevSchool === selectedSchool) {
            this.setState({ showArcaneInfo: false });
        } 
    }
    const arcaneSchoolText = ArcaneSchools(selectedSchool);
    this.props.setArcaneSchool(selectedSchool);
    this.setState({ arcaneSchool: selectedSchool, arcaneSchoolText });
  }

  render() {
    return (
      <FormGroup>
        <Col sm={1} />
        <Col
          componentClass={ControlLabel}
          sm={2}
          className={cssStyles.createColLabelStyle}
        ><div style={{ fontSize: '19px', fontFamily: "'Josefin Sans', sans-serif" }}>Wizard Arcane School:</div>
        </Col>
        <Col sm={7}>
          <ButtonToolbar>
            <ToggleButtonGroup
              type="radio"
              name="arcaneSchool"
              onClick={this.setArcaneSchool}
              className={cssStyles.alignmentButtonGroupParent}

            >
              <ToggleButton
                value="Abjuration"
                className={cssStyles.alignmentButtonGroup}
              >
                Abjuration
              </ToggleButton>
              <ToggleButton
                value="Conjuration"
                className={cssStyles.alignmentButtonGroup}
              >
                Conjuration
              </ToggleButton>
              <ToggleButton
                value="Divination"
                className={cssStyles.alignmentButtonGroup}
              >
                Divination
              </ToggleButton>
              <ToggleButton
                value="Enchantment"
                className={cssStyles.alignmentButtonGroup}
              >
                Enchantment
              </ToggleButton>
              <ToggleButton
                value="Evocation"
                className={cssStyles.alignmentButtonGroup}
              >
                Evocation
              </ToggleButton>
              <ToggleButton
                value="Illusion"
                className={cssStyles.alignmentButtonGroup}
              >
                Illusion
              </ToggleButton>
              <ToggleButton
                value="Transmutation"
                className={cssStyles.alignmentButtonGroup}
              >
                Transmutation
              </ToggleButton>
              <ToggleButton
                value="Universalist"
                className={cssStyles.alignmentButtonGroup}
              >
                Universalist
              </ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </Col>
        <Col sm={1} />
        <FormGroup>
          <Col sm={1} />
          <Col sm={10}>
            <Collapse in={this.state.showArcaneInfo} >
              <div>
                <Well style={{ backgroundColor: 'transparent' }}>
                <ArcaneSchoolText>{this.state.arcaneSchoolText}</ArcaneSchoolText>
                  
                </Well>
              </div>
            </Collapse>
          </Col>
        </FormGroup>
      </FormGroup>
    );
  }
}

CreateCharacterArcaneSchool.propTypes = {
    setArcaneSchool: PropTypes.func.isRequired,
};
