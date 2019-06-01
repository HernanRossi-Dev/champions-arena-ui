import { calcAbilityModifierFunc } from "../../../characterUtils/abilityHelpers";

const SaveCharacterFormat = (state, abStats, userName) => {
  const ancestryHP = state.ancestryProps.hp;
  const classHP = state.classProps.hp;
  const constModifier = calcAbilityModifierFunc(abStats.CON);
  const HP = ancestryHP + classHP + constModifier;
  const basics = {
    name: state.name,
    deity: state.deity,
    LVL: 1,
    XP: 0,
    abilityBoost: 0,
    alignment: state.alignment,
    type: state.type,
  };

  const mainStats = {
    STR: abStats.STR,
    DEX: abStats.DEX,
    CON: abStats.CON,
    INT: abStats.INT,
    WIS: abStats.WIS,
    CHA: abStats.CHA,
    HP,
  };

  const appearance = {
    gender: state.gender,
    age: '',
  };

  const actions = {
    stride: '',
    melee: [],
    ranged: []
  };
  const formatedCharacter = {
    user: userName,
    basics,
    appearance,
    mainStats,
    modifiers: {
      CHA: '+0',
      CON: '+0',
      DEX: '+0',
      INT: '+0',
      STR: '+0',
      WIS: '+0',
      FORT: '+0',
      REFLEX: '+0',
      WILL: '+0',
      TOUCHAC: 'Enter',
      AC: 'Enter',
      PER: '+0',
    },
    items: {},
    ancestryProps: state.ancestryProps,
    backgroundProps: state.backgroundInfo,
    classProps: state.classProps,
    characterTraits: {},
    skillsModifiers: {},
    skillFeats: {},
    spells: {},
    actions,
    feats: {},
    characterNotes: '',
  };
  return formatedCharacter;
};

export default SaveCharacterFormat;
