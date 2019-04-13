import NavItem from "react-bootstrap/lib/NavItem";
import React from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from 'react-redux';
import { PersistGate } from "redux-persist/lib/integration/react";
import LinkContainer from "react-router-bootstrap/lib/LinkContainer";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import CharacterList from "./CharacterList/CharacterList.jsx";
import CharacterEdit from "./CharacterEdit/CharacterEdit.jsx";
import CreateCharacterComponent from "./CreateCharacterComponents/CreateCharacterComponent.jsx";
import { BeastComponent } from "./WorldInfo/BeastComponent.jsx";
import { SkillsComponent } from "./WorldInfo/SkillsComponent.jsx";
import { ItemsComponent } from "./WorldInfo/ItemsComponent.jsx";
import HomeComponent from "./Home/HomeComponent";
import { AboutSiteComponent } from "./SiteInfo/AboutSiteComponent.jsx";
import { CreateNPCComponent } from "./CreateNPC/CreateNPCComponent.jsx";
import { PathfinderCommunityUse } from "./SiteInfo/PathfinderCommunityUse.jsx";
import { CreateEncounter } from "./Arena/CreateEncounter.jsx";
import { OGL } from "./SiteInfo/OGL.jsx";
import { CreateCampaign } from "./Arena/CreateCampaign.jsx";
import Login from "./AuthenticateUser/Login.js";
import Signup from "./AuthenticateUser/Signup.jsx";
import ForgotPassword from "./AuthenticateUser/ForgotPassword.jsx";
import CreateCharacterSkillsAndFeatsComponent from "./CreateCharacterComponents/SkillsAndFeats/CreateCharacterSkillsComponent.jsx";
import store, { persistor } from "../store/index";
import * as cssStyles from "../../styles/Styles.css";
import SiteHeaderComponent from "./Home/SiteHeaderComponent";

const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      underline: {
        '&:before': { // underline color when textfield is inactive
          borderBottomColor: '#697785',
          backgroundColor: '#697785',
          height: '1px',
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid #FFFFFF`,
        },
        '&:hover:not($disabled):after': { // underline color when hovered
          borderBottomColor: '#df691a',
          backgroundColor: '#df691a',
          height: '1px',
        },
        '&:after': {
          borderBottomColor: '#df691a',
          backgroundColor: '#df691a',
          height: '1px',
        },
        disabled: {
        },
      },
      focused: {
        '&:before': { // underline color when textfield is inactive
          borderBottomColor: '#df691a',
          height: '1px',
        },
        '&:hover:not($disabled):before': { // underline color when hovered
          borderBottomColor: '#df691a', height: '1px',
        },
        '&:after': {
          borderBottomColor: '#df691a', height: '1px',
        },
      },
    },
  }
});

const App = (props) => {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
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
      <div className={["container-fluid", cssStyles.SiteContent].join(" ")} style={{ paddingLeft: 0, paddingRight: 0 }}>

        <Switch>
          <PrivateRoute
            exact
            path="/home"
            component={HomeComponent}
          />

          <PrivateRoute
            path="/createCharacter/skills"
            component={CreateCharacterSkillsAndFeatsComponent}
          />
          <PrivateRoute
            path="/createCharacter"
            component={CreateCharacterComponent}
          />
          <Route
            path={!(store.getState().userReducer.loggedIn) ? `/login` : `/home`}
            component={
            (!store.getState().userReducer.loggedIn) ? Login : HomeComponent}
          />
          <PrivateRoute path="/campaign" component={CreateCampaign} />
          <PrivateRoute path="/encounter" component={CreateEncounter} />
          <Route path="/OGL" component={OGL} />
          <Route
            path={(!store.getState().userReducer.loggedIn) ? `/signup` : `/home`}
            component={
            (store.getState().userReducer.loggedIn) ? HomeComponent : Signup}
          />
          <PrivateRoute path="/createNPC" component={CreateNPCComponent} />
          <PrivateRoute path="/beasts" component={BeastComponent} />
          <PrivateRoute path="/skills" component={SkillsComponent} />
          <PrivateRoute path="/items" component={ItemsComponent} />
          <PrivateRoute path="/characters/:id" component={CharacterEdit} />
          <PrivateRoute path="/characters" component={CharacterList} />
          <Route path="/legal" component={PathfinderCommunityUse} />
          <Route
            path={(!store.getState().userReducer.loggedIn) ? `/forgotPassword` : `/home`}
            component={
            (store.getState().userReducer.loggedIn) ? HomeComponent : ForgotPassword}
          />
          <Route path="/about" component={AboutSiteComponent} />
          <Route
            exact
            path="/"
            component={
            (!store.getState().userReducer.loggedIn) ? Login : HomeComponent}
          />
          <Route
            path="*"
            component={
            (!store.getState().userReducer.loggedIn) ? Login : HomeComponent}
          />
        </Switch>

      </div>
      <div className={cssStyles.styleFooter}>
        <div> Hernan Rossi &#169; 2019</div>
        <LinkContainer to="/legal">
          <NavItem>
            Pathfinder content used under Open Gaming License, and Community
            Use Policy
          </NavItem>
        </LinkContainer>
      </div>
    </div>
  );
};

App.propTypes = {
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

const mapStateToProps = (state) => {
  return ({
    loggedIn: store.getState().userReducer.loggedIn,
    user: store.getState().userReducer.currentUserName,
  });
};

export default connect(mapStateToProps)(App);
