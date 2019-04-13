import React from 'react';
import * as cssStyles from '../../../styles/Styles.css';

export const AboutSiteComponent = (props) => {
  return (
    <div>
      <div className={cssStyles.aboutSiteText}>This Web Application was built with React, Redux, Express, Node, Mongodb, and Bootstrap.</div>
      <div className={cssStyles.aboutSiteText}>If you have any questions or need to contact me you can reach me at hrossi.work@gmail.com.<br />Thanks for visiting!</div>
    </div>
  );
};