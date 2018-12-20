export default function Bard(level) {
  const feats = {
    1: {
      'Bardic Lore': `Your eclectic studies inform you on just about any topic. You are trained
      in Bardic Lore, a special lore skill that can be used only to Recall Knowledge, but can
      be used to Recall Knowledge on any topic. If you are legendary in Occultism, you
      become an expert in Bardic Lore, but you can’t increase your proficiency rank in
      Bardic Lore by any other means.`,
      'Lingering Composition': `By adding a flourish, you can make your compositions last longer. You
      learn the lingering composition composition power (see page 235), which you can
      cast at a cost of 1 Spell Point. Increase your Spell Point pool by 2.`,
      'Moment of Clarity': `In social situations, you can rely on the grandeur of your performances
      rather than ordinary social skills. You can use Performance instead of Diplomacy to
      Make an Impression and instead of Intimidation to Demoralize. You can also use an
      acting performance instead of Deception to Impersonate.`,
    },
    2: {
      'Esoteric Scholar': `You keep a book of occult spells similar to a wizard’s spellbook. You add all the spells in
        your repertoire to this book for free, and you can add additional occult spells to the book
        by paying the appropriate cost and using your Occultism skill, similarly to how a wizard
        can Learn Arcane Spells and add those spells to his spellbook.
        During your daily preparations, choose any one spell from your spellbook. If the spell
        you choose is already in your spell repertoire, you can heighten it with spontaneous
        heightening that day. If it isn’t in your repertoire, treat it as though it were in it for that day.`,
      'Inspire Competence': `You learn the inspire competence composition cantrip (see page 233), which magically
        aids your allies’ skill checks.`,
      'Loremaster’s Recall': `You can magically unlock more memories, making it more likely you can
        remember something. You learn the loremaster’s recall power (see page 236), which you can
        cast at a cost of 1 Spell Point. Increase your Spell Point pool by 1.`,
    },
  };

  return feats[level];
}
