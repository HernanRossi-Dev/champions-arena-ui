import HeroList from "./HeroList.jsx";
import HeroEdit from "./HeroEdit.jsx";
import HeroCreate from "./HeroCreate.jsx";
import Beasts from "./BeastComponent.jsx";
import Ability from "./AbilityComponent.jsx";
import ItemsComponent from "./ItemsComponent.jsx";
import HomeComponent from "./HomeComponent.jsx";

import PathfinderOGL from "./PathfinderOGL.jsx";
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import store from "../store/index.js";
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from "react-bootstrap";
import * as cssStyles from "../../styles/Styles.css";
import { LinkContainer } from "react-router-bootstrap";
import {
  Route,
  BrowserRouter,
  Redirect,
  Switch,
  withRouter
} from "react-router-dom";


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable={false} fluid>
          <Nav bsStyle="tabs" justified>
            <LinkContainer to="/home">
              <NavItem>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/heros">
              <NavItem>Characters</NavItem>
            </LinkContainer>
            <LinkContainer to="/createHero">
              <NavItem>
                Create Character <i className="fas fa-plus" />
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/Beasts">
              <NavItem>Beasts</NavItem>
            </LinkContainer>
            <LinkContainer to="/Abilities">
              <NavItem>Abilities</NavItem>
            </LinkContainer>
            <LinkContainer to="/Items">
              <NavItem>Items</NavItem>
            </LinkContainer>
            <NavDropdown
              eventKey={3}
              title={<i className="fas fa-bars" />}
              id="basic-nav-dropdown"
              noCaret
            >
              <MenuItem eventKey={3.1}>Logged in as Guest</MenuItem>
              {/*<MenuItem eventKey={3.2}>Logout</MenuItem>*/}
              {/*<MenuItem eventKey={3.3}>Profile</MenuItem>*/}
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

const style = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center"
};

const styleFooter = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
	padding: "12px",
width: "100%",
background: "#D8D8D8",
};
const NoMatch = () => <p>Page Not Found</p>;

class App extends React.Component {
  render() {
    return (
      <div className={["card", cssStyles.Site].join(" ")}>
        <div className={cssStyles.splash_img}>

          <div className="card-header" style={style}>
            <img
              src={require("../../assets/PathfinderRpg.png")}
              width="371"
              height="95"
              alt=""
            />
            <p className={cssStyles.headingText}>Character Arena</p>
          </div>
        </div>
        <div>
          <Header />
        </div>
        <div className={["container-fluid", cssStyles.SiteContent].join(" ")}>
          <Switch>
            <Route exact path={`/heros`} component={withRouter(HeroList)} />
            <Route path={`/home`} component={HomeComponent} />
            <Route path={`/createHero`} component={HeroCreate} />
            <Route path={`/Beasts`} component={Beasts} />
            <Route path={`/Abilities`} component={Ability} />
            <Route path={`/Items`} component={ItemsComponent} />
            <Route path={`/heros/:id`} component={HeroEdit} />
            <Route path={`/legal`} component={PathfinderOGL} />
            <Redirect from="/" to="/home" />
            <Route path="*" component={NoMatch} />
          </Switch>
        </div>
        <div className="card-footer" style={styleFooter}>
          <div> Hernan Rossi &#169; 2018</div>
	        <LinkContainer to="/legal">
		        <NavItem>Pathfinder content used under open gaming license</NavItem>
	        </LinkContainer>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("contents")
);

if (module.hot) {
  module.hot.accept();
}
