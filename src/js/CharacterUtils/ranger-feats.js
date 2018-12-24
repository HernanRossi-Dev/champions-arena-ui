export default function Ranger(level) {
  const feats = {
    1: {
      'Animal Companion': `You gain the service of a young animal companion that travels with you and
        obeys simple commands to the best of its abilities. See Animal Companions on page 284.`,
      'Crossbow Ace': `When you use Hunt Target or when you use Interact to reload your crossbow,
        if your next Strike with that crossbow before the end of your next turn is against your hunted
        target, add half your Wisdom modifier to your damage roll; if you are firing a simple crossbow
        on a qualifying attack, also increase the damage dice on that attack by one size`,
      'Double Slice': `Make one Strike with each of the required weapons, both at your current multiple attack
        penalty. The second Strike takes a –2 circumstance penalty if the weapon doesn’t have the
        agile trait. If both attacks hit, combine the damage and add any applicable enhancements
        from both weapons. For purposes of resistances and weaknesses, this is considered to be
        a single Strike. This counts as two attacks when calculating your multiple attack penalty.`,
      'Monster Hunter': `When you critically succeed to identify a target you’re hunting with Recall
        Knowledge, you (and your allies, if you tell them) gain a +1 circumstance bonus to your
        next attack roll against it, but not other creatures of that species. The creature is bolstered.`,
    },
    2: {
      'Favoured Aim': `Attempt a ranged weapon Strike against your hunted target. Ignore concealed
        and screened, and reduce the target’s bonus to AC from cover by 2. If the
        target isn’t benefiting from any of those, you gain a +2 circumstance bonus to the attack roll.`,
      'Monster Warden': `When you use Monster Hunter, you and your allies also gain a +1 circumstance bonus to
        your next saving throw against that particular creature.`,
      'Quick Draw': `You Interact to draw a weapon, then Strike with the weapon you just drew.`,
      'Stalker\'s Shot': `Make a ranged weapon Strike against that target with a –2 circumstance penalty. You then
       become seen to all who witnessed the Strike (or sensed, if you are invisible or the like).`,
    },
  };

  return feats[level];
}
