'use-strict';

import React from 'react';

export const Acolyte = () => {
  const backgroundText = (
    <p>
      <strong>
        Acolyte:
      </strong> You spent your early days in a religious monastery or cloister.
      You may have traveled out into the world to spread the message
      of your religion or because you cast away the teachings of
      your faith, but deep inside you’ll always carry the lessons
      you learned.<br />
      Choose two ability boosts.  <strong>One</strong> must be to  <strong>Constitution</strong> or
      <strong>Wisdom</strong>, and one is a free ability boost.<br />
      You gain the  <strong>Student of the Canon</strong> skill feat, and you’re trained
      in the Lore skill corresponding to your  <strong>deity</strong> (such as Desna Lore
      or Sarenrae Lore).
    </p>
  );
  const backgroundProps = {
    background: 'Acolyte',
    selectBoost: ['CON', 'WIS'],
    freeAbilityBoost: 1,
    skillFeat: 'Student of the Canon',
    loreSkill: '(select) Diety',
    backgroundText,
  };
  return {
    backgroundProps
  };
};

export const Acrobat = () => {
  const backgroundText = (
    <p>
      <strong>
        Acrobat:
      </strong> In a circus or on the streets, you earned your pay by performing
      as an acrobat. You might have turned to adventuring when the
      money dried up, or when you learned to put skills to better use.<br />
      Choose two ability boosts.  <strong>One</strong> must be to  <strong>Strength</strong> or
      <strong>Dexterity</strong>, and one is a free ability boost.<br />
      You gain the  <strong>Steady Balance</strong> skill feat, and you’re trained in
      the  <strong>Circus</strong> Lore skill.
    </p>
  );
  const backgroundProps = {
    background: 'Acrobat',
    selectBoost: ['STR', 'DEX'],
    freeAbilityBoost: 1,
    skillFeat: 'Steady Balance',
    loreSkill: 'Circus',
    backgroundText,
  };
  return {
    backgroundProps
  };
};

export const AnimalWhisperer = () => {
  const backgroundText = (
    <p>
      <strong>
      Animal Whisperer:
      </strong> You have always felt a connection to animals, and it was only a
      small leap to learn to train them. As you travel, you continuously
      encounter different creatures, befriending them along the way.<br />
      Choose two ability boosts.  <strong>One</strong> must be to  <strong>Wisdom</strong> or
      <strong>Charisma</strong>, and one is a free ability boost.<br />
      You gain the  <strong>Train Animal</strong> skill feat, and you’re trained in the
      <strong>Animal</strong> Lore skill.
    </p>
  );
  const backgroundProps = {
    background: 'Animal Whisperer',
    selectBoost: ['WIS', 'CHA'],
    freeAbilityBoost: 1,
    skillFeat: 'Trained Animal',
    loreSkill: 'Animal',
    backgroundText,
  };
  return {
    backgroundProps
  };
};

export const Barkeep = () => {
  const backgroundText = (
    <p>
      <strong>
      Barkeep:
      </strong> You have five specialties: hefting barrels, polishing steins,
      drinking, drinking, and drinking. You ran or worked in a bar,
      where you learned how to hold your liquor and rowdily socialize.<br />
      Choose two ability boosts.  <strong>One</strong> must be to  <strong>Constitution</strong> or
      <strong>Charisma</strong>, and one is a free ability boost.<br />
      You gain the  <strong>Hobnobber</strong> skill feat, and you’re trained in the
      <strong>Alcohol</strong> Lore skill.
    </p>
  );
  const backgroundProps = {
    background: 'Barkeep',
    selectBoost: ['CON', 'CHA'],
    freeAbilityBoost: 1,
    skillFeat: 'Hobnobber',
    loreSkill: 'Alcohol',
    backgroundText,
  };
  return {
    backgroundProps
  };
};
export const Blacksmith = () => {
  const backgroundText = (
    <p>
      <strong>
      Blacksmith:
      </strong> You were a blacksmith or a blacksmith’s apprentice, and during
      countless hours toiling at the forge, you learned how to smith
      armor and weapons. Perhaps you worked hard each day and
      dreamed of adventure each night, or perhaps the adventuring
      life was thrust upon you by a pivotal event.<br />
        Choose two ability boosts. <strong>One</strong> must be to <strong>Strength</strong> or
        <strong>Intelligence</strong>, and one is a free ability boost.<br />
        You gain the <strong>Specialty Crafting</strong> skill feat for blacksmithing,
      and you’re trained in the <strong>Smithing</strong> Lore skill.
    </p>
  );
  const backgroundProps = {
    background: 'Blacksmith',
    selectBoost: ['STR', 'INT'],
    freeAbilityBoost: 1,
    skillFeat: 'Blacksmithing',
    loreSkill: 'Smithing',
    backgroundText,
  };
  return {
    backgroundProps
  };
};

