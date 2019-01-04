export default function Bloodlines(bloodline) {
  const bloodlines = {
    Aberrant: {
      description: `Something speaks to you from beyond the stars or below
      the earth. Ancient and unknowable, this alien influence
      presses against your mind, but grants you power. Whether
      that power will come with consequences, who can say?`,
      Spells: {

      },
      'Signature Skills': ['Acrobatics', 'Intimidation', 'Occultism', 'Stealth'],
      'Granted Spells': {
        Cantrip: 'daze',
        1: 'phantom pain',
        2: 'enlarge',
        3: 'mind reading',
        4: 'confusion',
        5: 'black tentacles',
        6: 'feeblemind',
        7: 'warp mind',
        8: 'mind blank',
        9: 'shapechange'
      },
      'Bloodline Powers':
      {
        'Initial Power': 'tentacular limbs',
        'Advanced Power': 'aberrant whispers',
        'Greater Power': 'unusual anatomy'
      }
    },
    Angelic: {
      description: `One of your forebears was an angel from one of the
      celestial realms, or your ancestors showed such devotion
      that their lineage was blessed through divine intervention.`,
      Spells: {

      },
      'Signature Skills': ['Diplomacy', 'Intimidation', 'Medicine', 'Religion'],
      'Granted Spells': {
        Cantrip: 'detect magic',
        1: 'bless',
        2: 'restoration',
        3: 'searing light',
        4: 'divine wrath',
        5: 'flame strike',
        6: 'blade barrier',
        7: 'divine decree',
        8: 'divine aura',
        9: 'foresight'
      },
      'Bloodline Powers':
      {
        'Initial Power': 'angelic halo',
        'Advanced Power': 'angelic wings',
        'Greater Power': 'celestial brand'
      }
    },
    Demonic: {
      description: `The demons of the Abyss debase all they touch, and
        one of your ancestors fell victim to their corruption.
        You’re burdened with dark thoughts and the desire for
        destruction. This urge can be overcome if you choose to
        fight it, but the beauty of sin calls to you always.`,
      Spells: {

      },
      'Signature Skills': ['Athletics', 'Deception', 'Intimidation', 'Religion'],
      'Granted Spells': {
        Cantrip: 'detect magic',
        1: 'fear',
        2: 'resist energy',
        3: 'slow',
        4: 'divine wrath',
        5: 'banishment',
        6: 'disintegrate',
        7: 'divine decree',
        8: 'power word stun',
        9: 'meteor swarm'
      },
      'Bloodline Powers':
      {
        'Initial Power': `glutton's jaws`,
        'Advanced Power': 'swamp of sloth',
        'Greater Power': 'abyssal wrath'
      }
    },
    Draconic: {
      description: `The blood of dragons flows through your veins. These
        beasts are both fearsome in combat and skilled at magic,
        and you follow in their grand tradition.`,
      Spells: {

      },
      'Signature Skills': ['Acrobatics', 'Arcana', 'Athletics', 'Intimidation'],
      'Granted Spells': {
        Cantrip: 'detect magic',
        1: 'fear',
        2: 'resist energy',
        3: 'enthrall',
        4: 'fly',
        5: 'chromatic wall',
        6: 'dragon form',
        7: 'finger of death',
        8: 'power word stun',
        9: 'meteor swarm'
      },
      'Bloodline Powers':
      {
        'Initial Power': `dragon claws`,
        'Advanced Power': 'dragon breath',
        'Greater Power': 'dragon wings'
      }
    },
    Fey: {
      description: `A tryst in a moonlit grove or exposure to fey magic put
        the enchantment of the First World into your family’s
        bloodline. You can be capricious and emotional as the fey.`,
      Spells: {

      },
      'Signature Skills': ['Arcana', 'Deception', 'Diplomacy', 'Nature'],
      'Granted Spells': {
        Cantrip: 'ghost sound',
        1: 'charm',
        2: 'hideous laughter',
        3: 'enthrall',
        4: 'freedom of movement',
        5: 'passwall',
        6: 'misslead',
        7: 'regenerate',
        8: 'irresistible dance',
        9: 'storm of vengeance'
      },
      'Bloodline Powers':
      {
        'Initial Power': `faerie dust`,
        'Advanced Power': 'fey disappearance',
        'Greater Power': 'rediculous notion'
      }
    },
    Imperial: {
      description: `Ancient mortals mastered magical traditions, and one of
        your distant ancestors was among them. Though such
        magical blood might remain latent for generations, in you
        it manifested in full.`,
      Spells: {

      },
      'Signature Skills': ['Arcana', 'Diplomacy', 'Intimidation', 'Society'],
      'Granted Spells': {
        Cantrip: 'detect magic',
        1: 'fear',
        2: 'invisibility',
        3: 'dispel magic',
        4: 'dimension door',
        5: 'arcane eye',
        6: 'teleport',
        7: 'prismatic spray',
        8: 'power word stun',
        9: 'prismatic sphere'
      },
      'Bloodline Powers':
      {
        'Initial Power': `ancestral surge`,
        'Advanced Power': `metamagician's shortcut`,
        'Greater Power': 'arcane countermeasure'
      }
    },
  };


  return bloodlines[bloodline] || bloodline;
}
