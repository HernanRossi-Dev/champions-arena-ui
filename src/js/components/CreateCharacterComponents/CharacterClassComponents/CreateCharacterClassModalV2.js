import React from "react";
import ClassImageComponent from "./ClassImageComponent";

export default function SelectedClassModalBodyV2(props) {
  const classModalBodyStyle = {
    fontSize: "17px !important",
    fontFamily: "'Josefin Sans', sans-serif",
    textAlign: "left"
  };
  switch (props.selectedClass) {
    case "Monk":
      return (
        <div style={classModalBodyStyle}>
          <div >
            <ClassImageComponent curClass={props.selectedClass} />
          </div>
          <h3>Monk</h3>
          <p>
          The strength of the fist flows from the power of mind and spirit. You seek
          to attain perfection—to hone your body into a flawless instrument and
          your mind into an orderly bastion of wisdom. You are a fierce combatant
          renowned for your martial arts skills and your ability to enter stances
          to achieve different outcomes during a fight. While the challenges of
          mastering fighting styles and conquering powerful foes drive you to
          greater and greater heights, you also enjoy meditating on philosophical
          questions and discovering new ways to obtain peace and enlightenment.
          </p>
          <h4>Key Ability: </h4>
          <p>
          Strength or Dexterity
          </p>
          <h4>HitPoints: </h4>
          <p>10 plus Constitution modifier</p>
          <h3>Proficiencies: </h3>
          <h4>Perception: </h4>
          <p>Trained</p>
          <h4>Saving Throws: </h4>
          <p>Expert in Fortitude, Expert in Reflex, Expert in Will</p>
          <h4>Skills: </h4>
          <p>Trained in a number of skills equal to
          3 plus your Intelligence modifier
          </p>
          <h4>Weapons: </h4>
          <p>Trained in all unarmed attacks
          </p>
          <h4>Armor: </h4>
          <p>Untrained in all armor
          </p>
          <h3>Signature Skills: </h3>
          <p>
          Acrobatics,
          Athletics,
          Religion,
          </p>
        </div>
      );
    case "Wizard":
      return (
        <div style={classModalBodyStyle}>
          <div >
            <ClassImageComponent curClass={props.selectedClass} />
          </div>
          <h3>Wizard</h3>
          <p>
          You are an eternal student of the arcane secrets of the universe. You
          treat magic like a science, cross-referencing the latest texts on practical
          spellcraft with ancient tomes of lost magic to discover and understand
          how magic works. Yet magical theory is vast, and there’s no way you can
          study it all. You either specialize in one of the eight schools of magic,
          gaining deeper understanding of the nuances of those spells above all
          others, or favor a broader approach emphasizing the way all magic
          comes together at the expense of depth.
          </p>
          <h4>Key Ability: </h4>
          <p>
          Intelligence
          </p>
          <h4>HitPoints: </h4>
          <p>6 plus Constitution modifier</p>
          <h3>Proficiencies: </h3>
          <h4>Perception: </h4>
          <p>Trained</p>
          <h4>Saving Throws: </h4>
          <p>Trained in Fortitude, Trained in Reflex, Expert in Will</p>
          <h4>Skills: </h4>
          <p>Trained in a number of skills equal to
          2 plus your Intelligence modifier
          </p>
          <h4>Weapons: </h4>
          <p>Trained in the club, dagger, heavy
          crossbow, light crossbow, and staff
          </p>
          <h4>Armor: </h4>
          <p>Untrained in all armor
          </p>
          <h3>Spells: </h3>
          <p>
          Trained in arcane spell rolls and DCs and
          in attack rolls for arcane spells
          </p>
          <h3>Signature Skills: </h3>
          <p>
          Arcana,
          Crafting
          </p>
        </div>
      );
    case "Sorcerer":
      return (
        <div style={classModalBodyStyle}>
          <div >
            <ClassImageComponent curClass={props.selectedClass} />
          </div>
          <h3>Sorcerer</h3>
          <p>
          You didn’t choose to become a spellcaster—you were born one. There’s
          magic in your blood, whether divinity touched one of your ancestors, a
          forebear communed with a primal creature, or a powerful occult ritual
          has influenced your line. Regardless, self-reflection and study allow you
          to refine your inherent magical skills and continuously unlock new
          and more powerful abilities. The power in your blood carries a risk,
          however, and you constantly face the choice of whether you’ll rise to
          become a master spellcaster or fall into destruction.
          </p>
          <h4>Key Ability: </h4>
          <p>
          Charisma
          </p>
          <h4>HitPoints: </h4>
          <p>6 plus Constitution modifier</p>
          <h3>Proficiencies: </h3>
          <h4>Perception: </h4>
          <p>Trained</p>
          <h4>Saving Throws: </h4>
          <p>Trained in Fortitude, Trained in Reflex, Expert in Will</p>
          <h4>Skills: </h4>
          <p>Trained in a number of skills equal to
          5 plus your Intelligence modifier
          </p>
          <h4>Weapons: </h4>
          <p>Trained in simple weapons
          </p>
          <h4>Armor: </h4>
          <p>Untrained in all armor
          </p>
          <h3>Spells: </h3>
          <p>
          Trained in arcane, divine, occult, or
          primal spell rolls and DCs, as well as
          attack rolls in the same tradition, as
          indicated by your bloodline
          </p>
          <h3>Signature Skills: </h3>
          <p>
          Crafting,
          One or more determined by your bloodline
          </p>
        </div>
      );
    case "Rogue":
      return (
        <div style={classModalBodyStyle}>
          <div >
            <ClassImageComponent curClass={props.selectedClass} />
          </div>
          <h3>Rogue</h3>
          <p>
          You are skilled and opportunistic, and you use your sharp wits to take
          advantage of your opponents’ missteps in order to strike where it hurts
          most. While the stereotypical rogue is a thief or scoundrel, plenty of
          rogues make respectable and honorable livings as bounty hunters,
          detectives, or scouts, and even sometimes as aristocrats, diplomats, or
          politicians. One thing you all share in common is the breadth and
          depth of your training in skills, easily outpacing your more martially or
          magically inclined comrades.
          </p>
          <h4>Key Ability: </h4>
          <p>
          Dexterity
          </p>
          <h4>HitPoints: </h4>
          <p>8 plus Constitution modifier</p>
          <h3>Proficiencies: </h3>
          <h4>Perception: </h4>
          <p>Expert</p>
          <h4>Saving Throws: </h4>
          <p>Trained in Fortitude, Expert in Reflex, Expert in Will</p>
          <h4>Skills: </h4>
          <p>Trained in a number of skills equal to
          10 plus your Intelligence modifier
          </p>
          <h4>Weapons: </h4>
          <p>Trained in all simple weapons, plus the
          hand crossbow, rapier, sap, shortbow, and
          shortsword
          </p>
          <h4>Armor: </h4>
          <p>Trained in light armor
          </p>
          <h3>Signature Skills: </h3>
          <p>
          Acrobatics,
          Athletics,
          Crafting,
          Deception,
          Diplomacy,
          Intimidation,
          Performance,
          Society,
          Stealth,
          Thievery,
          </p>
        </div>
      );
    case "Ranger":
      return (
        <div style={classModalBodyStyle}>
          <div >
            <ClassImageComponent curClass={props.selectedClass} />
          </div>
          <h3>Ranger</h3>
          <p>
          For some rangers, civilization is so corrupt it wears down the soul, yet so
          beneficial it needs protecting from wild things that stalk the hinterlands.
          For others, nature needs to be protected from the greedy hands of
          civilized people wishing to tame its beauty and plunder its treasures.
          You could champion either goal, or straddle the line of both. You might
          be a scout, tracker, or hunter of fugitives or beasts, haunting the edge
          of civilization or exploring the wilds. Living off the land, you are skilled
          at spotting and taking down both opportune prey and hated enemies.
          </p>
          <h4>Key Ability: </h4>
          <p>
          Dexterity
          </p>
          <h4>HitPoints: </h4>
          <p>10 plus Constitution modifier</p>
          <h3>Proficiencies: </h3>
          <h4>Perception: </h4>
          <p>Expert</p>
          <h4>Saving Throws: </h4>
          <p>Expert in Fortitude, Expert in Reflex, Expert in Will</p>
          <h4>Skills: </h4>
          <p>Trained in a number of skills equal to
          6 plus your Intelligence modifier
          </p>
          <h4>Weapons: </h4>
          <p>Trained in all simple and martial weapons
          </p>
          <h4>Armor: </h4>
          <p>Trained in light armor and medium armor
          </p>
          <h3>Signature Skills: </h3>
          <p>
          Acrobatics,
          Athletics,
          Crafting,
          Nature,
          Stealth,
          Survival
          </p>
        </div>
      );
    case "Paladin":
      return (
        <div style={classModalBodyStyle}>
          <div >
            <ClassImageComponent curClass={props.selectedClass} />
          </div>
          <h3>Paladin</h3>
          <p>
          You are a champion of justice, a holy servant of a good and lawful deity
          who takes up the mantle of a restrictive code to provide certainty and
          hope to the innocent. You have powerful defenses that you share freely
          with your allies and innocent bystanders, but when the time comes to
          punish the wicked, you use your holy power to end the threat of evil.
          Your devotion also attracts the attention of holy spirits who aid you
          on your journey. Others can count on you to adhere to your code of
          conduct, and they trust you at your word.
          </p>
          <h4>Key Ability: </h4>
          <p>
          Strength
          </p>
          <h4>HitPoints: </h4>
          <p>10 plus Constitution modifier</p>
          <h3>Proficiencies: </h3>
          <h4>Perception: </h4>
          <p>Trained</p>
          <h4>Saving Throws: </h4>
          <p>Expert in Fortitude, Trained in Reflex, Expert in Will</p>
          <h4>Skills: </h4>
          <p>Trained in a number of skills equal to
          4 plus your Intelligence modifier
          </p>
          <h4>Weapons: </h4>
          <p>Trained in all simple and martial weapons
          </p>
          <h4>Armor: </h4>
          <p>Trained in all armor and shields
          </p>
          <h3>Signature Skills: </h3>
          <p>
          Crafting,
          Athletics,
          Religion,
          Diplomacy
          </p>
        </div>
      );
    case "Fighter":
      return (
        <div style={classModalBodyStyle}>
          <div >
            <ClassImageComponent curClass={props.selectedClass} />
          </div>
          <h3>Fighter</h3>
          <p>
          Fighting for honor, greed, loyalty, or simply your own uncontrollable
          bloodlust, you are an undisputed master of weaponry and combat
          techniques. You combine your actions through clever combinations
          of opening moves, finishing strikes, and counterattacks whenever
          your foes are unwise enough to drop their guard. Whether you are
          a knight, mercenary, sharpshooter, or blademaster, you hone your
          martial skills to an art form and perform devastating critical attacks
          on your enemies.
          </p>
          <h4>Key Ability: </h4>
          <p>
          Strength or Dexterity
          </p>
          <h4>HitPoints: </h4>
          <p>10 plus Constitution modifier</p>
          <h3>Proficiencies: </h3>
          <h4>Perception: </h4>
          <p>Expert</p>
          <h4>Saving Throws: </h4>
          <p>Expert in Fortitude, Expert in Reflex, Trained in Will</p>
          <h4>Skills: </h4>
          <p>Trained in a number of skills equal to
          3 plus your Intelligence modifier
          </p>
          <h4>Weapons: </h4>
          <p>Expert in all simple and martial weapons
          Trained in all exotic weapons
          </p>
          <h4>Armor: </h4>
          <p>Trained in all armor and shields
          </p>
          <h3>Signature Skills: </h3>
          <p>
          Acrobatics,
          Athletics,
          Crafting,
          </p>
        </div>
      );
    case "Druid":
      return (
        <div style={classModalBodyStyle}>
          <div >
            <ClassImageComponent curClass={props.selectedClass} />
          </div>
          <h3>Druid</h3>
          <p>
          The power of nature is impossible to resist. It can bring ruin to the
          stoutest fortress in minutes, reducing even the mightiest works to
          rubble, burning them to ash, burying them beneath an avalanche of
          snow, or drowning them beneath the waves. It can provide endless
          bounty and breathtaking splendor to those who respect it and an
          agonizing death to those who take it too lightly. You are one of those
          who hear nature’s call. You stand in awe of the majesty of its power
          and give yourself over to its service.
          </p>
          <h4>Key Ability: </h4>
          <p>
          Wisdom
          </p>
          <h4>HitPoints: </h4>
          <p>8 plus Constitution modifier</p>
          <h3>Proficiencies: </h3>
          <h4>Perception: </h4>
          <p>Trained</p>
          <h4>Saving Throws: </h4>
          <p>Expert in Fortitude, Trained in Reflex, Expert in Will</p>
          <h4>Skills: </h4>
          <p>Trained in a number of skills equal to
          4 plus your Intelligence modifier
          </p>
          <h4>Weapons: </h4>
          <p>Trained in all simple weapons and the
          scimitar
          </p>
          <h4>Armor: </h4>
          <p>Trained in all light and medium armor not
          made of metal
          Trained in light and heavy shields not
          made of metal
          </p>
          <h4>Spells: </h4>
          <p>Trained in primal spell rolls and DCs and
          in attack rolls for primal spells
          </p>
          <h3>Signature Skills: </h3>
          <p>
          Crafting,
          Nature,
          Survival,
          One skill determined by your order
          </p>
        </div>
      );
    case "Cleric":
      return (
        <div style={classModalBodyStyle}>
          <div >
            <ClassImageComponent curClass={props.selectedClass} />
          </div>
          <h3>Cleric</h3>
          <p>
          Deities work their will upon the world in infinite ways, and you serve
          as one of their most stalwart mortal servants. Blessed with divine magic
          granted through the grace of your deity, you live the ideals of your faith,
          adorn yourself with the symbols of your church, and train diligently to
          wield the weapon favored by your deity. Your spells might protect and
          heal your allies, or they might punish foes and lay waste to enemies of
          your faith, as your deity wills. Yours is a life of devotion, spreading the
          teachings of your faith through both thought and deed.
          </p>
          <h4>Key Ability: </h4>
          <p>
          Wisdom
          </p>
          <h4>HitPoints: </h4>
          <p>8 plus Constitution modifier</p>
          <h3>Proficiencies: </h3>
          <h4>Perception: </h4>
          <p>Trained</p>
          <h4>Saving Throws: </h4>
          <p>Expert in Fortitude, Trained in Reflex, Expert in Will</p>
          <h4>Skills: </h4>
          <p>Trained in a number of skills equal to
          5 plus your Intelligence modifier
          </p>
          <h4>Weapons: </h4>
          <p>Trained in all simple weapons and the
          favored weapon of your deity. If your
          deity’s favored weapon is uncommon, you
          also gain access to that weapon.
          </p>
          <h4>Armor: </h4>
          <p>Trained in light armor, medium armor,
          and shields
          </p>
          <h3>Signature Skills: </h3>
          <p>Diplomacy,
          Medicine,
          Performance,
          Religion,
          One skill determined by your deity
          </p>
        </div>
      );
    case "Bard":
      return (
        <div style={classModalBodyStyle}>
          <div >
            <ClassImageComponent curClass={props.selectedClass} />
          </div>
          <h3>Bard</h3>
          <p>
          You are a master of artistry, a scholar of hidden secrets, and a
          captivating persuader. Using powerful performances, you influence
          minds and elevate souls to new levels of heroics. You might use your
          powers to become a charismatic leader, or perhaps a counselor,
          manipulator, scholar, scoundrel, or virtuoso. While your versatility
          allows some to consider you a jack-of-all-trades and a beguiling ne’er-
          do-well who spends too much time in taverns, it’s dangerous to dismiss
          you as a master of none.
          </p>
          <h4>Key Ability: </h4>
          <p>
          Charisma
          </p>
          <h4>HitPoints: </h4>
          <p>8 plus Constitution modifier</p>
          <h3>Proficiencies: </h3>
          <h4>Perception: </h4>
          <p>Expert</p>
          <h4>Saving Throws: </h4>
          <p>Trained in Fortitude, Trained in Reflex, Expert in Will</p>
          <h4>Skills: </h4>
          <p>Trained in a number of skills equal to
          7 plus your Intelligence modifier
          </p>
          <h4>Weapons: </h4>
          <p>Trained in all simple weapons plus the
          longsword, rapier, sap, shortsword, short-
          bow, and whip
          </p>
          <h4>Armor: </h4>
          <p>Trained in light and medium armor</p>
          <h3>Signature Skills: </h3>
          <p>Acrobatics,
          Athletics,
          Intimidation
          </p>
        </div>
      );
    case "Barbarian":
      return (
        <div style={classModalBodyStyle}>
          <div >
            <ClassImageComponent curClass={props.selectedClass} />
          </div>
          <h3>Barbarian</h3>
          <p>
          Rage consumes you in battle. You delight in carving through your enemies
          using powerful weapons and wreaking havoc, relying on astonishing
          durability, without needing complicated techniques or rigid training.
          You associate your rage with a traditional symbol of affinity known
          as a totem, which might take the form of an animal, a spirit, or a part
          of yourself. To many barbarians, brute force is a hammer and every
          problem looks like a nail, whereas others try to hold back the dark
          emotions inside them and release them only when it matters most.
          </p>
          <h4>Key Ability: </h4>
          <p>
          Strength
          </p>
          <h4>HitPoints: </h4>
          <p>12 plus Constitution modifier</p>
          <h3>Proficiencies: </h3>
          <h4>Perception: </h4>
          <p>Expert</p>
          <h4>Saving Throws: </h4>
          <p>Expert in Fortitude, Trained in Reflex, Expert in Will</p>
          <h4>Skills: </h4>
          <p>Trained in a number of skills equal to
          3 plus your Intelligence modifier.
          </p>
          <h4>Weapons: </h4>
          <p>Trained in all simple and martial weapons</p>
          <h4>Armor: </h4>
          <p>Trained in light and medium armor</p>
          <h3>Signature Skills: </h3>
          <p>Acrobatics,
          Athletics,
          Intimidation
          </p>
        </div>
      );
    case "Alchemist":
      return (
        <div style={classModalBodyStyle}>
          <div >
            <ClassImageComponent curClass={props.selectedClass} />
          </div>
          <h3>Alchemist</h3>
          <p>
          There’s no sight more beautiful to you than a strange brew bubbling
          in your laboratory’s beakers, and you consume your various creations
          with abandon. Perhaps you’re fascinated with uncovering the secrets of
          magic and science, or perhaps you simply like to watch volatile chemical
          reactions. Regardless, you’re constantly experimenting in your lab or on
          the go with inventive concoctions tweaked for any eventuality. With your
          fearlessness in the face of risk, your unique path toward greatness is lined
          with alchemical brews that push your mind and body to their limits.
          </p>
          <h4>Key Ability: </h4>
          <p>
          Intelligence
          </p>
          <h4>HitPoints: </h4>
          <p>8 plus Constitution modifier</p>
          <h3>Proficiencies: </h3>
          <h4>Perception: </h4>
          <p>Trained</p>
          <h4>Saving Throws: </h4>
          <p>Expert in Fortitude, Expert in Reflex, Trained in Will</p>
          <h4>Skills: </h4>
          <p>Trained in a number of skills equal to 2 plus your intelligence modifier</p>
          <h4>Weapons: </h4>
          <p>Trained in simple weapons, Trained in alchemical bombs</p>
          <h4>Armor: </h4>
          <p>Trained in light armor</p>
          <h3>Signature Skills: </h3>
          <p>Arcana, Crafting, Medicine</p>

        </div>
      );
    default:
      return <div >This should show yet</div>;
  }
}
