import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {  Nav, NavDropdown, Button, MenuItem } from "react-bootstrap";
import { Navbar, NavItem, Dropdown } from "reactstrap";
import { LinkContainer } from "react-router-bootstrap";
import * as cssStyles from '../../styles/Styles.css';
import store from '../store';
import * as UserActionCreators from '../actions/UserActionCreators';

class NavBarComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      dropdownOpen: false,
      isOpenWorld: false,
      isOpenCreate: false,
      isOpenOptions: false,
      isOpenArena: false
    };
  }

  handleOpenWorld = () => {
    this.setState({ isOpenWorld: true });
  }

  handleCloseWorld = () => {
    this.setState({ isOpenWorld: false });
  }

  handleOpenCreate = () => {
    this.setState({ isOpenCreate: true });
  }

  handleCloseCreate = () => {
    this.setState({ isOpenCreate: false });
  }

  handleOpenOptions = () => {
    this.setState({ isOpenOptions: true });
  }

  handleCloseOptions = () => {
    this.setState({ isOpenOptions: false });
  }
  handleOpenArena = () => {
    this.setState({ isOpenArena: true });
  }

  handleCloseArena = () => {
    this.setState({ isOpenArena: false });
  }

  onToggleCreate = () => {
    this.setState({
      isOpenCreate: !this.state.isOpenCreate
    });
  }

  onToggleArena = () => {
    this.setState({
      isOpenArena: !this.state.isOpenArena
    });
  }

  onToggleWorld = () => {
    this.setState({
      isOpenWorld: !this.state.isOpenWorld
    });
  }

  onToggleOptions = () => {
    this.setState({
      isOpenOptions: !this.state.isOpenOptions
    });
  }

  logout = async () => {
    const thisInst = this;
    const { dispatch } = this.props;
    let action;
    const callbackRedirect = () => {
      thisInst.props.history.push('/login');
    };
   
    const user = this.props.currentUserName;
    if (this.props.isGuest) {
      action = UserActionCreators.logoutGuestUser(user, callbackRedirect);
      dispatch(action);
    } else {
      action = UserActionCreators.logoutRegisteredUser();
      await dispatch(action); 
    }
  }

  render() {
    return (
        <Navbar
          sticky='top'
          fixed='top'
          className={cssStyles.navbarStyle}
        >
          <Nav bsStyle="tabs" justified className={cssStyles.navBarFont}>
            <NavItem>
              <NavLink to='/home' active='true'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/characters' active='true'>Characters</NavLink>
            </NavItem>
            <NavDropdown
              eventKey={3}
              onMouseEnter={this.handleOpenCreate}
              onMouseLeave={this.handleCloseCreate}
              open={this.state.isOpenCreate}
              onToggle={this.onToggleCreate}
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
                  New Creature
                </MenuItem>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown
              eventKey={3}
              onMouseEnter={this.handleOpenArena}
              onMouseLeave={this.handleCloseArena}
              open={this.state.isOpenArena}
              onToggle={this.onToggleArena}
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
              onToggle={this.onToggleWorld}
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
              onToggle={this.onToggleOptions}
              title={<i className="fas fa-bars" />}
              id="basic-nav-dropdown"
              noCaret
              className={cssStyles.navDropDown}
            >
              <MenuItem eventKey={3.1} className={cssStyles.navBarMenuItem}>
                {(store.getState().userReducer.loggedIn) ?
                  <p>Logged in as {store.getState().userReducer.currentUserName}</p> : <p>Please Log in</p> }
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
    );
  }
}
const mapStateToProps = state => {
  return{
    currentUserName: state.userReducer.currentUserName,
    isGuest: state.userReducer.currentUser.isGuest,
    Auth: state.userReducer.authToken,
  }
};

export default withRouter(connect(mapStateToProps, null, null, { pure: false })(NavBarComponent));