export const Criminal = () => {
  const backgroundText = (
    <p>
      <strong>
      Criminal:
      </strong> As an unscrupulous independent or as a member of an
      underworld organization, you lived a life of crime. You might
      have become an adventurer to seek redemption, to escape the
      law, or simply to get access to bigger and better loot.<br />
        Choose two ability boosts. <strong>One</strong> must be to <strong>Dexterity</strong> or
        <strong>Intelligence</strong>, and one is a free ability boost.<br />
        You gain the <strong>Experienced Smuggler</strong> skill feat, and you’re
      trained in the <strong>Underworld</strong> Lore skill.
    </p>
  );
  const backgroundProps = {
    background: 'Criminal',
    selectBoost: ['DEX', 'INT'],
    freeAbilityBoost: 1,
    skillFeat: 'Experienced Smuggler',
    loreSkill: 'Underworld',
    backgroundText,
  };
  return {
    backgroundProps
  };
};
export const Entertainer = () => {
  const backgroundText = (
    <p>
      <strong>
      Entertainer:
      </strong> hrough an education in the arts or sheer, dogged practice, you
        learned to entertain crowds. You might have been an actor, a
        dancer, a musician, a magician, or any other sort of performer.<br />
        Choose two ability boosts. <strong>One</strong> must be to <strong>Dexterity</strong> or
        <strong>Charisma,</strong>, and one is a free ability boost.<br />
        You gain the <strong>Fascinating Performance</strong>, and you’re
      trained in the <strong>Entertainment</strong> Lore skill.
    </p>
  );
  const backgroundProps = {
    background: 'Entertainer',
    selectBoost: ['DEX', 'CHA'],
    freeAbilityBoost: 1,
    skillFeat: 'Fascinating Performer',
    loreSkill: 'Entertainment',
    backgroundText,
  };
  return {
    backgroundProps
  };
};
export const Farmhand = () => {
  const backgroundText = (
    <p>
      <strong>
      Farmhand:
      </strong> With a strong back and an understanding of seasonal cycles, you
      tilled the land and tended crops. Your farm could have been razed
      by invaders, you could have lost the family tying you to the land,
      or you might have simply tired of the drudgery, but at some point
      you became an adventurer.<br />
        Choose two ability boosts. <strong>One</strong> must be to <strong>Constitution</strong> or
        <strong>Wisdom</strong>, and one is a free ability boost.<br />
        You gain the <strong>Assurance</strong> skill feat with <strong>Athletics</strong>, and you’re
      trained in the <strong>Farming</strong> Lore skill.
    </p>
  );
  const backgroundProps = {
    background: 'Farmhand',
    selectBoost: ['CON', 'WIS'],
    freeAbilityBoost: 1,
    skillFeat: 'Assurance with Athletics',
    loreSkill: 'Farming',
    backgroundText,
  };
  return {
    backgroundProps
  };
};
export const Gladiator = () => {
  const backgroundText = (
    <p>
      <strong>
      Gladiator:
      </strong> The bloody games of the arena taught you the art of combat
      Before you attained true fame, you departed—or escaped—the
      arena to explore the world. Your skill at drawing both blood and
      a crowd’s attention pay off in a new adventuring life.<br />
        Choose two ability boosts. <strong>One</strong> must be to <strong>Strength</strong> or
        <strong>Charisma</strong>, and one is a free ability boost.<br />
        You gain the <strong>Fascinating Performance</strong> skill feat, and you’re
      trained in the <strong>Gladiatorial</strong> Lore skill.
    </p>
  );
  const backgroundProps = {
    background: 'Gladiator',
    selectBoost: ['STR', 'CHA'],
    freeAbilityBoost: 1,
    skillFeat: 'Fascinating Performer',
    loreSkill: 'Gladiatorial',
    backgroundText,
  };
  return {
    backgroundProps
  };
};
export const Hunter = () => {
  const backgroundText = (
    <p>
      <strong>
      Hunter:
      </strong> You stalk and take down animals and other creatures of the
      wild. Skinning animals, harvesting their flesh, and cooking them
      were also part of your training, all of which can give you useful
      resources while you adventure.<br />
        Choose two ability boosts. <strong>One</strong> must be to <strong>Dexterity</strong> or
        <strong>Wisdom</strong>, and one is a free ability boost.<br />
        You gain the <strong>Survey Wildlife</strong> skill feat, and you’re trained in
      the <strong>Hunting</strong> Lore skill.
    </p>
  );
  const backgroundProps = {
    background: 'Hunter',
    selectBoost: ['DEX', 'WIS'],
    freeAbilityBoost: 1,
    skillFeat: 'Survey Wildlife',
    loreSkill: 'Hunting',
    backgroundText,
  };
  return {
    backgroundProps
  };
};

