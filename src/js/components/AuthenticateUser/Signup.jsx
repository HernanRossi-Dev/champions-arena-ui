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
let passwordHash = require('password-hash');

class Signup extends React.Component {
  constructor(props, context) {
    super();
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordConfirmChange = this.handlePasswordConfirmChange.bind(this);
    this.state = {
      userName: "",
      password: "",
      userEmail: "",
      authToken: "",
      authenticated: false,
      show: false,
	    modalBody: (<div></div>),
	    passwordConfirm:'',
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
    let regexTestResult = regexEmail.exec(emailAddress);if (regexTestResult) {
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
    let newUserPasswordConfirm = this.userPasswordConfirm.value;

    let regexPassword = /[a-zA-Z0-9]*[0-9][a-zA-Z0-9]*/i;
    let regexPasswordResult = regexPassword.exec(newUserPassword);
    if (regexPasswordResult && newUserPassword.length > 7) {
    } else {
      alert("Oops. Somethings wrong your password");
      return;
    }
    if(newUserPassword === newUserPasswordConfirm){
    } else {
	    alert("Oops. Your passwords do not match");
	    return;
    }
    //query database usernames and email must be unique
    const newUser = {
      name: newUserName,
      email: emailAddress,
      password: passwordHash.generate(newUserPassword),
      isGuest: false
    };
    const queryName = `?name=${newUserName}`;

    let { dispatch } = this.props;
    let action = UserActionCreators.fetchRegisteredUser(queryName, () => {
      let databaseQueryUserResult = store.getState().userReducer.currentUser;
	      if (databaseQueryUserResult && databaseQueryUserResult.name === newUserName) {
		      alert(`User name already exists`);
	      } else {
		      const queryUserEmail = `?email=${emailAddress}`;
		      action = UserActionCreators.fetchRegisteredUser(queryUserEmail, () => {
			      let databaseQueryUserResult = store.getState().userReducer.currentUser;
			      if (databaseQueryUserResult && databaseQueryUserResult.email === emailAddress) {
				      alert(
					      `Email address already exists`
				      );
			      } else {
				      let {dispatch} = this.props;
				      let action = UserActionCreators.createRegisteredUser(newUser);
				      dispatch(action);
              let registerConfirm = <div>Registration successful. <br/>Please log in with new user</div>
				      this.setState({modalBody: registerConfirm});
				      this.handleShow();
				      this.setState({userName: '', userEmail: '', password: '',passwordConfirm:''});
			      }
		      });
		      dispatch(action);
	      }
    });
    dispatch(action);
  }
  handleEmailChange(e){
    this.setState({userEmail: e.target.value});
  }

	handleUserNameChange(e){
		this.setState({userName: e.target.value});
	}
	handlePasswordChange(e){
		this.setState({password: e.target.value});
	}
	handlePasswordConfirmChange(e){
		this.setState({passwordConfirm: e.target.value});
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

    const ModalBodyText = () => {
      return(
        <div>{this.state.modalBody}</div>
      )
    }
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
                      onChange={this.handleEmailChange}
                      value={this.state.userEmail}
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
                        onChange={this.handleUserNameChange}
                        value={this.state.userName}
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
                            characters <br />1 number<br/>No special characters, including spaces
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
                        onChange={this.handlePasswordChange}
                        value={this.state.password}
                        placeholder="Enter Password"
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
                      placement="right"
                      overlay={
                        <Tooltip id="tooltip">
                          <div style={{ textAlign: "left" }}>
                            Must match Password above
                          </div>
                        </Tooltip>
                      }
                    >
                      <FormControl
                        name={"userPasswordConfirm"}
                        type={"password"}
                        inputRef={ref => {
                          this.userPasswordConfirm = ref;
                        }}
                        onChange={this.handlePasswordConfirmChange}
                        value={this.state.passwordConfirm}
                        placeholder="Retype Password"
                      />
                    </OverlayTrigger>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <ModalBodyText />
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
}
export default withRouter(connect()(Signup));
