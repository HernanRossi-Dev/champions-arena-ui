export default function Cleric(level) {
  const feats = {
    1: {
      'Communal Healing': `You’re a conduit for positive energy, and as you channel it through you it
        heals some of your minor injuries. When you cast the heal spell to heal
        a single creature other than yourself, you regain Hit Points equal to the
        spell level of your heal spell.`,
      'Deadly Simplicity': `When you are wielding your deity’s favored weapon, increase the damage die of that
        weapon by one step (d4 to d6, d6 to d8, d8 to d10, d10 to d12). If the weapon already
        has a damage die of d12, you gain no benefit from this feat.
        If your deity’s favored weapon has the unarmed trait (such as if you worship Irori
        and have the fist as your favored weapon) and its damage die is lower than d6, this feat
        increases its damage die to d6.`,
      'Emblazon Symbol': `You can emblazon your religious symbol onto an item. You must spend 1
        minute drawing or engraving a religious symbol of your deity onto a held item with the
        Interact action. Symbols are usually emblazoned onto a weapon or a shield.
        This turns the item into a divine focus, allowing you to perform Material Casting and
        Somatic Casting actions without a free hand. The symbol functions only for you, and it
        functions even if the item is dented or broken (but not if it’s destroyed).`,
      'Expanded Domain': `Choose a domain that you don’t already have from your deity’s list and gain its initial
        domain power (see page 73). You use this additional domain power at a cost of 1 Spell
        Point per use. Increase your Spell Point pool by 1.
        Special You can select this feat up to two times, each time selecting a domain you don’t
        already have.`,
      'Healing Hands': `Add a Verbal Casting action to the casting of the triggering spell and increase the number
        of Hit Points the target regains by 1d8. If you are at least 10th level, you instead increase
        the number of Hit Points the target regains by 2d8, and at 20th level, you instead
        increase it by 3d8.`,
      'Holy Castigation': `You combine holy energy with positive energy to damage demons, devils,
        and their evil ilk. Heal spells you cast can damage fiends as though they
        were undead.`,
      'Life Sapping': `You draw the life force out of your enemies to heal your own wounds.
        When you cast a harm spell and damage a single living creature, you
        regain Hit Points equal to the spell level of your harm spell. If you aren’t a living
        creature, you gain no benefit from this feat.`,
      'Reach Spell': `You add a Somatic Casting action to the casting of the
        triggering spell to increase its range by 30 feet. If the spell
        normally has a range of touch, you instead extend its range to
        30 feet, and if the touch spell normally requires an attack roll
        or a touch attack roll, it now requires a ranged attack roll or a
        ranged touch attack roll, as appropriate.`,
      'Turn Undead ': `Undead harmed by your positive energy might
        flee from your holy might, compelled by an innate
        aversion to this supernatural force that opposes undeath at
        a fundamental level. When you use a heal spell to damage
        undead, each undead that critically fails its save or that you
        critically hit with your touch attack gains the fleeing condition
       for 1 round.`,
    },
    4: {
      'Advanced Domain': ``,
    },
  };

  return feats[level];
}
