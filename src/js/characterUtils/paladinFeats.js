export default function Paladin(level) {
  const feats = {
    1: {
      'Deity\'s Domain': `You embody an aspect of your deity. Choose one of your deity’s domains (see
        the Deity table on page 72). You gain the ability to cast the domain’s initial domain power as a
        champion power by spending 1 Spell Point. Increase your Spell Point pool by 1`,
      'Hospice Knight': `Your long hours in the hospice have taught you additional techniques for
        treating wounds. Your proficiency rank in Medicine increases to trained, and Medicine is
        a signature skill for you. Increase the healing from lay on hands from d4s to d6s.`,
      'Warped Touch': `You cast lay on hands in a simple motion without any complicated gestures. The Somatic
        Spellcasting action for lay on hands loses the manipulate trait.`,
    },
    2: {
      'Divine Grace': `You call upon your deity’s grace to protect you from harm. You gain a +2 circumstance
       bonus to the saving throw.`,
      'Dragonslayer Oath': `You’ve sworn an oath to slay evil dragons. Add the following tenet to your
        paladin’s code after the other tenets: “You must slay evil dragons you come
        across as long as you have a reasonable chance of success.”
        Whenever an evil dragon within your reach hits an ally or friendly creature and you use
        that action as a trigger for your Retributive Strike reaction, your Retrributive Strike does
        not take the –2 penalty. You don’t ever consider evil dragons to be legitimate authorities,
        even in nations ruled by evil dragons.`,
      'Fiendsbane Oath': `You’ve sworn an oath to banish the corruption of fiends to the dark planes
        they call home. Add the following tenet to your paladin’s code after the
        other tenets: “You must banish or slay fiends you come across as long as you have a
        reasonable chance of success; in the incredibly unlikely event you find a good fiend, you
        don’t have to banish or kill it.”
        Whenever a fiend within your reach hits an ally or friendly creature and you use that
        action as a trigger for your Retributive Strike reaction, your Retrributive Strike does not
        take the –2 penalty. You don’t ever consider fiends to be legitimate authorities, even in
        nations ruled by fiends.`,
      'Shining Oath': `You’ve sworn an oath to end the plague of undead. Add the following tenet
        to your paladin’s code after the other tenets: “You must end the existence
        of undead you come across as long as you have a reasonable chance of success; in the
        unlikely event you find a good undead, you can try to work out a more peaceful way to
        help it recover from its undead state rather than destroying it in combat, such as helping
        it complete its unfinished business.”
        Whenever an undead within your reach hits an ally or friendly creature and you use
        that action as a trigger for your Retributive Strike reaction, your
        Retrributive Strike does not take the –2 penalty. You don’t ever
        consider undead to be legitimate authorities, even in nations
        ruled by undead.`,
      'Vengeful Oath': `You’ve sworn an oath to hunt down the most
        heinous evildoers and bring them to celestial
        judgment, no matter where they hide. Add the following tenet to
        your paladin’s code after the other tenets: “You must hunt down
        and exterminate evil creatures that have committed heinous
        atrocities as long as you have a reasonable chance of success and
        aren’t engaged in a mission that would prevent your doing so.”
        You can use lay on hands to damage an evil creature as if
        it were undead; in this case, it deals good damage instead of
        positive damage and gains the good trait. This doesn’t prevent
        you from healing an evil creature with lay on hands, and you
        can’t use it to determine a creature’s alignment if you aren’t sure.`,
    },
  };

  return feats[level];
}
