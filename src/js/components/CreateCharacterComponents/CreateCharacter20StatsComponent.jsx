import React, { useState, useEffect } from "react";
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

export const CreateCharacter20StatsComponent = (props) => {
  const {
    characterStats, freeAbilityPoints, racialBonus, backgroundBoost, classBoost
  } = props;
  const [freeAP, setFreeAP] = useState('');
  const [charStats, setCharStats] = useState('');

  useEffect(() => {
    setCharStats(characterStats);
    setFreeAP(freeAbilityPoints);
  }, [characterStats, freeAbilityPoints]);

  const ShowRacialBonus = () => {
    let freeStateBonus;
    if (freeAbilityPoints) {
      freeStateBonus = `\nFree Ability Boosts available: ${freeAP}`;
    }
    let infoString;
    let ancestryString;
    let backgroundString;
    let classString;

    if (racialBonus) {
      const rBon = racialBonus;
      Object.keys(rBon).forEach((stat) => {
        if (!infoString) {
          ancestryString = 'Ancestry Boost: ';
          infoString = `Ability Boosts applied to stats:`;
        }
        ancestryString += `${stat}: ${rBon[stat]}, `;
      });
    }
    if (backgroundBoost) {
      if (!infoString) {
        infoString = `Ability Boosts applied to stats:`;
      }
      backgroundString = `Background Boost: ${backgroundBoost}: 2, `;
    }
    if (classBoost) {
      if (!infoString) {
        infoString = `Ability Boosts applied to stats:`;
      }
      classString = `Class Boost: ${classBoost}: 2, `;
    }
    return (
      <BoostText>
        <div style={{ wordSpacing: '3px' }}>{infoString}</div>
        {racialBonus ? <div style={{ wordSpacing: '3px' }}>&nbsp;&nbsp;{ancestryString}</div> : null}
        {backgroundBoost ? <div style={{ wordSpacing: '3px' }}>&nbsp;&nbsp;{backgroundString}</div> : null}
        {classBoost ? <div style={{ wordSpacing: '3px' }}>&nbsp;&nbsp;{classString}</div> : null}
        <div style={{ wordSpacing: '3px' }}>{freeStateBonus} <i>assign next step</i></div>
      </BoostText>
    );
  };

  return (
    <div>
      <StatsHeaderFormGroup />
      <FormGroup>
        <Col sm={3} />
        <Col sm={1}>
          <FormControl.Static className={cssStyles.genStatsNumberStyle}>
            {characterStats.STR}
          </FormControl.Static>
        </Col>
        <Col sm={1}>
          <FormControl.Static className={cssStyles.genStatsNumberStyle}>
            {characterStats.DEX}
          </FormControl.Static>
        </Col>
        <Col sm={1}>
          <FormControl.Static className={cssStyles.genStatsNumberStyle}>
            {characterStats.CON}
          </FormControl.Static>
        </Col>
        <Col sm={1}>
          <FormControl.Static className={cssStyles.genStatsNumberStyle}>
            {characterStats.INT}
          </FormControl.Static>
        </Col>
        <Col sm={1}>
          <FormControl.Static className={cssStyles.genStatsNumberStyle}>
            {characterStats.WIS}
          </FormControl.Static>
        </Col>
        <Col sm={1}>
          <FormControl.Static className={cssStyles.genStatsNumberStyle}>
            {characterStats.CHA}
          </FormControl.Static>
        </Col>
      </FormGroup>
      <FormGroup>
        <Col sm={4} />
        <Col sm={6}>
          <ShowRacialBonus />
        </Col>
      </FormGroup>
    </div>
  );
};

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

CreateCharacter20StatsComponent.defaultProps = {
  racialBonus: null,
  backgroundBoost: null,
  freeAbilityPoints: null,
  classBoost: null,
};

CreateCharacter20StatsComponent.propTypes = {
  freeAbilityPoints: PropTypes.number,
  classBoost: PropTypes.number,
  characterStats: PropTypes.shape({
    STR: PropTypes.number,
    DEX: PropTypes.number,
    CON: PropTypes.number,
    INT: PropTypes.number,
    WIS: PropTypes.number,
    CHA: PropTypes.number,
  }).isRequired,
  racialBonus: PropTypes.number,
  backgroundBoost: PropTypes.number,
};

export default withStyles(styles)(CreateCharacter20StatsComponent);
