import React from "react";
import * as cssStyles from "../../../styles/Styles.css";
import {
  Button,
  ButtonToolbar,
  Col,
  ControlLabel,
  Form,
  FormGroup,
  Modal,
  NavItem,
  Panel,
  OverlayTrigger,
  Tooltip,
  Alert
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import FormControl from "react-bootstrap/es/FormControl";
import * as UserActionCreators from "../../actions/UserActionCreators";
import { bindActionCreators } from "redux";
import store from "../../store";

class Signup extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {
      userName: "",
      password: "",
      userEmail: "",
      authToken: "",
      authenticated: false,
      show: false
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

  componentDidMount() {}

  handleSignUp() {
    let emailAddress = this.userEmail.value;
    //Process email

    let regexEmail = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[A-Za-z]/i;
    let regexTestResult = regexEmail.exec(emailAddress);
    console.log(regexTestResult);
    if (regexTestResult) {
    } else {
      alert("Oops. Somethings wrong with your email address");
      return;
    }

    //process userName
    let newUserName = this.userName.value;

    let regexName = /[a-zA-Z0-9]+/i;
    let regexNameResult = regexName.exec(newUserName);
    if (regexNameResult) {
    } else {
      alert("Oops. Somethings wrong with your user name");
      return;
    }

    //process Password
    let newUserPassword = this.userPassword.value;

    let regexPassword = /[a-zA-Z0-9]*[0-9][a-zA-Z0-9]*/i;
    let regexPasswordResult = regexPassword.exec(newUserPassword);
    if (regexPasswordResult && newUserPassword.length > 7) {
    } else {
      alert("Oops. Somethings wrong your password");
      return;
    }

    //query database usernames and email must be unique
    const newUser = {
      name: newUserName,
      email: emailAddress,
      password: newUserPassword,
      isGuest: false
    };
    const queryName = `?name=${newUserName}`;

    let { dispatch } = this.props;
    let action = UserActionCreators.fetchRegisteredUser(queryName, () => {
      let databaseQueryUserResult = store.getState().userReducer.currentUser;
      console.log(databaseQueryUserResult);
      console.log("databaseQueryUserResult");
	      if (databaseQueryUserResult && databaseQueryUserResult.length > 0) {
		      alert(`User name already exists`);
		      return;
	      } else {
		      const queryUserEmail = `?email=${emailAddress}`;
		      action = UserActionCreators.fetchRegisteredUser(queryUserEmail, () => {
			      let databaseQueryUserResult = store.getState().userReducer.currentUser;
			      console.log(databaseQueryUserResult);
			      console.log("databaseQueryUserResult");
			      if (databaseQueryUserResult && databaseQueryUserResult.length > 0) {
				      alert(
					      `Email address already exists`
				      );
			      } else {
				      let thisInst = this;
				      let callbackRedirect = () => {
					      thisInst.props.history.push('/login')
				      }
				      let {dispatch} = this.props;
				      let action = UserActionCreators.createRegisteredUser(newUser, callbackRedirect);
				      dispatch(action);
			      }
		      });
		      dispatch(action);
	      }
    });

    dispatch(action);
  }

  render() {
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
      alignItems: "center"
    };
    const panelHeadingStyle = {
      borderRadius: "5px 5px 0 0",
      textAlign: "center",
      fontFamily: '"Merriweather", serif',
      marginBottom: "20px",
      borderBottom: "1px solid #df691a"
    };
    const Headerstyle = {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center"
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
                      name={"userEmail"}
                      inputRef={ref => {
                        this.userEmail = ref;
                      }}
                      placeholder="Enter email"
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
                        name={"userName"}
                        inputRef={ref => {
                          this.userName = ref;
                        }}
                        placeholder="Enter User Name"
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
                            characters <br />1 number
                          </div>
                        </Tooltip>
                      }
                    >
                      <FormControl
                        name={"userPassword"}
                        type={"password"}
                        inputRef={ref => {
                          this.userPassword = ref;
                        }}
                        placeholder="Enter Password"
                      />
                    </OverlayTrigger>
                  </Col>
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
                  <Col sm={6} style={buttonToolbarStyle}>
                    <ButtonToolbar style={buttonToolbarStyle}>
                      <Button
                        bsStyle="primary"
                        style={{ width: "90px", margin: "0px 0px 10px 0px" }}
                        onClick={this.handleSignUp}
                      >
                        Submit
                      </Button>
                      <LinkContainer
                        to={"/login"}
                        style={{ margin: "0px 0px 10px 5px", width: "90px" }}
                      >
                        <Button bsStyle="primary">Cancel</Button>
                      </LinkContainer>
                    </ButtonToolbar>
                  </Col>
                </FormGroup>
              </Form>
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
export default withRouter(connect()(Signup));
