
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
    case 'Cleric':
      return ({
        class: 'Cleric',
        keyAbility: 'WIS',
        hp: 8,
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
      });
    case 'Druid':
      return ({
        class: 'Druid',
        keyAbility: 'WIS',
        hp: 8,
        proficiencies: {
          Perception: 'Trained'
        },
        savingThrows: {
          Fortitude: 'Expert',
          Reflex: 'Trained',
          Will: 'Expert',
        },
        skills: {
          trained: 4,
          additionalModifier: 'INT',
        },
        weapons: {
          simple: 'Trained',
          scimitar: 'Trained',
        },
        armor: {
          light: 'Trained',
          medium: 'Trained',
          'light shields': 'Trained',
          'heavy shields': 'Trained',
        },
        spells: {
          'Primal spell rolls': 'Trained',
          'Primal spell DCs': 'Trained',
          'Primal spell attack rolls': 'Trained',

        },
        signatureSkills: ['Crafting', 'Nature', 'Survivla', 'Order'],
        classFeatures: ['Primal Spellcasting', 'Heightening Spells',
          'Cantrips', 'Druidic Order', 'Anathema', 'Wild Empathy'],
        items: ''
      });
    case 'Fighter':
      return ({
        class: 'Fighter',
        keyAbility: ['STR', 'DEX'],
        hp: 10,
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
      });
    case 'Monk':
      return ({
        class: 'Monk',
        keyAbility: ['STR', 'DEX'],
        hp: 10,
        proficiencies: {
          Perception: 'Trained'
        },
        savingThrows: {
          Fortitude: 'Expert',
          Reflex: 'Expert',
          Will: 'Expert',
        },
        skills: {
          trained: 3,
          additionalModifier: 'INT',
        },
        weapons: {
          unarmed: 'Trained',
        },
        armor: {
        },
        signatureSkills: ['Acrobatics', 'Athletics', 'Religion'],
        classFeatures: ['Flurry of Blows', 'Graceful Expertise', 'Powerful Fist'],
        items: ''
      });
    case 'Paladin':
      return ({
        class: 'Paladin',
        keyAbility: 'STR',
        hp: 10,
        proficiencies: {
          Perception: 'Trained'
        },
        savingThrows: {
          Fortitude: 'Expert',
          Reflex: 'Trained',
          Will: 'Expert',
        },
        skills: {
          trained: 4,
          additionalModifier: 'INT',
        },
        weapons: {
          simple: 'Trained',
          martial: 'Trained',
        },
        armor: {
          light: 'Trained',
          medium: 'Trained',
          heavy: 'Trained',
          shields: 'Trained',
        },
        signatureSkills: ['Crafting', 'Athletics', 'Religion', 'Diplomacy'],
        classFeatures: ['Code of Conduct', 'Champion Powers', 'Deifi Weapon', 'Retributive Strike'],
        items: ''
      });
    case 'Ranger':
      return ({
        class: 'Ranger',
        keyAbility: 'DEX',
        hp: 10,
        proficiencies: {
          Perception: 'Expert'
        },
        savingThrows: {
          Fortitude: 'Expert',
          Reflex: 'Expert',
          Will: 'Expert',
        },
        skills: {
          trained: 6,
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
        signatureSkills: ['Acrobatics', 'Athletics', 'Crafting', 'Nature', 'Stealth', 'Survival'],
        classFeatures: ['Hunt Target'],
        items: ''
      });
    default:
      return {};
  }
}
