const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('static'));
app.use(bodyParser.json());

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
        level: 11,
        XP: 200
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
        level: 11,
        XP: 1000
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
        level: 11,
        XP: 0
    }
];

app.get('/api/heros', (req, res) => {
    const metadata = {total_count: Heros.length};
    res.json({ _metadata: metadata, heros: Heros});
});

app.post('/api/heros', (req, res) => {
   const newHero = req.body;
   newHero.id = Heros.length + 1;
   if (!newHero.age) {
       newHero.age = 34;
   }
   if (!newHero.name) {
       res.status(422).json({ message: "New hero must have a name."});
       return;
   }
   newHero.created = new Date();
   Heros.push(newHero);
   res.json(newHero);

});

app.listen(3000, () => {
    console.log('App started on port 3000.');
});