import HeroList from "./HeroList.jsx";
import HeroEdit from "./HeroEdit.jsx";
import HeroCreate from "./HeroCreate.jsx";
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import store from "../store/index.js";
import { PersistGate } from "redux-persist/integration/react";
import persistor from '../store/index.js';

import {
  Route,
  BrowserRouter,
  Redirect,
  Switch,
  withRouter
} from "react-router-dom";

const NoMatch = () => <p>Page Not Found</p>;

const App = match => (
  <div>
	  <div className="card">
	  <div className="card-header">
		  Pathfinder Character Creator
	  </div>
    <div className="contents">
      <Switch>
        <Route exact path={`/heros`} component={withRouter(HeroList)} />
        <Route path={`/heros/create`} component={HeroCreate} />
        <Route path={`/heros/:id`} component={HeroEdit} />
        <Redirect from="/" to="/heros" />
        <Route path="*" component={NoMatch} />
      </Switch>
    </div>
		  <div className="card-footer">
			  copyright Hernan Rossi 2018 <br /> Pathfinder content used under open
			  gaming license
		  </div>

  </div>
  </div>
);

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
