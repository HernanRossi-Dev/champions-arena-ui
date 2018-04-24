import React from "react";
import * as cssStyles from "../../../styles/Styles.css";
import { Col, ControlLabel, FormGroup, FormControl, Popover, Tooltip, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle,
OverlayTrigger, Button, ToggleButtonGroup, ToggleButton, ButtonToolbar} from "react-bootstrap";

export default class CreateHeroClassComponent extends React.Component {
	constructor (props) {
		super(props);
		this.setClass = this.setClass.bind(this);
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.state = {
			show:false,
			selectedClass: '',
		};
	}

	handleClose(){
		this.setState({show:false});
	}

	handleShow() {
		this.setState({show: true});
	}

	setClass(e){
		const targetText = e.target.textContent.toString();
		console.log(targetText);console.log("targetText");
		this.props.updateClass(targetText);
		this.handleShow();
		this.setState({selectedClass: targetText});
	}

	render(){
		const popover = (
			<Popover id={"modal-popover"} title={"popover"}>
				Placeholder text for popover
			</Popover>
	);
		const tooltip = <Tooltip id={"modal-tooltip"}>Tooltip text </Tooltip>;

		return (

		<FormGroup>
			<Col sm={1} />
			<Col
				componentClass={ControlLabel}
				sm={2}
				className={cssStyles.createColLabelStyle}
			>
				Race:
			</Col>
			<Col sm={7}>
				<ButtonToolbar>
					<ToggleButtonGroup
						type="radio"
						name="raceValue"
						onClick={this.setClass}
						className={cssStyles.alignmentButtonGroupParent}
					>
						<ToggleButton
							value={"Monk"}
							className={cssStyles.alignmentButtonGroup}
						>
							Monk
						</ToggleButton>
						<ToggleButton
							value={"Wizard"}
							className={cssStyles.alignmentButtonGroup}
						>
							Wizard
						</ToggleButton>
						<ToggleButton
							value={"Warlock"}
							className={cssStyles.alignmentButtonGroup}
						>
							Warlock
						</ToggleButton>
						<ToggleButton
							value={"Ranger"}
							className={cssStyles.alignmentButtonGroup}
						>
							Ranger
						</ToggleButton>
						<ToggleButton
							value={"Druid"}
							className={cssStyles.alignmentButtonGroup}
						>
							Druid
						</ToggleButton>

						<ToggleButton
							value={"Paladin"}
							className={cssStyles.alignmentButtonGroup}
						>
							Paladin
						</ToggleButton>
						<ToggleButton
							value={"Sorcerer"}
							className={cssStyles.alignmentButtonGroup}
						>
							Sorcerer
						</ToggleButton><ToggleButton
							value={"Rogue"}
							className={cssStyles.alignmentButtonGroup}
						>
						Rogue
						</ToggleButton><ToggleButton
							value={"Fighter"}
							className={cssStyles.alignmentButtonGroup}
						>
						Fighter
						</ToggleButton>	<ToggleButton
							value={"Cleric"}
							className={cssStyles.alignmentButtonGroup}
						>
					Cleric
						</ToggleButton>
					</ToggleButtonGroup>
				</ButtonToolbar>
			</Col>
			<Modal show={this.state.show} onHide={this.handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Text in a modal</h4>
					<ClassImageComp curClass={this.state.selectedClass}/>
					<p>
						Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
					</p>

					<h4>Popover in a modal</h4>
					<p>
						there is a{' '}
						<OverlayTrigger overlay={popover}>
							<a href="#popover">popover</a>
						</OverlayTrigger>{' '}
						here
					</p>

					<h4>Tooltips in a modal</h4>
					<p>
						there is a{' '}
						<OverlayTrigger overlay={tooltip}>
							<a href="#tooltip">tooltip</a>
						</OverlayTrigger>{' '}
						here
					</p>

					<hr />

					<h4>Overflowing text to show scroll behavior</h4>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros.
					</p>


				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.handleClose}>Close</Button>
				</Modal.Footer>
			</Modal>
			</FormGroup>
		);
	}


}

const ClassImageComp = (props) => {
	const currentClass = props.curClass.toString();
	switch (currentClass) {
		case "Monk":
			return(
				<img
					src={require("../../../assets/Monk - Sajan.png")}
					width="347"
					height="500"
					alt=""
					align="center"
					/>
			);
		case "Wizard":
			return(

				<img
					src={require("../../../assets/Wizard - Ezren.png")}
					width="347"
					height="500"
					alt=""

				/>
			);
		case "Fighter":
			return(
				<img
					src={require("../../../assets/Fighter - Valeros.png")}
					width="347"
					height="500"
					alt=""
				/>
			);
		case "Druid":
			return(
				<img
					src={require("../../../assets/Druid - Maznar.png")}
					width="347"
					height="500"
					alt=""
				/>
			);
		case "Ranger":
			return(
				<img
					src={require("../../../assets/Ranger - Harsk.png")}
					width="347"
					height="500"
					alt=""
				/>
			);
		case "Cleric":
			return(
				<img
					src={require("../../../assets/Cleric - Kyra.png")}
					width="347"
					height="500"
					alt=""
				/>
			);
			case "Rogue":
			return(
				<img
					src={require("../../../assets/Rogue - Wu-Shen.png")}
					width="347"
					height="500"
					alt=""
				/>
			);
			case "Sorcerer":
			return(
				<img
					src={require("../../../assets/Sorcerer - Qualzar.png")}
					width="347"
					height="500"
					alt=""
				/>
			);	case "Paladin":
			return(
				<img
					src={require("../../../assets/Paladin - Seelah.png")}
					width="347"
					height="500"
					alt=""
				/>
			);	case "Warlock":
			return(
				<img
					src={require("../../../assets/WarlockOne.png")}
					width="347"
					height="500"
					alt=""
				/>
			);
	}
}


		/**
		<FormGroup>
			<Col sm={1} />
			<Col
				componentClass={ControlLabel}
				sm={2}
				className={cssStyles.createColLabelStyle}
			>
				Class:

			</Col>
			<Col sm={5}>
				<FormControl
					componentClass="select"
					name={"class"}
					onClick={this.setClass}
					inputRef={ref => {
						this.heroClass = ref;
					}}
				>
					<option value="Warlock">Warlock</option>
					<option value="Monk">Monk</option>
					<option value="Wizard">Wizard</option>
					<option value="Ranger">Ranger</option>
					<option value="Druid">Druid</option>
					<option value="Paladin">Paladin</option>
					<option value="Sorcerer">Sorcerer</option>
					<option value="Rogue">Rogue</option>
					<option value="Cleric">Cleric</option>
					<option value="Fighter">Fighter</option>
				</FormControl>
			</Col>
			<Col sm={1}/>
			<Col ><img
				src={require("../../../assets/Fighter.png")}
				width="75"
				height="75"
				alt=""

			/></Col>
			**/