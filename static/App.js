'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
var contentNode = document.getElementById('contents');

var LevelProgression = {
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
    20: 190000
};

var HeroList = function (_React$Component) {
    _inherits(HeroList, _React$Component);

    function HeroList() {
        _classCallCheck(this, HeroList);

        var _this = _possibleConstructorReturn(this, (HeroList.__proto__ || Object.getPrototypeOf(HeroList)).call(this));

        _this.state = { heros: [] };
        _this.createHero = _this.createHero.bind(_this);
        return _this;
    }

    _createClass(HeroList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadData();
        }
    }, {
        key: 'loadData',
        value: function loadData() {
            var _this2 = this;

            fetch('api/heros').then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log("Total count of heros:", data._metadata.total_count);
                data.heros.forEach(function (hero) {
                    hero.created = new Date(hero.created);
                });
                _this2.setState({ heros: data.heros });
            }).catch(function (err) {
                console.log(err);
            });
        }
    }, {
        key: 'createHero',
        value: function createHero(newHero) {
            var _this3 = this;

            fetch('/api/heros', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newHero)
            }).then(function (response) {
                if (response.ok) {
                    response.json().then(function (updatedHero) {
                        updatedHero.created = new Date(updatedHero.created);
                        var newHeros = _this3.state.heros.concat(updatedHero);
                        _this3.setState({ heros: newHeros });
                    });
                } else {
                    response.json().then(function (error) {
                        alert("Failed to create hero: " + error.message);
                    });
                }
            }).catch(function (err) {
                alert("Error in sending data to server: " + err.message);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Adventurer Arena'
                ),
                React.createElement(HeroFilter, null),
                React.createElement('hr', null),
                React.createElement(HeroTable, { heros: this.state.heros }),
                React.createElement('hr', null),
                React.createElement(HeroAdd, { createHero: this.createHero }),
                React.createElement('hr', null)
            );
        }
    }]);

    return HeroList;
}(React.Component);

var HeroFilter = function (_React$Component2) {
    _inherits(HeroFilter, _React$Component2);

    function HeroFilter() {
        _classCallCheck(this, HeroFilter);

        return _possibleConstructorReturn(this, (HeroFilter.__proto__ || Object.getPrototypeOf(HeroFilter)).apply(this, arguments));
    }

    _createClass(HeroFilter, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                'This is a placeholder for the hero filter'
            );
        }
    }]);

    return HeroFilter;
}(React.Component);

function HeroTable(props) {
    var borderedStyle = { border: "1px solid silver", padding: 4 };
    var heroRows = props.heros.map(function (hero) {
        return React.createElement(HeroRow, { key: hero.id, hero: hero });
    });
    return React.createElement(
        'table',
        { className: borderedStyle },
        React.createElement(
            'thead',
            null,
            React.createElement(
                'tr',
                null,
                React.createElement(
                    'th',
                    null,
                    'Id'
                ),
                React.createElement(
                    'th',
                    null,
                    'Name'
                ),
                React.createElement(
                    'th',
                    null,
                    'Class'
                ),
                React.createElement(
                    'th',
                    null,
                    'Level'
                ),
                React.createElement(
                    'th',
                    null,
                    'XP'
                ),
                React.createElement(
                    'th',
                    null,
                    'Race'
                ),
                React.createElement(
                    'th',
                    null,
                    'Title'
                ),
                React.createElement(
                    'th',
                    null,
                    'Age'
                ),
                React.createElement(
                    'th',
                    null,
                    'STR'
                ),
                React.createElement(
                    'th',
                    null,
                    'DEX'
                ),
                React.createElement(
                    'th',
                    null,
                    'CON'
                ),
                React.createElement(
                    'th',
                    null,
                    'INT'
                ),
                React.createElement(
                    'th',
                    null,
                    'WIS'
                ),
                React.createElement(
                    'th',
                    null,
                    'CHA'
                )
            )
        ),
        React.createElement(
            'tbody',
            null,
            heroRows
        )
    );
}

var HeroRow = function HeroRow(props) {
    return React.createElement(
        'tr',
        null,
        React.createElement(
            'td',
            null,
            props.hero.id
        ),
        React.createElement(
            'td',
            null,
            props.hero.name
        ),
        React.createElement(
            'td',
            null,
            props.hero.class
        ),
        React.createElement(
            'td',
            null,
            props.hero.level
        ),
        React.createElement(
            'td',
            null,
            props.hero.XP
        ),
        React.createElement(
            'td',
            null,
            props.hero.race
        ),
        React.createElement(
            'td',
            null,
            props.hero.title
        ),
        React.createElement(
            'td',
            null,
            props.hero.age
        ),
        React.createElement(
            'td',
            null,
            props.hero.STR
        ),
        React.createElement(
            'td',
            null,
            props.hero.DEX
        ),
        React.createElement(
            'td',
            null,
            props.hero.CON
        ),
        React.createElement(
            'td',
            null,
            props.hero.INT
        ),
        React.createElement(
            'td',
            null,
            props.hero.WIS
        ),
        React.createElement(
            'td',
            null,
            props.hero.CHA
        )
    );
};

