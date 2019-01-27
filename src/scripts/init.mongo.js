db = new Mongo().getDB('Pathfinder');

db.characters.remove({});

db.characters.insert([
    {
        class: 'Rogue',
        ancestry: 'Dwarf',
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
        ancestry: 'Half-Orc',
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
        ancestry: 'Human',
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

db.characters.createIndex({ name: 1 });
db.characters.createIndex({ class: 1 });
db.characters.createIndex({ ancestry: 1 });