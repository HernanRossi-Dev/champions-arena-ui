export default function Alchemist(level) {
  const feats = {
    1: {
      'Alchemical Familiar': `You have created life via alchemy, though only a simple creature formed
        from alchemical materials and a bit of your own blood. This alchemical familiar assists
        you in your laboratory and adventuring, like any other familiar`,
      'Alchemical Savant': `You can identify alchemical items quickly. When trained in the Arcana skill
        and attempting to use its Identify Magic action on an alchemical item you
        hold, you can do so as a single action with the concentrate and manipulate traits instead of
        taking an hour. If you have the formula for the item you are attempting to identify, you gain
        a +2 circumstance bonus to your check and treat any critical failures as failures instead.`,
      'Far Lobber': `You’ve learned techniques to improve your distance throwing. When
        you throw an alchemical bomb, it has a range increment of 30 feet instead of the
        usual 20 feet.`,
      'Quick Bomber': `You place your bombs in easy-to-reach pouches and learn how to draw them
        almost without thinking. When you use the Interact action (see page 307) to draw an
        alchemical item with the bomb trait, you can draw two bombs instead. When using Quick
        Alchemy to create a bomb, you can also draw one other bomb as part of the Quick
        Alchemy action.`,
      'Smoke Bomb': `You cause the bomb to create a cloud of thick smoke in addition to its normal effects.
        When thrown, it creates a cloud of smoke in a 10-foot-radius burst. You choose which
        corner of target’s space (or the space in which the bomb lands) the cloud is centered on.
        All creatures within that area are concealed (see page 302). The smoke lasts for 1 minute
        or until dissipated with a strong wind.`
    },
    4: {
      'Calculated Splash': `You can calculate the angle that maximizes the damage of a bomb’s splash.
        When you throw an alchemical item of 3rd level or higher with the bomb and splash
        traits, you can choose for the bomb’s splash damage to deal extra damage equal to your
        Intelligence modifier (minimum 0) instead of the normal amount.`,
      'Efficient Alchemy': `Because of the great amount of time you’ve spent studying and
        experimenting, you know how to scale up your formulas to larger batches without
        giving them any additional attention. When spending downtime to Craft alchemical
        items, you can produce twice the number of alchemical items in a single batch without
        needing to spend additional preparatory time. For instance, if you are crafting elixirs of
        life, you can craft up to four elixirs in a single batch using downtime, rather than two.
        This does not reduce the amount of required alchemical reagents or other ingredients needed
        to craft each item, nor does it increase your rate of
        progress for days past the base downtime spent. This also does
        not change the number of items you can create in a batch with
        advanced alchemy.`,
      'Enduring Alchemy': `When using Quick Alchemy to create an alchemical
        tool or elixir, you can enable that tool or elixir to remain potent
        until the end of your next turn, instead of losing its potency at
        the start of your next turn.`,
      'Poison Resistance': `You gain poison resistance equal to half your level,
        and a +1 conditional bonus to saving throws against poisons.`,
    },
    6: {
      'Debilitating Bomb': `You mix a substance into the bomb that can cause one of the
        following conditions: dazzled, deafened, flat-footed, or hampered
        5. If the attack with that bomb hits, the target must succeed at
        a Fortitude saving throw or gain that condition until the start of
        your next turn. Use your class DC for this saving throw (even if
        someone else throws the bomb).`,
      'Delayed Bomb': `When using Quick Alchemy to craft an
        alchemical item with the bomb trait, you can build it to explode
        automatically after a certain amount of time. This delay can be
        any number of rounds up to your level, chosen when you craft
        the bomb. When this delayed bomb explodes, it deals damage
        to a creature within its square as if that creature had been hit
        by an attack with the bomb (if there are multiple creatures in
        the square, choose the target randomly). It also deals its splash
        damage (if any) as if you had thrown the bomb at the target.
        Unlike other items crafted with the Quick Alchemy action,
        the delayed bomb remains potent until it explodes or you
        defuse it. You can use the Interact action with a delayed bomb
        you made in order to defuse it. Other creatures can try to
        Disable a Device to defuse the bomb, using your class DC for
        the Thievery check.`,
      'Fast Onset': `When you drink one of your alchemical item that
        has the elixir and infused traits and an onset time of 1 minute,
        treat the item’s onset as the end of your next turn instead. When
        you drink one of your infused elixirs with an onset time that’s
        normally the end of your next turn, the elixir instead has no
        onset time and takes effect immediately.`,
      'Poison Antidote': `You can use Quick Alchemy to create a specific
        antidote to any single specific poison or venom you have identified. When
        imbibed or injected as an Operate Activation action, this specific
        antidote attempts to counteract that poison or venom using
        a counteract level equal to half your level rounded up. If you
        use the specific antidote on yourself and you have the formula
        for the poison or venom affecting you, increase the counteract
        level of the specific antidote by 1.`,
      'Precise Bombs': `When throwing an alchemical bomb with the splash
        trait, the splash damage does not affect your allies. You must be
        able to perceive an ally to exclude that ally from your bomb’s
        splash damage.`,
    },
    8: {
      'Combine Elixirs': `You’ve discovered how to mix two elixirs into a single concoction
        for quicker consumption. You can spend 3 Resonance Points
        instead of 1 Resonance Point to add a second elixir to the one
        you’re crafting. When this combination elixir is consumed, both
        the constituent elixirs take effect. For example, you can combine
        two of the same elixirs to create a combined elixir of life that
        heals double the amount. If a creature other than you drinks a
        combined elixir, it must spend 2 Resonance Points to gain the
        effects instead of only 1 Resonance Point.`,
      'Feral Mutagen': `Your feral mutagen truly brings out the beast
        lurking within you. Whenever you’re affected by a feral mutagen,
        you gain the mutagen’s item bonus to your Intimidation checks.
        You also gain two new unarmed Strikes: one with your claws
        and one with your jaws. Your claws and jaws both have the agile
        weapon trait. Your claws deal slashing damage equal to 1d6 plus
        your Strength modifier (plus the extra dice from your mutagen),
        while your jaws deal piercing damage equal to 1d8 plus your
        Strength modifier (plus the extra dice from your mutagen).`,
      'Powerful Alchemy': `When you use Quick Alchemy to create an infused
        alchemical item that allows a saving throw, you can change its
        DC to your class DC.`,
      'Strong Medicine': `When you use Quick Alchemy to create any type
        of elixir of life, the creature drinking the elixir gains both its
        healing effect and any effect the elixir grants against toxins,
        even if the drinker was not at full Hit Points when consuming
        the elixir.`,
      'Tricky Tinker': `Deception and Thievery become signature skills for you.
        When you Disable Device, you can use alchemist’s tools
        or a repair kit instead of thieves’ tools`,
    },
    10: {
      'Expanded Splash': `When you throw an alchemical bomb with the splash trait that
        you have created, the splash damage is increased to 2 plus your
        Intelligence modifier, and it damages every creature within
        10 feet of the target.`,
      'Greater Debilitating Bomb': `When you use the Debilitating Bomb free action, add the
        following conditions to the list you can choose from: enfeebled 1,
        hampered 10, sluggish 1, or stupefied 1.`,
      'Potent Poisoner': `When you craft an alchemical item with the poison trait using any
        means, the DC is increased by 2, to a maximum of your class DC.`,
      'Revivifying Mutagen': `While under the effect of a mutagen, you can
        Alchemist metabolize that mutagen’s power to heal yourself. This takes an
        action with the concentrate and manipulate trait. Once the action
        is complete, you regain 1d6 Hit Points for every 2 item levels of
        the mutagen, but the mutagen’s duration immediately ends, even
        if you are under the effect of Persistent Mutagen.`,
      'Stalker Mutagen': `Stealth becomes a signature skill for you. When
        you are under the effects of a quicksilver mutagen (see
        page 367), you can move up to your Speed when you Sneak.`,
      'Sticky Bombs': `You mix in an additive to make the bomb’s contents adhere to the
        target and continue to deal damage. A creature that takes a direct
        hit from one of your sticky bombs also takes persistent damage
        equal to and of the same type as the bomb’s splash damage.`,
    },
    12: {
      '': ``,
      '': ``,
      '': ``,
      '': ``,
    },
  };
  return feats[level];
}
