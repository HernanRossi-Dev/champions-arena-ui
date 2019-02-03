const defaultCharactersV2 = [
  {
    level: "1",
    name: "Merisiel",
    player: "DM",
    hitPoints: "16",
    CHA: "12",
    CON: "14",
    DEX: "18",
    INT: "12",
    STR: "10",
    WIS: "12",
    AC: '17',
    TOUCHAC: '15',
    modifiers: {
        CHA: "1",
        CON: "2",
        DEX: "4",
        INT: "1",
        STR: "0",
        WIS: "1",
        FORT: '3',
        REFLEX: '6',
        TOUCHAC: '3'
    },
    XP: "",
    abilities: "",
    abilityBoost: "",
    age: "127",
    alignment: "Chaotic Neutral",
    ancestry: "Elf",
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
    background: "Criminal",
    backgroundProps: {
      background: 'Criminal',
      selectBoost: ['DEX', 'INT'],
      freeAbilityBoost: 1,
      skillFeat: 'Experienced Smuggler',
      loreSkill: 'Underworld',
    },
    characterNotes: "",
    class: "Rogue",
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
    deity: "Calistria",
    eyes: "Black",
    feats: {
      ancestry: 'Forlorn',
      class: 'Nimle Dodge',
    },
    gender: "Female",
    hair: "White",
    height: "",
    homeland: "Varisia",
    items: {
      worn: 'backpack studded leather armor',
      ready: `rapier, daggers (6), thieves' tools`,
      stowed: `hooded lantern, oil (5), rations (3), silk rope (50ft)`,
      coins: {
        gold: 4,
        silver: 3,
        copper: 0,
        platinum: 0,

      },
      bulk: `3 Bulk, 2 light (encumbered beyond 5 Bulk, max 10 Bulk)`,
    },
   
    size: "Medium",
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
    type: "NPC",
    user:'',
    weight: "",
  },
]

exports.defaultCharactersV2 = defaultCharactersV2;