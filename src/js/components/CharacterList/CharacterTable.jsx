import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Table } from 'react-bootstrap';
import CharacterRow from "./CharacterRow.jsx";
import * as cssStyles from "../../../styles/Styles.css";


const CharacterTable = (props) => {
  let characterRows;
  if (props.isFetching) {
    characterRows = (
      <CharacterRow
        key={{}}
        character={{ name: "Loading" }}
        deleteCharacter={props.deleteCharacter}
      />
    );
  } else {
    if (!props.characters) {
      return null;
    }
    characterRows = props
      .characters.map(character => (
        <CharacterRow
          key={character._id}
          character={character}
          deleteCharacter={props.deleteCharacter}
        />
      ));
  }

  return (
    <Table bordered condensed hover responsive className={cssStyles.characterTableParent}>
      <thead className={cssStyles.characterTableHeader}>
        <tr>
          <th className={cssStyles.HTRtextAt}>Type</th>
          <th className={cssStyles.HTRtextAt}>Name</th>
          <th className={cssStyles.HTRtextAt}>Class</th>
          <th className={cssStyles.HTRtextAt}>Level</th>
          <th className={cssStyles.HTRtextAt}>XP</th>
          <th className={cssStyles.HTRtextAt}>Ancestry</th>
          <th className={cssStyles.HTRtextAt}>STR</th>
          <th className={cssStyles.HTRtextAt}>DEX</th>
          <th className={cssStyles.HTRtextAt}>CON</th>
          <th className={cssStyles.HTRtextAt}>INT</th>
          <th className={cssStyles.HTRtextAt}>WIS</th>
          <th className={cssStyles.HTRtextAt}>CHA</th>
        </tr>
      </thead>
      <tbody className={cssStyles.characterTableRow}>{characterRows}</tbody>
    </Table>
  );
};

CharacterTable.propTypes = {
  characters: PropTypes.array,
  isFetching: PropTypes.bool.isRequired,
  deleteCharacter: PropTypes.func.isRequired,
};

export default withRouter(CharacterTable);
