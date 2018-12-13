import React from "react";

import { ControlLabel, FormControl, Button } from "react-bootstrap";
import { Col, FormGroup } from "reactstrap";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styled from 'styled-components';
import * as cssStyles from "../../../styles/Styles.css";

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

  increaseStat = (e) => {
	  let newCharStats = this.state.characterStats;
	  if (this.state.characterStats[e.currentTarget.name] < 30) {
      switch (e.currentTarget.name) {
        case "STR":
          newCharStats = Object.assign({}, this.state.characterStats);
          newCharStats.STR += 1;
          this.setState({ characterStats: newCharStats });
          break;
	      case "DEX":
		      newCharStats = Object.assign({}, this.state.characterStats);
		      newCharStats.DEX += 1;
		      this.setState({ characterStats: newCharStats });
		      break;
	      case "CON":
		      newCharStats = Object.assign({}, this.state.characterStats);
		      newCharStats.CON += 1;
		      this.setState({ characterStats: newCharStats });
		      break;
	      case "INT":
		      newCharStats = Object.assign({}, this.state.characterStats);
		      newCharStats.INT += 1;
		      this.setState({ characterStats: newCharStats });
		      break;
	      case "WIS":
		      newCharStats = Object.assign({}, this.state.characterStats);
		      newCharStats.WIS += 1;
		      this.setState({ characterStats: newCharStats });
		      break;
	      case "CHA":
		      newCharStats = Object.assign({}, this.state.characterStats);
		      newCharStats.CHA += 1;
		      this.setState({ characterStats: newCharStats });
		      break;
        default:
          break;
      }
		  this.props.setStateStats(newCharStats);
    }
  }

  decreaseStat = (e) => {
    let newCharStats = this.state.characterStats;
    if (this.state.characterStats[e.currentTarget.name] > 0) {

      switch (e.currentTarget.name) {
        case "STR":
          newCharStats = Object.assign({}, this.state.characterStats);
          newCharStats.STR -= 1;
          this.setState({ characterStats: newCharStats });
          break;
        case "DEX":
          newCharStats = Object.assign({}, this.state.characterStats);
          newCharStats.DEX -= 1;
          this.setState({ characterStats: newCharStats });
          break;
        case "CON":
          newCharStats = Object.assign({}, this.state.characterStats);
          newCharStats.CON -= 1;
          this.setState({ characterStats: newCharStats });
          break;
        case "INT":
          newCharStats = Object.assign({}, this.state.characterStats);
          newCharStats.INT -= 1;
          this.setState({ characterStats: newCharStats });
          break;
        case "WIS":
          newCharStats = Object.assign({}, this.state.characterStats);
          newCharStats.WIS -= 1;
          this.setState({ characterStats: newCharStats });
          break;
        case "CHA":
          newCharStats = Object.assign({}, this.state.characterStats);
          newCharStats.CHA -= 1;
          this.setState({ characterStats: newCharStats });
          break;
        default:
          break;
      }
	    this.props.setStateStats(newCharStats);
    }
  }

  ShowRacialBonus = () => {
    let freeStateBonus;
    if (this.props.freeAbilityPoints) {
      freeStateBonus = `\nFree Ability bonus available: ${this.state.freeAbilityPoints}`;
    }
    if (this.props.racialBonus) {
      const rBon = this.props.racialBonus;
      let infoString = null;
      Object.keys(rBon).forEach((stat) => {
        if (!infoString) {
          infoString = "Racial bonus applied to stats: ";
        }
        if (rBon[stat] > 0) {
          infoString += `${stat}: ${rBon[stat]}, `;
        } else {
          infoString += `${stat}: ${rBon[stat]}`;
        }
      });
      return (
        <div>
          <div style={{ wordSpacing: '3px' }}>{infoString}</div>
          <div style={{ wordSpacing: '3px' }}>{freeStateBonus}</div>
        </div>
      );
    } return null;
  };

  render() {
    const PlusButtonFormGroup = () => (
      <FormGroup className={cssStyles.customStatsIcons} >
        <Col sm={2}>
          <Button bsSize="small" onClick={this.increaseStat} name="STR" style={{ backgroundColor: 'transparent' }}>
            {" "}
            <i className="fas fa-plus" id="STR" />
          </Button>
        </Col>
        <Col sm={2}>
          <Button bsSize="small" onClick={this.increaseStat} name="DEX" style={{ backgroundColor: 'transparent' }}>
            {" "}
            <i className="fas fa-plus" id="DEX" />
          </Button>
        </Col>
        <Col sm={2}>
          <Button bsSize="small" onClick={this.increaseStat} name="CON" style={{ backgroundColor: 'transparent' }}>
            {" "}
            <i className="fas fa-plus" />
          </Button>
        </Col>
        <Col sm={2}>
          <Button bsSize="small" onClick={this.increaseStat} name="INT" style={{ backgroundColor: 'transparent' }}>
            {" "}
            <i className="fas fa-plus" />
          </Button>
        </Col>
        <Col sm={2}>
          <Button bsSize="small" onClick={this.increaseStat} name="WIS" style={{ backgroundColor: 'transparent' }}>
            {" "}
            <i className="fas fa-plus" />
          </Button>
        </Col>
        <Col sm={2}>
          <Button bsSize="small" onClick={this.increaseStat} name="CHA" style={{ backgroundColor: 'transparent' }}>
            {" "}
            <i className="fas fa-plus" />
          </Button>
        </Col>
      </FormGroup>
    );
    const MinusButtonFormGroup = () => (
      <FormGroup className={cssStyles.customStatsIcons}>
        <Col sm={2}>
          <Button bsSize="small" onClick={this.decreaseStat} name="STR" style={{ backgroundColor: 'transparent' }}>
            <i className="fas fa-minus" id="STR"/>
          </Button>
        </Col>
        <Col sm={2}>
          <Button bsSize="small" onClick={this.decreaseStat} name="DEX" style={{ backgroundColor: 'transparent' }}>
            <i className="fas fa-minus" id="DEX"/>
          </Button>
        </Col>
        <Col sm={2}>
          <Button bsSize="small" onClick={this.decreaseStat} name="CON" style={{ backgroundColor: 'transparent' }}>
            <i className="fas fa-minus" />
          </Button>
        </Col>
        <Col sm={2}>
          <Button bsSize="small" onClick={this.decreaseStat} name="INT" style={{ backgroundColor: 'transparent' }}>
            {" "}
            <i className="fas fa-minus" />
          </Button>
        </Col>
        <Col sm={2}>
          <Button bsSize="small" onClick={this.decreaseStat} name="WIS" style={{ backgroundColor: 'transparent' }}>
            {" "}
            <i className="fas fa-minus" />
          </Button>
        </Col>
        <Col sm={2}>
          <Button bsSize="small" onClick={this.decreaseStat} name="CHA" style={{ backgroundColor: 'transparent' }}>
            {" "}
            <i className="fas fa-minus" />
          </Button>
        </Col>
      </FormGroup>
    );

    return (
      <div>
        <StatsHeaderFormGroup />
        <PlusButtonFormGroup />
        <FormGroup>
          <Col sm={2}>
            <FormControl.Static className={cssStyles.genStatsNumberStyle}>
              {this.state.characterStats.STR}
            </FormControl.Static>
          </Col>
          <Col sm={2}>
            <FormControl.Static className={cssStyles.genStatsNumberStyle}>
              {this.state.characterStats.DEX}
            </FormControl.Static>
          </Col>
          <Col sm={2}>
            <FormControl.Static className={cssStyles.genStatsNumberStyle}>
              {this.state.characterStats.CON}
            </FormControl.Static>
          </Col>
          <Col sm={2}>
            <FormControl.Static className={cssStyles.genStatsNumberStyle}>
              {this.state.characterStats.INT}
            </FormControl.Static>
          </Col>
          <Col sm={2}>
            <FormControl.Static className={cssStyles.genStatsNumberStyle}>
              {this.state.characterStats.WIS}
            </FormControl.Static>
          </Col>
          <Col sm={2}>
            <FormControl.Static className={cssStyles.genStatsNumberStyle}>
              {this.state.characterStats.CHA}
            </FormControl.Static>
          </Col>
        </FormGroup>
        <MinusButtonFormGroup />
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
    <Col
      componentClass={ControlLabel}
      sm={2}
      className={cssStyles.createColStyle}
    >
      STR
    </Col>
    <Col
      componentClass={ControlLabel}
      sm={2}
      className={cssStyles.createColStyle}
    >
      DEX
    </Col>
    <Col
      componentClass={ControlLabel}
      sm={2}
      className={cssStyles.createColStyle}
    >
      CON
    </Col>
    <Col
      componentClass={ControlLabel}
      sm={2}
      className={cssStyles.createColStyle}
    >
      INT
    </Col>
    <Col
      componentClass={ControlLabel}
      sm={2}
      className={cssStyles.createColStyle}
    >
      WIS
    </Col>
    <Col
      componentClass={ControlLabel}
      sm={2}
      className={cssStyles.createColStyle}
    >
      CHA
    </Col>
  </FormGroup>
);
export default withStyles(styles)(CreateCharacter20StatsComponent);
