
export default class Character {
  constructor() {
    this.basics = {};
    this.appearance = {};
    this.mainStats = {};
    this.ancestryProps = {};
    this.backgroundProps = {};
    this.classProps = {};
    this.characterNotes = [];
    this.modifiers = {};
    this.items = {};
    this.characterTraits = {};
    this.skillsModifiers = {};
    this.skillFeats = '';
    this.characterNotes = '';
    this.spells = {};
    this.feats = {};
    this.user = '';
    this.actions = {
      melee: [],
      stride: '',
      ranged: [],
    };
  }
}
