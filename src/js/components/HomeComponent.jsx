import React from "react";
import * as cssStyles from "../../styles/Styles.css";

export default class HomeComponent extends React.Component {
  render() {
    return (
      <div className={cssStyles.homeBodyText}>
        Welcome to Pathfinder Character Arena<br />
        <div className={cssStyles.homeImageDiv}>
          <img
            src={require("../../assets/HunterAdowyn.png")}
            width="530"
            height="606"
            alt=""
          />
        </div>
      </div>
    );
  }
}
