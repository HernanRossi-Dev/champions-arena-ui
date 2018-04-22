import React from "react";
import * as cssStyles from "../../styles/Styles.css";

export default class HomeComponent extends React.Component {
  render() {
    return (
      <div className={cssStyles.homeBodyText}>
        Welcome to Pathfinder Character Arena<br />
        <div className={cssStyles.homeImageDiv}>
          <img
            src={require("../../assets/OccultYoon.png")}
            width="375"
            height="432"
            alt=""
          />
        </div>
      </div>
    );
  }
}
