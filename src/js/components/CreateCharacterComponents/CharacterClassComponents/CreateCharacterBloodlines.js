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
import Bloodlines from '../../../CharacterUtils/sorcerer-bloodlines.js';
import * as cssStyles from "../../../../styles/Styles.css";

const BloodlineText = styled.div`
  font-size: 16px !important;
  font-family: 'Josefin Sans', sans-serif;
  text-align: left;
  padding-left: 45%;
  margin-bottom: -40px;
  width: 100%;
`;

export default class CreateCharacterBloodlines extends React.Component {
  constructor(props) {
    super();
    this.state = {
      showBloodlineInfo: false,
      selectedBloodline: "",
      bloodlineProps: {
        description: '',
        'Signature Skills': [],
        'Bloodline Powers': [],
        Spells: [],
      },
    };
  }

  setBloodline = (e) => {
    const selectedBloodline = e.target.textContent.toString();
    if (!selectedBloodline) {
      return;
    }
    if (!this.state.showBloodlineInfo) {
        this.setState({ showBloodlineInfo: true });
    } else {
        const prevDeity = this.state.selectedBloodline;
        if(prevDeity === selectedBloodline) {
            this.setState({ showBloodlineInfo: false });
        } 
    }
    const bloodlineProps = Bloodlines(selectedBloodline);
    this.setState({ selectedBloodline, bloodlineProps });
    this.props.setBloodline(bloodlineProps);    
  };

  render() {
    const reducer = (acc, curr) => acc + ' ' + curr;
    return (
      <FormGroup>
        <Col sm={1} />
        <Col
          componentClass={ControlLabel}
          sm={2}
          className={cssStyles.createColLabelStyle}
        ><div style={{ fontSize: '19px', fontFamily: "'Josefin Sans', sans-serif" }}>Choose Bloodline:</div>
        </Col>
        <Col sm={7}>
          <ButtonToolbar>
            <ToggleButtonGroup
              type="radio"
              name="sorcererBloodlines"
              onClick={this.setBloodline}
              className={cssStyles.alignmentButtonGroupParent}

            >
              <ToggleButton
                value="Aberrant"
                className={cssStyles.alignmentButtonGroup}
              >
                Aberrant
              </ToggleButton>
              <ToggleButton
                value="Angelic"
                className={cssStyles.alignmentButtonGroup}
              >
                Angelic
              </ToggleButton>
              <ToggleButton
                value="Demonic"
                className={cssStyles.alignmentButtonGroup}
              >
                Demonic
              </ToggleButton>
              <ToggleButton
                value="Draconic"
                className={cssStyles.alignmentButtonGroup}
              >
                Draconic
              </ToggleButton>
              <ToggleButton
                value="Fey"
                className={cssStyles.alignmentButtonGroup}
              >
                Fey
              </ToggleButton>
              <ToggleButton
                value="Imperial"
                className={cssStyles.alignmentButtonGroup}
              >
                Imperial
              </ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </Col>
        <Col sm={1} />
        <FormGroup>
          <Col sm={2} />
          <Col sm={9}>
            <Collapse in={this.state.showBloodlineInfo} >
              <div>
                <Well style={{ backgroundColor: 'transparent' }}>
                  <BloodlineText>
                    <div>
                      <div><strong>Description:</strong> <i>{this.state.bloodlineProps.description}</i></div>
                      <div><strong>Signature Skillss:</strong> 
                        <i>
                            {this.state.bloodlineProps['Signature Skills'].reduce(reducer, '')}
                        </i>
                      </div>
                      <div><strong>Granted Spells:</strong></div>
                      <i>{ 
                        Object.keys(this.state.bloodlineProps.Spells).map((level)=>
                        {
                          const levelType = (level === 'Cantrip');
                          return (
                            <div>&nbsp;<strong>
                              {levelType ? level : 'Level '}
                              </strong> 
                              {!levelType ? level : ''}: {this.state.bloodlineProps.Spells[level]}</div>
                          );
                        })}
                      </i>
                      <div><strong>Bloodline Powers:</strong></div>
                      <div>&nbsp;<strong> Initial Power:</strong> {this.state.bloodlineProps['Bloodline Powers']['Initial Power']}</div>
                      <div>&nbsp;<strong> Advanced Power:</strong> {this.state.bloodlineProps['Bloodline Powers']['Advanced Power']}</div>
                      <div>&nbsp;<strong> Greater Power:</strong> {this.state.bloodlineProps['Bloodline Powers']['Greater Power']}</div>
                      
                  </div>
                  </BloodlineText>
                </Well>
              </div>
            </Collapse>
          </Col>
        </FormGroup>
      </FormGroup>
    );
  }
}

CreateCharacterBloodlines.propTypes = {
    setBloodline: PropTypes.func.isRequired,
};
