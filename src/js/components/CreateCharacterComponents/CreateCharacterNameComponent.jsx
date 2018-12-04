import React from "react";
import { Col, ControlLabel, FormGroup } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import * as cssStyles from "../../../styles/Styles.css";

const styles = {
  root: {
    marginTop: '8px',
    width: '80%',
  },
  input: {
    color: "white",
    fontSize: 18
  },
  underline: {
    '&:before': { // underline color when textfield is inactive
      borderBottomColor: '#697785',
      height: '1px',
    },
    '&:hover:not($disabled):before': { // underline color when hovered
      borderBottomColor: 'white',
      height: '1px',
    },
    '&:after': {
      borderBottomColor: '#df691a',
      height: '1px',
    },
  },
  focused: {
    '&:before': { // underline color when textfield is inactive
      borderBottomColor: '#df691a',
      height: '1px',
    },
    '&:hover:not($disabled):before': { // underline color when hovered
      borderBottomColor: '#df691a', height: '1px',
    },
    '&:after': {
      borderBottomColor: '#df691a', height: '1px',
    },
  }
};

class CreateCharacterNameComponent extends React.Component {
  render() {
    const { classes } = this.props;
    const changeName = () => {
      this.props.updateName(this.characterName.value.trim());
    };
    return (
      <FormGroup >
        <Col sm={1} />
        <Col
          componentClass={ControlLabel}
          sm={2}
          className={cssStyles.createColLabelStyle}
        >
          <div style={{ fontSize: '19px', fontFamily: "'Josefin Sans', sans-serif" }}>Name:</div>
        </Col>
        <Col sm={8}>
          <TextField
            style = {{ width: '80%' }}
            id="nameInput"
            placeholder="Enter Character Name"
            margin="normal"
            htmlFor="custom-css-standard-input"
            inputRef={(ref) => { this.characterName = ref; }}
            onChange={changeName}
            InputProps={{ classes: {
              root: classes.input,
              input: classes.input,
              underline: classes.underline
            }
            }}
          />
        </Col>
      </FormGroup>
    );
  }
}

CreateCharacterNameComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  updateName: PropTypes.func.isRequired,
};

export default withStyles(styles)(CreateCharacterNameComponent);
