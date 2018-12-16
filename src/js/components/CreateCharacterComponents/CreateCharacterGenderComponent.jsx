import React from "react";
import PropTypes from 'prop-types';
import {
  Col,
  ControlLabel,
  FormGroup,
  ToggleButtonGroup,
  ToggleButton
} from "react-bootstrap";
import * as cssStyles from "../../../styles/Styles.css";


export default class CreateCharacterGenderComponent extends React.Component {
  constructor(props) {
    super();
  }

  selectGender = (e) => {
    if (!e || !e.target) {
      return;
    }
    const newGender = e.target.value;
    this.props.updateGender(newGender);
  };

  render() {
    return (
      <FormGroup >
        <Col sm={1} />
        <Col componentClass ={ControlLabel} sm={2} className={cssStyles.createColLabelStyle} >
          <div style={{ fontSize: '19px', fontFamily: "'Josefin Sans', sans-serif" }}> Gender: </div>
        </Col>
        <Col sm={5}>
          <ToggleButtonGroup
            type="radio"
            name="gender"
            onClick={this.selectGender}
            className={cssStyles.alignmentButtonGroupParent}
          >
            <ToggleButton
              value="Male"
              className={cssStyles.alignmentButtonGroup}
            >
              Male
            </ToggleButton>
            <ToggleButton
              value="Female"
              className={cssStyles.alignmentButtonGroup}
            >
            Female
            </ToggleButton>
            <ToggleButton value="Other" className={cssStyles.alignmentButtonGroup}>Other</ToggleButton>
          </ToggleButtonGroup>
        </Col>
        <Col sm={1} > {} </Col>
      </FormGroup>
    );
  }
}

CreateCharacterGenderComponent.propTypes = {
  updateGender: PropTypes.func.isRequired,
};
