import React from 'react';
import * as cssStyles from '../../styles/Styles.css';
import NavBarComponent from './NavBarComponent';
import PathfinderImage from '../../../public/assets/PathfinderRpg.png';
import HeaderText from '../../../public/assets/HeaderText1nobezel.png';

export default class SiteHeaderComponent extends React.Component {
  constructor(props) {
    super();
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
        <NavBarComponent />
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
            {/*<p className={cssStyles.headingText}>Champions Arena</p>*/}
          </div>
        </div>
      </div>
    );
  }
}
