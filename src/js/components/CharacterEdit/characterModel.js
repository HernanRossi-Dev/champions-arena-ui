
export default class Character {
  constructor() {
    this.name = null;
    this.class = null;
    this.ancestry = null;
    this.background = null;
    this.hitPoints = null;
    this.level = null;
    this.XP = null;
    this.STR = null;
    this.DEX = null;
    this.CON = null;
    this.INT = null;
    this.CHA = null;
    this.type = null;
    this.gender = null;
    this.alignment = null;
    this.user = null;
    this.user = null;
    this.user = null;
    this.abilityBoost = null;
    this.items = {};
    this.abilities = {};
    this.feats = {};
    this.ancestryProps = {};
    this.backgroundProps = {};
    this.classProps = {};
    this.characterNotes = [];
    this.modifiers = {};
    this.actions = {
      melee: [],
      stride:'',
      ranged: [],
    };
  }
}