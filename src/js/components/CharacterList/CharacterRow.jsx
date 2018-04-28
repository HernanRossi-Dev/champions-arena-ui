import React from "react";
import PropTypes from "prop-types";
import {Link, withRouter} from "react-router-dom";
import {Button} from "react-bootstrap";
import * as cssStyles from "../../../styles/Styles.css";

const CharacterRow = props => {
  function deleteCharacter() {
    props.deleteCharacter(props.character._id);
  }
  return (
    <tr  >
        <td>{props.character.type}</td>
      <td >
        <Link
          to={`/characters/${props.character._id}`}
          params={{ character: props.character.name }}
        >
          {props.character.name}
        </Link>
      </td>

      <td>{props.character.class}</td>
      <td>{props.character.level}</td>
      <td>{props.character.XP}</td>
      <td>{props.character.race}</td>
      <td>{props.character.STR}</td>
      <td>{props.character.DEX}</td>
      <td>{props.character.CON}</td>
      <td>{props.character.INT}</td>
      <td>{props.character.WIS}</td>
      <td>{props.character.CHA}</td>
        <td>
      <Button type="button" bsClass={cssStyles.deleteButton} onClick={deleteCharacter}>
        <i className="fas fa-times-circle fa-lg" />
      </Button>
        </td>
    </tr>
  );
};

CharacterRow.propTypes = {
  character: PropTypes.object.isRequired,
  deleteCharacter: PropTypes.func.isRequired
};

export default withRouter(CharacterRow);
