export default function ClericDieties() {
  return [
    {
      Name: "Abadar",
      "Areas of Concern": ['Cities', "Law", "Merchants", "Wealth"],
      Alignment: ["LN", "LG", "LE"],
      Channel: ['Negative', "Positive"],
      Skill: 'Society',
      Weapon: "Crossbow",
      Domains: ['cities', 'earth', 'travel', 'wealth'],
      Spells: {
        1: 'lock',
        4: 'Creation',
        7: 'Magnificent Mansion'
      }
    },
    {
      Name: "Asmodeus",
      "Areas of Concern": ['Contracts', "Pride", "Slavery", "Tyranny"],
      Alignment: ["LE"],
      Channel: ['Negative'],
      Skill: 'Deception',
      Weapon: "Mace",
      Domains: ['confidence', 'fire', 'trickery', 'tyranny'],
      Spells: {
        1: 'Charm',
        4: 'Suggestion',
        6: 'Dominate'
      }
    },
    {
      Name: "Calistria",
      "Areas of Concern": ['Lust', "Revenge", "Trickery"],
      Alignment: ["CN", "CG", "CE"],
      Channel: ['Negative', "Positive"],
      Skill: 'Deception',
      Weapon: "Whip",
      Domains: ['pain', 'passion', 'secrecy', 'trickery'],
      Spells: {
        1: 'Charm',
        3: 'Entrall',
        6: 'Mislead'
      }
    },
    {
      Name: "Cayden",
      "Areas of Concern": ['Ale', "Freedom", "Wine"],
      Alignment: ["NG", "CG", "CN"],
      Channel: ["Positive"],
      Skill: 'Athletics',
      Weapon: "Rapier",
      Domains: ['cities', 'freedom', 'indulgence', 'might'],
      Spells: {
        1: 'Fleet step',
        2: 'Touch of Idiocy',
        5: 'Hallucination'
      }
    },
    {
      Name: "Cailean",
      "Areas of Concern": ['Ale', "Freedom", "Wine"],
      Alignment: ["NG", "CG", "CN"],
      Channel: ["Positive"],
      Skill: 'Athletics',
      Weapon: "Rapier",
      Domains: ['cities', 'freedom', 'indulgence', 'might'],
      Spells: {
        1: 'Fleet step',
        2: 'Touch of Idiocy',
        5: 'Hallucination'
      }
    },
    {
      Name: "Desna",
      "Areas of Concern": ['Dreams', "Luck", "Stars", "Travelers"],
      Alignment: ["NG", "CG", "CN"],
      Channel: ["Positive"],
      Skill: 'Acrobatics',
      Weapon: "Starknife",
      Domains: ['dreams', 'luck', 'moon', 'travel'],
      Spells: {
        1: 'Sleep',
        3: 'Dream Message',
        4: 'Fly'
      }
    },
    {
      Name: "Erastil",
      "Areas of Concern": ['Family', "Farming", "Hunting", "Trade"],
      Alignment: ["NG", "LG", "LN"],
      Channel: ["Positive"],
      Skill: 'Survival',
      Weapon: "Longbow",
      Domains: ['earth', 'family', 'nature', 'wealth'],
      Spells: {
        1: 'True Strike',
        3: 'Wall of Thorns',
        5: 'Tree Stride'
      }
    },
    {
      Name: "Gorum",
      "Areas of Concern": ['Battle', "Strength", "Weapons"],
      Alignment: ["CE", "CN"],
      Channel: ["Positive", "Negative"],
      Skill: 'Athletics',
      Weapon: "Greatsword",
      Domains: ['confidence', 'destruction', 'might', 'zeal'],
      Spells: {
        1: 'True Strike',
        2: 'Enlarge',
        4: 'Weapon Storm'
      }
    },
    {
      Name: "Gozreh",
      "Areas of Concern": ['Nature', "Sea", "Weather"],
      Alignment: ["NG", "LN", "N", "CN", "NE"],
      Channel: ["Positive"],
      Skill: 'Survival',
      Weapon: "Trident",
      Domains: ['air', 'nature', 'travel', 'water'],
      Spells: {
        1: 'Gust of wind',
        3: 'Lightning Bolt',
        5: 'Control Water'
      }
    },
    {
      Name: "Iomedae",
      "Areas of Concern": ['Honour', "Justice", "Rulership", "Valor"],
      Alignment: ["NG", "LG"],
      Channel: ["Positive"],
      Skill: 'Intimidation',
      Weapon: "Longsword",
      Domains: ['confidence', 'might', 'truth', 'zeal'],
      Spells: {
        1: 'True Strike',
        2: 'Remove Paralysis',
        4: 'Fire Shield'
      }
    },
    {
      Name: "Irori",
      "Areas of Concern": ['History', "Knowledge", "Self-Perfection"],
      Alignment: ["LN", "LG", "LE"],
      Channel: ["Positive", "Negative"],
      Skill: 'Athletics',
      Weapon: "Fist",
      Domains: ['knowledge', 'might', 'perfection', 'truth'],
      Spells: {
        1: 'Jump',
        3: 'Haste',
        4: 'Stoneskine'
      }
    },
    {
      Name: "Lamashtu",
      "Areas of Concern": ['Aberrance', "Monsters", "Nightmares"],
      Alignment: ["CE"],
      Channel: ["Positive", "Negative"],
      Skill: 'Survival',
      Weapon: "Falchion",
      Domains: ['family', 'might', 'nightmares', 'trickery'],
      Spells: {
        1: 'Magic Fang',
        3: 'Animal Form',
        4: 'Nightmare'
      }
    },
    {
      Name: "Nethys",
      "Areas of Concern": ['Magic', "Destruction", "Preservation"],
      Alignment: ["NG", "LN", "N", "CN", "NE"],
      Channel: ["Positive", "Negative"],
      Skill: 'Arcana',
      Weapon: "Staff",
      Domains: ['destruction', 'knowledge', 'magic', 'protection'],
      Spells: {
        cantrip: 'Mage Hand',
        1: 'Magic Missle',
        2: 'Levitate',
        3: 'Blink',
        4: 'Levitate',
        5: 'Prying Eye',
        6: 'Teleport',
        7: 'Spell Turning',
        8: 'Maze',
        9: 'Disjunction'
      }
    },
    {
      Name: "Norgorber",
      "Areas of Concern": ['Greed', 'Murder', 'Poison', 'Secrets', 'Ally of Poisoners Blackfinger',
        'Murderous Father Skinsaw', 'The Theiving Gray Master', 'The Secretive Reaper of Reputation'],
      Alignment: ["LE", 'NE', 'CE', 'N'],
      Channel: ["Negative"],
      Skill: 'Stealth',
      Weapon: "Shortsword",
      Domains: ['death', 'secrecy', 'wealth', 'trickery'],
      Spells: {
        1: 'Illusory Disguise',
        3: 'Invisibility',
        4: 'Phantasmal Killer'
      }
    },
    {
      Name: "Pharasma",
      "Areas of Concern": ['Birth', 'Death', 'Fate', 'Prophecy'],
      Alignment: ['NG', 'LN', 'N'],
      Channel: ["Positive"],
      Skill: 'Occultism',
      Weapon: "Dagger",
      Domains: ['death', 'fate', 'healing', 'knowledge'],
      Spells: {
        1: 'Mindling',
        3: 'Ghastly Weapon',
        9: 'Power Word Kill'
      }
    },
    {
      Name: "Rovagug",
      "Areas of Concern": ['Destruction', 'Disaster', 'Wrath'],
      Alignment: ['CE', 'NE'],
      Channel: ["Negative"],
      Skill: 'Athletics',
      Weapon: "Greataxe",
      Domains: ['air', 'destruction', 'earth', 'zeal'],
      Spells: {
        1: 'Burning Hands',
        2: 'Enlarge',
        6: 'Disintigrate'
      }
    },
    {
      Name: "Sarenrae",
      "Areas of Concern": ['Healing', 'Honesty', 'Redemption', 'Sun'],
      Alignment: ['LG', 'NG', 'CG'],
      Channel: ["Positive"],
      Skill: 'Survival',
      Weapon: "Scimitar",
      Domains: ['fire', 'healing', 'light', 'truth'],
      Spells: {
        1: 'Burning Hands',
        3: 'Fireball',
        4: 'Wall of Fire'
      }
    },
    {
      Name: "Shelyn",
      "Areas of Concern": ['Air', 'Beauty', 'Love', 'Music'],
      Alignment: ['LG', 'NG', 'CG'],
      Channel: ["Positive"],
      Skill: 'Crafting',
      Weapon: "Glaive",
      Domains: ['creation', 'family', 'passion', 'protection'],
      Spells: {
        1: 'Color Spray',
        3: 'Enthrall',
        4: 'Creation'
      }
    },
    {
      Name: "Torag",
      "Areas of Concern": ['The Forge', 'Protection', 'Strategy'],
      Alignment: ['LG', 'LN'],
      Channel: ["Positive"],
      Skill: 'Crafting',
      Weapon: 'Warhammer',
      Domains: ['creation', 'earth', 'family', 'protection'],
      Spells: {
        1: 'Alarm',
        3: 'Earthbind',
        4: 'Creation'
      }
    },
    {
      Name: "Urgathoa",
      "Areas of Concern": ['Disease', 'Gluttony', 'Undeath'],
      Alignment: ['LN', 'NE', 'CE'],
      Channel: ['Negative'],
      Skill: 'Intimidation',
      Weapon: 'Scyth',
      Domains: ['indulgence', 'magic', 'might', 'undeath'],
      Spells: {
        1: 'Goblin Pox',
        2: 'Ghoulish Craving',
        7: 'Mask of Terror'
      }
    },
    {
      Name: "Zon-Kuthon",
      "Areas of Concern": ['Darkness', 'Envy', 'Loss', 'Pain'],
      Alignment: ['LN', 'LE', 'NE'],
      Channel: ["Negative"],
      Skill: 'Intimidation',
      Weapon: 'Spiked Chain',
      Domains: ['ambition', 'darkness', 'destruction', 'pain'],
      Spells: {
        1: 'Phantom Pain',
        3: 'Wall of Thorns',
        5: 'Shadow Walk'
      }
    },
  ];
}
