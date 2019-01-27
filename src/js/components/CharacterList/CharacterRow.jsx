import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import {Button, Modal } from "react-bootstrap";
import * as cssStyles from "../../../styles/Styles.css";

class CharacterRow extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  acceptChanges = () => {
    this.setState({ show: false });
    this.deleteCharacter();
  }

  rejectChanges = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  deleteCharacter = () => {
    this.props.deleteCharacter(this.props.character._id);
  }

  render() {
    const characteraID = this.props.character._id;
    return (
      <tr>
        <td>{this.props.character.type}</td>
        <td >
          <Link to={ `/characters/${characteraID}` }>
            {this.props.character.name}
          </Link>
        </td>
        <td>{this.props.character.class}</td>
        <td>{this.props.character.level}</td>
        <td>{this.props.character.XP}</td>
        <td>{this.props.character.ancestry}</td>
        <td>{this.props.character.STR}</td>
        <td>{this.props.character.DEX}</td>
        <td>{this.props.character.CON}</td>
        <td>{this.props.character.INT}</td>
        <td>{this.props.character.WIS}</td>
        <td>{this.props.character.CHA}</td>
        <td>
          <Button type="button" bsClass={cssStyles.deleteButton} onClick={this.handleShow}>
            <i className="fas fa-times-circle fa-lg" />
          </Button>
        </td>
        <td>
          <Button type="button" bsClass={cssStyles.editButton}>
          <Link to={ `/characters/${characteraID}` }>
          <i className="far fa-edit" />
          </Link>
          </Button>
        </td>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          className={cssStyles.createCharacterClassModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Confirm Character Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>Are you sure you want to delete this character?</div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.acceptChanges}>Accept</Button>
            <Button onClick={this.rejectChanges}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </tr>
    );
  }
}

CharacterRow.propTypes = {
  character: PropTypes.object.isRequired,
  deleteCharacter: PropTypes.func.isRequired
};

export default withRouter(CharacterRow);
