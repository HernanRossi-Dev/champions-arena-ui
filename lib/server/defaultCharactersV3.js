const defaultCharactersV3 = [
  {
    user: 'DM',
    basics: {
      name: 'Merisiel',
      player: 'DM',
      LVL: 1,
      XP: '500',
      homeland: 'Varisia',
      deity: 'Calistria',
      alignment: 'Chaotic Neutral',
      abilityBoost: '',
      type: 'Iconic',
    },
    appearance: {
      age: '127',
      eyes: 'Black',
      gender: 'Female',
      hair: 'White',
      height: '',
      weight: '',
    },
    mainStats: {
      HP: '16',
      CHA: '12',
      CON: '14',
      DEX: '18',
      INT: '12',
      STR: '10',
      WIS: '12',
      AC: '17',
      TOUCHAC: '15',
    },
    modifiers: {
      CHA: '+1',
      CON: '+2',
      DEX: '+4',
      INT: '+1',
      STR: '+0',
      WIS: '+1',
      FORT: '+3',
      WILL: '+3',
      REFLEX: '+6',
      PER: '+3, Low-Light Vision'
    },
    ancestryProps: {
      ancestry: 'Elf',
      size: 'Medium',
      speed: 30,
      languages: 'common, elven',
      traits: ['elf', 'humanoid'],
      attributes: {
        'low-light vision': 'You can see in dim light as though it were bright light.'
      }
    },
    backgroundProps: {
      background: 'Criminal',
      selectBoost: ['DEX', 'INT'],
      freeAbilityBoost: 1,
      skillFeat: 'Experienced Smuggler',
      loreSkill: 'Underworld',
    },
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
    feats: {
      ancestry: 'Forlorn',
      class: 'Nimble Dodge',
    },
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
    traits: {
    },
    characterNotes: '',
    spells: {},
    skillFeats: 'Cat Fall, Experienced Smuggler',
  },
  {
    user: 'DM',
    basics: {
      name: 'Ezren',
      player: 'DM',
      LVL: 1,
      XP: '500',
      homeland: 'Absalom',
      deity: 'None',
      alignment: 'Neutral Good',
      abilityBoost: '',
      type: 'Iconic',
    },
    appearance: {
      age: '42',
      eyes: 'Blue',
      gender: 'Male',
      hair: 'White',
      height: '',
      weight: '',
    },
    mainStats: {
      HP: '16',
      CHA: '10',
      CON: '14',
      DEX: '14',
      INT: '18',
      STR: '10',
      WIS: '12',
      AC: '13',
      TOUCHAC: '15',
    },
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
    ancestryProps: {
      ancestry: 'Human',
      size: 'Medium',
      speed: 25,
      languages: 'common, Draconic, Infernal',
      traits: ['human', 'humanoid'],
      attributes: {
      }
    },
    backgroundProps: {
      background: 'Noble',
      skillFeat: 'Courtly Graces',
      loreSkill: 'Nobility',
    },
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
      cantrips: ['acid splash', 'detect magic', 'light', 'shield'],
      One: ['burning hands', 'magic missle'],
    },
    feats: {
      ancestry: 'General Training',
      general: 'Great Fortitude',
      class: 'Widen Spell',
    },
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
    skillsModifiers: {
      Arcana: '+5',
      Crafting: '+5',
      Diplomacy: '+1',
      Lore: 'Nobility +5',
      Nature: '+2',
      Occultism: '+5',
      Society: '+5',
    },
    actions: {
      stride: '15 feet',
      melee: ['staff +1 (two-hand d8), Damage 1d4 bludgeoning',
        'dagger +3 (agile, finesse, thrown 10, versatile slashing), Damage 1d4 piercing'],
      ranged: ['crossbow +3 (range 120 feet), Damage 1d8 piercing', 'acid splash +3 touch, Damage 1d4 acid plus splash 1 acid']
    },
    traits: {},
    characterNotes: '',
    skillFeats: 'Courtly Graces',
  },
  {
    user: 'DM',
    basics: {
      name: 'Fumbus',
      player: 'DM',
      LVL: 1,
      XP: '500',
      homeland: '??',
      deity: '??',
      alignment: '??',
      abilityBoost: '',
      type: 'Iconic',
    },
    appearance: {
      age: '??',
      eyes: 'Black',
      gender: 'Male',
      hair: 'None',
      height: '??',
      weight: '??',
    },
    mainStats: {
      HP: '16',
      CHA: '12',
      CON: '12',
      DEX: '16',
      INT: '18',
      STR: '10',
      WIS: '10',
      AC: '15',
      TOUCHAC: '14',
    },
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
    ancestryProps: {
      ancestry: 'Goblin',
      size: 'small',
      speed: 25,
      languages: 'goblin, common, orc',
      traits: ['goblin', 'humanoid'],
      attributes: {
        'dark vision': 'You can see in darkness and dim light just as well as ' +
          'you can see in bright light, though your vision in darkness is in black and white',
      }
    },
    backgroundProps: {
      background: 'Noble',
      skillFeat: 'Courtly Graces',
      loreSkill: 'Nobility',
    },
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
    spells: {},
    feats: {
      ancestry: 'Goblin Weapon Familiarity',
      class: 'Quick Bomber',
    },
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
    skillsModifiers: {
      Arcana: '+5',
      Crafting: '+5',
      Deception: '+2',
      Lore: ['Underworld +5', 'Pathfinder Society +5'],
      Stealth: '+4',
      Thievery: '+4',
      Society: '+5',
    },
    actions: {
      stride: '25 feet',
      melee: ['dogslicer +4 (agile, backstabber, finesse, goblin), Damage 1d6 slashing'],
      ranged: ['acid flask +4 (range 20 feet), Damage 1d4 persistent acid + splash 1 acid',
        'alchemists fire +4 (range 20 feet), Damage 1d8 fire + 1 persistent fire + splash 1 fire']
    },
    skillFeats: 'Additional Lore, Alchemical Crafter',
    characterNotes: '',
    abilities: '',
    traits: {},
  },
  {
    user: 'DM',
    basics: {
      name: 'Kyra',
      player: 'DM',
      LVL: 1,
      XP: '500',
      homeland: 'Varisia',
      deity: 'Sarenrae',
      alignment: 'Neutral Good',
      abilityBoost: '',
      type: 'Iconic',
    },
    appearance: {
      age: '??',
      eyes: '??',
      gender: 'Female',
      hair: '??',
      height: '',
      weight: '',
    },
    mainStats: {
      HP: '20',
      CHA: '14',
      CON: '10',
      DEX: '13',
      INT: '10',
      STR: '14',
      WIS: '18',
      AC: '16',
      TOUCHAC: '13',
    },
    modifiers: {
      CHA: '+2',
      CON: '+0',
      DEX: '+1',
      INT: '+0',
      STR: '+2',
      WIS: '+4',
      FORT: '+2',
      REFLEX: '+2',
      WILL: '+6',
      TOUCHAC: '',
      AC: '',
      PER: '+5',
    },
    ancestryProps: {
      ancestry: 'Human',
      size: 'medium',
      speed: 25,
      languages: 'kelish, common',
      traits: ['human', 'humanoid'],
      attributes: {
      }
    },
    backgroundProps: {
      background: 'Farmhand',
      skillFeat: 'Assurance with Athletics',
      loreSkill: 'Farming',
    },
    classProps: {
      class: 'Cleric',
      keyAbility: 'WIS',
      proficiencies: {
        Perception: 'Trained'
      },
      savingThrows: {
        Fortitude: 'Expert',
        Reflex: 'Trained',
        Will: 'Expert',
      },
      skills: {
        trained: 5,
        additionalModifier: 'INT',
      },
      weapons: {
        simple: 'Trained',
        diety: 'Trained',
      },
      armor: {
        light: 'Trained',
        medium: 'Trained',
        shields: 'Trained',
      },
      spells: {
        'Divine spell rolls': 'Trained',
        'Divine spell DCs': 'Trained',
        'Divine spell attack rolls': 'Trained',
      },
      signatureSkills: ['Diplomacy', 'Medicine', 'Performance', 'Religion'],
      classFeatures: ['Divine Spellcasting', 'Heightening Spells',
        'Cantrips', 'Diety and Domain', 'Anathema', 'Channel Energy'],
      items: ''
    },
    spells: {
      roll: '+5',
      DC: '15',
      cantrips: ['detect magic', 'forbidding ward', 'light', 'stabilize'],
      One: ['bless', 'sanctuary'],
      DomainPower: 'fire ray (fire domain)',
      SpellPoints: '4',
    },
    feats: {
      ancestry: 'General Training',
      general: 'Toughness',
      class: 'Channel energy (positive, heal, 5/day), domain (fire)',
    },
    items: {
      worn: 'backpack, chain mail, wooden religious symbol of Sarenrae',
      ready: 'scimitar, sling with 10 bullets',
      stowed: 'bedroll, material component pouch, rations (3), religious text, waterskin',
      coins: {
        gold: 5,
        silver: 9,
        copper: 8,
        platinum: 0,

      },
      bulk: '3 Bulk, 9 light (encumbered beyond 7 Bulk, max 12 Bulk)',
    },
    traits: {},
    skillsModifiers: {
      Diplomacy: '+3',
      Medicine: '+5',
      Performance: '+3',
      Lore: ['Farming +5'],
      Religion: '+5',
      Survival: '+5',
    },
    skillFeats: 'Assurance (Athletics)',
    actions: {
      stride: '20 feet',
      melee: ['scimitar +3 (forceful, sweep), Damage 1d6+2 slashing'],
      ranged: ['sling +2 (range 50 feet, propulsive, reload 1 action), Damage 1d6+1 bludgeoning',
        'fire ray +2 touch (evocation, fire), Damage 1d6+4 fire']
    },
    characterNotes: '',
  },
  {
    user: 'DM',
    basics: {
      name: 'Valeros',
      player: 'DM',
      LVL: 1,
      XP: '500',
      homeland: 'Andoran',
      deity: 'Cayden Cailean',
      alignment: 'Neutral Good',
      abilityBoost: '',
      type: 'Iconic',
    },
    appearance: {
      age: '??',
      eyes: 'Brown',
      gender: 'Male',
      hair: 'Brown',
      height: '',
      weight: '',
    },
    mainStats: {
      HP: '20',
      CHA: '10',
      CON: '14',
      DEX: '14',
      INT: '12',
      STR: '18',
      WIS: '10',
      AC: '17',
      TOUCHAC: '15',
    },
    modifiers: {
      CHA: '+0',
      CON: '+2',
      DEX: '+2',
      INT: '+1',
      STR: '+4',
      WIS: '+0',
      FORT: '+4',
      REFLEX: '+4',
      WILL: '+1',
      TOUCHAC: '17 with shield raised',
      AC: '19 with shield raised',
      PER: '+2',
    },
    ancestryProps: {
      ancestry: 'Human',
      size: 'medium',
      speed: 25,
      languages: 'goblin, common',
      traits: ['human', 'humanoid'],
      attributes: {
      }
    },
    backgroundProps: {
      background: 'Farmhand',
      skillFeat: 'Assurance with Athletics',
      loreSkill: 'Farming',
    },
    classProps: {
      class: 'Fighter',
      keyAbility: ['STR', 'DEX'],
      proficiencies: {
        Perception: 'Expert'
      },
      savingThrows: {
        Fortitude: 'Expert',
        Reflex: 'Expert',
        Will: 'Trained',
      },
      skills: {
        trained: 3,
        additionalModifier: 'INT',
      },
      weapons: {
        simple: 'Expert',
        martial: 'Expert',
        exotic: 'Trained',
      },
      armor: {
        light: 'Trained',
        medium: 'Trained',
        heavy: 'Trained',
        shields: 'Trained',
      },
      signatureSkills: ['Acrobatics', 'Athletics', 'Crafting'],
      classFeatures: ['Attack of Opportunity'],
      items: ''
    },
    spells: {},
    feats: {
      ancestry: 'Natural Ambition',
      class: 'Reactive Shield, Sudden Charge',
    },
    items: {
      worn: 'backpack, breastplate',
      ready: 'dagger, heavy steel shield, longsword, mug, shortbow with 20 arrows',
      stowed: 'bedroll, flint and steel, rations (3), hemp rope (50 ft.) torches (10)',
      coins: {
        gold: 0,
        silver: 2,
        copper: 7,
        platinum: 0,

      },
      bulk: '5 Bulk, 8 light (encumbered beyond 9 Bulk, max 14 Bulk)',
    },
    skillsModifiers: {
      Acrobatics: '-2',
      Athletics: '+0 (+5)',
      Intimidation: '+1',
      Lore: {
        Farming: '+5',
        Warfare: '+2'
      },
    },
    skillFeats: 'Assurance (Athletics)',
    actions: {
      stride: '20 feet',
      melee: ['longsword +6 (versatile piercing), Damage 1d8+4 slashing',
        'dagger +6 (agile, finesse, thrown 10, versatile slashing), Damage 1d4+4 piercing',
        'shield bash +4, Damage 1d4+4 bludgeoning'],
      ranged: ['shortbow +4 (range 60, deadly 1d10), Damage 1d6 piercing']
    },
    traits: {},
    characterNotes: '',
  },
];

exports.defaultCharactersV3 = defaultCharactersV3;
