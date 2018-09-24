import React from 'react';
import { connect } from 'react-redux';
import store from "../store/index";
import * as cssStyles from '../../styles/Styles.css';
import NavBarComponent from './NavBarComponent';
import PathfinderImage from '../../../public/assets/PathfinderRpg.png';
import HeaderText from '../../../public/assets/HeaderText1nobezel.png';

class SiteHeaderComponent extends React.Component {
  constructor(props) {
    super();
    this.renderNavBar = this.renderNavBar.bind(this);
  }

  renderNavBar() {
    if (store.getState().userReducer.loggedIn) {
      return <NavBarComponent />;
    } return null;
  }

  render() {
    const style = {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center"
    };
    return (
      <div >

        { this.renderNavBar() }
        <div className={cssStyles.splash_img}>
          <div className="card-header" style={style}>
            <img
              src={PathfinderImage}
              width="371"
              height="95"
              alt=""
            />
            <img
              className={cssStyles.titleImage}
              src={HeaderText}
              width="381.36" //base 1589
              height="35.76" //base 149
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    loggedIn: store.getState().userReducer.loggedIn,
    user: store.getState().userReducer.currentUserName,
  });
};

export default connect(mapStateToProps)(SiteHeaderComponent);
