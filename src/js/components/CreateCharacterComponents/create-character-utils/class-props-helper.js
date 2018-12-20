
export default function getClassProps(className) {
  switch (className) {
    case 'Alchemist':
      return ({
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
      });
    case 'Barbarian':
      return ({
        class: 'Barbarian',
        keyAbility: 'STR',
        hp: 12,
        proficiencies: {
          Perception: 'Expert'
        },
        savingThrows: {
          Fortitude: 'Expert',
          Reflex: 'Trained',
          Will: 'Expert',
        },
        skills: {
          trained: 3,
          additionalModifier: 'INT',
        },
        weapons: {
          simple: 'Trained',
          martial: 'Trained',
        },
        armor: {
          light: 'Trained',
          medium: 'Trained',
        },
        signatureSkills: ['Acrobatics', 'Athletics', 'Intimidation'],
        classFeatures: ['Rage', 'Totem'],
        items: ''
      });
    case 'Bard':
      return ({
        class: 'Bard',
        keyAbility: 'CHA',
        hp: 8,
        proficiencies: {
          Perception: 'Expert'
        },
        savingThrows: {
          Fortitude: 'Trained',
          Reflex: 'Trained',
          Will: 'Expert',
        },
        skills: {
          trained: 7,
          additionalModifier: 'INT',
        },
        weapons: {
          simple: 'Trained',
          longsword: 'Trained',
          rapier: 'Trained',
          sap: 'Trained',
          shortsword: 'Trained',
          shortbow: 'Trained',
          whip: 'Trained',
        },
        armor: {
          light: 'Trained',
          shields: 'Trained',
        },
        spells: {
          'Occult spell rolls': 'Trained',
          'Occult spell DCs': 'Trained',
          'Occult spell attack rolls': 'Trained',

        },
        signatureSkills: ['Crafting', 'Deception', 'Diplomacy', 'Intimidation',
          'Occultism', 'Performance', 'Society'],
        classFeatures: ['Occult Spellcasting', 'Heightening Spells',
          'Cantrips', 'Spell Repertoire', 'First Compositions', 'Muses'],
        items: ''
      });
    default:
      return {};
  }
}
