export default function Monk(level) {
  const feats = {
    1: {
      'Crane Stance': `You enter the stance of a crane, standing on one leg while folding your arms
        in an imitation of a crane’s wings. You gain a +1 circumstance bonus to AC, but
        the only Strikes you can make are crane wing attacks. These deal 1d6 bludgeoning damage;
        are in the brawling group; and have the agile, finesse, nonlethal, and unarmed traits.
        While in Crane Stance, you gain a +4 conditional bonus on Athletics checks to jump, and
        when you Leap, you can move an additional 5 feet horizontally or 2 feet vertically.`,
      'Dragon Stance': `You enter the stance of a dragon and make powerful leg strikes like a lashing
        dragon’s tail. You can make dragon tail attacks. These deal 1d10 bludgeoning
        damage; are in the brawling group; and have the backswing, nonlethal, and unarmed traits.
        While in Dragon Stance, you gain a +1 conditional bonus to saving throws against
        paralysis and sleep, and you can ignore difficult terrain while Striding.`,
      'Ki Strike': `By tapping into a supernatural inner reserve called ki, you can make your
        unarmed Strikes more powerful. You gain a pool of Spell Points with a capacity equal to
        your Wisdom modifier. You gain the ki strike ki power (see page 234). This power is a type of
        special spell you can cast by spending Spell Points. Powers are explained on pages 193–194.
        Other feats can give you other ki powers you can cast by spending Spell Points. You’re
        trained in spell rolls and spell DCs for your ki powers, and your spell rolls and spell DCs use
        your Wisdom modifier. When you use Ki Strike, choose whether your ki powers are divine
        spells or occult spells.`,
      'Monastic Weaponry': `You gain access to uncommon weapons with the monk trait, and become
        proficient in simple and martial monk weapons. Your proficiency rank for these weapons
        matches your proficiency rank for unarmed attacks, and you can use melee monk
        weapons with any of your monk feats or monk abilities that normally require unarmed
        attacks, though you can’t use these weapons if a monk feat or ability requires you to use
        a single specific attack, such as Crane Stance.`,
      'Stunning Fist': `Make an unarmed Strike. It gains the following enhancement.
        Enhancement The target must attempt a Fortitude save against your class
        DC. If the target fails, it’s flat-footed for 1 round. On a critical failure, it’s also stupefied 2 for
        1 round. If your attack was a critical success, one of the following outcomes occurs: If the
        target succeeded at its save, it instead fails its save. If the target failed its save, it instead
        critically fails its save. If the target critically failed its save, it is instead stunned for 1 round.`,
      'Tiger Stance': `You enter the stance of a tiger, using your hands like claws. You can make tiger
        claw attacks. These deal 1d8 slashing damage; are in the brawling group; and
        have the agile, finesse, nonlethal, and unarmed traits. They gain the following enhancement.
        Enhancement On a critical success, the target takes 1d4 persistent bleed damage.
        While in Tiger Stance, you can Step 10 feet as long as your Speed is at least 10 feet.`,
      'Wolf Stance': `You enter the stance of a wolf, low to the ground with your hands held
        like fanged teeth. You can make wolf jaw unarmed attacks. These deal 1d8
        piercing damage, are in the brawling group, and are agile, finesse, nonlethal, and unarmed.
        While in Wolf Stance, your wolf jaw unarmed attacks also gain the forceful trait if
        you’re flanking the target`,
    },
    4: {
      'Brawling Focus': ``,
    },
  };

  return feats[level];
}
