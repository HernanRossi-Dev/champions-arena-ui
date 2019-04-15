import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import * as cssStyles from "../../../styles/Styles.css";

export const CharacterRow = (props) => {
  const [show, setShow] = useState(false);

  const acceptChanges = () => {
    setShow(false);
    props.deleteCharacter(props.character._id);
  }

  const characteraID = props.character._id;
  return (
    <tr>
      <td>{props.character.type}</td>
      <td >
        <Link to={`/characters/${characteraID}`}>
          {props.character.name}
        </Link>
      </td>
      <td>{props.character.class}</td>
      <td>{props.character.ancestry}</td>
      <td>{props.character.level}</td>
      <td>{props.character.XP}</td>
      <td>{props.character.hitPoints}</td>
      <td>{props.character.STR}</td>
      <td>{props.character.DEX}</td>
      <td>{props.character.CON}</td>
      <td>{props.character.INT}</td>
      <td>{props.character.WIS}</td>
      <td>{props.character.CHA}</td>
      <td>
        <Button type="button" bsClass={cssStyles.deleteButton} onClick={() => setShow(true)}>
          <i className="fas fa-times-circle fa-lg" />
        </Button>
      </td>
      <td>
        <Button type="button" bsClass={cssStyles.editButton}>
          <Link to={`/characters/${characteraID}`}>
            <i className="far fa-edit" />
          </Link>
        </Button>
      </td>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        className={cssStyles.createCharacterClassModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Character Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Are you sure you want to delete this character?</div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={acceptChanges}>Accept</Button>
          <Button onClick={() => setShow(false)}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </tr>
  );
};

CharacterRow.propTypes = {
  character: PropTypes.object.isRequired,
  deleteCharacter: PropTypes.func.isRequired,
};

export default withRouter(CharacterRow);

