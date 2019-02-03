const defaultCharactersV2 = [
  {
    level: '1',
    name: 'Merisiel',
    player: 'DM',
    hitPoints: '16',
    CHA: '12',
    CON: '14',
    DEX: '18',
    INT: '12',
    STR: '10',
    WIS: '12',
    AC: '17',
    TOUCHAC: '15',
    modifiers: {
        CHA: '1',
        CON: '2',
        DEX: '4',
        INT: '1',
        STR: '0',
        WIS: '1',
        FORT: '3',
        WILL: '3',
        REFLEX: '6',
        PER: '3, Low-Light Vision'
    },
    XP: '',
    abilities: '',
    abilityBoost: '',
    age: '127',
    alignment: 'Chaotic Neutral',
    ancestry: 'Elf',
    ancestryProps: {
      ancestry: 'Elf',
      size: 'Medium',
      speed: 30,
      languages: ['common', 'elven'],
      traits: ['elf', 'humanoid'],
      attributes: {
        'low-light vision': 'You can see in dim light as though it were bright light.'
      }
    },
    background: 'Criminal',
    backgroundProps: {
      background: 'Criminal',
      selectBoost: ['DEX', 'INT'],
      freeAbilityBoost: 1,
      skillFeat: 'Experienced Smuggler',
      loreSkill: 'Underworld',
    },
    characterNotes: '',
    class: 'Rogue',
    spells: null,
    classProps: {
      class: 'Rogue',
      keyAbility: 'DEX',
      proficiencies: {
        Perception: 'Expert'
      },
      savingThrows: {
        Fortitude: 'Trained',
        Reflex: 'Expert',
        Will: 'Expert',
      },
      skills: {
        trained: 10,
        additionalModifier: 'INT',
      },
      weapons: {
        simple: 'Trained',
        'hand crossbow': 'Trained',
        rapier: 'Trained',
        sap: 'Trained',
        shortbow: 'Trained',
        shortsword: 'Trained',
      },
      armor: {
        light: 'Trained',
      },
      signatureSkills: [
        'Acrobatics',
        'Athletics',
        'Crafting',
        'Deception',
        'Diplomacy',
        'Intimidation',
        'Performance',
        'Society',
        'Stealth',
        'Thievery',
      ],
      classFeatures: ['Finesse Striker', 'Sneak Attack', 'Surprise Attack'],
      items: ''
    },
    deity: 'Calistria',
    eyes: 'Black',
    feats: {
      ancestry: 'Forlorn',
      class: 'Nimle Dodge',
    },
    gender: 'Female',
    hair: 'White',
    height: '',
    homeland: 'Varisia',
    items: {
      worn: 'backpack studded leather armor',
      ready: 'rapier, daggers (6), thieves tools',
      stowed: 'hooded lantern, oil (5), rations (3), silk rope (50ft)',
      coins: {
        gold: 4,
        silver: 3,
        copper: 0,
        platinum: 0,

      },
      bulk: '3 Bulk, 2 light (encumbered beyond 5 Bulk, max 10 Bulk)',
    },
    actions: {
      stride: '30 feet',
      melee: ['rapier +5 (deadly 1d8, disarm, finesse), Damage 1d6+4 piercing'],
      ranged: ['dagger +5 (agile, finesse, thrown 10, versatile slashing) Damage 1d4 piercing']
    },
    size: 'Medium',
    traits: {

    },
    skillsModifiers: {
      Acrobatics: 4,
      Athletics: 1,
      Crafting: 2,
      Deception: 2,
      Diplomacy: 2,
      Intimidation: 2,
      Lore: 2,
      Performance: 2,
      Religion: 2,
      Society: 2,
      Stealth: 4,
      Thievery: 4,
    },
    skillFeats: 'Cat Fall, Experienced Smuggler',
    type: 'NPC',
    user:'',
    weight: '',
  },
  {
    level: '1',
    name: 'Ezren',
    player: 'DM',
    hitPoints: '16',
    CHA: '10',
    CON: '14',
    DEX: '14',
    INT: '18',
    STR: '10',
    WIS: '12',
    AC: '13',
    TOUCHAC: '15',
    modifiers: {
        CHA: '+0',
        CON: '+2',
        DEX: '+2',
        INT: '+4',
        STR: '+0',
        WIS: '+1',
        FORT: '+4',
        REFLEX: '+3',
        WILL: '+3',
        TOUCHAC: '+1 with shield',
        AC: ' +1 with shield',
        PER: '2',
    },
    XP: '',
    abilities: '',
    abilityBoost: '',
    age: '42',
    alignment: 'Neutral Good',
    ancestry: 'Human',
    ancestryProps: {
      ancestry: 'Human',
      size: 'Medium',
      speed: 25,
      languages: ['common', 'Draconic', 'Infernal'],
      traits: ['human', 'humanoid'],
      attributes: {
      }
    },
    background: 'Noble',
    backgroundProps: {
      background: 'Noble',
      skillFeat: 'Courtly Graces',
      loreSkill: 'Nobility',
    },
    characterNotes: '',
    class: 'Wizard',
    classProps: {
      class: 'Wizard',
        keyAbility: 'INT',
        hp: 6,
        proficiencies: {
          Perception: 'Trained'
        },
        savingThrows: {
          Fortitude: 'Trained',
          Reflex: 'Trained',
          Will: 'Expert',
        },
        skills: {
          trained: 2,
          additionalModifier: 'INT',
        },
        weapons: {
          club: 'Trained',
          dagger: 'Trained',
          staff: 'Trained',
          'heavy crossbow': 'Trained',
          'light crossbow': 'Trained',
        },
        armor: {
        },
        signatureSkills: [
          'Crafting',
          'Arcana'
        ],
        spells: {
          'Arcane spell rolls': 'Trained',
          'Arcane spell DCs': 'Trained',
          'Arcane spell attack rolls': 'Trained',
        },
        classFeatures: ['Arcane Spellcasting', 'Spell Repertoire', 'Cantrips', 'Heightening Spells', 'Arcane Focus', 'Arcane School', 'Drain Arcane Focus'],
        items: 'Spellbook'
    },
    spells: {
      roll: '+5',
      DC: '15',
      cantrips: 'acid splash, detect magic, light, shield',
      One: 'burning hands, magic missle',
    },
    deity: 'None',
    eyes: 'Blue',
    feats: {
      ancestry: 'General Training',
      general: 'Great Fortitude',
      class: 'Widen Spell',
    },
    gender: 'Male',
    hair: 'White',
    height: '',
    homeland: 'Absalom',
    items: {
      worn: 'backpack, material component pouch',
      ready: 'staff, dagger, crossbow with 10 bolts',
      stowed: 'rations (3), scroll case, spellbook',
      coins: {
        gold: 9,
        silver: 8,
        copper: 5,
        platinum: 0,

      },
      bulk: '1 Bulk, 8 light (encumbered beyond 5 Bulk, max 10 Bulk)',
    },
   
    size: 'Medium',
    traits: {

    },
    skillsModifiers: {
      Arcana: '+5',
      Crafting: '+5', 
      Diplomacy: '+1',
      Lore: 'Nobility +5',
      Nature: '+2',
      Occultism: '+5',
      Society: '+5',
    },
    skillFeats: 'Courtly Graces',
    type: 'NPC',
    actions: {
      stride: '15 feet',
      melee: ['staff +1 (two-hand d8), Damage 1d4 bludgeoning', 
              'dagger +3 (agile, finesse, thrown 10, versatile slashing), Damage 1d4 piercing'],
      ranged: ['crossbow +3 (range 120 feet), Damage 1d8 piercing', 'acid splash +3 touch, Damage 1d4 acid plus splash 1 acid']
    },
    user:'',
    weight: '',
  },
  {
    level: '1',
    name: 'Fumbus',
    player: 'DM',
    hitPoints: '15',
    CHA: '12',
    CON: '12',
    DEX: '16',
    INT: '18',
    STR: '10',
    WIS: '10',
    AC: '15',
    TOUCHAC: '14',
    modifiers: {
        CHA: '+1',
        CON: '+1',
        DEX: '+3',
        INT: '+4',
        STR: '+0',
        WIS: '+0',
        FORT: '+3',
        REFLEX: '+5',
        WILL: '+1',
        TOUCHAC: '',
        AC: '',
        PER: '+1, Darkvision',
    },
    XP: '',
    abilities: '',
    abilityBoost: '',
    age: '',
    alignment: '',
    ancestry: 'Goblin',
    ancestryProps: {
      ancestry: 'Goblin',
      size: 'small',
      speed: 25,
      languages: ['goblin', 'common', 'orc'],
      traits: ['goblin', 'humanoid'],
      attributes: {
        'dark vision': 'You can see in darkness and dim light just as well as ' +
        'you can see in bright light, though your vision in darkness is in black and white',
      }
    },
    background: 'Pathfinder Hopeful',
    backgroundProps: {
      background: 'Noble',
      skillFeat: 'Courtly Graces',
      loreSkill: 'Nobility',
    },
    characterNotes: '',
    class: 'Alchemist',
    classProps: {
      class: 'Alchemist',
        keyAbility: 'INT',
        hp: 8,
        proficiencies: {
          Perception: 'Trained'
        },
        savingThrows: {
          Fortitude: 'Expert',
          Reflex: 'Expert',
          Will: 'Trained',
        },
        skills: {
          trained: 2,
          additionalModifier: 'INT',
        },
        weapons: {
          simple: 'Trained',
          'alchemical bombs': 'Trained',
        },
        armor: {
          light: 'Trained',
        },
        signatureSkills: ['Arcana', 'Crafting', 'Medicine'],
        classFeatures: ['Advanced Alchemy', 'Studied Resonance'],
        items: ['Formula Book']
    },
    spells: {
    },
    deity: '',
    eyes: '',
    feats: {
      ancestry: 'Goblin Weapon Familiarity',
      class: 'Quick Bomber',
    },
    gender: 'Male',
    hair: '',
    height: '',
    homeland: '',
    items: {
      worn: 'backpack, leather armor',
      ready: 'acid flask (2), alchemist fire (4), dogslicer, minor elixir of life (2)',
      stowed: 'alchemists tools, hooded lantern, oil (5), rations (3), repair kit',
      coins: {
        gold: 3,
        silver: 5,
        copper: 0,
        platinum: 0,

      },
      bulk: '4 Bulk, 5 light (encumbered beyond 5 Bulk, max 10 Bulk)',
    },
   
    size: 'small',
    traits: {

    },
    skillsModifiers: {
      Arcana: '+5',
      Crafting: '+5', 
      Deception: '+2',
      Lore: ['Underworld +5', 'Pathfinder Society +5'],
      Stealth: '+4',
      Thievery: '+4',
      Society: '+5',
    },
    skillFeats: 'Additional Lore, Alchemical Crafter',
    type: 'NPC',
    actions: {
      stride: '25 feet',
      melee: ['dogslicer +4 (agile, backstabber, finesse, goblin), Damage 1d6 slashing'],
      ranged: ['acid flask +4 (range 20 feet), Damage 1d4 persistent acid + splash 1 acid',
       'alchemists fire +4 (range 20 feet), Damage 1d8 fire + 1 persistent fire + splash 1 fire']
    },
    user:'',
    weight: '',
  },
];

exports.defaultCharactersV2 = defaultCharactersV2;
