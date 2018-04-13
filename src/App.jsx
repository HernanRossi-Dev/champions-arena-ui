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

const Heros = [
    {
        id: 1,
        class: 'Rogue',
        race: 'Dwarf',
        name: 'Ravan',
        created: new Date('2018-03-15'),
        STR: 10,
        DEX: 17,
        CON: 14,
        INT: 15,
        WIS: 9,
        CHA: 14,
        title: 'Shadow Dancer',
        age: 65,
        level: 3,
        XP: 200,
    },
    {
        id: 2,
        class: 'Barbarian',
        race: 'Half-Orc',
        name: 'Tov',
        created: new Date('2018-03-10'),
        STR: 16,
        DEX: 15,
        CON: 17,
        INT: 18,
        WIS: 11,
        CHA: 13,
        title: 'Stone Jaw',
        age: 32,
        level: 3,
        XP: 1000,
    },
    {
        id: 3,
        class: 'Wizard',
        race: 'Human',
        name: 'Thain',
        created: new Date('2018-03-10'),
        STR: 12,
        DEX: 12,
        CON: 15,
        INT: 19,
        WIS: 15,
        CHA: 17,
        title: 'The Red Flame',
        age: 53,
        level: 3,
        XP: 0,
    },
];

class HeroList extends React.Component {
    constructor() {
        super();
        this.state = {Heros: []};
        this.createHero = this.createHero.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        setTimeout(() => {
            this.setState({Heros: Heros});
        }, 500);
    }

    createHero(newHero) {
        const newHeros = this.state.Heros.slice();
        newHero.id = this.state.Heros.length + 1;
        newHeros.push(newHero);
        this.setState({ Heros: newHeros });
    }

    render() {
        return (
            <div>
                <h1>DnD Arena</h1>
                <HeroFilter />
                <hr />
                <HeroTable heros={this.state.Heros} />
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
        this.state = {heroStats: [15,14,13,12,10,8]};
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
        this.setState({ heroStats: newStats });
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
            level: 3,
            XP: 0,
            STR: this.state.heroStats[0],
            DEX: this.state.heroStats[1],
            CON: this.state.heroStats[2],
            INT: this.state.heroStats[3],
            WIS: this.state.heroStats[4],
            CHA: this.state.heroStats[5],
        });

        form.name.value = ""; form.title.value ="";
        form.class.value = ""; form.race.value ="";
        form.age.value = "";
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
                        <option value="dragonBorn">DragonBorn</option>
                        <option value="tiefling">Tiefling</option>
                        <option value="halfElf">Half-Elf</option>
                        <option value="halfOrc">Half-Orc</option>
                        <option value="halfling">Halfling</option>
                    </select>
                    <select name="class">
                        <option value="wizard">Wizard</option>
                        <option value="druid">Druid</option>
                        <option value="fighter">Fighter</option>
                        <option value="monk">Monk</option>
                        <option value="bard">Bard</option>
                        <option value="barbarian">Barbarian</option>
                        <option value="paladin">Paladin</option>
                        <option value="rogue">Rogue</option>
                        <option value="warlock">Warlock</option>
                        <option value="cleric">Cleric</option>
                        <option value="sorcerer">Sorcerer</option>
                    </select>
                    <input type="text" name="title" placeholder="Title" />
                    <input type="text" name="age" placeholder="Age" />
                    <table>
                        <tbody>
                        <tr>
                            <td>STR: {this.state.heroStats[0]}</td>
                            <td>DEX: {this.state.heroStats[1]}</td>
                            <td>CON: {this.state.heroStats[2]}</td>
                            <td>INT: {this.state.heroStats[3]}</td>
                            <td>WIS: {this.state.heroStats[4]}</td>
                            <td>CHA: {this.state.heroStats[5]}</td>
                        </tr>
                        </tbody>
                    </table>


                    <button style={styles.buttonStyle}>Create New Hero</button>
                </form>

            </div>
        )
    }
}



ReactDOM.render(<HeroList/>, contentNode);