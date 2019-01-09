export default function ClericDieties(deity) {
  const deities =  {
    Abadar: {
      Name: "Abadar",
      AoC: ['Cities', "Law", "Merchants", "Wealth"],
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
    Asmodeus: {
      Name: "Asmodeus",
      AoC: ['Contracts', "Pride", "Slavery", "Tyranny"],
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
    Calistria: {
      Name: "Calistria",
      AoC: ['Lust', "Revenge", "Trickery"],
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
    Cayden: {
      Name: "Cayden",
      AoC: ['Ale', "Freedom", "Wine"],
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
    Cailean: {
      Name: "Cailean",
      AoC: ['Ale', "Freedom", "Wine"],
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
    Desna: {
      Name: "Desna",
      AoC: ['Dreams', "Luck", "Stars", "Travelers"],
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
    Erastil: {
      Name: "Erastil",
      AoC: ['Family', "Farming", "Hunting", "Trade"],
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
    Gorum: {
      Name: "Gorum",
      AoC: ['Battle', "Strength", "Weapons"],
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
    Gozreh: {
      Name: "Gozreh",
      AoC: ['Nature', "Sea", "Weather"],
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
    Iomedae: {
      Name: "Iomedae",
      AoC: ['Honour', "Justice", "Rulership", "Valor"],
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
    Irori: {
      Name: "Irori",
      AoC: ['History', "Knowledge", "Self-Perfection"],
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
    Lamashtu: {
      Name: "Lamashtu",
      AoC: ['Aberrance', "Monsters", "Nightmares"],
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
    Nethys: {
      Name: "Nethys",
      AoC: ['Magic', "Destruction", "Preservation"],
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
    Norgorber: {
      Name: "Norgorber",
      Aliases: ['Ally of Poisoners Blackfinger',
      'Murderous Father Skinsaw', 'The Theiving Gray Master', 'The Secretive Reaper of Reputation'],
      AoC: ['Greed', 'Murder', 'Poison', 'Secrets'],
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
    Pharasma: {
      Name: "Pharasma",
      AoC: ['Birth', 'Death', 'Fate', 'Prophecy'],
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
    Rovagug: {
      Name: "Rovagug",
      AoC: ['Destruction', 'Disaster', 'Wrath'],
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
    Sarenrae: {
      Name: "Sarenrae",
      AoC: ['Healing', 'Honesty', 'Redemption', 'Sun'],
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
    Shelyn: {
      Name: "Shelyn",
      AoC: ['Air', 'Beauty', 'Love', 'Music'],
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
    Torag: {
      Name: "Torag",
      AoC: ['The Forge', 'Protection', 'Strategy'],
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
    Urgathoa: {
      Name: "Urgathoa",
      AoC: ['Disease', 'Gluttony', 'Undeath'],
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
    'Zon-Kuthon': {
      Name: "Zon-Kuthon",
      AoC: ['Darkness', 'Envy', 'Loss', 'Pain'],
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
  }
  return deities[deity];
}
