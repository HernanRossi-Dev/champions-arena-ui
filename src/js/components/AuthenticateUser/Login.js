import React from "react";
import axios from 'axios';
import "whatwg-fetch";
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import {
  Button,
  ButtonToolbar,
  Col,
  Form,
  FormGroup,
  Modal,
  NavItem,
  Panel
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrrentUser, loginRegisteredUser } from '../../actions/UserActionCreators';
import * as cssStyles from "../../../styles/Styles.css";
import * as UserActionCreators from "../../actions/UserActionCreators";
import store from "../../store";
import { LoginContainer } from "./stylescss";

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

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  handleSignIn = async () => {
    const email = this.email.value;
    const password = this.password.value;
    const hashedPassword = passwordHash.generate(password);
    const queryUser = `?email=${email}&password=${passwordHash.generate(hashedPassword)}`;
    const thisInst = this;
    const callbackRedirect = () => {
      thisInst.props.history.push("/home");
    };
    const { dispatch } = this.props;
    let fetchUser;
    try {
      fetchUser = await axios.get(`/api/users${queryUser}`);
      if (!fetchUser.data){
        throw new Error('No user found!');
      }
      fetchUser = fetchUser.data.users[0];
    } catch (err) {
      console.log('Fetching user error: ', err);
    }
    const action = setCurrrentUser(fetchUser);
    await this.props.dispatch(action);

    if (fetchUser && fetchUser.email !== email) {
      alert(`Password/Email combination does not match any registered user.`);
    } else {
      await dispatch(loginRegisteredUser(callbackRedirect));
    }
  }

  handleSignInGuest = () => {
    let guestUserName = 'guest';
    guestUserName += Math.random().toString().slice(2, 7);
    const newGuestUser = {
      name: guestUserName,
      email: '',
      password: "12345",
      isGuest: true
    };
    const thisInst = this;
    const callbackRedirect = () => {
      thisInst.props.history.push("/home");
    };
    const { dispatch } = this.props;
    const action = UserActionCreators.createGuestUser(
      newGuestUser,
      callbackRedirect
    );
    dispatch(action);
  }

  render() {
    const { classes } = this.props;
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
                        id="email"
                        placeholder="User Email"
                        label={<span style={{ fontFamily: "'Crimson Text', sans-serif", color: '#df691a', fontSize: '16px' }}>User Email</span>}
                        inputRef={(ref) => {
                          this.email = ref;
                        }}
                        className={classes.root}
                        InputProps={{
                          className: classes.input

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
                          id="password"
                          placeholder="User Password"
                          type="password"
                          inputRef={(ref) => { this.password = ref; }}
                          className={classes.root}
                          InputProps={{
                            className: classes.input
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
                    <Modal show={this.state.show} onHide={this.handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Invalid Submission</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <p>This needs to be created</p>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                      </Modal.Footer>
                    </Modal>
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
                          <Button bsStyle="primary" onClick={this.handleSignIn}>
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
                          <Button onClick={this.handleSignInGuest}>
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
}

Login.propTypes = {
  classes: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

export default withRouter(connect()(withStyles(styles)(Login)));
