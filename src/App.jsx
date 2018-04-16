import HeroList from "./HeroList.jsx";
import HeroEdit from "./HeroEdit.jsx";
import HeroCreate from "./HeroCreate.jsx";
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Route, BrowserRouter, Redirect, Switch, withRouter } from "react-router-dom";

const contentNode = document.getElementById("contents");
const NoMatch = () => <p>Page Not Found</p>;

const App = (match) => (
  <div>
    <div className="header">
      <h1>Pathfinder Character Arena</h1>
    </div>
    <div className="contents">
	    <Switch>

		    <Route exact path={`/heros`} component={withRouter(HeroList)}/>

		    <Route path={`/heros/create`} component={HeroCreate} />
		    <Route path={`/heros/:id`} component={HeroEdit} />
		    <Redirect from="/" to="/heros"/>
		    <Route path="*" component={NoMatch} />
	    </Switch>
    </div>
    <div className="footer">
      copyright Hernan Rossi 2018 <br/> Pathfinder content used under open gaming license
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.object.isRequired,
};

const RoutedApp = () => (
  <BrowserRouter>
	  <Route path="/" component={App}/>
  </BrowserRouter>
);

ReactDOM.render(<RoutedApp />, contentNode);

if (module.hot) {
  module.hot.accept();
}
