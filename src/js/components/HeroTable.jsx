import store from "../store";
import React from "react";
import PropTypes from "prop-types";
import HeroRow from "./HeroRow.jsx";
import { withRouter } from "react-router-dom";

const HeroTable = props => {
  const borderedStyle = { border: "1px solid silver", padding: 4 };
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
    <table className={borderedStyle}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Class</th>
          <th>Level</th>
          <th>XP</th>
          <th>Race</th>
          <th>Age</th>
          <th>Title</th>
          <th>STR</th>
          <th>DEX</th>
          <th>CON</th>
          <th>INT</th>
          <th>WIS</th>
          <th>CHA</th>
        </tr>
      </thead>
      <tbody>{heroRows}</tbody>
    </table>
  );
};

HeroTable.propTypes = {
  heros: PropTypes.object.isRequired
};

export default withRouter(HeroTable);
