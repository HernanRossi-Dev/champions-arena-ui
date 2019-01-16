import React from "react";

import { ControlLabel, FormControl, Button, OverlayTrigger, ButtonToolbar, Tooltip } from "react-bootstrap";
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
class CreateCharacterSetFreeBoosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      freeAbilityBoosts: 0,
      originalfreeAbilityBoosts: 0,
      characterStats: {
        STR: "",
        DEX: "",
        CON: "",
        INT: "",
        WIS: "",
        CHA: ""
      },
    };
  }

  componentDidMount() {
    this.setCharacterStats(this.props);
  }

  handleSubmit = () => {
    this.props.handleSubmit(this.state.characterStats);
  }

  setCharacterStats = (props) => {
    if (props.characterStats) {
      this.setState({ 
        characterStats: props.characterStats, 
        freeAbilityBoosts: props.freeAbilityPoints,
        originalfreeAbilityBoosts: props.freeAbilityPoints
       });
    }
  }

  increaseStat = (e) => {
    let newCharStats = this.state.characterStats;
    const currentSelection = e.currentTarget.name;
    const currentStatValue = this.state.characterStats[currentSelection];
    let addBoost = 2;
    if (this.state.freeAbilityBoosts < 1){
      return;
    }
    if (currentStatValue === 17 ) {
      addBoost = 1;
    }
	  if (currentStatValue < 18) {
      const points = this.state.freeAbilityBoosts -1;
      this.setState({freeAbilityBoosts: points});
      switch (e.currentTarget.name) {
        case "STR":
          newCharStats = Object.assign({}, this.state.characterStats);
          newCharStats.STR += addBoost;
          break;
	      case "DEX":
		      newCharStats = Object.assign({}, this.state.characterStats);
		      newCharStats.DEX += addBoost;
		      break;
	      case "CON":
		      newCharStats = Object.assign({}, this.state.characterStats);
		      newCharStats.CON += addBoost;
		      break;
	      case "INT":
		      newCharStats = Object.assign({}, this.state.characterStats);
		      newCharStats.INT += addBoost;
		      break;
	      case "WIS":
		      newCharStats = Object.assign({}, this.state.characterStats);
		      newCharStats.WIS += addBoost;
		      break;
	      case "CHA":
		      newCharStats = Object.assign({}, this.state.characterStats);
		      newCharStats.CHA += addBoost;
		      break;
        default:
          break;
      }
      this.setState({ characterStats: newCharStats , freeAbilityBoosts: points});
    }
  }

  decreaseStat = (e) => {
    let newCharStats = this.state.characterStats;
    if (this.state.freeAbilityBoosts === this.state.originalfreeAbilityBoosts) {
      return;
    }
    switch (e.currentTarget.name) {
      case "STR":
        newCharStats = Object.assign({}, this.state.characterStats);
        newCharStats.STR -= 2;
        break;
      case "DEX":
        newCharStats = Object.assign({}, this.state.characterStats);
        newCharStats.DEX -= 2;
        break;
      case "CON":
        newCharStats = Object.assign({}, this.state.characterStats);
        newCharStats.CON -= 2;
        break;
      case "INT":
        newCharStats = Object.assign({}, this.state.characterStats);
        newCharStats.INT -= 2;
        break;
      case "WIS":
        newCharStats = Object.assign({}, this.state.characterStats);
        newCharStats.WIS -= 2;
        break;
      case "CHA":
        newCharStats = Object.assign({}, this.state.characterStats);
        newCharStats.CHA -= 2;
        break;
      default:
        break;
    }
    const points = this.state.freeAbilityBoosts + 1;
    this.setState({freeAbilityBoosts: points, characterStats: newCharStats});
  }

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
      <div className={cssStyles.createCharacterBoostBody}>
        <GenerateStatsFormGroup abilityBoosts={this.state.freeAbilityBoosts} />
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
        <div style={{textAlign: "center", fontSize: '14px'}}>
          <i>*Add +2 to chosen stat.</i>
          </div>
          <div style={{textAlign: "center", fontSize: '14px', paddingBottom: '20px'}}>
          <i>**At level 1 a character cannot exceed 18 on any stat.</i>
        </div>
        <Button bsStyle="primary"style={{width: "50%", marginLeft: "25%"}} onClick={this.handleSubmit}>Save New Character</Button>
      </div>
    );
  }
}

const GenerateStatsFormGroup = (props) => {
  return (
    <div className={cssStyles.assignBoostTextStyle}>
       <div>Available free ability points: {props.abilityBoosts}</div>
    </div>
  );
};

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
export default withStyles(styles)(CreateCharacterSetFreeBoosts);
