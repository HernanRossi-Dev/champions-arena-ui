import React from "react";
import * as cssStyles from "../../styles/Styles.css";
import { withRouter } from 'react-router-dom'

class HomeComponent extends React.Component {


  render() {
    return (
      <div className={cssStyles.homeBodyText}>
        Welcome to the Arena<br />
          <div className={cssStyles.homeTextParagraph}>
              This is very much a work in progress and currently only supports desktop browsers.<br/> I am constantly updating and implementing new features. Currently there is just a <br/>
            basic framework of what I want to eventually accomplish, feel free to look around. Thanks for visiting!<br/>
              Create Player and Non-Player Pathfinder characters. Track characters, NPC's, inventory and campaign info.<br/>
              To get started create a character by clicking <i>Create New Character</i> at the top.<br/>
            Click on the <i>Characters</i> tab at the top to see a list of all your characters.<br/>
            There a few default ones you can delete or edit.<br/>
            Click on a characters name to see more detailed attributes and edit them.<br/>
	          Let me know if you have any ideas how the site could be improved at hrossi.work@gmail.com.<br/>

          </div>
        <div className={cssStyles.homeImageDiv}>
          <img
            src={require("../../../public/assets/OccultYoon.png")}
            width="318.75"
            height="367.2"
            alt=""
          />
        </div>
      </div>
    );
  }
}
export default withRouter(HomeComponent);