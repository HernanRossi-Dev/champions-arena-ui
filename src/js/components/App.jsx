import CharacterList from "./CharacterList/CharacterList.jsx";
import CharacterEdit from "./CharacterEdit/CharacterEdit.jsx";
import CreateCharacterComponent from "./CreateCharacterComponents/CreateCharacterComponent.jsx";
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
import Login from "./AuthenticateUser/Login.jsx";
import Signup from "./AuthenticateUser/Signup.jsx";
import ForgotPassword from "./AuthenticateUser/ForgotPassword.jsx";
import CreateCharacterSkillsAndFeatsComponent from "./CreateCharacterComponents/SkillsAndFeats/CreateCharacterSkillsComponent.jsx";
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { connect, Provider } from 'react-redux'
import { PersistGate } from "redux-persist/lib/integration/react";
import store from "../store/index";
import { persistor } from "../store/index";
import  NavItem  from "react-bootstrap/lib/NavItem";
import * as cssStyles from "../../styles/Styles.css";
import "../../styles/Styles.css";
import  LinkContainer  from "react-router-bootstrap/lib/LinkContainer";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';


import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import SiteHeaderComponent from "./SiteHeaderComponent";

const NoMatch = () => <p>Page Not Found</p>;
const theme = createMuiTheme({
	overrides: {
		MuiInput: {
			underline: {
				'&:before': { //underline color when textfield is inactive
					backgroundColor: '#697785',
					height:'1px',
				},
				'&:hover:not($disabled):before': { //underline color when hovered
					backgroundColor: 'white',
					height:'1px',
				},
				'&:after': {
					backgroundColor: '#df691a',
					height:'1px',
				},
			},	focused: {
				'&:before': { //underline color when textfield is inactive
					color: '#df691a',
					height:'1px',
				},
				'&:hover:not($disabled):before': { //underline color when hovered
          color: '#df691a',					height:'1px',
				},
				'&:after': {
          color: '#df691a',					height:'1px',
				},
			}
		},
	}});


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
	    showFooter: true,
    };
  }

  render() {
	  const PrivateRoute = ({ component: Component, ...rest }) => (
		  <Route
			  {...rest}
			  render={props =>
				  store.getState().userReducer.loggedIn ? (
					  <Component {...props} />
				  ) : (
					  <Redirect
						  to={{
							  pathname: "/login",
							  state: { from: props.location }
						  }}
					  />
				  )
			  }
		  />
	  );
      return (
        <div className={["card", cssStyles.Site].join(" ")}>
          <SiteHeaderComponent />
          <div className={["container-fluid", cssStyles.SiteContent].join(" ")} style={{paddingLeft: 0, paddingRight: 0}}>

              <Switch>
                <PrivateRoute
                  exact
                  path={`/home`}
                  component={HomeComponent}
                />

                <PrivateRoute
                  path={`/createCharacter/skills`}
                  component={CreateCharacterSkillsAndFeatsComponent}
                />
                <PrivateRoute
                  path={`/createCharacter`}
                  component={CreateCharacterComponent}
                />
	              <Route path={!( store.getState().userReducer.loggedIn)? `/login`  :`/home`} component={
		              ( !store.getState().userReducer.loggedIn)? Login : HomeComponent  } />
                <PrivateRoute path={`/campaign`} component={CreateCampaign} />
                <PrivateRoute path={`/encounter`} component={CreateEncounter} />
                <Route path={`/OGL`} component={OGL} />
                <Route path={( !store.getState().userReducer.loggedIn)? `/signup`  :`/home`} component={
	              ( store.getState().userReducer.loggedIn)? HomeComponent  :Signup} />
                <PrivateRoute path={`/createNPC`} component={CreateNPCComponent} />
                <PrivateRoute path={`/beasts`} component={Beasts} />
                <PrivateRoute path={`/skills`} component={Skills} />
                <PrivateRoute path={`/items`} component={ItemsComponent} />
                <PrivateRoute path={`/characters/:id`} component={CharacterEdit} />
	              <PrivateRoute path={`/characters`} component={ CharacterList} />
                <Route path={`/legal`} component={PathfinderCommunityUse} />
	              <Route path={( !store.getState().userReducer.loggedIn)? `/forgotPassword`  :`/home`} component={
		              ( store.getState().userReducer.loggedIn)? HomeComponent  :ForgotPassword} />
                <Route path={`/about`} component={AboutSiteComponent} />
                <Route exact path={`/`} component={
	                ( !store.getState().userReducer.loggedIn)? Login : HomeComponent  } />
	              <Route path={`*`} component={
		              ( !store.getState().userReducer.loggedIn)? Login : HomeComponent  }/>
              </Switch>

          </div>
          <div className={cssStyles.styleFooter}>
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
  children: PropTypes.object
};

ReactDOM.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
		<BrowserRouter >
			<MuiThemeProvider theme={theme}>

      <App />
		</MuiThemeProvider>
		</BrowserRouter>
		</PersistGate>
	</Provider>,
  document.getElementById("contents")
);

if (module.hot) {
  module.hot.accept();
}

const mapStateToProps = state => {
	return{
		loggedIn: store.getState().userReducer.loggedIn,
		user: store.getState().userReducer.currentUserName,
	}
};

export default connect(mapStateToProps)(App);