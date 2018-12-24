import React from "react";
import { Col, ControlLabel, FormGroup } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import CssBaseline from '@material-ui/core/CssBaseline';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
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
  },
  selectEmpty: {
    width: '125px',
    color: 'white',
    paddingTop: '5px',
    fontSize: '19px',
  },
  selectIcon: {
    color: '#df691a',
  },
};

class CreateCharacterNameComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      type: '',

    };
  }

  changeName = () => {
    this.props.updateName(this.characterName.value.trim());
  };

  changeType = (event) => {
    const type = event.target.value;
    this.setState({ type });
    this.props.updateType(type);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <FormGroup >
          <Col sm={1} />
          <Col
            componentClass={ControlLabel}
            sm={2}
            className={cssStyles.createColLabelStyle}
          >
            <div style={{ fontSize: '19px', fontFamily: "'Josefin Sans', sans-serif" }}>Name:</div>
          </Col>
          <Col sm={6}>
            <TextField
              style = {{ width: '90%' }}
              id="nameInput"
              placeholder="Enter Character Name"
              margin="normal"
              htmlFor="custom-css-standard-input"
              inputRef={(ref) => { this.characterName = ref; }}
              onChange={this.changeName}
              InputProps={{
                classes: {
                  root: classes.input,
                  input: classes.input,
                  underline: classes.underline
                }
              }}
            />
          </Col>
          <Col sm={0.5} />
          <FormControl required >
            <InputLabel htmlFor="type-required">
              <span style={{ fontFamily: "'Crimson Text', sans-serif", color: '#FFFFFF', fontSize: '14px' }}>Type</span>
            </InputLabel>
            <Select
              value={this.state.type}
              onChange={this.changeType}
              name="Type"
              disableUnderline
              inputProps={{
                id: 'type-required',
                classes: {
                  root: classes.selectEmpty,
                  icon: classes.selectIcon,
                }
              }}
            >
              <MenuItem value="Player">Player</MenuItem>
              <MenuItem value="NPC">NPC</MenuItem>
            </Select>
          </FormControl>
        </FormGroup>
      </div>
    );
  }
}

CreateCharacterNameComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  updateName: PropTypes.func.isRequired,
  updateType: PropTypes.func.isRequired,
};

export default withStyles(styles)(CreateCharacterNameComponent);
