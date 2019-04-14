import React, { useState } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Nav, NavDropdown, Button, MenuItem } from "react-bootstrap";
import { Navbar, NavItem } from "reactstrap";
import { LinkContainer } from "react-router-bootstrap";
import * as cssStyles from "../../../styles/Styles.css";
import store from '../../store';
import * as UserActionCreators from '../../actions/UserActionCreators';

export const NavBarComponent = (props) => {
  const { dispatch } = props;
  const [showWorld, setShowWorld] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showArena, setShowArena] = useState(false);

  const handleOpen = (action) => {
    action(true);
  }

  const handleClose = (action) => {
    action(false);
  }

  const toggleSelection = (current, action) => {
    action(!current);
  }

  const logout = async () => {
    let action;
    const user = props.currentUserName;
    if (props.isGuest) {
      action = UserActionCreators.logoutGuestUser(user);
      await dispatch(action);
    } else {
      action = UserActionCreators.logoutRegisteredUser();
      await dispatch(action);
    }
    props.history.push('/login');
  }

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
          onMouseEnter={() => handleOpen(setShowCreate)}
          onMouseLeave={() => handleClose(setShowCreate)}
          open={showCreate}
          onToggle={() => toggleSelection(showCreate, setShowCreate)}
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
          onMouseEnter={() => handleOpen(setShowArena)}
          onMouseLeave={() => handleClose(setShowArena)}
          open={showArena}
          onToggle={() => toggleSelection(showArena, setShowArena)}
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
          onMouseEnter={() => handleOpen(setShowWorld)}
          onMouseLeave={() => handleClose(setShowWorld)}
          open={showWorld}
          onToggle={() => toggleSelection(showWorld, setShowWorld)}
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
          onMouseEnter={() => handleOpen(setShowOptions)}
          onMouseLeave={() => handleClose(setShowOptions)}
          open={showOptions}
          onToggle={() => toggleSelection(showOptions, setShowOptions)}
          title={<i className="fas fa-bars" />}
          id="basic-nav-dropdown"
          noCaret
          className={cssStyles.navDropDown}
        >
          <MenuItem eventKey={3.1} className={cssStyles.navBarMenuItem}>
            {(store.getState().userReducer.loggedIn) ?
              <p>Logged in as {store.getState().userReducer.currentUserName}</p> : <p>Please Log in</p>}
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
              {(store.getState().userReducer.loggedIn) ? <Button onClick={logout}>log out</Button> : <p>Not logged in</p>}
            </MenuItem>
          </LinkContainer>
          {/*<MenuItem eventKey={3.3}>Profile</MenuItem>*/}
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};
const mapStateToProps = state => {
  return {
    currentUserName: state.userReducer.currentUserName,
    isGuest: state.userReducer.currentUser.isGuest,
    Auth: state.userReducer.authToken,
  }
};

export default withRouter(connect(mapStateToProps, null, null, { pure: false })(NavBarComponent));
