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
import CreateCharacterSkillsAndFeatsComponent from "./CreateCharacterComponents/SkillsAndFeats/CreateCharacterSkillsComponent.jsx";
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { connect, Provider } from 'react-redux'
import { PersistGate } from "redux-persist/lib/integration/react";
import store from "../store/index";
	import { persistor } from "../store/index";
import { NavItem } from "react-bootstrap";
import * as cssStyles from "../../styles/Styles.css";
import "../../styles/Styles.css";
import { LinkContainer } from "react-router-bootstrap";

import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import SiteHeaderComponent from "./SiteHeaderComponent";

const NoMatch = () => <p>Page Not Found</p>;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }

  componentDidMount(){
    this.setState({loggedIn: store.getState().userReducer.loggedIn, user: store.getState().userReducer.currentUserName})
  }

	componentWillReceiveProps(nextProps){
		this.setState({loggedIn: store.getState().userReducer.loggedIn, user: store.getState().userReducer.currentUserName})
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
          <div className={["container-fluid", cssStyles.SiteContent].join(" ")}>

              <Switch>
                <PrivateRoute
                  exact
                  path={`/home`}
                  component={HomeComponent}
                />
                <PrivateRoute path={`/characters`} component={ CharacterList} />
                <PrivateRoute
                  path={`/createCharacter/skills`}
                  component={CreateCharacterSkillsAndFeatsComponent}
                />
                <PrivateRoute
                  path={`/createCharacter`}
                  component={CreateCharacterComponent}
                />
	              <Route path={( store.getState().userReducer.loggedIn)? `/home`  :`/login`} component={
		              ( store.getState().userReducer.loggedIn)? HomeComponent  :Login} />
                <PrivateRoute path={`/campaign`} component={CreateCampaign} />
                <PrivateRoute path={`/encounter`} component={CreateEncounter} />
                <Route path={`/OGL`} component={OGL} />
                <PrivateRoute path={`/createNPC`} component={CreateNPCComponent} />
                <PrivateRoute path={`/beasts`} component={Beasts} />
                <PrivateRoute path={`/skills`} component={Skills} />
                <PrivateRoute path={`/items`} component={ItemsComponent} />
                <PrivateRoute path={`/characters/:id`} component={CharacterEdit} />
                <Route path={`/legal`} component={PathfinderCommunityUse} />
                <Route path={`/about`} component={AboutSiteComponent} />
                <Redirect from="/" to="/home" />
                <Route path="*" component={NoMatch} />
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
  children: PropTypes.object.isRequired
};

ReactDOM.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
		<BrowserRouter >
      <App />
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