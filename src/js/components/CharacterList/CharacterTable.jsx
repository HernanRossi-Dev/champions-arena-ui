import store from "../../store/index";
import React from "react";
import PropTypes from "prop-types";
import HeroRow from "./CharacterRow.jsx";
import {withRouter} from "react-router-dom";
import {Table} from 'react-bootstrap';
import * as cssStyles from "../../../styles/Styles.css";


const CharacterTable = props => {
  let characterRows;
  if (props.isFetching) {
    characterRows = (
      <HeroRow
        key={{}}
        character={{ name: "Loading" }}
        deleteHero={props.deleteHero}
      />
    );
  } else {
    if (props.characters) {
      characterRows = props
        .characters.map(character => (
          <HeroRow key={character._id} character={character} deleteHero={props.deleteHero} />
        ));
    }
  }

  return (
    <Table bordered condensed hover responsive className={cssStyles.characterTableParent}>
      <thead className={cssStyles.characterTableHeader}>
        <tr  >
            <th className={cssStyles.HTRtextAt}>Type</th>
          <th className={cssStyles.HTRtextAt}>Name</th>
          <th className={cssStyles.HTRtextAt}>Class</th>
          <th className={cssStyles.HTRtextAt}>Level</th>
          <th className={cssStyles.HTRtextAt}>XP</th>
          <th className={cssStyles.HTRtextAt}>Race</th>
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
  characters: PropTypes.object.isRequired
};

export default withRouter(CharacterTable);
