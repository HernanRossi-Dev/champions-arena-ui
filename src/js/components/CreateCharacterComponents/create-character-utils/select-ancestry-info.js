'use-strict';

import React from 'react';

export const HumanData = () => {
  const ancestryText = (
    <p>
      <strong>
        Description:
      </strong> Humans are incredibly diverse in terms of everything
      from their body size to their perspectives and
      personalities.<br />
      <strong>Ability Boosts: </strong>
      Free, Free<br />
      <strong>Ability Flaw: </strong>
      None<br />
      <strong>Note: </strong>
      Half-Elf and Half-Orc ancestries are accessible through Human ancestry traits.<br />
      <strong>Properties:</strong><br />
      Hit Points: 8<br />
      Size: Medium<br />
      Speed: 25 feet<br />
      <strong>Languages: </strong>Common and One additional language, selected
      from those to which you have access.<br />
      <strong>Bonus Languages: </strong>At 1st level, if your intelligence
      score is 14 or higher, you can select one of the languages from the list
      of common languages of from other languages you have access to.<br />
      <strong>Traits: </strong>Human, Humanoid<br />
    </p>
  );
  const ancestryProps = {
    ancestry: 'Human',
    statsBonus: {},
    freeAbilityPoints: 2,
    hp: 8,
    size: 'Medium',
    speed: 25,
    languages: ['common'],
    traits: ['human', 'humanoid'],
    attributes: {
    }
  };
  return {
    ancestryText,
    ancestryProps
  };
};

export const DwarfData = () => {
  const ancestryText = (
    <p>
      <strong>
        Description:
      </strong> Dwarves are a short, stocky people who are often stubborn,
      fierce, and devoted.<br />
      <strong>Ability Boosts: </strong>
      Constitution, Wisdom, Free<br />
      <strong>Ability Flaw: </strong>
      Charisma<br />
      <strong>Properties:</strong><br />
      Hit Points: 10<br />
      Size: Medium<br />
      Speed: 20 feet<br />
      <strong>Languages: </strong>Common and Dwarf<br />
      <strong>Bonus Languages: </strong>At 1st level, if your intelligence
      score is 14 or higher, you can also select one of the
      following languages: Giant, Gnome, Goblin, Orc, Terran, or Undercommon.<br />
      <strong>Traits: </strong>Dwarf, Humanoid<br />
      <strong>Dark Vision: </strong>You can see in darkness and dim light just as well
      as you can see in bright light, though your vision in darkness is in black and white.<br />
      <strong>Unburdened: </strong>If your Speed would be reduced by armor you wear or the
      encumbered condition you ignore 5 feet of that reduction.<br />
    </p>
  );
  const ancestryProps = {
    ancestry: 'Dwarf',
    statsBonus: {
      CON: 2, WIS: 2, CHA: -2
    },
    freeAbilityPoints: 1,
    hp: 10,
    size: 'Medium',
    speed: 20,
    languages: ['common', 'dwarf'],
    traits: ['dwarf', 'humanoid'],
    attributes: {
      'dark vision': 'You can see in darkness and dim light just as well as ' +
      'you can see in bright light, though your vision in darkness is in black and white',
      unburdened: 'If your Speed would be reduced by armor you wear or the encumbered ' +
      'condition you ignore 5 feet of that reduction.',
    }
  };
  return {
    ancestryText,
    ancestryProps
  };
};

export const ElfData = () => {
  const ancestryText = (
    <p>
      <strong>
      Description:
      </strong> Elves are a tall, slender, long-lived people whose culture
        peaked long ago.<br />
      <strong>Ability Boosts: </strong>
      Dexterity, Intelligence, Free<br />
      <strong>Ability Flaw: </strong>
      Constitution<br />
      <strong>Properties:</strong><br />
      Hit Points: 6<br />
      Size: Medium<br />
      Speed: 30 feet<br />
      <strong>Languages: </strong>Elven and Common<br />
      <strong>Bonus Languages: </strong>At 1st level, if your intelligence
      score is 14 or higher, you can also select one of the
      following languages: Celestial, Draconic, Gnoll, Gnomish, Goblin,
        Orcish, or Sylvan.<br />
      <strong>Traits: </strong>Elf, Humanoid<br />
      <strong>Low-Light Vision: </strong>You can see in dim light as
        though it were bright light.<br />
    </p>
  );
  const ancestryProps = {
    ancestry: 'Elf',
    statsBonus: {
      DEX: 2, INT: 2, CON: -2
    },
    freeAbilityPoints: 1,
    hp: 6,
    size: 'Medium',
    speed: 30,
    languages: ['common', 'elven'],
    traits: ['elf', 'humanoid'],
    attributes: {
      'low-light vision': 'You can see in dim light as though it were bright light.'
    }
  };
  return {
    ancestryText,
    ancestryProps
  };
};

