export default function Druid(level) {
  const feats = {
    1: {
      'Animal Companion': `You gain the service of a young animal companion. This companion travels
        with you on your adventures, and it obeys any simple commands you give
        it to the best of its abilities. See the Animal Companion section on page 284 for more
        information about these creatures.
        Special If you are a druid of the animal order, your animal companion increases its
        Constitution, Wisdom, and Charisma modifiers by 1.`,
      'Leshy Familiar': `You gain a leshy familiar, a Tiny plant that embodies one of the many
        spirits of nature. Other than taking the form of a plant instead of an
        animal, this familiar uses all the same rules as other familiars (see page 287 for more
        details about familiars).
        Special If you are a druid of the leaf order, your familiar has three powers instead of two.`,
      'Reach Spell': `You add a Somatic Casting action to the casting of the triggering spell to increase its
        range by 30 feet. If the spell normally has a range of touch, you instead extend its range
        to 30 feet, and if the touch spell normally requires an attack roll or a touch attack roll, it
        now requires a ranged attack roll or a ranged touch attack roll, as appropriate.`,
      'Storm Born': `You are at home out in the elements, reveling in the power of nature
        unleashed. Reduce any circumstance penalties to your ranged attacks or
        Perception checks caused by weather or weather effects (such as wind) by 1.
        Special If you are a druid of the storm order, you do not take circumstance penalties to
        ranged attacks or Perception checks caused by weather, and your targeted spells don’t
        require a flat check to succeed against a target concealed by weather (such as fog).`,
      'Widen Spell': `You add a Somatic Casting action to the casting of the triggering spell and increase the
        area of that spell. You add 5 feet to the radius of a burst that normally has a radius of at
        least 10 feet. You add 5 feet to the length of a cone or line that is normally 15 feet long
        or smaller, and add 10 feet to the length of a larger cone or line.`,
      'Wild Shape': `You are one with the wild, always changing and adapting to meet any challenge.
        You gain a pool of wild energy, called your wild shape pool, with 1 use that you
        can use to cast a spell to shift your form; if you have at least four wild order feats, increase
        your pool to 2 uses. You can spend a use of your wild shape pool to cast pest form. All spells
        you cast using Wild Shape function as if heightened to the maximum spell level you can cast,
        unless stated otherwise.
        Special If you are a druid of the wild order, you instead gain a number of uses of Wild
        Shape equal to your Strength modifier (minimum 1), and an additional use if you have at
        least four wild order feats.`,
    },
    2: {
      'Call of the Wild': `Your bond with nature allows you to call upon
        Druid
        its servants to aid you in times of need. You can cast summon
        nature’s ally by spending 1 Spell Point instead of using druid spell
        slots. This spell can be heightened to any level that you can cast,
        but if you cast it as the highest-level spell you can cast, it costs
        you 1 additional Spell Point. Increase your Spell Point pool by 2.`,
      'Poison Resistance': `You gain a +1 conditional bonus to saving throws
        against poison, and poison resistance equal to half your level`,
      'Savage Slice': `Make another Strike against the same target using the same
        weapon. If it hits, add an additional die of damage.`,
    },
  };

  return feats[level];
}
