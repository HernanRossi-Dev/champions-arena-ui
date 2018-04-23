import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import store from "../../store/index.js";
import * as HeroActionCreators from "../../actions/index.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cssStyles from "../../../styles/Styles.css";
import {
  FormGroup,
  FormControl,
  ControlLabel,
  ButtonToolbar,
  Button,
  Panel,
  Form,
  Col,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  OverlayTrigger
} from "react-bootstrap";

export default class CreateHeroRaceComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const changeRace = e => {
      const targetText = e.target.textContent.toString();
      // if (!this.state.race) {
      //   this.setState({ showAlignment: true });
      // }
      // if (targetText === this.state.prevButtonPressed) {
      //   if (this.state.showAlignment) {
      //     this.setState({ showAlignment: !this.state.showAlignment });
      //   } else {
      //   }
      // } else {
      //   this.setState({ showAlignment: true });
      // }
      //   this.changeAlignmentInfo(e.target.textContent.toString());
      //   this.setState({ prevButtonPressed: targetText });
      this.props.setRace(targetText);
      // this.setState({ race: targetText });
    };
    return (
      <FormGroup>
        <Col sm={1} />
        <Col
          componentClass={ControlLabel}
          sm={2}
          className={cssStyles.createColLabelStyle}
        >
          Race:
        </Col>
        <Col sm={7}>
          <ButtonToolbar>
            <ToggleButtonGroup
              type="radio"
              name="raceValue"
              onClick={changeRace}
              className={cssStyles.alignmentButtonGroupParent}
            >
              <ToggleButton
                value={"Human"}
                className={cssStyles.alignmentButtonGroup}
              >
                Human
              </ToggleButton>
              <ToggleButton
                value={"Dwarf"}
                className={cssStyles.alignmentButtonGroup}
              >
                Dwarf
              </ToggleButton>
              <ToggleButton
                value={"Elf"}
                className={cssStyles.alignmentButtonGroup}
              >
                Elf
              </ToggleButton>
              <ToggleButton
                value={"Halfling"}
                className={cssStyles.alignmentButtonGroup}
              >
                Halfling
              </ToggleButton>
              <ToggleButton
                value={"Gnome"}
                className={cssStyles.alignmentButtonGroup}
              >
                Gnome
              </ToggleButton>

              <ToggleButton
                value={"Half-Orc"}
                className={cssStyles.alignmentButtonGroup}
              >
                Half-Orc
              </ToggleButton>
              <ToggleButton
                value={"Half-Elf"}
                className={cssStyles.alignmentButtonGroup}
              >
                Half-Elf
              </ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </Col>

        <Col sm={2} />
      </FormGroup>
    );
  }
}
