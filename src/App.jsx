//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const contentNode = document.getElementById('contents');

const LevelProgression = {
    1: 0,
    2: 1000,
    3: 3000,
    4: 6000,
    5: 10000,
    6: 15000,
    7: 21000,
    8: 28000,
    9: 36000,
    10: 45000,
    12: 55000,
    13: 66000,
    14: 91000,
    15: 105000,
    16: 120000,
    17: 136000,
    18: 153000,
    19: 171000,
    20: 190000,
};

class HeroList extends React.Component {
    constructor() {
        super();
        this.state = {heros: []};
        this.createHero = this.createHero.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
       fetch('api/heros').then(response =>
       response.json()
       ).then(data => {
           console.log("Total count of heros:", data._metadata.total_count);
           data.heros.forEach(hero => {
               hero.created = new Date(hero.created);

           });
           this.setState({ heros: data.heros});
       }).catch(err => {
           console.log(err);
       });
    }

    createHero(newHero) {
        fetch('/api/heros', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newHero),
        }).then(response => {
                if (response.ok) {
                    response.json().then(updatedHero => {
                        updatedHero.created = new Date(updatedHero.created);
                        const newHeros = this.state.heros.concat(updatedHero);
                        this.setState({ heros: newHeros});
                    });
                } else {
                    response.json().then(error => {
                        alert("Failed to create hero: " + error.message);
                    });
                }
            }).catch(err => {
            alert("Error in sending data to server: " + err.message);
        });
    }

    render() {
        return (
            <div>
                <h1>Adventurer Arena</h1>
                <HeroFilter />
                <hr />
                <HeroTable heros={this.state.heros} />
                <hr />
                <HeroAdd createHero={this.createHero}/>
                <hr />
            </div>
        )
    }
}

class HeroFilter extends React.Component {
    render() {
        return (
            <div>This is a placeholder for the hero filter</div>
        )
    }
}

function HeroTable (props){
    const borderedStyle = {border: "1px solid silver", padding: 4};
    const heroRows = props.heros.map(hero => <HeroRow key={hero.id} hero={hero}/>);
    return (
        <table className={borderedStyle} >
            <thead>
                <tr>
                    <th >Id</th>
                    <th >Name</th>
                    <th >Class</th>
                    <th >Level</th>
                    <th >XP</th>
                    <th >Race</th>
                    <th >Title</th>
                    <th >Age</th>
                    <th >STR</th>
                    <th >DEX</th>
                    <th >CON</th>
                    <th >INT</th>
                    <th >WIS</th>
                    <th >CHA</th>
                </tr>
            </thead>
            <tbody>
            {heroRows}
            </tbody>
        </table>
    );
}

const HeroRow = (props) => (
    <tr>
    <td>{props.hero.id}</td>
    <td>{props.hero.name}</td>
    <td>{props.hero.class}</td>
    <td>{props.hero.level}</td>
    <td>{props.hero.XP}</td>
    <td>{props.hero.race}</td>
    <td>{props.hero.title}</td>
    <td>{props.hero.age}</td>
    <td>{props.hero.STR}</td>
    <td>{props.hero.DEX}</td>
    <td>{props.hero.CON}</td>
    <td>{props.hero.INT}</td>
    <td>{props.hero.WIS}</td>
    <td>{props.hero.CHA}</td>
    </tr>
);

class HeroAdd extends React.Component {
    constructor() {
        super();
        // STR, DEX, CON, INT, WIS, CHA
        this.generateStats = this.generateStats.bind(this);
        this.state = { heroStats: { STR: 15, DEX: 14, CON: 13, INT: 12, WIS: 10, CHA: 8 }};
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    generateStats() {
        const newStats = [];

        let i,j;
        let currentStat =0;
        let statRolls =[];
        for (i = 0; i < 6; i++) {
            statRolls =[];
            currentStat =0;
            for (j = 0; j < 4; j++) {
                statRolls.push( Math.floor(Math.random() * 6) + 1);
            }
            statRolls.sort();
            currentStat = statRolls[1] + statRolls[2] + statRolls[3];
            newStats.push(currentStat);
        }
        this.setState({ heroStats: { STR: newStats[0], DEX: newStats[1], CON: newStats[2],
                INT: newStats[3], WIS: newStats[4], CHA: newStats[5] } });
    }

    handleSubmit(e) {
        e.preventDefault();
        const form = document.forms.heroForm;
        this.props.createHero({
            name: form.name.value,
            class: form.class.value,
            race: form.race.value,
            title: form.title.value,
            age: form.age.value,
            level: 11,
            XP: 0,
            STR: this.state.heroStats.STR,
            DEX: this.state.heroStats.DEX,
            CON: this.state.heroStats.CON,
            INT: this.state.heroStats.INT,
            WIS: this.state.heroStats.WIS,
            CHA: this.state.heroStats.CHA,
        });

        form.reset();
        this.setState({ heroStats: { STR: 15, DEX: 14, CON: 13, INT: 12, WIS: 10, CHA: 8 }});

    }

    render() {
        const styles = {
            buttonStyle: {backgroundColor: "#fd9c47"},
        };
        return (
            <div>
                <button onClick={this.generateStats}> Roll for Stats</button>
                <form name="heroForm" onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="Name" />
                    <select name="race">
                        <option value="dwarf">Dwarf</option>
                        <option value="Human">Human</option>
                        <option value="orc">Orc</option>
                        <option value="elf">Elf</option>
                        <option value="gnome">Gnome</option>
                    </select>
                    <select name="class">
                        <option value="Wizard">Wizard</option>
                        <option value="Druid">Druid</option>
                        <option value="Fighter">Fighter</option>
                        <option value="Paladin">Paladin</option>
                        <option value="Rogue">Rogue</option>
                        <option value="Cleric">Cleric</option>
                    </select>
                    <input type="text" name="title" placeholder="Title" />
                    <input type="text" name="age" placeholder="Age" />
                    <StatsTable stats={this.state.heroStats} />
                    <button style={styles.buttonStyle}>Create New Hero</button>
                </form>

            </div>
        )
    }
}

function StatsTable (props){
    const borderedStyle = {border: "1px solid silver", padding: 4};
    return (
        <table className={borderedStyle} >
            <tbody>
            <tr>
                <td>STR: {props.stats.STR}</td>
                <td>DEX: {props.stats.DEX}</td>
                <td>CON: {props.stats.CON}</td>
                <td>INT: {props.stats.INT}</td>
                <td>WIS: {props.stats.WIS}</td>
                <td>CHA: {props.stats.CHA}</td>
            </tr>
            </tbody>
        </table>
    );
}

ReactDOM.render(<HeroList/>, contentNode);