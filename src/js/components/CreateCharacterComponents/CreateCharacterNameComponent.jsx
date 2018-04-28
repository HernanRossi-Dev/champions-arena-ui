import React from "react";
import * as cssStyles from "../../../styles/Styles.css";
import { Col, ControlLabel, FormGroup, FormControl} from "react-bootstrap";

export default class CreateCharacterNameComponent extends React.Component {
	constructor (props, context) {
		super(props, context);
	}



	render () {
		const changeName = () => {
			this.props.updateName(this.characterName.value);
		};
		return (
			<FormGroup className={cssStyles.createHeroFormPadding}>
				<Col sm={1} />
				<Col
					componentClass={ControlLabel}
					sm={2}
					className={cssStyles.createColLabelStyle}
				>
					Name:
				</Col>
				<Col sm={5}>
					<FormControl
						name={"name"}
						onChange={changeName}
						inputRef={ref => {
						  this.characterName = ref;
						}}
						placeholder="Enter Name"
					/>
				</Col>
			</FormGroup>
		);
	}
}