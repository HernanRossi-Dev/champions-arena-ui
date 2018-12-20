import React from "react";
import PropTypes from "prop-types";
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
import getClassProps from "./create-character-utils/class-props-helper";
import * as cssStyles from "../../../styles/Styles.css";
import SelectedClassModalBodyV2 from "./CreateCharacterClassModalV2";


export default class CreateCharacterClassComponent extends React.Component {
  constructor(props) {
    super();
    this.setClass = this.setClass.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
      selectedClass: "",
    };
  }

  setClass(e) {
    const targetText = e.target.textContent.toString();
    if (!targetText) {
      return;
    }
    const classProps = getClassProps(targetText);
    this.props.updateClass(targetText, classProps);
    this.handleShow();
    this.setState({ selectedClass: targetText });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        Placeholder text for popover
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">Tooltip text </Tooltip>;
    return (
      <FormGroup>
        <Col sm={1} />
        <Col
          componentClass={ControlLabel}
          sm={2}
          className={cssStyles.createColLabelStyle}
        ><div style={{ fontSize: '19px', fontFamily: "'Josefin Sans', sans-serif" }}>Class:</div>
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
                value="Barbarian"
                className={cssStyles.alignmentButtonGroup}
              >
                Barbarian
              </ToggleButton>
              <ToggleButton
                value="Monk"
                className={cssStyles.alignmentButtonGroup}
              >
                Monk
              </ToggleButton>
              <ToggleButton
                value="Wizard"
                className={cssStyles.alignmentButtonGroup}
              >
                Wizard
              </ToggleButton>
              <ToggleButton
                value="Ranger"
                className={cssStyles.alignmentButtonGroup}
              >
                Ranger
              </ToggleButton>
              <ToggleButton
                value="Druid"
                className={cssStyles.alignmentButtonGroup}
              >
                Druid
              </ToggleButton>
              <ToggleButton
                value="Paladin"
                className={cssStyles.alignmentButtonGroup}
              >
                Paladin
              </ToggleButton>
              <ToggleButton
                value="Sorcerer"
                className={cssStyles.alignmentButtonGroup}
              >
                Sorcerer
              </ToggleButton>
              <ToggleButton
                value="Rogue"
                className={cssStyles.alignmentButtonGroup}
              >
                Rogue
              </ToggleButton>
              <ToggleButton
                value="Fighter"
                className={cssStyles.alignmentButtonGroup}
              >
                Fighter
              </ToggleButton>
              <ToggleButton
                value="Cleric"
                className={cssStyles.alignmentButtonGroup}
              >
                Cleric
              </ToggleButton>
              <ToggleButton
                value="Bard"
                className={cssStyles.alignmentButtonGroup}
              >
                Bard
              </ToggleButton>
              <ToggleButton
                value="Alchemist"
                className={cssStyles.alignmentButtonGroup}
              >
                Alchemist
              </ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </Col>
        <Modal show={this.state.show} onHide={this.handleClose} className={cssStyles.createHeroClassModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.selectedClass}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SelectedClassModalBodyV2 selectedClass={this.state.selectedClass} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </FormGroup>
    );
  }
}

CreateCharacterClassComponent.propTypes = {
  updateClass: PropTypes.func.isRequired,
};
