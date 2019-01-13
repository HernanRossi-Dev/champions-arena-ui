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

  componentWillReceiveProps(props) {
    this.setState({
      characterStats: props.characterStats, freeAbilityBoosts: props.freeAbilityPoints
    });
  }

  setCharacterStats = (props) => {
    if (props.characterStats) {
      this.setState({ characterStats: props.characterStats, freeAbilityBoosts: props.freeAbilityPoints });
    }
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
      </div>
    );
  }
}

const GenerateStatsFormGroup = (props) => {
  return (
    <FormGroup>
      <Col sm={1} />
      <Col sm={4} style={{ marginLeft: '20px' }} className={cssStyles.createColLabelStyle}>
       <div>Available free ability points: {props.abilityBoosts}</div>
      </Col>
    </FormGroup>
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