export const Laborer = () => {
  const backgroundText = (
    <p>
      <strong>
      Hunter:
      </strong> You have spent years performing arduous physical labor,
      perhaps against your will. It was a difficult life, but you somehow
      survived. You may have embraced adventuring as an easier
      method to make your way in the world, or you might adventure
      under someone else’s command.<br />
        Choose two ability boosts. <strong>One</strong> must be to <strong>Strength</strong> or
        <strong>Constitution</strong>, and one is a free ability boost.<br />
        You gain the <strong>Robust Recovery</strong> skill feat, and you’re trained in
      the <strong>Labor</strong> Lore skill.
    </p>
  );
  const backgroundProps = {
    background: 'Laborer',
    selectBoost: ['STR', 'CON'],
    freeAbilityBoost: 1,
    skillFeat: 'Robust Recovery',
    loreSkill: 'Labor',
    backgroundText,
  };
  return {
    backgroundProps
  };
};

export const Merchant = () => {
  const backgroundText = (
    <p>
      <strong>
      Merchant:
      </strong> You have spent years performing arduous physical labor,
      perhaps against your will. It was a difficult life, but you somehow
      survived. You may have embraced adventuring as an easier
      method to make your way in the world, or you might adventure
      under someone else’s command.<br />
        Choose two ability boosts. <strong>One</strong> must be to <strong>Strength</strong> or
        <strong>Constitution</strong>, and one is a free ability boost.<br />
        You gain the <strong>Robust Recovery</strong> skill feat, and you’re trained in
      the <strong>Labor</strong> Lore skill.
    </p>
  );
  const backgroundProps = {
    background: 'Merchant',
    selectBoost: ['INT', 'CHA'],
    freeAbilityBoost: 1,
    skillFeat: 'Bargain Hunter',
    loreSkill: 'Mercantile',
    backgroundText,
  };
  return {
    backgroundProps
  };
};

