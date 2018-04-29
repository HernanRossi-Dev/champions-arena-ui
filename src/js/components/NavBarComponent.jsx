import React from 'react'
import * as cssStyles from '../../styles/Styles.css'
import { MenuItem, Nav, Navbar, NavDropdown, NavItem, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import store from '../store'
import * as UserActionCreators from '../actions/UserActionCreators';
import { bindActionCreators } from "redux";
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


class NavBarComponent extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.handleOpenWorld = this.handleOpenWorld.bind(this);
		this.handleOpenCreate = this.handleOpenCreate.bind(this);
		this.handleCloseWorld = this.handleCloseWorld.bind(this);
		this.handleOpenOptions = this.handleOpenOptions.bind(this);
		this.handleCloseOptions = this.handleCloseOptions.bind(this);
		this.handleCloseCreate = this.handleCloseCreate.bind(this);
		this.handleCloseArena = this.handleCloseArena.bind(this);
		this.handleOpenArena = this.handleOpenArena.bind(this);
		this.logout = this.logout.bind(this);
		this.state = {
			dropdownOpen: false,
			isOpenWorld: false,
			isOpenCreate: false,
			isOpenOptions: false,
			isOpenArena: false
		};
		const { dispatch } = props;
		this.boundActionCreators = bindActionCreators(UserActionCreators, dispatch);
	}

	handleOpenWorld() {
		this.setState({ isOpenWorld: true });
	}

	handleCloseWorld() {
		this.setState({ isOpenWorld: false });
	}

	handleOpenCreate() {
		this.setState({ isOpenCreate: true });
	}

	handleCloseCreate() {
		this.setState({ isOpenCreate: false });
	}

	handleOpenOptions() {
		this.setState({ isOpenOptions: true });
	}

	handleCloseOptions() {
		this.setState({ isOpenOptions: false });
	}
	handleOpenArena() {
		this.setState({ isOpenArena: true });
	}

	handleCloseArena() {
		this.setState({ isOpenArena: false });
	}

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	logout(){
		let { dispatch } = this.props;
		let action = UserActionCreators.logoutUser();
		dispatch(action);
	}
	render() {
		return (
			<div>
				<Navbar
					toggleable={false}
					fluid
					className={cssStyles.navbarStyle}
					fixedTop={true}
				>
					<Nav bsStyle="tabs" justified className={cssStyles.navBarFont}>
						<LinkContainer to="/home">
							<NavItem>Home</NavItem>
						</LinkContainer>
						<LinkContainer to="/characters">
							<NavItem>Characters</NavItem>
						</LinkContainer>
						<NavDropdown
							eventKey={3}
							onMouseEnter={this.handleOpenCreate}
							onMouseLeave={this.handleCloseCreate}
							open={this.state.isOpenCreate}
							title="Create New Character"
							id="basic-nav-dropdown"
							className={cssStyles.navDropDown}
						>
							<LinkContainer to="/createCharacter">
								<MenuItem eventKey={3.1} className={cssStyles.navBarMenuItem}>
									New Player Character
								</MenuItem>
							</LinkContainer>
							<LinkContainer to="/createNPC">
								<MenuItem eventKey={3.2} className={cssStyles.navBarMenuItem}>
									New Non-Player Character
								</MenuItem>
							</LinkContainer>
						</NavDropdown>
						<NavDropdown
							eventKey={3}
							onMouseEnter={this.handleOpenArena}
							onMouseLeave={this.handleCloseArena}
							open={this.state.isOpenArena}
							title="Arena"
							id="basic-nav-dropdown"
							className={cssStyles.navDropDown}
						>
							<LinkContainer to="/campaign">
								<MenuItem eventKey={3.1} className={cssStyles.navBarMenuItem}>
									Campaign
								</MenuItem>
							</LinkContainer>
							<LinkContainer to="/encounter">
								<MenuItem eventKey={3.2} className={cssStyles.navBarMenuItem}>
									Encounter
								</MenuItem>
							</LinkContainer>
						</NavDropdown>
						<NavDropdown
							eventKey={3}
							onMouseEnter={this.handleOpenWorld}
							onMouseLeave={this.handleCloseWorld}
							open={this.state.isOpenWorld}
							title="World Info"
							id="basic-nav-dropdown"
							className={cssStyles.navDropDown}
						>
							<LinkContainer to="/beasts">
								<MenuItem eventKey={3.1} className={cssStyles.navBarMenuItem}>
									Beasts
								</MenuItem>
							</LinkContainer>
							<LinkContainer to="/skills">
								<MenuItem eventKey={3.2} className={cssStyles.navBarMenuItem}>
									Skills
								</MenuItem>
							</LinkContainer>
							<LinkContainer to="/items">
								<MenuItem eventKey={3.3} className={cssStyles.navBarMenuItem}>
									Items
								</MenuItem>
							</LinkContainer>
						</NavDropdown>

						<NavDropdown
							eventKey={3}
							onMouseEnter={this.handleOpenOptions}
							onMouseLeave={this.handleCloseOptions}
							open={this.state.isOpenOptions}
							title={<i className="fas fa-bars" />}
							id="basic-nav-dropdown"
							noCaret
							className={cssStyles.navDropDown}
						>
							<MenuItem eventKey={3.1} className={cssStyles.navBarMenuItem}>
								{(store.getState().userReducer.loggedIn) ?
									<p>Logged in as {store.getState().userReducer.currentUserName}</p>  : <p>Please Log in</p> }
							</MenuItem>
							<LinkContainer to="/about">
								<MenuItem eventKey={3.2} className={cssStyles.navBarMenuItem}>
									About Site
								</MenuItem>
							</LinkContainer>
							<LinkContainer to="/OGL">
								<MenuItem eventKey={3.3} className={cssStyles.navBarMenuItem}>
									About OGL
								</MenuItem>
							</LinkContainer>
							<LinkContainer to="/logout">
								<MenuItem eventKey={3.3} className={cssStyles.navBarMenuItem}>
									{(store.getState().userReducer.loggedIn)? <Button onClick={this.logout}>log out</Button> : <p>Not logged in</p>}
								</MenuItem>
							</LinkContainer>
							{/*<MenuItem eventKey={3.3}>Profile</MenuItem>*/}
						</NavDropdown>
					</Nav>
				</Navbar>
			</div>
		);
	}
}

export default withRouter(connect()(NavBarComponent));