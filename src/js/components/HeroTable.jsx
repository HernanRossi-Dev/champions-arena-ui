import store from "../store";
import React from "react";
import PropTypes from "prop-types";
import HeroRow from "./HeroRow.jsx";
import { withRouter } from "react-router-dom";
import { Table, Panel } from 'react-bootstrap';
import * as cssStyles from "../../styles/Styles.css";


const HeroTable = props => {
  let heroRows;
  if (store.isFetching) {
    heroRows = (
      <HeroRow
        key={{}}
        hero={{ name: "Loading" }}
        deleteHero={props.deleteHero}
      />
    );
  } else {
    if (store.getState().heros) {
      heroRows = store
        .getState()
        .heros.map(hero => (
          <HeroRow key={hero._id} hero={hero} deleteHero={props.deleteHero} />
        ));
    }
  }

  return (
    <Table bordered condensed hover responsive className={cssStyles.heroTableParent}>
      <thead className={cssStyles.heroTableHeader}>
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
      <tbody className={cssStyles.heroTableRow}>{heroRows}</tbody>
    </Table>
  );
};

HeroTable.propTypes = {
  heros: PropTypes.object.isRequired
};

export default withRouter(HeroTable);
