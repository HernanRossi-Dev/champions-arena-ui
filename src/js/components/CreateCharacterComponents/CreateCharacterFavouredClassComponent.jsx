import React from "react";
import * as cssStyles from "../../../styles/Styles.css";
import {
	Col,
	ControlLabel,
	FormGroup,
	FormControl,
	Popover,
	Tooltip,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
	OverlayTrigger,
	Button,
	ToggleButtonGroup,
	ToggleButton,
	ButtonToolbar
} from "react-bootstrap";
import Coverflow  from 'react-coverflow';

export default class CreateCharacterFavouredClassComponent extends React.Component {
	constructor(props) {
		super(props);
		this.saveFavouredClass = this.saveFavouredClass.bind(this);
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.state = {
			show: false,
			selectedFavouredClass: ""
		};
	}

	saveFavouredClass(selectedFavouredClass){
		this.props.updateFavClass(selectedFavouredClass);
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	render() {
		const favouredClassDivStyle = {
			fontSize: "17px",
			fontFamily: "'Josefin Sans', sans-serif",
			textAlign: "left"
		};
		const favouredClassInfoImgStyle = {
			backgroundColor: "transparent",

		};
	return (
		<div>

		<FormGroup>
			<Col sm={1} />
			<Col
				componentClass={ControlLabel}
				sm={1}
			>
				<div style={favouredClassDivStyle}> <strong>Favoured Class:</strong></div>
			</Col>
			<Col sm={1}>
				<Button onClick={this.handleShow} style={favouredClassInfoImgStyle}>
					<i style={favouredClassInfoImgStyle} className="far fa-question-circle" ></i>
				</Button>

			</Col>
			<Col sm={7}>
				<ButtonToolbar>
					<ToggleButtonGroup
						type="radio"
						name="raceValue"
						onClick={this.saveFavouredClass}
						className={cssStyles.favouredClassButtonGroup}
					>
						<ToggleButton
							value={"Monk"}
							className={cssStyles.favouredClassButtonGroup}
						>
							Monk
						</ToggleButton>
						<ToggleButton
							value={"Wizard"}
							className={cssStyles.favouredClassButtonGroup}
						>
							Wizard
						</ToggleButton>
						<ToggleButton
							value={"Ranger"}
							className={cssStyles.favouredClassButtonGroup}
						>
							Ranger
						</ToggleButton>
						<ToggleButton
							value={"Druid"}
							className={cssStyles.favouredClassButtonGroup}
						>
							Druid
						</ToggleButton>
						<ToggleButton
							value={"Paladin"}
							className={cssStyles.favouredClassButtonGroup}
						>
							Paladin
						</ToggleButton>
						<ToggleButton
							value={"Sorcerer"}
							className={cssStyles.favouredClassButtonGroup}
						>
							Sorcerer
						</ToggleButton>
						<ToggleButton
							value={"Rogue"}
							className={cssStyles.favouredClassButtonGroup}
						>
							Rogue
						</ToggleButton>
						<ToggleButton
							value={"Fighter"}
							className={cssStyles.favouredClassButtonGroup}
						>
							Fighter
						</ToggleButton>{" "}
						<ToggleButton
							value={"Cleric"}
							className={cssStyles.favouredClassButtonGroup}
						>
							Cleric
						</ToggleButton>{" "}
						<ToggleButton
							value={"Barbarian"}
							className={cssStyles.favouredClassButtonGroup}
						>
							Barbarian
						</ToggleButton>
						<ToggleButton
							value={"Bard"}
							className={cssStyles.favouredClassButtonGroup}
						>
							Bard
						</ToggleButton>
					</ToggleButtonGroup>
				</ButtonToolbar>
			</Col>
			<Col sm={1}>
				<Modal show={this.state.show} onHide={this.handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Favoured Class Selection</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div style={favouredClassDivStyle}>Each character begins play with a single favored class of his choosing.
						Whenever a character gains a level in his favored class, he receives either + 1
						hit point or + 1 skill rank. The choice of favored class cannot be changed once the character is created, and the choice of gaining a hit
						point or a skill rank each time a character gains a level (including his first level) cannot be changed once made for a particular level.</div>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.handleClose}>Close</Button>
				</Modal.Footer>
			</Modal>
			</Col>
		</FormGroup>
		</div>
	)
	}
}