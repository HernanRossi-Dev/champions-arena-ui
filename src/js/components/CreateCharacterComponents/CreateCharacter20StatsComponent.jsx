import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ControlLabel, FormControl, Button } from "react-bootstrap";
import { Col, FormGroup } from "reactstrap";
import { withStyles } from "@material-ui/core/styles";
import * as cssStyles from "../../../styles/Styles.css";

const BoostText = styled.div`
  font-size: 16px !important;
  font-family: 'Josefin Sans', sans-serif;
  padding-left: 25px;
`;

const styles = {
  root: {
    width: "45px",
    marginLeft: "45px"
  },
  input: {
    textAlign: "center",
    color: "white",
    fontSize: "24px",
    fontFamily: '"Crimson Text", serif'
  }
};
class CreateCharacter20StatsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characterStats: {
        STR: 10,
        DEX: 10,
        CON: 10,
        INT: 10,
        WIS: 10,
        CHA: 10
      },
      freeAbilityPoints: 0,
    };
  }

  componentDidMount() {
    this.setCharacterStats(this.props);
  }

  componentWillReceiveProps(props) {
    this.setCharacterStats(props);
  }

  setCharacterStats = (props) => {
    this.setState({ characterStats: props.characterStats, freeAbilityPoints: props.freeAbilityPoints });
  }

  ShowRacialBonus = () => {
    let freeStateBonus;
    if (this.props.freeAbilityPoints) {
      freeStateBonus = `\nFree Ability Boosts available: ${this.state.freeAbilityPoints}`;
    }
    let infoString;
    let ancestryString;
    let backgroundString;
    let classString;

    if (this.props.racialBonus) {
      const rBon = this.props.racialBonus;
      Object.keys(rBon).forEach((stat) => {
        if (!infoString) {
          ancestryString = 'Ancestry Boost: ';
          infoString = `Ability Boosts applied to stats:`;
        }
        ancestryString += `${stat}: ${rBon[stat]}, `;
      });
    }
    if (this.props.backgroundBoost) {
      if (!infoString) {
        infoString = `Ability Boosts applied to stats:`;
      } 
      backgroundString = `Background Boost: ${this.props.backgroundBoost}: 2, `;
    }
    if (this.props.classBoost) {
      if (!infoString) {
        infoString = `Ability Boosts applied to stats:`;
      }
      classString = `Class Boost: ${this.props.classBoost}: 2, `;
    }
    return (
      <BoostText>
        <div style={{ wordSpacing: '3px' }}>{infoString}</div>
        {this.props.racialBonus ? <div style={{ wordSpacing: '3px' }}>&nbsp;&nbsp;{ancestryString}</div> : null}
        {this.props.backgroundBoost ? <div style={{ wordSpacing: '3px' }}>&nbsp;&nbsp;{backgroundString}</div> : null}
        {this.props.classBoost ? <div style={{ wordSpacing: '3px' }}>&nbsp;&nbsp;{classString}</div> : null}
        <div style={{ wordSpacing: '3px' }}>{freeStateBonus} <i>assign next step</i></div>
      </BoostText>
    );
  };

  render() {

    return (
      <div>
        <StatsHeaderFormGroup />
        <FormGroup>
          <Col sm={3} />
          <Col sm={1}>
            <FormControl.Static className={cssStyles.genStatsNumberStyle}>
              {this.state.characterStats.STR}
            </FormControl.Static>
          </Col>
          <Col sm={1}>
            <FormControl.Static className={cssStyles.genStatsNumberStyle}>
              {this.state.characterStats.DEX}
            </FormControl.Static>
          </Col>
          <Col sm={1}>
            <FormControl.Static className={cssStyles.genStatsNumberStyle}>
              {this.state.characterStats.CON}
            </FormControl.Static>
          </Col>
          <Col sm={1}>
            <FormControl.Static className={cssStyles.genStatsNumberStyle}>
              {this.state.characterStats.INT}
            </FormControl.Static>
          </Col>
          <Col sm={1}>
            <FormControl.Static className={cssStyles.genStatsNumberStyle}>
              {this.state.characterStats.WIS}
            </FormControl.Static>
          </Col>
          <Col sm={1}>
            <FormControl.Static className={cssStyles.genStatsNumberStyle}>
              {this.state.characterStats.CHA}
            </FormControl.Static>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={4} />
          <Col sm={6}>
            <this.ShowRacialBonus />
          </Col>
        </FormGroup>
      </div>
    );
  }
}

const StatsHeaderFormGroup = () => (
  <FormGroup>
    <Col sm={3} />
    <Col
      componentClass={ControlLabel}
      sm={1}
      className={cssStyles.createColStyle}
    >
      STR
    </Col>
    <Col
      componentClass={ControlLabel}
      sm={1}
      className={cssStyles.createColStyle}
    >
      DEX
    </Col>
    <Col
      componentClass={ControlLabel}
      sm={1}
      className={cssStyles.createColStyle}
    >
      CON
    </Col>
    <Col
      componentClass={ControlLabel}
      sm={1}
      className={cssStyles.createColStyle}
    >
      INT
    </Col>
    <Col
      componentClass={ControlLabel}
      sm={1}
      className={cssStyles.createColStyle}
    >
      WIS
    </Col>
    <Col
      componentClass={ControlLabel}
      sm={1}
      className={cssStyles.createColStyle}
    >
      CHA
    </Col>
  </FormGroup>
);

CreateCharacter20StatsComponent.propTypes = {
  freeAbilityPoints: PropTypes.number,
  setStateStats: PropTypes.func.isRequired,
  racialBonus: PropTypes.number,
  backgroundBoost: PropTypes.string,
};

export default withStyles(styles)(CreateCharacter20StatsComponent);
