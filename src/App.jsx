import HeroList from "./HeroList.jsx";
import React from "react";
import ReactDOM from "react-dom";

const contentNode = document.getElementById("contents");
ReactDOM.render(<HeroList />, contentNode);

if (module.hot) {
  module.hot.accept();
}
