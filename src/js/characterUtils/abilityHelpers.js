const calcAbilityModifierFunc = (stat) => {
  Math.floor((stat - 10) / 2);
};

export default {
  calcAbilityModifierFunc
};
