import React from "react";
import { Col, ControlLabel, FormGroup } from "react-bootstrap";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles/index";
import * as cssStyles from "../../../styles/Styles.css";

const styles = {
  root: {
    fontColor: "white"
  },
  input: {
    color: "white",
    fontSize: 20,
    fontColor: "white",
    fontFamily: "'Josefin Sans', sans-serif"
  },
  helperText: {
    color: "white",
    fontSize: 14,
    fontColor: "white",
    fontFamily: "'Cinzel Decorative', sans-serif"
    // textShadow: '1px 1px 0px #DFFE02',
  }
};

class CharacterEditStatsComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <FormGroup>
        <Col sm={7}>
          <StatsHeaderFormGroup />
        </Col>
        <Col sm={5}>
          <div style={{ textAlign: "center" }}>Hp placeholder</div>
        </Col>
      </FormGroup>
    );
  }
}

const StatsHeaderFormGroup = () => (
  <FormGroup>
    <Col
      sm={2}
      style={{
        background: "transparent",
        fontSize: "15px",
        fontFamily: '"Crimson Text", serif'
      }}
    >
      Ability Name
    </Col>
    <Col
      sm={2}
      style={{
        background: "transparent",
        fontSize: "15px",
        fontFamily: '"Crimson Text", serif'
      }}
    >
      Ability<br />Score
    </Col>
    <Col
      sm={2}
      style={{
        background: "transparent",
        fontSize: "15px",
        fontFamily: '"Crimson Text", serif'
      }}
    >
      Ability Modifier
    </Col>
    <Col
      sm={2}
      style={{
        background: "transparent",
        fontSize: "15px",
        fontFamily: '"Crimson Text", serif',
        marginRight: "15px"
      }}
    >
      Temp<br />Adjustment
    </Col>

    <Col
      sm={2}
      style={{
        background: "transparent",
        fontSize: "15px",
        fontFamily: '"Crimson Text", serif'
      }}
    >
      Temp <br />Modifier
    </Col>
  </FormGroup>
);
export default withStyles(styles)(CharacterEditStatsComponent);
