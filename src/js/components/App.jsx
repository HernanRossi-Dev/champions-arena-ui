import HeroList from "./HeroList/HeroList.jsx";
import HeroEdit from "./HeroEdit/HeroEdit.jsx";
import CreateHeroComponent from "./CreateHeroComponents/CreateHeroComponent.jsx";
import Beasts from "./WorldInfo/BeastComponent.jsx";
import Skills from "./WorldInfo/SkillsComponent.jsx";
import ItemsComponent from "./WorldInfo/ItemsComponent.jsx";
import HomeComponent from "./HomeComponent.jsx";
import AboutSiteComponent from "./SiteInfo/AboutSiteComponent.jsx";
import CreateNPCComponent from "./CreateNPC/CreateNPCComponent.jsx";
import PathfinderCommunityUse from "./SiteInfo/PathfinderCommunityUse.jsx";
import CreateEncounter from "./Arena/CreateEncounter.jsx";
import OGL from "./SiteInfo/OGL.jsx";
import CreateCampaign from "./Arena/CreateCampaign.jsx";
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
    this.handleCloseArena = this.handleCloseArena.bind(this);
    this.handleOpenArena = this.handleOpenArena.bind(this);
    this.state = {
      dropdownOpen: false,
      isOpenWorld: false,
      isOpenCreate: false,
      isOpenOptions: false,
      isOpenArena: false,
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

  render() {
    return (
      <div>
        <Navbar toggleable={false} fluid className={cssStyles.navbarStyle} fixedTop={true}>
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
              className={cssStyles.navDropDown}

            >
              <LinkContainer to="/createHero">

                <MenuItem  eventKey={3.1} className={cssStyles.navBarMenuItem}>New Player Character</MenuItem>

              </LinkContainer>
              <LinkContainer to="/createNPC">
                <MenuItem eventKey={3.2} className={cssStyles.navBarMenuItem}>New Non-Player Character</MenuItem>

              </LinkContainer>
              {/*<LinkContainer to="/createMonster">*/}
                {/*<MenuItem eventKey={3.3} >New Monster</MenuItem>*/}
              {/*</LinkContainer>*/}
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
		          <LinkContainer to="/Campaign" >
			          <MenuItem  eventKey={3.1} className={cssStyles.navBarMenuItem}>Campaign</MenuItem>
		          </LinkContainer>
		          <LinkContainer to="/Encounter">
			          <MenuItem eventKey={3.2} className={cssStyles.navBarMenuItem}>Encounter</MenuItem>
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
              <LinkContainer to="/Beasts">
                <MenuItem eventKey={3.1} className={cssStyles.navBarMenuItem}>Beasts</MenuItem>
              </LinkContainer>
              <LinkContainer to="/Skills">
                <MenuItem eventKey={3.2} className={cssStyles.navBarMenuItem}>Skills</MenuItem>
              </LinkContainer>
              <LinkContainer to="/Items">
                <MenuItem eventKey={3.3} className={cssStyles.navBarMenuItem}>Items</MenuItem>
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
              <MenuItem eventKey={3.1} className={cssStyles.navBarMenuItem}>Logged in as Guest</MenuItem>
              <LinkContainer to="/about">
                <MenuItem eventKey={3.2} className={cssStyles.navBarMenuItem}>About Site</MenuItem>
              </LinkContainer><LinkContainer to="/OGL">
                <MenuItem eventKey={3.3} className={cssStyles.navBarMenuItem}>About OGL</MenuItem>
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
            <Route path={`/Campaign`} component={CreateCampaign} />
            <Route path={`/Encounter`} component={CreateEncounter} />
            <Route path={`/OGL`} component={OGL} />
            <Route path={`/createNPC`} component={CreateNPCComponent} />
            <Route path={`/Beasts`} component={Beasts} />
            <Route path={`/Skills`} component={Skills} />
            <Route path={`/Items`} component={ItemsComponent} />
            <Route path={`/heros/:id`} component={HeroEdit} />
            <Route path={`/legal`} component={PathfinderCommunityUse} />
            <Route path={`/about`} component={AboutSiteComponent} />
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
