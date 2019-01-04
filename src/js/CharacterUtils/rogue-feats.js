export default function Rogue(level) {
  const feats = {
    1: {
      Bludgeoner: `You make brutal bludgeoning attacks that daze your foes. You can deal
        sneak attack damage with one-handed weapons of the club and mace groups even if
        they don’t have the agile or finesse trait. When you Strike with that weapon and critically
        succeed at the attack roll, you gain the following enhancement.
        Enhancement The target is slowed 1 until the end of your next turn.`,
      'Nimble Dodge': `You nimbly dodge out of the way, gaining a +2 circumstance bonus to your Armor Class
        against the triggering attack.`,
      'You’re Next': `After downing a foe, you menacingly remind another foe that you’re coming
        after them next. Attempt an Intimidation check with a +2 circumstance
        bonus to Demoralize a single creature that you can see and that can see
        you. If you are 10th level or higher, you can use this as a free action with the same trigger.`,
    },
    2: {
      'Footpad’s Focus': `When you critically succeed at an attack roll against a flat-footed creature
        with an agile or light simple weapon or a hand crossbow, rapier, sap, shortbow, or
        shortsword, you apply the critical specialization effect for the weapon you’re wielding.`,
      Mobility: `When you take a Stride action to move half your Speed or less, that
        movement does not trigger reactions. You can use Mobility when
        Climbing, Flying, or Swimming instead of Striding if you have the corresponding
        movement type.`,
      'Quick Draw': `You draw a weapon with the Interact action, then Strike with the weapon
        you just drew.`,
      'Sniper’s Aim': `Close observation lets you pinpoint an enemy’s weakness at a distance
        and pierce concealment. Until the end of your turn, you treat creatures within 30 feet
        of you as though they weren’t concealed when you make Strikes with ranged weapons
        against them.`,
    },
  };

  return feats[level];
}
