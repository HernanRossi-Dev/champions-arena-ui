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

class ForgotPassword extends React.Component {
	constructor(props, context) {
		super();
		this.handleClose = this.handleClose.bind(this);
		this.handleShow = this.handleShow.bind(this);
		this.sendUserInfo = this.sendUserInfo.bind(this);
		this.state = {
			password: "",
			email: "",
			user: {},
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


 sendUserInfo() {
	 let email = this.email.value;
		//query server for email info then send a email with the users info
	 let thisInst = this;
	 let callbackModalTrigger = () => {
		 thisInst.setState({show: true});
	 };

	 const queryUser = `?email=${email}&sendEmail=true`;
	 let { dispatch } = this.props;
	 let action = UserActionCreators.fetchRegisteredUser(queryUser, callbackModalTrigger);
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
									<br /> Input your email address and we will send you a temporary password
								</Panel.Title>
							</Panel.Heading>
							<Form horizontal style={panelBody}>
								<FormGroup>
									<Col sm={1} />
									<Col
										componentClass={ControlLabel}
										sm={2}
										className={cssStyles.createColLabelStyle}
									>
										Email
									</Col>{" "}
									<Col sm={1} />
									<Col sm={5}>
										<FormControl
											name={"email"}
											inputRef={ref => {
												this.email = ref;
											}}
											placeholder="Enter email"
										/>
									</Col>
								</FormGroup>
								<FormGroup>
									<Col sm={4} />
									<Col sm={6} style={buttonToolbarStyle}>
										<ButtonToolbar style={buttonToolbarStyle}>

												<Button bsStyle="primary" onClick={this.sendUserInfo}>Submit</Button>

											<LinkContainer
												to={"/signin"}
												style={{ margin: "5px 0px 0px 0px" }}
											>
												<Button >
													Back
												</Button>
											</LinkContainer>
										</ButtonToolbar>
									</Col>
								</FormGroup>
								<FormGroup>
									<Modal show={this.state.show} onHide={this.handleClose}>
										<Modal.Header closeButton>
											<Modal.Title>Email Sent</Modal.Title>
										</Modal.Header>
										<Modal.Body>
											<p>An email with your temporary password has been sent to the address provided</p>
										</Modal.Body>
										<Modal.Footer>
											<Button onClick={this.handleClose}>Close</Button>
										</Modal.Footer>
									</Modal>
								</FormGroup>
							</Form>
						</Panel>
					</div>
				</div>
			</div>
		);
	}
}
export default withRouter(connect()(ForgotPassword));
