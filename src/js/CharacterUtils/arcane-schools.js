export default function ArcaneSchools(school) {
  const arcaneSchools = {
    Abjuration: `As an abjurer, you master the art of protection and
      warding, strengthening defenses, preventing attacks, and
      even turning magic against itself. You understand that an
      ounce of prevention is worth a pound of cure. You add
      one 1st-level abjuration spell (such as feather fall) to your
      spellbook. You learn the protective ward school power,
      which you can cast at a cost of 1 Spell Point.`,
    Conjuration: `As a conjurer, you focus on summoning and calling
      creatures and objects from places beyond the pale as well
      as using magic to transport yourself and others to distant
      locations. You understand that the true key to victory is
      strength in numbers. You add one 1st-level conjuration
      spell (such as summon monster) to your spellbook.
      You learn the augment summoning school power,
      which you can cast at a cost of 1 Spell Point`,
    Divination: `As a diviner, you master remote viewing and prescience,
      gaining key information that can transform investigations,
      battle strategies, and research. You understand that
      knowledge is power. You add one 1st-level divination
      spell (such as true strike) to your spellbook. You learn the
      diviner’s sight school power, which you can
      cast at a cost of 1 Spell Point.`,
    Enchantment: `As an enchanter, you use magic to manipulate the minds
      of your victims. You might use your abilities to subtly
      influence others or seize total control over them. You add
      one 1st-level enchantment spell (such as charm) to your
      spellbook. You learn the charming words school
      power, which you can cast at a cost
      of 1 Spell Point.`,
    Evocation: `As an evoker, you revel in the raw power of magic, using it
      to create and destroy with ease. You can call forth elements,
      forces, and energy to devastate your foes or to assist you in
      other ways. You understand that the direct approach is the
      most elegant. You add one 1st-level evocation spell (such
      as shocking grasp) to your spellbook. You learn the force
      bolt school power, which you can cast at a
      cost of 1 Spell Point.`,
    Illusion: `As a necromancer, you call upon the powers of life and
      death to use against your enemies. While your school of
      magic is often vilified as solely for those who raise the
      undead, you understand that control over life also means
      control over healing. You add one 1st-level necromancy
      spell (such as grim tendrils) to your spellbook. You learn
      the call of the grave school power, which
      you can cast at a cost of 1 Spell Point.`,
    Transmutation: `As a transmuter, you alter the physical properties of things,
      transforming objects, creatures, the natural world, and
      even yourself, at your whim. You understand that change
      is inevitable. You add one 1st-level transmutation spell
      (such as magic weapon) to your spellbook. You learn the
      physical boost school power, which you
      can cast at a cost of 1 Spell Point.`,
    Universalist: `You can choose not to specialize in an arcane school and
      to instead become a universalist wizard. If you do, you
      can use Drain Arcane Focus once each day per each spell
      level you can cast, instead of only once per day. You also
      gain an extra wizard class feat.`
  };
  return arcaneSchools[school];
}
