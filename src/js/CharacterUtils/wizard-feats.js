export default function Wizard(level) {
  const feats = {
    1: {
      Counterspell: `You expend a prepared spell to counter the triggering creature’s casting of
        that same spell. You lose your spell slot as if you had cast the triggering
        spell. You then attempt to dispel the triggering spell`,
      'Eschew Materials': `When casting a spell that requires a material component, you can replace
        any Material Casting actions with Somatic Casting actions. This doesn’t remove the need
        for any expensive materials listed in the spell’s cost entry.`,
      'Hand of the Apprentice': `You gain the hand of the apprentice universalist power (see page 228). You gain a pool of
        Spell Points you can spend to cast universalist powers. You can cast a universalist power
        that you have only by spending Spell Points, not by using spell slots. Like a cantrip, your
        universalist power is automatically heightened to the highest level of spell you can cast.
        Your maximum number of Spell Points is equal to your key ability modifier (minimum
        0). You regain all your Spell Points when you prepare your spells. Some feats let you learn
        more universalist powers, and such feats typically increase your pool of Spell Points.`,
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
      'Cantrip Expansion': `You can prepare two additional cantrips each day.`,
      'Conceal Spell': `You add a Somatic Casting action to the casting of the triggering
        spell and attempt a Stealth check against one or more observers’
        Perception DCs. If you beat an observer’s Perception DC, that
        observer doesn’t notice you’re casting a spell; if the spell has a
        Verbal Casting action, you must also roll a Deception check against
        the observer’s Perception DC, or the observer notices the spell.
        This hides only the spell’s spellcasting actions, not its effects, so an
        observer might still see a ray streak out from you or see you vanish.`,
      'Empowering Focus': `When you Drain your Arcane Focus to cast a spell of your arcane
        school, you gain a +2 circumstance bonus to the spell roll or spell
        DC for that spell.`,
      'Enhanced Familiar': `You infuse your familiar with additional magical energy. You can
       select four familiar or master options each day, instead of two.`,
      'Magical Striker': `You siphon residual spell energy into one weapon you’re wielding.
        If the weapon is nonmagical, it becomes a +1 magic weapon, and
        one that’s already a magic weapon increases its bonus by 1 (from
        a +1 magic weapon to a +2 magic weapon, and so on). This benefit
        applies only to the next Strike you perform on your turn, and is
        wasted if you don’t Strike by the end of your turn. You can gain
        the benefit of Magical Striker only once per turn.`,
      'Quick Preparation': `You can spend 10 minutes to empty one of your
        prepared spell slots and prepare a different spell from your spellbook
        in its place. If you are interrupted during such a swap, the original
        spell remains prepared and can still be cast. You can try again to
       swap out the spell later, but you must start the process over again.`,
      'Steady Spellcasting': `Your spells are disrupted by reactions
       only if you take damage equal to or greater than double your level.`,
    },
  };

  return feats[level];
}
