import React from "react";
import * as cssStyles from "../../../../styles/Styles.css";
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
	ButtonToolbar, Form
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Panel from 'react-bootstrap/es/Panel'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class CreateCharacterSkillsComponent extends React.Component {
	constructor(props) {
		super();

		this.state = {

		};
	}
	render() {
	return(
		<Panel className={cssStyles.createHeroPanelParent}>
			<Panel.Heading className={cssStyles.createHeroPanelHeaderStyle}>
				<Panel.Title toggle className={cssStyles.createHeroPanelHeaderStyleText}>Create Character</Panel.Title>
			</Panel.Heading>
			<Form horizontal>
				<div>This is a placeholder for the seconds creation section</div>
				<hr className={cssStyles.hr} />
				<FormGroup >
					<Col sm={3} />
					<Col sm={3}>
						<ButtonToolbar>
							<Button bsStyle="primary" >
								Create
							</Button>
							<LinkContainer to={"/home"}>
								<Button bsStyle={"link"}>Discard Character</Button>
							</LinkContainer>
						</ButtonToolbar>
					</Col>
					<Col sm={3} />
				</FormGroup>
			</Form>
		</Panel>
	)}
}

export default withRouter(CreateCharacterSkillsComponent);