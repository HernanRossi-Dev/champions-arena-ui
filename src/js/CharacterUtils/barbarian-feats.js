export default function Barbarian(level) {
  const feats = {
    1: {
      'Acute Vision': `When you are raging, your visual senses improve, granting you low-light
        vision and darkvision.`,
      'Raging Intimidation': `While you are raging, any Demoralize action you use gains the rage trait. As
        soon as you meet the appropriate prerequisites of the skill feats Intimidating Glare and Scare
        to Death, you gain these feats. Scare to Death also gains the rage trait while you Rage.`,
      'Moment of Clarity': `You concentrate deeply, pushing back your rage for a moment. Use an
        action with the concentrate trait of your choice, even if it isn’t an action
        with the rage trait. You can add an additional action to Moment of Clarity
        to instead use a 2-action activity with the concentrate trait.`,
      'Sudden Charge': `With a quick sprint, you dash up to your foe and swing. Stride up to double your Speed. If
        you end the move within melee reach of at least one enemy, you can make a melee Strike
        against that enemy. You can use Sudden Charge while Burrowing, Climbing, Flying, or
        Swimming instead of Striding if you have the corresponding movement type.`,

    },
    2: {
      'Acute Scent': `When you Rage, your olfactory senses improve. You gain scent (see page 302) with a
        range of 10 feet.`,
      'Internal Fortitude': `You bury your disgust to overcome your queasiness. When you attempt a Fortitude save
        to recover from being sick, you reduce your sick condition by 1 on a failure (but not on a
        critical failure), 2 on a success, or 3 on a critical success.`,
      'No Escape': `Stride up to your Speed in tandem with the foe, following the foe’s path and remaining adjacent
       to the foe throughout its movement until the foe stops moving or you are out of movement.`,
      'Raging Courage': `You concentrate on the power of your rage, overcoming your fear. When
        you Rage, reduce your frightened condition by 1.`,
    },
  };
  return feats[level];
}
