export default function Fighter(level) {
  const feats = {
    1: {
      'Combat Grab': `Make a Strike. It gains the following enhancement and
        failure effects.
        Enhancement Until the end of your next turn, as long as the target is within your
        reach, it’s flat-footed. If it leaves your reach, this effect ends.
        Failure Until the start of your next turn, as long as the target is within your reach, it’s
        flat-footed. If it leaves your reach, this effect ends.`,
      'Double Slice': `Make one Strike (see page 308) with each of your two melee weapons, each at your current
        multiple attack penalty. The second Strike takes a –2 circumstance penalty if it’s made with
        a weapon that doesn’t have the agile trait (see page 182). If both attacks hit, combine the
        attacks’ damage, and then add any other applicable enhancements from both weapons. For
        purposes of resistances and weaknesses, this is considered a single Strike. This counts as
        two attacks when calculating your multiple attack penalty`,
      'Furious Focus': `Make a Strike. The Strike gains the following failure effect.
        Failure This attack does not count toward your multiple attack penalty.`,
      'Point-Blank Shot': `You take aim and hold your weapon to pick off nearby enemies quickly.
        When using a ranged volley weapon while in this stance, you don’t take the
        circumstance penalty to your attack rolls within the weapon’s volley range. When using
        a ranged weapon without the volley trait, you gain a +2 circumstance bonus to damage
        rolls on attacks made within the weapon’s first range increment.`,
      'Power Attack': `Make a melee Strike. It gains the following enhancement.
        Enhancement You deal an extra weapon damage die. If you’re at least a
        10th-level fighter, you deal two extra weapon damage dice. This counts as two
        attacks when calculating your multiple attack penalty.`,
      'Reactive Shield': `You use the Raise a Shield action and gain your shield’s bonuses to AC immediately. The
        circumstance bonus from the shield applies to your AC when you’re determining the
        outcome of the triggering attack.`,
      'Sudden Charge': `With a quick sprint, you dash up to your foe and swing. Stride up to double
        your Speed. If you end the move within melee reach of at least one enemy,
        you can make a melee Strike against that enemy. You can use Sudden
        Charge while Burrowing, Climbing, Flying, or Swimming instead of Striding
        if you have the corresponding movement type.`
    },
    2: {
      'Aggresive Shield': `You push the triggering creature, either automatically Shoving it 5 feet or causing it
        to become flat-footed until the start of your next turn. The triggering creature chooses
        whether to be moved or flat-footed. If it chooses to be moved, you choose the direction. If
        that would cause it to hit a solid object or enter a square of difficult terrain, it must become
        flat-footed instead of being moved. You can’t Shove it into another creature’s space.`,
      'Assisting Shot': `You can use the Assist action with a ranged weapon you wield. Instead of
        being within reach of the target, you must be within maximum range of the
        target. An Assisting Shot uses ammunition and incurs penalties just like any other attack.`,
      'Brutish Shove': `Make a Strike with the required weapon. It gains the following enhancement
        and failure effect.
        Enhancement You can push the target, either automatically Shoving the target 5 feet
        away from you or causing the target to become flat-footed until the start of your
        next turn. The target chooses whether to be moved or become flat-footed. If it
        chooses to be moved, you choose the direction. If that would cause the target to
        hit a solid piece of terrain or enter a square of difficult terrain, it isn’t moved, but
        instead becomes flat-footed until the start of your next turn. You can’t Shove it into
        another creature’s space.
        Failure The target becomes flat-footed until the start of your next turn.`,
      'Dueling Parry': `You can parry attacks against you with your one-handed weapon. You gain a +2 circumstance
       bonus to AC until the start of your next turn as long as you continue to meet the requirement.`,
      'Improved Combat Grab': `Your grab roots an enemy in place. When you use Combat Grab, you can gain the
        following enhancement instead of its normal enhancement.
        Enhancement Until the end of your next turn, your opponent is grabbed and must break
        free with the Break Grapple action if it wants to move away. Even if it successfully
        breaks the grapple, it remains flat-footed until it is out of your melee reach.`,
      'Intimidating Strike': `Your strike not only wounds creatures, but also shatters their confidence.
        Make a melee Strike. It gains the following enhancement.
        Enhancement The target is frightened 1 and becomes flat-footed until the
        end of your turn.`,
    },
  };

  return feats[level];
}
