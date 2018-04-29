import React from "react";
import * as cssStyles from "../../../styles/Styles.css";
import {
	Button,
	ButtonToolbar,
	Col, ControlLabel,
	Form,
	FormGroup,
	Modal, NavItem,
	Panel
} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import FormControl from 'react-bootstrap/es/FormControl'

class Signup extends React.Component {
	constructor() {
		super();
		this.handleClose = this.handleClose.bind(this);
		this.handleShow = this.handleShow.bind(this);
		this.handleSignUp = this.handleSignUp.bind(this);
		this.state = {
			email: '',
			password: '',  //must be unique
			userName: '',  // must be unique
			show: false

		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}


	handleSignUp(){

	}

	render() {
		const divContainerStyle = {
			display: "flex",
			width: '100%',
			flexDirection: "column",
			alignItems: "center"
		}
		const divContainerStyleChild = {
			width: '35%',
			alignItems: "center"
		}
		const panelBody = {

			alignItems: "center"
		}

		const panelParentStyle = {
			marginTop: "25%",
			width: '100%',
		}
		const buttonToolbarStyle = {
			alignItems: "center"
		}
		const panelHeadingStyle = {
			textAlign: 'center',
			fontFamily: '\"Merriweather\", serif',
			marginBottom: '20px',
		}
		const Headerstyle = {
			display: "flex",
			justifyContent: "center",
			flexDirection: "column",
			alignItems: "center"
		};
		return (
			<div  >
				<div className={cssStyles.splash_imgLogin}>
					<div className="card-header" style={Headerstyle}>
						<img
							className={cssStyles.titleImage}
							src={require("../../../assets/PathfinderRpg.png")}
							width="371"
							height="95"
							alt=""
						/>
						<p className={cssStyles.headingText}>Character Arena</p>
					</div>
				</div>
				<div style={divContainerStyle}>
					<div style={divContainerStyleChild}>
						<Panel style={panelParentStyle}>
							<Panel.Heading  style={panelHeadingStyle} >
								<Panel.Title
								>
									Register New User.
								</Panel.Title>
							</Panel.Heading>
							<Form horizontal style={panelBody}>

								<FormGroup >
									<Col sm={1} />
									<Col
										componentClass={ControlLabel}
										sm={2}
										className={cssStyles.createColLabelStyle}
									>
										User Name
									</Col>
									<Col sm={5}>
										<FormControl
											name={"userName"}
											inputRef={ref => {
												this.userName= ref;
											}}
											placeholder="Enter User Name"
										/>
									</Col>
								</FormGroup>
								<FormGroup >
									<Col sm={1} />
									<Col
										componentClass={ControlLabel}
										sm={2}
										className={cssStyles.createColLabelStyle}
									>
										Email
									</Col>
									<Col sm={5}>
										<FormControl
											name={"userEmail"}
											inputRef={ref => {
												this.userEmail = ref;
											}}
											placeholder="Enter Email"
										/>
									</Col>
								</FormGroup>
								<FormGroup >
									<Col sm={1} />
									<Col
										componentClass={ControlLabel}
										sm={2}
										className={cssStyles.createColLabelStyle}
									>
										Password
									</Col>
									<Col sm={5}>
										<FormControl
											name={"userPassword"}
											inputRef={ref => {
												this.userPassword = ref;
											}}
											placeholder="Enter Password"
										/>
									</Col>
								</FormGroup>
								<FormGroup >
									<Modal
										show={this.state.show}
										onHide={this.handleClose}

									>
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
									<Col sm={3} />
									<Col sm={6} style={buttonToolbarStyle}>
										<ButtonToolbar style={buttonToolbarStyle}>
											<Button bsStyle="primary" onClick={this.handleSignUp}>Sign Up</Button>
											<LinkContainer to={"/login"}>
												<Button bsStyle="primary">Cancel</Button>
											</LinkContainer>

										</ButtonToolbar>
									</Col>
								</FormGroup>
							</Form>
						</Panel>
					</div>
					<div className={cssStyles.styleFooter} style={{bottom: '0%', position:'fixed'}}>
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
