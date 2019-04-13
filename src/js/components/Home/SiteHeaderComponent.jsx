import React from 'react';
import { connect } from 'react-redux';
import store from "../../store/index";
import * as cssStyles from "../../../styles/Styles.css";
import NavBarComponent from './NavBarComponent';

export const SiteHeaderComponent = (props) => {
  const renderNavBar = () => {
    if (store.getState().userReducer.loggedIn) {
      return <NavBarComponent />;
    }
    return <div style={{ marginBottom: "-45px" }} />;
  };
  const style = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  };
  
  return (
    <div >
    { renderNavBar() }
      <div className={cssStyles.splash_img}>
        <div className="card-header" style={style}>
          <img
            src="https://storage.googleapis.com/championsarenastatic/static/PathfinderRpg.png"
            width="371"
            height="95"
            alt=""
          />
          <img
            className={cssStyles.titleImage}
            src="https://storage.googleapis.com/championsarenastatic/static/HeaderText1nobezel.png"
            width="381.36" //base 1589
            height="35.76" //base 149
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return ({
    loggedIn: store.getState().userReducer.loggedIn,
    user: store.getState().userReducer.currentUserName,
  });
};

export default connect(mapStateToProps)(SiteHeaderComponent);
