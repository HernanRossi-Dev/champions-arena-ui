export default function Sorcerer(level) {
  const feats = {
    1: {
      Counterspell: `You expend one of your spell slots to counter the triggering creature’s casting of a spell
        that you have in your repertoire. You lose your spell slot as if you had cast the triggering
        spell. You then attempt to dispel the triggering spell (see Dispelling on page 197).
        Special This feat has the trait corresponding to the type of spells you cast (arcane,
        divine, natural, or occult).`,
      'Dangerous Sorcery': `When you cast a non-cantrip spell that deals damage and that doesn’t have
        a duration, you gain a conditional bonus to that spell’s damage equal to the spell’s level.`,
      Familiar: `An animal serves you and assists your spellcasting. You gain a familiar`,
      'Reach Spell': `You add a Somatic Casting action to the casting of the triggering spell to increase its
        range by 30 feet. If the spell normally has a range of touch, you instead extend its range
        to 30 feet, and if the touch spell normally requires an attack roll or a touch attack roll, it
        now requires a ranged attack roll or a ranged touch attack roll, as appropriate`,
      'Widen Spell': `You add a Somatic Casting action to the casting of the triggering spell and increase the
        area of that spell. You add 5 feet to the radius of a burst that normally has a radius of at
        least 10 feet. You add 5 feet to the length of a cone or line that is normally 15 feet long
        or smaller, and add 10 feet to the length of a larger cone or line.`,
    },
    4: {
      'Arcane Evolution': `You become trained in one skill of your choice. Additionally, each time you
        make your daily preparations, you can choose one scroll in your possession and add the
        scroll’s spell to your repertoire until the next time you prepare. If the scroll leaves your
        person or if the spell is expended from the scroll, you immediately forget the spell.`,
      'Cantrip Expansion': `Add two additional cantrips of your choice from your spell list to your repertoire.`,
      'Conceal Spell': `You add a Somatic Casting action to the casting of the triggering
        spell and attempt a Stealth check against one or more observers’
        Perception DCs. If you beat an observer’s Perception DC, that
        observer doesn’t notice you are casting a spell; if the spell has
        a Verbal Casting action, you must also roll a Deception check
        against the observer’s Perception DC, or the observer notices the
        spell. This conceals only the spell’s spellcasting actions, not any
        of the spell’s physical effects, so an observer might still see a ray
        streak out from you or see you disappear.`,
      'Divine Evolution': `You can channel energy, per the cleric class
       feature, once per day. If you already have the channel energy
       class feature, you instead gain one additional use per day.`,
      'Enhanced Familiar': `You enhance your familiar by infusing it with additional magical
        energy. You can select four familiar or master options each day,
        instead of two.`,
      'Magical Striker': `You siphon residual spell energy into one weapon you’re wielding.
        If the weapon is nonmagical, it becomes a +1 magic weapon, and
        one that’s already a magic weapon increases its bonus by 1 (from
        a +1 magic weapon to a +2 magic weapon, and so on). This benefit
        applies only to the next Strike you make on your turn, and is
        wasted if you don’t Strike by the end of your turn. You can gain
        the benefit of Magical Striker only once per turn.`,
      'Occult Evolution': `You become trained in one skill of your choice.
        Additionally, once per day, you can spend 1 minute to choose one
        mental occult spell you don’t know and add that spell to your
        repertoire for the day. You lose this temporary spell the next
        time you make your daily preparations (though you can choose
        to prepare it again).`,
      'Primal Evolution': `You can cast summon nature’s ally as an innate
        primal spell once per day. The spell is automatically heightened
        to the highest level of spell you can cast.`,
      'Resilient Concentration': `When you Concentrate on a Spell that affects
        one or more of your allies, you grant any one of those allies
        resistance 1 to a physical or energy damage type of your choice.
        If you Concentrate on the Spell a second time, double this base
        resistance, and if you Concentrate on the Spell a third time, triple
        this base resistance. The resistance ends when the spell ends.
        You cannot add resistance in the same round you first cast the
        spell, and you can increase the resistance in this way only once
        per round per spell (track resistance separately for each casting
        of an eligible spell).
        The base resistance granted the first round increases to 2
        when you reach 8th level and to 3 when you reach 14th level.`,
      'Steady Spellcasting': `Your spells are disrupted by reactions (see page
        196) only if you take damage equal to or greater than double
        your character level.`,
      'Vicious Concentration': `When you Concentrate on a Spell that deals damage,
        one creature of your choice that takes damage from the spell takes
        an additional 1 damage. If you Concentrate on the Spell a second
        time, double this additional damage, and if you Concentrate on the
        Spell a third time, triple this additional damage. This extra damage
        ends when the spell ends. You cannot deal extra damage in the
        same round you first cast the spell, and you can deal extra damage
        in this way only once per round per spell (track damage separately
        for each casting of an eligible spell).
        The additional damage dealt the first round increases to 2 if
        you’re 8th level and to 3 if you’re 14th level.`,
    },
  };

  return feats[level];
}
