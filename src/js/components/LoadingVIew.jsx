import React from "react";
import * as cssStyles from "../../styles/Styles.css";

export default class LoadingVIew extends React.Component {
	render() {
		return (
			<div className={cssStyles.homeBodyText}>
				Preparing Please wait<br />
				<div className={cssStyles.loadingIcon}>
					<i className="fas fa-spinner"></i>
				</div>
			</div>
		);
	}
}
