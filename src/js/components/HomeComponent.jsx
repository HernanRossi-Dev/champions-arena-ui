import React from "react";
import * as cssStyles from "../../styles/Styles.css";

export default class HomeComponent extends React.Component {
  render() {
    return (
      <div className={cssStyles.homeBodyText}>
        Welcome to the Pathfinder Character Arena<br />
          <div className={cssStyles.homeTextParagraph}>
              Create Player and Non-Player Pathfinder characters.<br/>Track levels, skills, inventory and campaign info.<br/>
              To get started create a character by clicking <i>Create New Character</i> at the top.<br/>
              This application is a work in progress, let me know if the site could be improved at hrossi.work@gmail.com.<br/>
              Thanks you for visiting.
          </div>
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
