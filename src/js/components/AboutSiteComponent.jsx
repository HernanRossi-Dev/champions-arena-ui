import React from 'react';
import * as cssStyles from '../../styles/Styles.css';

export default class AboutSiteComponent extends React.Component {


	render() {
		return (
			<div className={cssStyles.aboutSiteText}>This Web Application was built with React, Express, Node, Mongodb, and Bootstrap.</div>
		);
	};

}