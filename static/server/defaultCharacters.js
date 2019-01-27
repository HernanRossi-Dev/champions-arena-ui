const defaultCharacters = [
  {
    player: 'NPC',

    name: "Amiri",
    class: "Barbarian",
    ancestry: "Human",
    type: "Iconic",
    gender: "Female",
    alignment: "Chaotic Neutral",
    age: 'unknown',
    hair: 'Brown',
    eyes: 'Brown',
    height: 'Unknown',
    weight: 'Unknown',
    level: 7,
    XP: 19200,
    attributes: { Init: 2, Senses: { Perception: 16 } },
    STR: 30,
    DEX: 14,
    CON: 24,
    INT: 10,
    WIS: 12,
    CHA: 10,
    baseAttack: 12,
    CMB: { base: 22, additional: { "bull rush": 24 } },
    CMD: { base: 35, vs: { "bull rush": 37 } },
    feats: [
      "Cleave",
      "Exotic Weapons Proficiency (bastard sword)",
      "Power Attack",
      "Great Cleave",
      "Improved Bull Rush",
      "Toughness",
      "Weapon Proficiency (bastard sword)"
    ],
    skills: {
      Climb: 23,
      HandleAnimal: 9,
      Intimidate: 15,
      Perception: 16,
      Survival: 13,
      Swim: 20
    },

    size: "Medium",
    defense: {
      AC: 24,
      touch: 13,
      "flat-footed": {
        base: 22,
        armor: 9,
        deflection: 3,
        Dex: 2,
        natural: 2,
        rage: -2
      }
    },
    hp: { base: 191, aug: "12d12+108" },
    Fort: 29,
    Ref: 10,
    Will: 12,
    offense: {
      Speed: 40,
      Melee: { modifiers: { baseAttack: 3, }, name: "Large bastard sword" },
      Ranged: { modifiers: { baseAttack: 1, }, name: "Longbow" },
      SpecialAttacks: {
        "Greater rage": "30 rounds/day",
        "Rage powers": "guarded stance [+3 dodge vs melee",
        "Increased damage reduction": "+1",
        "Powerful Blow": "+4",
        "Renewed vigor": "3d8+7 hp",
        "Strength surge": "+12",
        "Surprise accuracy": "+4"
      }
    },

    languages: ["Common"],
    gear: {
      weapons: {
        "Javelin of Lightning": { amount: 1, modifiers: {} },
        "Large Bastard Sword": { amount: 1, modifiers: { attackBonus: 3 } },
        LongBow: { amount: 1, modifiers: { arrows: 20 } }
      },
      potions: {
        "Potions of Cure Serious Wounds": { amount: 5 },
        "Potion of Delay Poison": { amount: 1 },
        "Potion of Fly": { amount: 1 },
        "Potion of Hase": { amount: 1 },
        "Potion of Lesser Restoration": { amount: 1 }
      },
      armor: {
        "Hide Armor": { amount: 1, modifiers: { AC: 5 } },
        "Belt of Physical Might": { amount: 1, modifiers: { STR: 4, DEX: 4 } },
        "Cloak of Resistence": { amount: 1, modifiers: { AC: 4 } }
      },
      other: {
        backpack: { amount: 1 },
        bedroll: { amount: 1 },
        caltrops: { amount: 1 },
        shovel: { amount: 1 },
        torches: { amount: 5 },
        waterskin: { amount: 1 },
        gp: 420,
        'trail rations': { amount: 4 },
        'flint and steel': { amount: 1 },
        'hemp rope (50 ft)': { amount: 1 },
      }
    },
    homeland: 'Realm of the Mammoth Lords',
    deity: 'Gorum',
    bio:
      "Amiri never fit into the expected gender roles of her tribe, refusing to be the docile, domestic sort of woman " +
      "that the Six Bear tribe valued. Instead, she insisted on competing with the male warriors of her tribe, and constantly " +
      "one-upped them. If another hunter brought back a caribou to feed the tribe, she brought back two. If the best warrior" +
      " among them killed four orcs in a raid, she killed six. Though many were secretly impressed by her prowess, other tribes " +
      "mocked them, and the village elders knew that tradition could not be mocked without grave consequences. Amiri had to die." +
      " When the tribe attempted to send her on a suicide mission, however, Amiri refused to fall. Instead, she returned with an " +
      "enormous trophy: a frost giant's sword. Her former comrades' laughter—how could she possibly expect to wield such a huge " +
      "blade—and the admission that she'd been sent out to die was too much for Amiri. Rage overtook her, and in that blind bloodlust " +
      "she found a strength she'd never known she possessed. When the red mists cleared, she was surrounded by dead members of" +
      " her hunting party. While she was unrepentant for the deaths of the men who preferred to betray her rather than admit her" +
      " skill, Amiri still knew that kin-killing was a crime she could never live down. She abandoned her people to the cold " +
      "steppes and tundra and headed south toward more civilized lands, enjoying the heady rush of finally no longer being " +
      "bound by tradition. Since then, she has taken to traveling only with those adventurers and mercenary companies who " +
      "show her proper respect. She values her over-sized sword (even though she can only truly wield it properly when her " +
      "blood rage takes her), but never speaks of the circumstances that forced her to flee her homeland. Some things are " +
      "better left unsaid.\n" +
      "\n"
  },
  {
    player: 'NPC',
    name: "Ezren",
    class: "Wizard",
    ancestry: "Human",
    homeland: 'Absalom',
    deity: 'Atheist',
    type: "Iconic",
    hair: 'White',
    eyes: 'Blue',
    height: 'Unknown',
    weight: 'Unknown',
    gender: "Male",
    alignment: "Neutral Good",
    age: 52,
    level: 1,
    XP: 400,
    attributes: { Init: 2, Senses: { Perception: 1 } },
    STR: 10,
    DEX: 14,
    CON: 13,
    INT: 18,
    WIS: 12,
    CHA: 10,
    baseAttack: 0,
    CMB: { base: 0, additional: {} },
    CMD: { base: 12, vs: {} },
    feats: [
      "Combat Casting",
      "Great Fortitude",
      "Scribe Scroll",
    ],
    skills: {
      Appraise: 8,
      Knowledge: 8,
      Linguistics: 8,
      Spellcraft: 8,
    },

    size: "Medium",
    defense: {
      AC: 16,
      touch: 12,
      "flat-footed": {
        base: 14,
        armor: 4,
        Dex: 2,
      }
    },
    hp: { base: 8, aug: "1d6+2" },
    Fort: 3,
    Ref: 2,
    Will: 3,
    offense: {
      Speed: 30,
      Melee: { modifiers: { baseAttack: 1, roll: { amount: 1, dice: 6 } }, name: "Mwk cane" },
      Ranged: { modifiers: { baseAttack: 2, roll: { amount: 1, dice: 8 } }, name: "Light Crossbow" },
      SpecialAttacks: {
        "Hands of the Apprentice": "7/day",
      },
      Wizard: {
        levels: {
          0: ['acid splash', 'detect magic', 'light'],
          1: ['burning hands', 'magic missile']
        }
      },
    },
    languages: ["Common", 'Draconic', 'Goblin', 'Infernal', 'Osiriani', 'Terran'],
    specialQualities: { 'arcane bond': 'cane' },
    gear: {
      weapons: {
        "Dagger": { amount: 1, modifiers: {} },
        "Light crossbow": { amount: 1, modifiers: { bolts: 10 } },
        'Masterwork Cane': { amount: 1, modifiers: {} }
      },

      armor: {
      },
      other: {
        backpack: { amount: 1 },
        'scroll case': { amount: 1 },
        'spell component pouch': { amount: 1 },
        gp: 9,
        spellbook: {
          levels: {
            0: ['color spray', 'expeditious retreat', 'grease', 'mage armor', 'protection from evil', 'shield', 'sleep'],
          }
        },
      }
    },
    bio:
      "Born to a successful merchant in Absalom, Ezren spent his childhood in comfort and safety, only to have all" +
      " that change when his father was charged with heresy against the god Abadar. Ezren spent much of his adult " +
      "life attempting to prove his father's innocence, only to finally confirm his father's guilt. The revelation " +
      "shook Ezren to the core, undermining his faith in family and church, and he abandoned both, setting out to " +
      "find a new life. Despite his age, Ezren embraced arcane studies, a pursuit that swiftly revealed a true aptitude " +
      "for the wizardly arts. With freedom and potency he's never enjoyed before, Ezren seeks to explore the world he so long neglected."
  },
  {
    player: 'NPC',
    name: "Lini",
    class: "Druid",
    ancestry: "Gnome",
    homeland: 'Lands of the Linnorm Kings',
    deity: 'Green Faith',
    type: "Iconic",
    hair: 'Green',
    eyes: 'Green',
    height: 'Unknown',
    weight: 'Unknown',
    gender: "Male",
    alignment: "Neutral",
    age: 'Unknown',
    level: 17,
    XP: 19200,
    attributes: { Init: 1, Senses: { Perception: 23, other: ['Low-light vision'] } },
    STR: 6,
    DEX: 12,
    CON: 16,
    INT: 12,
    WIS: 22,
    CHA: 16,
    baseAttack: 9,
    CMB: { base: 6, additional: {} },
    CMD: { base: 19, vs: {} },
    feats: [
      "Augmented Summoning",
      "Combat Casting",
      "Lighting Reflexes",
      "Natural Spell",
      "Self-Sufficient",
      "Spell Focus (conjuration)",
    ],
    skills: {
      Craft: [3, 'jewelery'],
      'Handle Animal': 18,
      Heal: 19,
      Knowledge: [[16, 'geography'], [18, 'nature']],
      Perception: 23,
      Spellcraft: 16,
      Survival: 17,
    },

    size: "Small",
    defense: {
      AC: 24,
      touch: 14,
      "flat-footed": {
        base: 23,
        armor: 5,
        deflection: 2,
        natural: 5,
        size: 1,
        Dex: 1,
      }
    },
    hp: { base: 93, aug: "12d8+36" },
    Fort: 12,
    Ref: 8,
    Will: { base: 15, vs: { illusion: 2, 'fey-targeted effects': 4, 'plant-targeted effects': 4 } },
    DefensiveAbilities: {
      'defensive training': { bonus: 4, effect: 'dodge bonus to AC vs giants' }
      , DR: '10/adamantine', immune: ['poison']
    },
    offense: {
      Speed: 20,
      Melee: { modifiers: { baseAttack: 3, roll: { amount: 1, dice: 4, bonus: 1 } }, name: "Sickle" },
      Ranged: { modifiers: { baseAttack: 2, roll: { amount: 1, dice: 3 } }, name: "Sling" },
      SpecialAttacks: {
        "Wild Shape": "6/day",
        'Attack Bonus': "+1 on attack rolls against goblinoid and reptilian humanoids",
      },
      'Spell-Like Abilities': {
        'Dancing Lights': '1/day',
        'Ghost Sound': 'DC 14',
        'Speak with animals': 'unrestricted',
        'Prestidigitation': 'unrestricted',
      },
    },
    DruidSpells: {
      0: ['detect magic', 'know direction', 'light', 'resistance'],
      1: ['entangle', 'faerie fire', 'goodberry', 'speak with animals'],
      2: ['barkskin', 'bull\'s strength', 'flaming sphere', 'lesser restoration', 'spider climb'],
      3: ['daylight', 'greater magic fang', 'neutralize poison', 'remove disease'],
      4: ['air walk', 'dispel magic', 'flame strike', 'ice storm'],
      5: ['animal growth', 'stoneskin', 'wall of thorns'],
      6: ['mass bull\'s strength', 'move earth', 'wall of stone']
    }
    ,
    languages: ["Common", 'Druidic', 'Gnome', 'Goblin', 'Sylvan'],
    specialQualities: { 'nature bond (animal companion': 'Droogami (snow leopard', other: ['nature sense', 'trackless step', 'wild empathy', 'woodland stride'] },
    gear: {
      weapons: {
        "Wand of Flame Blade": { amount: 1, modifiers: { charges: 21, damage: 'acid' } },
        "Sickle": { amount: 1, modifiers: { bonus: 3 } },
        'Sling': { amount: 1, modifiers: { bonus: 2, bullets: 20 } }
      },

      armor: {
        'Leather Armor': { amount: 1, modifiers: { bonus: 3 } },
        'Cloak of Resistance': { amount: 1, modifiers: { bonus: 1 } },
        'Druid\'s Vestments': { amount: 1, modifiers: { bonus: 1 } },
        'Ring of Protection': { amount: 1, modifiers: { bonus: 2 } },
        'Headband of Inspired Wisdom': { amount: 1, modifiers: { bonus: 4 } },
      },
      other: {
        'Belt Pouch': { amount: 1 },
        'Stick Collection': { amount: 1 },
        'spell component pouch': { amount: 1 },
        gp: 603,

      }
    },
    bio:
      "Lini always had a way with wild creatures. More than once, her enclave was threatened by some" +
      " great bear or razor-clawed cat, yet each time she soothed the beast and sent it on its way." +
      " In the years since her departure from the Lands of the Linnorm Kings, Lini has collected more " +
      "than a dozen sticks—one from each forest she has visited. These sticks are a roadmap of her experiences, " +
      "and each holds a wealth of memories for the gnome druid."
  },

];

exports.defaultCharacters = defaultCharacters;
