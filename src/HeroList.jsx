import "whatwg-fetch";
import React from "react";
import PropTypes from "prop-types";
import HeroAdd from "./HeroAdd.jsx";
import HeroFilter from "./HeroFilter.jsx";


export default class HeroList extends React.Component {
  constructor() {
    super();
    this.state = { heros: [] };
    this.createHero = this.createHero.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    fetch("api/heros")
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            console.log("Total count of heros:", data._metadata.total_count);
            data.heros.forEach(hero => {
              hero.created = new Date(hero.created);
            });
            this.setState({ heros: data.heros });
          });
        } else {
          response.json().then(error => {
            alert(`Failed to fetch heros: ${error.message}`);
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  createHero(newHero) {
    fetch("/api/heros", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newHero)
    })
      .then(response => {
        if (response.ok) {
          response.json().then(updatedHero => {
            updatedHero.created = new Date(updatedHero.created);
            const newHeros = this.state.heros.concat(updatedHero);
            this.setState({ heros: newHeros });
          });
        } else {
          response.json().then(error => {
            alert(`Failed to create hero: ${error.message}`);
          });
        }
      })
      .catch(err => {
        alert(`Error in sending data to server: ${err.message}`);
      });
  }

  render() {
    return (
      <div>
        <h1>Pathfinder Adventurer Creator</h1>
        <HeroFilter />
        <hr />
        <HeroTable heros={this.state.heros} />
        <hr />
        <HeroAdd createHero={this.createHero} />
        <hr />
      </div>
    );
  }
}

function HeroTable(props) {
  const borderedStyle = { border: "1px solid silver", padding: 4 };
  const heroRows = props.heros.map(hero => (
    <HeroRow key={hero._id} hero={hero} />
  ));
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
}

const { shape, string, number } = PropTypes;
HeroTable.propTypes = {
  heros: shape({
	  name: string.isRequired,
	  class: string.isRequired,
	  level: string.isRequired,
	  XP: number.isRequired,
	  race: string.isRequired,
	  age: number,
	  title: string,
	  STR: number.isRequired,
	  DEX: number.isRequired,
	  CON: number.isRequired,
	  INT: number.isRequired,
	  WIS: number.isRequired,
	  CHA: number.isRequired
  })
};

const HeroRow = props => (
  <tr>
    <td>{props.hero.name}</td>
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
  </tr>
);

const { number, shape, string } = PropTypes;
HeroRow.propTypes = {
  hero: shape({
    name: string.isRequired,
    class: string.isRequired,
    level: string.isRequired,
    XP: number.isRequired,
    race: string.isRequired,
    age: number,
    title: string,
    STR: number.isRequired,
    DEX: number.isRequired,
    CON: number.isRequired,
    INT: number.isRequired,
    WIS: number.isRequired,
    CHA: number.isRequired
  })
};
