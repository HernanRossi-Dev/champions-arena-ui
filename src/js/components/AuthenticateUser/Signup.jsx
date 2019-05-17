import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  ButtonToolbar,
  Col,
  ControlLabel,
  Form,
  FormGroup,
  Modal,
  Panel,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import axios from 'axios';
import { clone } from 'lodash';
import { LinkContainer } from "react-router-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { TextField } from '@material-ui/core';
import passwordHash from 'password-hash';
import * as UserActionCreators from "../../actions/UserActionCreators";
import {
  stylesSignup as styles, LoginParent, divContainerStyle, divContainerStyleChild,
  panelBody, panelParentStyle, buttonToolbarStyle, panelHeadingStyle
} from './AuthStyles';

export const Signup = (props) => {
  const { dispatch, classes } = props;
  const [state, setState] = useState({
    name: '',
    password: '',
    email: '',
    passwordConfirm: '',
  });

  const [show, setShow] = useState(false);

  const handleSignUp = async () => {
    if (!state) {
      return;
    }
    const emailAddress = state.email;
    const regexEmail = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[A-Za-z]/i;
    const regexTestResult = regexEmail.exec(emailAddress);
    if (!regexTestResult) {
      alert('Oops. Somethings wrong with your email address');
      return;
    }
    const newUserName = state.name;
    const regexName = /[a-zA-Z0-9]+/i;
    const regexNameResult = regexName.exec(newUserName);
    if (!regexNameResult) {
      alert('Oops. Somethings wrong with your user name');
      return;
    }
    const newUserPassword = state.password;
    const newUserPasswordConfirm = state.passwordConfirm;
    const regexPassword = /[a-zA-Z0-9]*[0-9][a-zA-Z0-9]*/i;

    const regexPasswordResult = regexPassword.exec(newUserPassword);
    if (!regexPasswordResult && newUserPassword.length <= 7) {
      alert("Oops. Somethings wrong your password");
      return;
    }
    if (newUserPassword !== newUserPasswordConfirm) {
      alert("Oops. Your passwords do not match");
      return;
    }
    const newUser = {
      name: newUserName,
      email: emailAddress,
      password: passwordHash.generate(newUserPassword),
      isGuest: false
    };
    const queryName = `?name=${newUserName}`;
    const fetchUserName = await axios.get(`/api/user${queryName}`);
    if (fetchUserName.data.user) {
      alert('User name already exists');
      return;
    }
    const queryUserEmail = `?email=${emailAddress}`;
    const fetchUserEmail = await axios.get(`/api/user${queryUserEmail}`);
    if (fetchUserEmail.data.user) {
      alert('User email already exists');
      return;
    }
    const action = UserActionCreators.createRegisteredUser(newUser);
    await dispatch(action);
    setShow(true);
    setState({
      name: '', email: '', password: '', passwordConfirm: ''
    });
  };

  const handleChange = (event, type) => {
    if (!event) {
      return;
    }
    const newState = clone(state);
    newState[type] = event.target.value;
    setState(newState);
  };

  return (
    <LoginParent>
      <div style={divContainerStyle}>
        <div style={divContainerStyleChild}>
          <Panel style={panelParentStyle}>
            <Panel.Heading style={panelHeadingStyle}>
              <Panel.Title>
                Register for the
                {" "}
                <span style={{ fontFamily: "'Cinzel Decorative', cursive" }}>
                  Arena
                </span>
              </Panel.Title>
            </Panel.Heading>
            <Form horizontal style={panelBody}>
              <FormGroup>
                <Col sm={2} />
                <Col sm={8} style={{textAlign: 'center'}}>
                  <TextField
                    id="user-email"
                    placeholder="Email"
                    autoComplete="nope"
                    label={<span style={{ fontFamily: "'Crimson Text', sans-serif", color: '#df691a', fontSize: '16px' }}>Enter user email</span>}
                    onChange={e => handleChange(e, 'email')}
                    value={state.email}
                    InputProps={{
                      className: classes.input,
                      root: classes.root
                    }}
                    InputLabelProps={{
                      root: classes.labelStyle
                    }}
                    style={{ width: '100%' }}
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={2} />
                <Col sm={8}>
                  <OverlayTrigger
                    placement="right"
                    overlay={
                      (
                        <Tooltip id="tooltip">
                          <div style={{ textAlign: "left" }}>
                            Must contain only numbers or characters
                          </div>
                        </Tooltip>
                      )
                    }
                  >
                    <TextField
                      id="user-name"
                      placeholder="User Name"
                      autoComplete="nope"
                      label={<span style={{ fontFamily: "'Crimson Text', sans-serif", color: '#df691a', fontSize: '16px' }}>Enter user name</span>}
                      onChange={e => handleChange(e, 'name')}
                      value={state.name}
                      InputProps={{
                        className: classes.input,
                        root: classes.root
                      }}
                      InputLabelProps={{
                        root: classes.labelStyle
                      }}
                      style={{ width: '100%' }}
                    />
                  </OverlayTrigger>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={2} />
                <Col sm={8}>
                  <OverlayTrigger
                    placement="right"
                    overlay={
                      (
                        <Tooltip id="tooltip">
                          <div style={{ textAlign: "left" }}>Case sensitive, must have at least:
                            <br /> 8 characters 
                            <br /> 1 number
                            <br />No special characters, including spaces
                          </div>
                        </Tooltip>
                      )
                    }
                  >
                    <TextField
                      id="user-password"
                      placeholder="Password"
                      type="password"
                      autoComplete="new-password"
                      label={<span style={{ fontFamily: "'Crimson Text', sans-serif", color: '#df691a', fontSize: '16px' }}>Enter new password</span>}
                      onChange={e => handleChange(e, 'password')}
                      value={state.password}
                      InputProps={{
                        className: classes.input,
                        root: classes.root
                      }}
                      InputLabelProps={{
                        root: classes.labelStyle
                      }}
                      style={{ width: '100%' }}
                    />
                  </OverlayTrigger>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={2} />
                <Col sm={8}>
                  <OverlayTrigger
                    placement="right"
                    overlay={
                      (
                        <Tooltip id="tooltip">
                          <div style={{ textAlign: "left" }}>Must match Password above</div>
                        </Tooltip>
                      )
                    }
                  >
                    <TextField
                      id="password-confirm"
                      placeholder="Confirm password"
                      type="password"
                      autoComplete="new-password"
                      label={<span style={{ fontFamily: "'Crimson Text', sans-serif", color: '#df691a', fontSize: '16px' }}>Retype password</span>}
                      onChange={e => handleChange(e, 'passwordConfirm')}
                      value={state.passwordConfirm}
                      InputProps={{
                        className: classes.input,
                        root: classes.root
                      }}
                      InputLabelProps={{
                        root: classes.labelStyle
                      }}
                      style={{ width: '100%' }}
                    />
                  </OverlayTrigger>
                </Col>
              </FormGroup>
              <FormGroup>
                <Modal show={show} onHide={()=> setShow(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div>Registration successful. <br/>Please log in with new user</div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={()=> setShow(false)}>Close</Button>
                  </Modal.Footer>
                </Modal>
              </FormGroup>
              <FormGroup>
                <Col sm={4} />
                <Col sm={6} style={buttonToolbarStyle}>
                  <ButtonToolbar style={buttonToolbarStyle}>
                    <Button
                      bsStyle="primary"
                      style={{ width: "90px", margin: "0px 0px 10px 0px" }}
                      onClick={handleSignUp}
                    >Submit</Button>
                    <LinkContainer
                      to="/login"
                      style={{ margin: "0px 0px 10px 5px", width: "90px" }}
                    >
                      <Button bsStyle="primary">Back</Button>
                    </LinkContainer>
                  </ButtonToolbar>
                </Col>
              </FormGroup>
            </Form>
          </Panel>
        </div>
      </div>
    </LoginParent>
  );
};

Signup.propTypes = {
  classes: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

export default withRouter(connect()(withStyles(styles)(Signup)));