export const Noble = () => {
  const backgroundText = (
    <p>
      <strong>
      Noble:
      </strong> To the common folk, the life of a noble seems one of idyllic luxury,
      but growing up as a noble or member of the aspiring gentry, you
      know the reality: a noble’s lot is obligation and intrigue. Whether
      you seek to escape your duties by adventuring or to thereby
      better your station, you have traded silks and pageantry for an
      adventurer’s life.<br />
        Choose two ability boosts. <strong>One</strong> must be to <strong>Intelligence</strong> or
        <strong>Charisma</strong>, and one is a free ability boost.<br />
        You gain the <strong>Courtly Graces</strong> skill feat, and you’re trained in the
        <strong>Nobility</strong> Lore skill.
    </p>
  );
  const backgroundProps = {
    background: 'Noble',
    selectBoost: ['INT', 'CHA'],
    freeAbilityBoost: 1,
    skillFeat: 'Courtly Graces',
    loreSkill: 'Nobility',
    backgroundText,
  };
  return {
    backgroundProps
  };
};
export const Nomad = () => {
  const backgroundText = (
    <p>
      <strong>
      Nomad:
      </strong> Traveling far and wide, you picked up basic tactics for surviving
      on the road and in unknown lands, getting by with few supplies
      and even fewer comforts. As an adventurer, you travel still, often
      into even more dangerous places.<br />
        Choose two ability boosts. <strong>One</strong> must be to <strong>Constitution</strong> or
        <strong>Wisdom</strong>, and one is a free ability boost.<br />
        You gain the <strong>Assurance</strong> skill feat with <strong>Survival</strong>, and you’re
      trained in a Lore skill related to <strong>one terrain</strong> you traveled in (such
      as Desert Lore or Swamp Lore).
    </p>
  );
  const backgroundProps = {
    background: 'Nomad',
    selectBoost: ['CON', 'WIS'],
    freeAbilityBoost: 1,
    skillFeat: 'Assurance, Survival',
    loreSkill: '(select) Terrain',
    backgroundText,
  };
  return {
    backgroundProps
  };
};
export const Sailor = () => {
  const backgroundText = (
    <p>
      <strong>
      Sailor:
      </strong> You heard the call of the sea from a young age. Perhaps you
      signed onto a merchant’s vessel, joined the navy, or even fell in
      with a crew of pirates and scallywags.<br />
       Choose two ability boosts. <strong>One</strong> must be to <strong>Strength</strong> or
       <strong>Dexterity</strong>, and one is a free ability boost.<br />
       You gain the <strong>Underwater Marauder</strong> skill feat, and you’re
      trained in the <strong>Sailing</strong> Lore skill.
    </p>
  );
  const backgroundProps = {
    background: 'Sailor',
    selectBoost: ['STR', 'DEX'],
    freeAbilityBoost: 1,
    skillFeat: 'Underwater Marauder',
    loreSkill: 'Sailing',
    backgroundText,
  };
  return {
    backgroundProps
  };
};
export const Scholar = () => {
  const backgroundText = (
    <p>
      <strong>
      Scholar:
      </strong> You have a knack for learning, and from a young age, you
      sequestered yourself from the outside world to learn all that you
      could. You’ve read about so many wondrous places and things in
      your books, and you’ve always dreamed about one day seeing
      the real things. Eventually, that curiosity led you to leave your
      studies and become an adventurer.<br />
       Choose two ability boosts. <strong>One</strong> must be to <strong>Intelligence</strong> or
       <strong>Wisdom</strong>, and one is a free ability boost.<br />
       Choose Arcana, Nature, Occultism, or Religion; you gain the
       <strong>Assurance</strong> skill feat in your chosen skill. You’re trained in the
       <strong>Academia</strong> Lore skill.
    </p>
  );
  const backgroundProps = {
    background: 'Scholar',
    backgroundType: ['Arcana', 'Nature', 'Occultism', 'Religion'],
    selectBoost: ['INT', 'WIS'],
    freeAbilityBoost: 1,
    skillFeat: 'Assurance',
    loreSkill: 'Academia',
    backgroundText,
  };
  return {
    backgroundProps
  };
};
export const Scout = () => {
  const backgroundText = (
    <p>
      <strong>
      Scout:
      </strong> You called the wilderness home as you hunted game, found trails,
      and guided travelers. Your wanderlust could have called you to
      the adventuring life, or perhaps you were serving as a scout for
      soldiers and found you liked battle.<br />
       Choose two ability boosts. <strong>One</strong> must be to <strong>Dexterity</strong> or
       <strong>Wisdom</strong>, and one is a free ability boost.<br />
       You gain the <strong>Forager</strong> skill feat, and you’re trained in the
       <strong>Scouting</strong> Lore skill.
    </p>
  );
  const backgroundProps = {
    background: 'Scout',
    selectBoost: ['DEX', 'WIS'],
    freeAbilityBoost: 1,
    skillFeat: 'Forager',
    loreSkill: 'Scouting',
    backgroundText,
  };
  return {
    backgroundProps
  };
};
export const StreetUrchin = () => {
  const backgroundText = (
    <p>
      <strong>
      Street Urchin:
      </strong> You eked out a living by picking pockets on the streets of a major
      city, never knowing where you’d find your next meal. While some
      folk adventure for the glory, you adventure as a means of survival.<br />
       Choose two ability boosts. <strong>One</strong> must be to <strong>Dexterity</strong> or
       <strong>Intelligence</strong>, and one is a free ability boost.<br />
       You gain the <strong>Pickpocket</strong> skill feat, and you’re trained in the
       <strong>Underworld</strong> Lore skill.
    </p>
  );
  const backgroundProps = {
    background: 'Street Urchin',
    selectBoost: ['DEX', 'INT'],
    freeAbilityBoost: 1,
    skillFeat: 'Pickpocket',
    loreSkill: 'Underworld',
    backgroundText
  };
  return {
    backgroundProps
  };
};
export const Warrior = () => {
  const backgroundText = (
    <p>
      <strong>
      Warrior:
      </strong> As a warrior in a tribe or a member of a militia or army, you
      waded into battle in your younger days. You might have wanted
      to break out from the regimented structure of these forces, or
      could have always been as independent a warrior as you are now.<br />
       Choose two ability boosts. <strong>One</strong> must be to  <strong>Strength</strong> or
       <strong>Constitution</strong>, and one is a free ability boost.<br />
       You gain the  <strong>Quick Repair</strong> skill feat, and you’re trained in the
       <strong>Warfare</strong> Lore skill.
    </p>
  );
  const backgroundProps = {
    background: 'Warrior',
    selectBoost: ['STR', 'CON'],
    freeAbilityBoost: 1,
    skillFeat: 'Quick Repair',
    loreSkill: 'Warfare',
    backgroundText
  };
  return {
    backgroundProps
  };
};
