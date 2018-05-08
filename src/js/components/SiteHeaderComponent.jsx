import React from 'react'
import * as cssStyles from '../../styles/Styles.css'
import NavBarComponent from './NavBarComponent';

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
							className={cssStyles.HeaderImage}
							src={require("../../../public/assets/PathfinderRpg.png")}
							width="371"
							height="95"
							alt=""
						/>
						<img
							className={cssStyles.titleImage}
							src={require("../../../public/assets/HeaderText1nobezel.png")}
							width="381.36" //base 1589
							height="35.76" //base 149
							alt=""

						/>
						{/*<p className={cssStyles.headingText}>Champions Arena</p>*/}
					</div>
				</div>
			</div>
		)
	}
}