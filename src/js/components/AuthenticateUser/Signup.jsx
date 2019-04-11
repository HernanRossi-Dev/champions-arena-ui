import React, { useState } from "react";
import * as cssStyles from "../../../styles/Styles.css";
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
import FormControl from "react-bootstrap/es/FormControl";
import * as UserActionCreators from "../../actions/UserActionCreators";
import { bindActionCreators } from "redux";
import store from "../../store";
import passwordHash from 'password-hash';
import { divContainerStyle, divContainerStyleChild, panelBody, panelParentStyle, buttonToolbarStyle, panelHeadingStyle } from './AuthStyles'

function Signup(props) {
  const { dispatch } = props;
  const boundActionCreators = bindActionCreators(UserActionCreators, dispatch);
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
    if(newUserPassword !== newUserPasswordConfirm){
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
    setState({ userName: '', userEmail: '', password: '', passwordConfirm:'' });
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
    <div className={cssStyles.loginParent}>
      <div style={divContainerStyle}>
        <div style={divContainerStyleChild}>
          <Panel style={panelParentStyle}>
            <Panel.Heading style={panelHeadingStyle}>
              <Panel.Title>
                Register for the{" "}
                <span style={{ fontFamily: "'Cinzel Decorative', cursive" }}>
                  Arena
                </span>
              </Panel.Title>
            </Panel.Heading>
            <Form horizontal style={panelBody}>
              <FormGroup>
                <Col sm={1} />
                <Col
                  componentClass={ControlLabel}
                  sm={3}
                  className={cssStyles.createColLabelStyle}
                >
                  Email
                </Col>
                <Col sm={6}>
                  <FormControl
                    name={'email'}
                    onChange={(event) => handleChange(event, 'email')}
                    value={state.email}
                    placeholder='Enter email'
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={1} />
                <Col
                  componentClass={ControlLabel}
                  sm={3}
                  className={cssStyles.createColLabelStyle}
                >
                  User Name
                </Col>
                <Col sm={6}>
                  <OverlayTrigger
                    placement="right"
                    overlay={
                      <Tooltip id="tooltip">
                        <div style={{ textAlign: "left" }}>
                          Must contain only numbers or characters
                        </div>
                      </Tooltip>
                    }
                  >
                    <FormControl
                      name={'name'}
                      onChange={(event) => handleChange(event, 'name')}
                      value={state.name}
                      placeholder='Enter User Name'
                    />
                  </OverlayTrigger>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={1} />
                <Col
                  componentClass={ControlLabel}
                  sm={3}
                  className={cssStyles.createColLabelStyle}
                >
                  Password
                </Col>
                <Col sm={6}>
                  <OverlayTrigger
                    placement="right"
                    overlay={
                      <Tooltip id="tooltip">
                        <div style={{ textAlign: "left" }}>
                          Case sensitive, must have at least:<br /> 8
                          characters <br />1 number<br/>No special characters, including spaces
                        </div>
                      </Tooltip>
                    }
                  >
                    <FormControl
                      name={'password'}
                      type={'password'}
                      onChange={(event) => handleChange(event, 'password')}
                      value={state.password}
                      placeholder='Enter Password'
                    />
                  </OverlayTrigger>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={1} />
                <Col
                  componentClass={ControlLabel}
                  sm={3}
                  className={cssStyles.createColLabelStyle}
                >
                  Confirm Password
                </Col>
                <Col sm={6}>
                  <OverlayTrigger
                    placement='right'
                    overlay={
                      <Tooltip id='tooltip'>
                        <div style={{ textAlign: "left" }}>
                          Must match Password above
                        </div>
                      </Tooltip>
                    }
                  >
                    <FormControl
                      name={'passwordConfirm'}
                      type={"password"}
                      onChange={(event) => handleChange(event, 'passwordConfirm')}
                      value={state.passwordConfirm}
                      placeholder='Retype Password'
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
                    >
                      Submit
                    </Button>
                    <LinkContainer
                      to={"/login"}
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
    </div>
  );
}
export default withRouter(connect()(Signup));
