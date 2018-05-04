import React from "react";
import * as cssStyles from "../../../styles/Styles.css";
import { ControlLabel, FormControl } from "react-bootstrap";
import { Col, FormGroup } from "reactstrap";
import { TextField } from "material-ui";
import { withStyles } from "material-ui/styles";
import { Button } from "react-bootstrap";
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
class CreateCharacterCustomStatsInput extends React.Component {
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
      racialBonus: ""
    };
    this.increaseStat = this.increaseStat.bind(this);
    this.decreaseStat = this.decreaseStat.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      characterStats: props.characterStats,
      racialBonus: props.racialBonus
    });
  }

  componentDidMount() {
    this.setState({
      characterStats: this.props.characterStats,
      racialBonus: this.props.racialBonus
    });
  }

  increaseStat(e) {
	  let newCharStats = this.state.characterStats;
	  if (this.state.characterStats[e.currentTarget.name] < 30) {
      switch (e.currentTarget.name) {
        case "STR":
          newCharStats = Object.assign({}, this.state.characterStats);
          newCharStats.STR = newCharStats.STR + 1;
          console.log(newCharStats);
          this.setState({ characterStats: newCharStats });
          break;
	      case "DEX":
		      newCharStats = Object.assign({}, this.state.characterStats);
		      newCharStats.DEX = newCharStats.DEX + 1;
		      this.setState({ characterStats: newCharStats });
		      break;
	      case "CON":
		      newCharStats = Object.assign({}, this.state.characterStats);
		      newCharStats.CON = newCharStats.CON + 1;
		      this.setState({ characterStats: newCharStats });
		      break;
	      case "INT":
		      newCharStats = Object.assign({}, this.state.characterStats);
		      newCharStats.INT = newCharStats.INT + 1;
		      this.setState({ characterStats: newCharStats });
		      break;
	      case "WIS":
		      newCharStats = Object.assign({}, this.state.characterStats);
		      newCharStats.WIS = newCharStats.WIS + 1;
		      this.setState({ characterStats: newCharStats });
		      break;
	      case "CHA":
		      newCharStats = Object.assign({}, this.state.characterStats);
		      newCharStats.CHA = newCharStats.CHA + 1;
		      this.setState({ characterStats: newCharStats });
		      break;
        default:
          break;
      }
      console.log('setting stats');
		  this.props.setStateStats(newCharStats);
    } else {
    }

  }

  decreaseStat(e) {
	  let newCharStats =  this.state.characterStats;
    if (this.state.characterStats[e.currentTarget.name] > 0) {

      switch (e.currentTarget.name) {
        case "STR":
          newCharStats = Object.assign({}, this.state.characterStats);
          newCharStats.STR = newCharStats.STR - 1;
          this.setState({ characterStats: newCharStats });
          break;
        case "DEX":
          newCharStats = Object.assign({}, this.state.characterStats);
          newCharStats.DEX = newCharStats.DEX - 1;
          this.setState({ characterStats: newCharStats });
          break;
        case "CON":
          newCharStats = Object.assign({}, this.state.characterStats);
          newCharStats.CON = newCharStats.CON - 1;
          this.setState({ characterStats: newCharStats });
          break;
        case "INT":
          newCharStats = Object.assign({}, this.state.characterStats);
          newCharStats.INT = newCharStats.INT - 1;
          this.setState({ characterStats: newCharStats });
          break;
        case "WIS":
          newCharStats = Object.assign({}, this.state.characterStats);
          newCharStats.WIS = newCharStats.WIS - 1;
          this.setState({ characterStats: newCharStats });
          break;
        case "CHA":
          newCharStats = Object.assign({}, this.state.characterStats);
          newCharStats.CHA = newCharStats.CHA - 1;
          this.setState({ characterStats: newCharStats });
          break;
        default:
          break;
      }
	    this.props.setStateStats(newCharStats);
    } else {
    }

  }

  render() {
    const PlusButtonFormGroup = () => (
      <FormGroup className={cssStyles.customStatsIcons}>
        <Col sm={2}>
          <Button bsSize={"small"} onClick={this.increaseStat} name={"STR"}>
            {" "}
            <i className="fas fa-plus" id={"STR"}/>
          </Button>
        </Col>
        <Col sm={2}>
          <Button bsSize={"small"} onClick={this.increaseStat} name={"DEX"}>
            {" "}
            <i className="fas fa-plus" id="DEX" />
          </Button>
        </Col>
        <Col sm={2}>
          <Button bsSize={"small"} onClick={this.increaseStat} name={"CON"}>
            {" "}
            <i className="fas fa-plus" />
          </Button>
        </Col>
        <Col sm={2}>
          <Button bsSize={"small"} onClick={this.increaseStat} name={"INT"}>
            {" "}
            <i className="fas fa-plus" />
          </Button>
        </Col>
        <Col sm={2}>
          <Button bsSize={"small"} onClick={this.increaseStat} name={"WIS"}>
            {" "}
            <i className="fas fa-plus" />
          </Button>
        </Col>
        <Col sm={2}>
          <Button bsSize={"small"} onClick={this.increaseStat} name={"CHA"}>
            {" "}
            <i className="fas fa-plus" />
          </Button>
        </Col>
      </FormGroup>
    );
    const MinusButtonFormGroup = () => (
      <FormGroup className={cssStyles.customStatsIcons}>
        <Col sm={2}>
          <Button bsSize={"small"} onClick={this.decreaseStat} name={"STR"}>
            <i className="fas fa-minus" id={"STR"}/>
          </Button>
        </Col>
        <Col sm={2}>
          <Button bsSize={"small"} onClick={this.decreaseStat} name={"DEX"}>
            <i className="fas fa-minus" id="DEX"/>
          </Button>
        </Col>
        <Col sm={2}>
          <Button bsSize={"small"} onClick={this.decreaseStat} name={"CON"}>
            <i className="fas fa-minus" />
          </Button>
        </Col>
        <Col sm={2}>
          <Button bsSize={"small"} onClick={this.decreaseStat} name={"INT"}>
            {" "}
            <i className="fas fa-minus" />
          </Button>
        </Col>
        <Col sm={2}>
          <Button bsSize={"small"} onClick={this.decreaseStat} name={"WIS"}>
            {" "}
            <i className="fas fa-minus" />
          </Button>
        </Col>
        <Col sm={2}>
          <Button bsSize={"small"} onClick={this.decreaseStat} name={"CHA"}>
            {" "}
            <i className="fas fa-minus" />
          </Button>
        </Col>
      </FormGroup>
    );
    const ShowRacialBonus = () => {
      if (this.props.racialBonus.statsBonus) {
        let rBon = this.props.racialBonus.statsBonus;
        let key;
        let infoString = "Racial bonus available: ";

        for (key in rBon) {
          if (rBon[key] > 0) {
            infoString += key + ": +" + rBon[key] + ", ";
          } else {
            infoString += key + ": " + rBon[key];
          }
        }
        return <div style={{ wordSpacing: "3px" }}>{infoString}</div>;
      } else {
        return <div />;
      }
    };
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
            <ShowRacialBonus />
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
export default withStyles(styles)(CreateCharacterCustomStatsInput);
