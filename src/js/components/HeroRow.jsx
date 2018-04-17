import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

const HeroRow = props => {
  function deleteHero() {
    props.deleteHero(props.hero._id);
  }
  return (
    <tr>
      <td>
        <Link to={`/heros/${props.hero._id}`} params={{hero: props.hero.name}}>{props.hero.name}</Link>
      </td>
      <td>{props.hero.class}</td>
      <td>{props.hero.level}</td>
      <td>{props.hero.XP}</td>
      <td>{props.hero.race}</td>
      <td>{props.hero.age}</td>
      <td>{props.hero.title}</td>
      <td>{props.hero.STR}</td>
      <td>{props.hero.DEX}</td>
      <td>{props.hero.CON}</td>
      <td>{props.hero.INT}</td>
      <td>{props.hero.WIS}</td>
      <td>{props.hero.CHA}</td>
      <button onClick={deleteHero}>x</button>
    </tr>
  );
};

HeroRow.propTypes = {
  hero: PropTypes.object.isRequired,
  deleteHero: PropTypes.func.isRequired
};

export default withRouter(HeroRow);
