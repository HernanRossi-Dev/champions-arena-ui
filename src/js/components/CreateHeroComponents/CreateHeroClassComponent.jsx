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

export default class CreateHeroClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.setClass = this.setClass.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
      selectedClass: ""
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  setClass(e) {
    const targetText = e.target.textContent.toString();
    this.props.updateClass(targetText);
    this.handleShow();
    this.setState({ selectedClass: targetText });
  }

  render() {
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
          Class:
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
              </ToggleButton>
              <ToggleButton
                value={"Rogue"}
                className={cssStyles.alignmentButtonGroup}
              >
                Rogue
              </ToggleButton>
              <ToggleButton
                value={"Fighter"}
                className={cssStyles.alignmentButtonGroup}
              >
                Fighter
              </ToggleButton>{" "}
              <ToggleButton
                value={"Cleric"}
                className={cssStyles.alignmentButtonGroup}
              >
                Cleric
              </ToggleButton>{" "}
              <ToggleButton
                value={"Barbarian"}
                className={cssStyles.alignmentButtonGroup}
              >
                Barbarian
              </ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </Col>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.selectedClass}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SelectedClassModalBody selectedClass={this.state.selectedClass} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </FormGroup>
    );
  }
}

const ClassImageComp = props => {
  const currentClass = props.curClass.toString();
  switch (currentClass) {
    case "Monk":
      return (
        <img
          src={require("../../../assets/Monk - Sajan.png")}
          //					{/*694x1000*/}
          width="277.6"
          height="400"
          alt=""
        />
      );
    case "Wizard":
      return (
        <img
          src={require("../../../assets/Wizard - Ezren.png")}
          //{/*567x1000*/}
          width="347"
          height="500"
          alt=""
        />
      );
    case "Fighter":
      return (
        <img
          src={require("../../../assets/Fighter - Valeros.png")}
          //{/*572x1000*/}
          width="320"
          height="500"
          alt=""
        />
      );
    case "Druid":
      return (
        <img
          src={require("../../../assets/Druid - Maznar.png")}
          //{/*790x1000*/}
          width="347"
          height="500"
          alt=""
        />
      );
    case "Ranger":
      return (
        <img
          src={require("../../../assets/Ranger - Harsk.png")}
          //{/*831x1000*/}
          width="347"
          height="500"
          alt=""
        />
      );
    case "Cleric":
      return (
        <img
          src={require("../../../assets/Cleric - Kyra.png")}
          //{/*641x1000*/}
          width="347"
          height="500"
          alt=""
        />
      );
    case "Rogue":
      return (
        <img
          src={require("../../../assets/Rogue - Wu-Shen.png")}
          //{/*639x1000*/}
          width="347"
          height="500"
          alt=""
        />
      );
    case "Sorcerer":
      return (
        <img
          src={require("../../../assets/Sorcerer - Qualzar.png")}
          //{/*592x1000*/}
          width="347"
          height="500"
          alt=""
        />
      );
    case "Paladin":
      return (
        <img
          src={require("../../../assets/Paladin - Seelah.png")}
          //{/*702x1000*/}
          width="347"
          height="500"
          alt=""
        />
      );
    case "Warlock":
      return (
        <img
          src={require("../../../assets/WarlockVigilante_burned.png")}
          //{/*668x1000*/}
          width="347"
          height="500"
          alt=""
        />
      );
    case "Barbarian":
      return (
        <img
          src={require("../../../assets/Barbarian - Ostog.png")}
          //{/*658x1000*/}
          width="347"
          height="500"
          alt=""
        />
      );
  }
};

const SelectedClassModalBody = props => {
  switch (props.selectedClass) {
    case "Monk":
      return (
        <div>
          <span className={cssStyles.classModalImageDiv}>
            <ClassImageComp curClass={props.selectedClass} />
          </span>

          <p>
            A student of martial arts, the monk trains his body to be his
            greatest weapon and defense.
          </p>
          <h4>Role:</h4>
	        <p>
	         Monks excel at overcoming even the most daunting perils,
	        striking where it's least expected, and taking advantage of enemy vulnerabilities.
	        Fleet of foot and skilled in combat, monks can navigate any battlefield with ease,
	        aiding allies wherever they are needed most.
	        </p>
	          <h4>Hit Die: </h4>
	          d8.

	          <h4>Any lawful</h4>
	          Any lawful
        </div>
      );
    default:
      return <div >This should show yet</div>;
  }
};
