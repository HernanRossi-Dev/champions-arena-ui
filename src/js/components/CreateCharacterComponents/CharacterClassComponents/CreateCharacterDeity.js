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
import ClericDeities from '../../../characterUtils/clericDieties';
import * as cssStyles from "../../../../styles/Styles.css";

const DeityText = styled.div`
  font-size: 16px !important;
  font-family: 'Josefin Sans', sans-serif;
  text-align: left;
  padding-left: 45%;
  margin-bottom: -40px;
  width: 100%;
`;

export default class CreateCharacterDeity extends React.Component {
  constructor(props) {
    super();
    this.state = {
      showDeityInfo: false,
      selectedDeity: "",
      deityText: "",
      deityProps: {
        AoC: [],
        Alignment: [],
        Channel: [],
        Domains: [],
        Spells: [],
      },
    };
  }

  setDeity = (e) => {
    const selectedDeity = e.target.textContent.toString();
    if (!selectedDeity) {
      return;
    }
    if (!this.state.showDeityInfo) {
        this.setState({ showDeityInfo: true });
    } else {
        const prevDeity = this.state.selectedDeity;
        if(prevDeity === selectedDeity) {
            this.setState({ showDeityInfo: false });
        } 
    }
    const deityProps = ClericDeities(selectedDeity);
    this.setState({ selectedDeity, deityProps });
    this.props.setDeity(deityProps);    
  };

  render() {
    const reducer = (acc, curr) => acc + ' ' + curr;
    const aliasReducer = (acc, curr) => acc + ' \"' + curr + '\"';

    return (
      <FormGroup>
        <Col sm={1} />
        <Col
          componentClass={ControlLabel}
          sm={2}
          className={cssStyles.createColLabelStyle}
        ><div style={{ fontSize: '19px', fontFamily: "'Josefin Sans', sans-serif" }}>Choose Cleric Deity:</div>
        </Col>
        <Col sm={7}>
          <ButtonToolbar>
            <ToggleButtonGroup
              type="radio"
              name="clericDeity"
              onClick={this.setDeity}
              className={cssStyles.alignmentButtonGroupParent}

            >
              <ToggleButton
                value="Abadar"
                className={cssStyles.alignmentButtonGroup}
              >
                Abadar
              </ToggleButton>
              <ToggleButton
                value="Asmodeus"
                className={cssStyles.alignmentButtonGroup}
              >
                Asmodeus
              </ToggleButton>
              <ToggleButton
                value="Calistria"
                className={cssStyles.alignmentButtonGroup}
              >
                Calistria
              </ToggleButton>
              <ToggleButton
                value="Cayden"
                className={cssStyles.alignmentButtonGroup}
              >
                Cayden
              </ToggleButton>
              <ToggleButton
                value="Cailean"
                className={cssStyles.alignmentButtonGroup}
              >
                Cailean
              </ToggleButton>
              <ToggleButton
                value="Desna"
                className={cssStyles.alignmentButtonGroup}
              >
                Desna
              </ToggleButton>
              <ToggleButton
                value="Erastil"
                className={cssStyles.alignmentButtonGroup}
              >
                Erastil
              </ToggleButton>
              <ToggleButton
                value="Gorum"
                className={cssStyles.alignmentButtonGroup}
              >
                Gorum
              </ToggleButton>
              <ToggleButton
                value="Gozreh"
                className={cssStyles.alignmentButtonGroup}
              >
                Gozreh
              </ToggleButton>
              <ToggleButton
                value="Iomedae"
                className={cssStyles.alignmentButtonGroup}
              >
                Iomedae
              </ToggleButton>
              <ToggleButton
                value="Irori"
                className={cssStyles.alignmentButtonGroup}
              >
                Irori
              </ToggleButton>
              <ToggleButton
                value="Lamashtu"
                className={cssStyles.alignmentButtonGroup}
              >
                Lamashtu
              </ToggleButton>
              <ToggleButton
                value="Nethys"
                className={cssStyles.alignmentButtonGroup}
              >
                Nethys
              </ToggleButton>
              <ToggleButton
                value="Norgorber"
                className={cssStyles.alignmentButtonGroup}
              >
                Norgorber
              </ToggleButton>
              <ToggleButton
                value="Pharasma"
                className={cssStyles.alignmentButtonGroup}
              >
                Pharasma
              </ToggleButton>
              <ToggleButton
                value="Sarenrae"
                className={cssStyles.alignmentButtonGroup}
              >
                Sarenrae
              </ToggleButton>
              <ToggleButton
                value="Shelyn"
                className={cssStyles.alignmentButtonGroup}
              >
                Shelyn
              </ToggleButton>
              <ToggleButton
                value="Torag"
                className={cssStyles.alignmentButtonGroup}
              >
                Torag
              </ToggleButton>
              <ToggleButton
                value="Urgathoa"
                className={cssStyles.alignmentButtonGroup}
              >
                Urgathoa
              </ToggleButton>
              <ToggleButton
                value="Zon-Kuthon"
                className={cssStyles.alignmentButtonGroup}
              >
                Zon-Kuthon
              </ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </Col>
        <Col sm={1} />
        <FormGroup>
          <Col sm={2} />
          <Col sm={9}>
            <Collapse in={this.state.showDeityInfo} >
              <div>
                <Well style={{ backgroundColor: 'transparent' }}>
                  <DeityText>
                    <div>
                      {
                        this.state.deityProps.Aliases ? 
                        (
                          <div><strong>Aliases:</strong> <i>{this.state.deityProps.Aliases.reduce(aliasReducer, '')}</i></div>
                        ) : null
                      }
                      <div><strong>Areas of Concern:</strong> <i>{this.state.deityProps.AoC.reduce(reducer, '')}</i></div>
                      <div><strong>Allowed Alignments:</strong> <i>{this.state.deityProps.Alignment.reduce(reducer, '')}</i></div>
                      <div><strong>Channel:</strong> <i>{this.state.deityProps.Channel.reduce(reducer, '')}</i></div>
                      <div><strong>Skill:</strong> <i>{this.state.deityProps.Skill}</i></div>
                      <div><strong>Weapon:</strong> <i>{this.state.deityProps.Weapon}</i></div>
                      <div><strong>Domains:</strong> <i>{this.state.deityProps.Domains.reduce(reducer, '')}</i></div>
                      <div><strong>Deity Spells:</strong></div>
                      <i>{ Object.keys(this.state.deityProps.Spells).map((level)=> <div><strong>Level</strong> {level}: {this.state.deityProps.Spells[level]}</div>
                      )}</i>
                  </div>
                  </DeityText>
                </Well>
              </div>
            </Collapse>
          </Col>
        </FormGroup>
      </FormGroup>
    );
  }
}

CreateCharacterDeity.propTypes = {
  setDeity: PropTypes.func.isRequired,
};
