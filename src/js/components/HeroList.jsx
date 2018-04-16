import "whatwg-fetch";
import React from "react";
import PropTypes from "prop-types";
import HeroCreate from "./HeroCreate.jsx";
import HeroFilter from "./HeroFilter.jsx";
import { Link, withRouter } from "react-router-dom";
// import { connect } from "react-redux";
// import { createHero, fetchHeros } from "../js/actions";
//
// const mapStateToProps = state => {
//   return { heros: state.heros };
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     loadData() {
//       dispatch(fetchHeros());
//     }
//   };
// };

class HeroList extends React.Component {
  constructor() {
    super();
    this.state = { heros: [] };
    this.createHero = this.createHero.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.deleteHero = this.deleteHero.bind(this);
  }

  componentDidMount() {
    this.loadData();
    // this.props.loadData();
  }



  setFilter(query) {
    let fectchURL = "";
    for (let key in query) {
      fectchURL += "?" + key + "=" + query[key];
    }
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: fectchURL
    });
  }

  componentDidUpdate(prevProps) {
    const oldQuery = prevProps;
    const newQuery = this.props;
    if (oldQuery.location.search === newQuery.location.search) {
    }
    else if (oldQuery.location.query && newQuery.location.query) {
      if (oldQuery.location.query.class === newQuery.location.query.class) {
      }
    }
    else {
      this.loadData();
    }
  }

  loadData() {
	  let fectchURL = 'api/heros';
    if(this.props.location.query !== undefined) {
      for (let key in this.props.location.query) {
       fectchURL += '?' + key + '=' + this.props.location.query[key];
      }
    } else {
     fectchURL += this.props.location.search
    }
    fetch(fectchURL)
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

	deleteHero(id) {
    console.log(`/api/heros/${id}`);
		fetch(`/api/heros/${id}`, {method: 'DELETE'}).then(response => {
			if(!response.ok) {
				alert("Failed to delete issue");
			} else {
				this.loadData();
			}
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
        <HeroFilter setFilter={this.setFilter} />
        <hr />
        <HeroTable heros={this.state.heros} deleteHero={this.deleteHero}/>
        <hr />
        {/*<button>*/}
        {/*<Link to={`/heros/create`}> Create a new Hero </Link>*/}
        {/*</button>*/}
        <HeroCreate createHero={this.createHero} />
        <hr />
      </div>
    );
  }
}

const { object } = PropTypes;
HeroList.prototypes = {
  location: object.isRequired,
};

function HeroTable(props) {
  const borderedStyle = { border: "1px solid silver", padding: 4 };
	let heroRows;
  // if(props.heros) {
	  heroRows = props.heros.map(hero => (
		  <HeroRow key={hero._id} hero={hero} deleteHero={props.deleteHero}/>));
	 //  ));
  // } else{
	 //  heroRows = <HeroRow key={new Object()} hero={ {name: "default" }} deleteHero={props.deleteHero}/>
  // }
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

HeroTable.propTypes = {
  heros: object.isRequired,
};

const HeroRow = props => {

  function deleteHero() {
    props.deleteHero(props.hero._id);
  }
	return (
		<tr>
			<td>
				<Link to={`/heros/${props.hero._id}`}>{props.hero.name}</Link>
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
  hero: object.isRequired,
  deleteHero: PropTypes.func.isRequired,
};

//export default connect(mapStateToProps, mapDispatchToProps)(HeroList);
export default withRouter(HeroList);