var HeroAdd = function (_React$Component3) {
    _inherits(HeroAdd, _React$Component3);

    function HeroAdd() {
        _classCallCheck(this, HeroAdd);

        // STR, DEX, CON, INT, WIS, CHA
        var _this5 = _possibleConstructorReturn(this, (HeroAdd.__proto__ || Object.getPrototypeOf(HeroAdd)).call(this));

        _this5.generateStats = _this5.generateStats.bind(_this5);
        _this5.state = { heroStats: { STR: 15, DEX: 14, CON: 13, INT: 12, WIS: 10, CHA: 8 } };
        _this5.handleSubmit = _this5.handleSubmit.bind(_this5);
        return _this5;
    }

    _createClass(HeroAdd, [{
        key: 'generateStats',
        value: function generateStats() {
            var newStats = [];

            var i = void 0,
                j = void 0;
            var currentStat = 0;
            var statRolls = [];
            for (i = 0; i < 6; i++) {
                statRolls = [];
                currentStat = 0;
                for (j = 0; j < 4; j++) {
                    statRolls.push(Math.floor(Math.random() * 6) + 1);
                }
                statRolls.sort();
                currentStat = statRolls[1] + statRolls[2] + statRolls[3];
                newStats.push(currentStat);
            }
            this.setState({ heroStats: { STR: newStats[0], DEX: newStats[1], CON: newStats[2],
                    INT: newStats[3], WIS: newStats[4], CHA: newStats[5] } });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            var form = document.forms.heroForm;
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
                CHA: this.state.heroStats.CHA
            });

            form.reset();
            this.setState({ heroStats: { STR: 15, DEX: 14, CON: 13, INT: 12, WIS: 10, CHA: 8 } });
        }
    }, {
        key: 'render',
        value: function render() {
            var styles = {
                buttonStyle: { backgroundColor: "#fd9c47" }
            };
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.generateStats },
                    ' Roll for Stats'
                ),
                React.createElement(
                    'form',
                    { name: 'heroForm', onSubmit: this.handleSubmit },
                    React.createElement('input', { type: 'text', name: 'name', placeholder: 'Name' }),
                    React.createElement(
                        'select',
                        { name: 'race' },
                        React.createElement(
                            'option',
                            { value: 'dwarf' },
                            'Dwarf'
                        ),
                        React.createElement(
                            'option',
                            { value: 'Human' },
                            'Human'
                        ),
                        React.createElement(
                            'option',
                            { value: 'orc' },
                            'Orc'
                        ),
                        React.createElement(
                            'option',
                            { value: 'elf' },
                            'Elf'
                        ),
                        React.createElement(
                            'option',
                            { value: 'gnome' },
                            'Gnome'
                        )
                    ),
                    React.createElement(
                        'select',
                        { name: 'class' },
                        React.createElement(
                            'option',
                            { value: 'Wizard' },
                            'Wizard'
                        ),
                        React.createElement(
                            'option',
                            { value: 'Druid' },
                            'Druid'
                        ),
                        React.createElement(
                            'option',
                            { value: 'Fighter' },
                            'Fighter'
                        ),
                        React.createElement(
                            'option',
                            { value: 'Paladin' },
                            'Paladin'
                        ),
                        React.createElement(
                            'option',
                            { value: 'Rogue' },
                            'Rogue'
                        ),
                        React.createElement(
                            'option',
                            { value: 'Cleric' },
                            'Cleric'
                        )
                    ),
                    React.createElement('input', { type: 'text', name: 'title', placeholder: 'Title' }),
                    React.createElement('input', { type: 'text', name: 'age', placeholder: 'Age' }),
                    React.createElement(StatsTable, { stats: this.state.heroStats }),
                    React.createElement(
                        'button',
                        { style: styles.buttonStyle },
                        'Create New Hero'
                    )
                )
            );
        }
    }]);

    return HeroAdd;
}(React.Component);

function StatsTable(props) {
    var borderedStyle = { border: "1px solid silver", padding: 4 };
    return React.createElement(
        'table',
        { className: borderedStyle },
        React.createElement(
            'tbody',
            null,
            React.createElement(
                'tr',
                null,
                React.createElement(
                    'td',
                    null,
                    'STR: ',
                    props.stats.STR
                ),
                React.createElement(
                    'td',
                    null,
                    'DEX: ',
                    props.stats.DEX
                ),
                React.createElement(
                    'td',
                    null,
                    'CON: ',
                    props.stats.CON
                ),
                React.createElement(
                    'td',
                    null,
                    'INT: ',
                    props.stats.INT
                ),
                React.createElement(
                    'td',
                    null,
                    'WIS: ',
                    props.stats.WIS
                ),
                React.createElement(
                    'td',
                    null,
                    'CHA: ',
                    props.stats.CHA
                )
            )
        )
    );
}

ReactDOM.render(React.createElement(HeroList, null), contentNode);