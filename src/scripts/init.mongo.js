db = new Mongo().getDB('Pathfinder');

db.heros.remove({});

db.heros.insert([
    {
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
]);

db.heros.createIndex({ name: 1 });
db.heros.createIndex({ class: 1 });
db.heros.createIndex({ race: 1 });