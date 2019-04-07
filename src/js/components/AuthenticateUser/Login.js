import React, { useState } from "react";
import axios from 'axios';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import {
  Button,
  ButtonToolbar,
  Col,
  Form,
  FormGroup,
  NavItem,
  Panel
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrrentUser, loginRegisteredUser } from '../../actions/UserActionCreators';
import * as cssStyles from "../../../styles/Styles.css";
import * as UserActionCreators from "../../actions/UserActionCreators";
import { LoginContainer } from "./stylescss";
import { clone } from 'lodash';

const passwordHash = require("password-hash");

const styles = {
  root: {
    fontColor: 'white'
  },
  input: {
    color: "white",
    fontSize: 18,
    fontColor: 'white'
  },
  labelStyle: {
    color: '#df691a',
    fontSize: 16,
    fontFamily: "'Crimson Text', sans-serif",
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

const divContainerStyle = {
  backgroundColor: 'transparent',
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "center"
};
const panelBody = {
  backgroundColor: 'transparent',
  alignItems: "center"
};
const panelParentStyle = {
  borderRadius: "5px",
  marginTop: "25%",
  width: "100%"
};
const buttonToolbarStyle = {
  alignItems: "center",
  marginLeft: '-10px'
};
const panelHeadingStyle = {
  borderRadius: "5px 5px 0 0",
  textAlign: "center",
  fontFamily: '"Merriweather", serif',
  marginBottom: "20px",
  borderBottom: "1px solid #df691a"
};

function Login(props) {
  const { dispatch, classes, history } = props;
  const [state, setState] = useState({ email: '', password: '' });

  const handleSignIn = async () => {
    let fetchUser;
    try {
      fetchUser = await axios.get(`/api/user?email=${state.email}`);
      if (!fetchUser.data) {
        alert('Could not find user.');
        return;
      }
      fetchUser = fetchUser.data.user
      const savedPass = fetchUser.password;
      const validPassword = passwordHash.verify(state.password, savedPass);
      if (!validPassword) {
        alert('Incorrect Password.');
        return;
      }
    } catch (err) {
      alert('Invalid Credentials.');
      return;
    }
    const action = setCurrrentUser(fetchUser);
    await dispatch(action);
    await dispatch(loginRegisteredUser());
    history.push("/home");
  };

  const handleSignInGuest = async () => {
    let guestUserName = 'guest';
    guestUserName += Math.random().toString().slice(2, 7);
    const newGuestUser = {
      name: guestUserName,
      email: '',
      password: "12345",
      isGuest: true
    };
    const action = UserActionCreators.createGuestUser(newGuestUser);
    await dispatch(action);
    history.push("/home");
  }

  const handleChange = (event, type) => {
    if (!event) {
      return;
    }
    const newState = clone(state);
    newState[type] = event.target.value;
    setState(newState);
  };

  return (
    <div className={cssStyles.loginParent}>
      <div style={divContainerStyle}>
        <LoginContainer>
          <Panel style={panelParentStyle}>
            <Panel.Heading style={panelHeadingStyle}>
              <Panel.Title>
                Welcome to the{" "}
                <span style={{ fontFamily: "'Cinzel Decorative', cursive" }}>
                  Arena
                  </span>
                <br /> Please Log In
                </Panel.Title>
            </Panel.Heading>
            <div className={cssStyles.formcontainer}>
              <Form horizontal style={panelBody}>
                <FormGroup>
                  <Col sm={3} />
                  <Col sm={6}>
                    <TextField
                      id="user-email"
                      placeholder="User Email"
                      label={<span style={{ fontFamily: "'Crimson Text', sans-serif", color: '#df691a', fontSize: '16px' }}>User Email</span>}
                      onChange={(e) => handleChange(e, 'email')}
                      className={classes.root}
                      InputProps={{
                        className: classes.input,
                      }}
                      InputLabelProps={{
                        root: classes.labelStyle
                      }}
                    />
                  </Col>
                  <Col sm={3} />
                </FormGroup>
                <FormGroup>
                  <Col sm={3} />
                  <Col sm={6}>
                    <div >
                      <TextField
                        id="user-password"
                        placeholder="User Password"
                        type="password"
                        onChange={(e) => handleChange(e, 'password')}
                        className={classes.root}
                        InputProps={{
                          className: classes.input,
                        }}
                        InputLabelProps={{
                          className: classes.labelStyle
                        }}
                        label={<span style={{ fontFamily: "'Crimson Text', sans-serif", color: '#df691a', fontSize: '16px' }}>User Password</span>}
                      />
                    </div>
                  </Col>
                  <Col sm={3} />
                </FormGroup>
                <FormGroup>
                  <Col sm={4} />
                  <Col sm={8}>
                    <ButtonToolbar >
                      <LinkContainer to="/forgotPassword" style={{ fontColor: 'white' }}>
                        <NavItem >
                          Forgot password?
                          </NavItem>
                      </LinkContainer>
                    </ButtonToolbar>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={4} />
                  <Col sm={6} style={buttonToolbarStyle}>
                    <ButtonToolbar style={buttonToolbarStyle}>
                      <LinkContainer to="/home" style={{ width: "90px" }}>
                        <Button bsStyle="primary" onClick={handleSignIn}>
                          Log In
                          </Button>
                      </LinkContainer>
                      <LinkContainer
                        to="/signup"
                        style={{ margin: "0px 0px 0px 5px", width: "90px" }}
                      >
                        <Button bsStyle="primary">Register</Button>
                      </LinkContainer>
                      <LinkContainer
                        to="/"
                        style={{ margin: "5px 0px 5px 20px" }}
                      >
                        <Button onClick={handleSignInGuest}>
                          Continue as Guest
                          </Button>
                      </LinkContainer>
                    </ButtonToolbar>
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </Panel>
        </LoginContainer>
      </div>
    </div>
  );
}

Login.propTypes = {
  classes: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

export default withRouter(connect()(withStyles(styles)(Login)));
