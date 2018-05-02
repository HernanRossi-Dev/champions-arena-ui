import React from 'react'
import * as cssStyles from '../../styles/Styles.css'
import NavBarComponent from './NavBarComponent';

export default class SiteHeaderComponent extends React.Component {
	constructor(props) {
		super(props);

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
							className={cssStyles.titleImage}
							src={require("../../assets/PathfinderRpg.png")}
							width="371"
							height="95"
							alt=""
						/>
						<p className={cssStyles.headingText}>Champions Arena</p>
					</div>
				</div>
			</div>
		)
	}
}