export const GnomeData = () => {
  const ancestryText = (
    <p>
      <strong>
        Description:
      </strong> Gnomes are a short, slight, mercurial people
      who crave change and excitement.<br />
      <strong>Ability Boosts: </strong>
      Constitution, Charisma Free<br />
      <strong>Ability Flaw: </strong>
      Strength<br />
      <strong>Properties:</strong><br />
      Hit Points: 8<br />
      Size: Small<br />
      Speed: 20 feet<br />
      <strong>Languages: </strong>Gnomish, Sylvan and Common<br />
      <strong>Bonus Languages: </strong>At 1st level, if your intelligence
      score is 14 or higher, you can also select one of the
      following languages: Draconic, Dwarven, Elven, Goblin, Jotun, or Orcish.<br />
      <strong>Traits: </strong>Gnome, Humanoid<br />
      <strong>Low-Light Vision: </strong>You can see in dim light as
        though it were bright light.<br />
    </p>
  );
  const ancestryProps = {
    ancestry: 'Gnome',
    statsBonus: {
      CON: 2, CHA: 2, STR: -2
    },
    freeAbilityPoints: 1,
    hp: 8,
    size: 'small',
    speed: 20,
    languages: ['gnomish', 'sylvan', 'common'],
    traits: ['gnome', 'humanoid'],
    attributes: {
      'low-light vision': 'You can see in dim light as though it were bright light.'
    }
  };
  return {
    ancestryText,
    ancestryProps
  };
};

export const HalflingData = () => {
  const ancestryText = (
    <p>
      <strong>
        Description:
      </strong> Halflings are short, adaptable people who exhibit
        remarkable curiosity and humor.<br />
      <strong>Ability Boosts: </strong>
      Dexterity, Wisdom, Free<br />
      <strong>Ability Flaw: </strong>
      Strength<br />
      <strong>Properties:</strong><br />
      Hit Points: 6<br />
      Size: Small<br />
      Speed: 25 feet<br />
      <strong>Languages: </strong>Halfling and Common<br />
      <strong>Bonus Languages: </strong>At 1st level, if your intelligence
      score is 14 or higher, you can also select one of the
      following languages: Dwarven, Elven, Gnomish, or Goblin.<br />
      <strong>Traits: </strong>Halfling, Humanoid<br />
    </p>
  );
  const ancestryProps = {
    ancestry: 'Halfling',
    statsBonus: {
      DEX: 2, WIS: 2, STR: -2
    },
    freeAbilityPoints: 1,
    hp: 6,
    size: 'small',
    speed: 25,
    languages: ['halfling', 'common'],
    traits: ['halfling', 'humanoid'],
    attributes: {
    }
  };
  return {
    ancestryText,
    ancestryProps
  };
};

export const GoblinData = () => {
  const ancestryText = (
    <p>
      <strong>Description: </strong> Goblins are a short, scrappy, energetic people who have spent
        millenia maligned and feared.<br />
      <strong>Ability Boosts: </strong>
      Dexterity, Charisma, Free<br />
      <strong>Ability Flaw: </strong>
      Wisdom<br />
      <strong>Properties:</strong><br />
      Hit Points: 6<br />
      Size: Small<br />
      Speed: 25 feet<br />
      <strong>Languages: </strong>Goblin and Common<br />
      <strong>Bonus Languages: </strong>At 1st level, if your intelligence
      score is 14 or higher, you can also select one of the
      following languages: Draconic, Dwarven, Gnoll, Gnomish, Halfling, or Orcish.<br />
      <strong>Traits: </strong>Goblin, Humanoid<br />
      <strong>Dark Vision: </strong>You can see in darkness and dim light just as well
      as you can see in bright light, though your vision in darkness is in black and white.<br />
    </p>
  );
  const ancestryProps = {
    ancestry: 'Goblin',
    statsBonus: {
      DEX: 2, CHA: 2, WIS: -2
    },
    freeAbilityPoints: 1,
    hp: 6,
    size: 'small',
    speed: 25,
    languages: ['goblin', 'common'],
    traits: ['goblin', 'humanoid'],
    attributes: {
      'dark vision': 'You can see in darkness and dim light just as well as ' +
      'you can see in bright light, though your vision in darkness is in black and white',
    }
  };
  return {
    ancestryText,
    ancestryProps
  };
};
