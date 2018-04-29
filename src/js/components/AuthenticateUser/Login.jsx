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
import * as UserActionCreators from '../../actions/UserActionCreators';
import { bindActionCreators } from "redux";
import store from '../../store'


class Login extends React.Component {
	constructor(props, context) {
		super(props, context);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignInGuest = this.handleSignInGuest.bind(this);
    this.state = {
    	userName: '',
	    password: '',
	    userEmail: '',
	    authToken: '',
			authenticated: false,
	    show: false,

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

  handleSignIn(){

  }

  componentDidMount(){

  }

  handleSignInGuest(){
		const newGuestUser = {
			name: 'guest',
			email: 'guest@gmail.com',
			password: '12345',
			isGuest: true
		}
	  let thisInst = this;
		let callbackRedirect = () =>{
			thisInst.props.history.push('/home')
		}
	  let { dispatch } = this.props;
	  let action = UserActionCreators.createGuestUser(newGuestUser,callbackRedirect );
	  dispatch(action);
  }

	render() {
  	const divContainerStyle = {
		  display: "flex",
			width: '100%',
		  flexDirection: "column",
		  alignItems: "center"
	  }
	  const divContainerStyleChild = {
			width: '25%',
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
			<div  className={cssStyles.loginParent}>
				<div style={divContainerStyle}>
				<div style={divContainerStyleChild}>
				<Panel style={panelParentStyle}>
					<Panel.Heading  style={panelHeadingStyle} >
						<Panel.Title
						>
							Welcome. Please Log In.
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
								Email
							</Col>	<Col sm={1} />
							<Col sm={5}>
								<FormControl
									name={"userEmail"}
									inputRef={ref => {
										this.userEmail = ref;
									}}
									placeholder="Enter email"
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
							</Col>	<Col sm={1} />
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
							<Col sm={4} />
							<Col sm={6} style={buttonToolbarStyle}>
								<ButtonToolbar style={buttonToolbarStyle}>
									<LinkContainer to={"/home"}>
										<Button bsStyle="primary" onClick={this.handleSignIn}>Sign In</Button>
									</LinkContainer>
									<LinkContainer to={"/signup"}>
										<Button bsStyle="primary">Register</Button>
									</LinkContainer>
									<LinkContainer to={"/"}>
										<Button  onClick={this.handleSignInGuest}>Continue as Guest</Button>
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
export default withRouter(connect()(Login));
