import HeroList from "./HeroList.jsx";
import HeroEdit from "./HeroEdit.jsx";
import CreateHeroComponent from "./CreateHeroComponents/CreateHeroComponent.jsx";
import Beasts from "./BeastComponent.jsx";
import Skills from "./SkillsComponent.jsx";
import ItemsComponent from "./ItemsComponent.jsx";
import HomeComponent from "./HomeComponent.jsx";
import AboutSiteComponent from "./AboutSiteComponent.jsx";
import ArenaStartComponent from "./ArenaStartComponent.jsx";
import CreateNPCComponent from "./CreateNPCComponent.jsx";
import CreateMonster from "./CreateMonster.jsx";
import PathfinderOGL from "./PathfinderOGL.jsx";
import CreateHeroSkillsAndFeatsComponent from "./CreateHeroComponents/SkillsAndFeats/CreateHeroSkillsAndFeatsComponent.jsx";
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import {Provider} from "react-redux";
import store from "../store/index.js";
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import * as cssStyles from "../../styles/Styles.css";
import "../../styles/Styles.css";
import {LinkContainer} from "react-router-bootstrap";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handleOpenWorld = this.handleOpenWorld.bind(this);
    this.handleOpenCreate = this.handleOpenCreate.bind(this);
    this.handleCloseWorld = this.handleCloseWorld.bind(this);
    this.handleOpenOptions = this.handleOpenOptions.bind(this);
    this.handleCloseOptions = this.handleCloseOptions.bind(this);
    this.handleCloseCreate = this.handleCloseCreate.bind(this);
    this.state = {
      dropdownOpen: false,
      isOpenWorld: false,
      isOpenCreate: false,
      isOpenOptions: false
    };
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

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar toggleable={false} fluid >
          <Nav bsStyle="tabs" justified className={cssStyles.navBarFont}>
            <LinkContainer to="/home">
              <NavItem>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/heros">
              <NavItem>Characters</NavItem>
            </LinkContainer>
            <NavDropdown
              eventKey={3}
              onMouseEnter={this.handleOpenCreate}
              onMouseLeave={this.handleCloseCreate}
              open={this.state.isOpenCreate}
              title="Create New Character"
              id="basic-nav-dropdown"

            >
              <LinkContainer to="/createHero" >

                <MenuItem  eventKey={3.1} >New Player Character</MenuItem>

              </LinkContainer>
              <LinkContainer to="/createNPC">
                <MenuItem eventKey={3.2}>New Non-Player Character</MenuItem>

              </LinkContainer>
              <LinkContainer to="/createMonster">
                <MenuItem eventKey={3.3} >New Monster</MenuItem>
              </LinkContainer>
            </NavDropdown>

            <LinkContainer to="/Arena">
              <NavItem>Arena</NavItem>
            </LinkContainer>
            <NavDropdown
              eventKey={3}
              onMouseEnter={this.handleOpenWorld}
              onMouseLeave={this.handleCloseWorld}
              open={this.state.isOpenWorld}
              title="World Info"
              id="basic-nav-dropdown"
            >
              <LinkContainer to="/Beasts">
                <MenuItem eventKey={3.1}>Beasts</MenuItem>
              </LinkContainer>
              <LinkContainer to="/Skills">
                <MenuItem eventKey={3.2}>Skills</MenuItem>
              </LinkContainer>
              <LinkContainer to="/Items">
                <MenuItem eventKey={3.3}>Items</MenuItem>
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
            >
              <MenuItem eventKey={3.1}>Logged in as Guest</MenuItem>
              <LinkContainer to="/about">
                <MenuItem eventKey={3.2}>About Site</MenuItem>
              </LinkContainer>
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


const NoMatch = () => <p>Page Not Found</p>;

class App extends React.Component {
  render() {
    return (
      <div className={["card", cssStyles.Site].join(" ")}>
        <Header />

        <div className={cssStyles.splash_img}>
          <div className="card-header" style={style}>
            <img className={cssStyles.titleImage}
              src={require("../../assets/PathfinderRpg.png")}
              width="371"
              height="95"
              alt=""
            />
            <p className={cssStyles.headingText}>Character Arena</p>
          </div>
        </div>

        <div className={["container-fluid", cssStyles.SiteContent].join(" ")}>
          <Switch>
            <Route exact path={`/heros`} component={withRouter(HeroList)} />
            <Route path={`/home`} component={HomeComponent} />
            <Route path={`/createHero/skills`} component={CreateHeroSkillsAndFeatsComponent} />
            <Route path={`/createHero`} component={CreateHeroComponent} />
            <Route path={`/createNPC`} component={CreateNPCComponent} />
            <Route path={`/createMonster`} component={CreateMonster} />
            <Route path={`/Beasts`} component={Beasts} />
            <Route path={`/Skills`} component={Skills} />
            <Route path={`/Items`} component={ItemsComponent} />
            <Route path={`/heros/:id`} component={HeroEdit} />
            <Route path={`/legal`} component={PathfinderOGL} />
            <Route path={`/about`} component={AboutSiteComponent} />
            <Route path={`/arena`} component={ArenaStartComponent} />
            <Redirect from="/" to="/home" />
            <Route path="*" component={NoMatch} />
          </Switch>
        </div>
        <div  className={cssStyles.styleFooter}>
          <div> Hernan Rossi &#169; 2018</div>
          <LinkContainer to="/legal">
            <NavItem>
              Pathfinder content used under Open Gaming License, and Community
              Use Policy
            </NavItem>
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
