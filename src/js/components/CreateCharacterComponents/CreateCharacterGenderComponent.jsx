import React from "react";
import * as cssStyles from "../../../styles/Styles.css";
import { Col, ControlLabel, FormGroup, ToggleButtonGroup, ToggleButton } from "react-bootstrap";

export default class CreateCharacterGenderComponent extends React.Component {
	constructor (props) {
		super();
		this.state = {
			gender: ""
		}
	}

	render() {

		const changeGender = e => {
			const newGender = e.target.textContent.toString()
			this.props.updateGender( newGender);
			this.setState({ gender: newGender})
		};

		// const ShowGenderImage =(props) => {
		// 	const gender = this.state.gender.toString();
		// 	if(gender === "Male"){
		// 		return (
		// 			<img
		// 				src={require("../../../assets/mymalesymbol.png")}
		// 				width="50"
		// 				height="50"
		// 				alt=""
		//
		// 			/>
		//
		// 		);
		// 	} else if (gender === "Female"){
		// 		return (
		// 			<img
		// 				src={require("../../../assets/myfemalesymbol.png")}
		// 				width="40"
		// 				height="50"
		// 				alt=""
		// 			/>
		// 		);
		// 	} else {
		// 		return (
		// 			<img
		// 				src={require("../../../assets/myotherymbol.png")}
		// 				width="33"
		// 				height="50"
		// 				alt=""
		// 			/>
		// 		);
		// 	}
		// };
		return (
			<FormGroup>
				<Col sm={1} />
				<Col
					componentClass={ControlLabel}
					sm={2}
					className={cssStyles.createColLabelStyle}
				><div style={{fontSize:'19px',fontFamily: "'Josefin Sans', sans-serif"}}>Gender:</div>

				</Col>
				<Col sm={5}>
					<ToggleButtonGroup
						type="radio"
						name="gender"
						className={cssStyles.genderButtonGroup}
					>

						<ToggleButton
							value={"Male"}
							className={cssStyles.genderButtonGroup}
							onClick={changeGender}
						>
							Male
						</ToggleButton>


						<ToggleButton
							value={"Female"}
							className={cssStyles.genderButtonGroup}
							onClick={changeGender}
						>
							Female
						</ToggleButton>



						<ToggleButton
							value={"Other"}
							className={cssStyles.genderButtonGroup}
							onClick={changeGender}
						>
							Other
						</ToggleButton>

					</ToggleButtonGroup>
				</Col>

				<Col  sm={1}>
					{/*<ShowGenderImage />*/}
				</Col>

			</FormGroup>
		)
	}
}