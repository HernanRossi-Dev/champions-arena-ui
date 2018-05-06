import React from "react";
import * as cssStyles from "../../../styles/Styles.css";
import "whatwg-fetch";
import {TextField} from 'material-ui';
import { withStyles } from 'material-ui/styles';
import PropTypes from "prop-types";
import {
  Button,
  ButtonToolbar,
  Col,
  ControlLabel,
  Form,
  FormGroup,
  Modal,
  NavItem,
  Panel
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import FormControl from "react-bootstrap/es/FormControl";
import * as UserActionCreators from "../../actions/UserActionCreators";
import { bindActionCreators } from "redux";
import store from "../../store";
var passwordHash = require("password-hash");
const styles = {
  root: {
    fontColor:'white'
  },
  input: {
    color: "white",
    fontSize: 18,
    fontColor:'white'
  },
  labelStyle:{
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
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignInGuest = this.handleSignInGuest.bind(this);
    this.state = {
      name: "",
      password: "",
      email: "",
      authToken: "",
      authenticated: false,
      show: false,
      tempToken: ''
    };
    const { dispatch } = props;
    this.boundActionCreators = bindActionCreators(UserActionCreators, dispatch);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleSignIn() {

    let email = this.email.value;
    let password = this.password.value;
		const hashedPassword = passwordHash.generate(password);
    const queryUser = `?email=${email}&password=${passwordHash.generate(
      password
    )}`;
    let thisInst = this;
    let callbackRedirect = () => {
      thisInst.props.history.push("/home");
    };

	  let { dispatch } = this.props;
	  function resolveDispatch() {
		  return new Promise(resolve => {
			  let action = UserActionCreators.fetchRegisteredUser(queryUser, () => {
				  let databaseQueryUserResult = store.getState().userReducer.currentUser;
				  console.log(databaseQueryUserResult);console.log('databaseQueryUserResult');
				  console.log(email);console.log('email');

				  if (databaseQueryUserResult && databaseQueryUserResult.email !== email ) {
					  alert(`Password/Email combination does not match any registered user.`);
				  } else {
					  let actionLogin = UserActionCreators.loginRegisteredUser(callbackRedirect);
					  dispatch(actionLogin);
				  }
			  });
			  resolve(  dispatch(action));
		  })
	  }

	  async function asyncDispatch() {
		  let result = await resolveDispatch();

	  }
	  asyncDispatch();

  }

  handleSignInGuest() {
    const newGuestUser = {
      name: "guest",
      email: "guest@gmail.com",
      password: "12345",
      isGuest: true
    };
    let thisInst = this;
    let callbackRedirect = () => {
      thisInst.props.history.push("/home");
    };
    let { dispatch } = this.props;
    let action = UserActionCreators.createGuestUser(
      newGuestUser,
      callbackRedirect
    );
    dispatch(action);
  }

  render() {
    const { classes } = this.props;

    const divContainerStyle = {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      alignItems: "center"

    };
    const divContainerStyleChild = {
      width: "25%",
      alignItems: "center"
    };
    const panelBody = {
      alignItems: "center"
    };
    const panelParentStyle = {
      borderRadius: "5px",
      marginTop: "25%",
      width: "100%"
    };
    const buttonToolbarStyle = {
      alignItems: "center",
      marginLeft:'-10px'
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
          <div style={divContainerStyleChild}>
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
                      label={<span style={{ fontFamily: "'Crimson Text', sans-serif",color: '#df691a', fontSize:'16px' }}>User Email</span>}
                      inputRef={ref => {
                        this.email = ref;}}
                      className={classes.root}
                      InputProps={{
                        className: classes.input

                      }}
                      InputLabelProps={{
                        root: classes.labelStyle
                      }}
                    />
                  </Col>
                  <Col sm={3}/>
                </FormGroup>

                <FormGroup>
                  <Col sm={3} />
                  <Col sm={6}>
                    <div  >
                    <TextField
                      id="password"
                      placeholder="User Password"
                      type={'password'}
                      inputRef={ref => {
                        this.password = ref;}}

                      className={classes.root}
                      InputProps={{
                        className: classes.input

                      }}
                      InputLabelProps={{
                        className: classes.labelStyle
                      }}
                      label={<span style={{ fontFamily: "'Crimson Text', sans-serif",color: '#df691a', fontSize:'16px'  }}>User Password</span>}
                    />
                    </div>
                  </Col>
                  <Col sm={3}/>

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
		              <Col sm={4}/>
		              <Col sm={8}>
			              <ButtonToolbar >
				              <LinkContainer to={"/forgotPassword"} style={{fontColor: 'white'}}>
					              <NavItem  >
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
                      <LinkContainer to={"/home"} style={{ width: "90px" }}>
                        <Button bsStyle="primary" onClick={this.handleSignIn}>
                          Log In
                        </Button>
                      </LinkContainer>
                      <LinkContainer
                        to={"/signup"}
                        style={{ margin: "0px 0px 0px 5px", width: "90px" }}
                      >
                        <Button bsStyle="primary">Register</Button>
                      </LinkContainer>
                      <LinkContainer
                        to={"/"}
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
          </div>
          <div
            className={cssStyles.styleFooter}
            style={{ bottom: "0%", position: "fixed" }}
          >
            <div> Hernan Rossi &#169; 2018</div>
            <LinkContainer to="/legal">
              <NavItem>
                Pathfinder content used under Open Gaming License, and Community
                Use Policy
              </NavItem>
            </LinkContainer>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(connect()(withStyles(styles)(Login)));
