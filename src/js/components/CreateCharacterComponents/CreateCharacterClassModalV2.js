import React from "react";
import * as cssStyles from '../../../styles/Styles.css';

export default function SelectedClassModalBodyV2(props) {
  const classModalBodyStyle = {
    fontSize: "17px !important",
    fontFamily: "'Josefin Sans', sans-serif",
    textAlign: "left"
  };
  switch (props.selectedClass) {
    case "Monk":
      break;
    case "Wizard":
      break;
    case "Sorcerer":
      break;
    case "Rogue":
      break;
    case "Ranger":
      break;
    case "Paladin":
      break;
    case "Fighter":
      break;
    case "Druid":
      break;
    case "Cleric":
      break;
    case "Bard":
      return (
        <div style={classModalBodyStyle}>
          <div >
            <ClassImageComp curClass={props.selectedClass} />
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
          7 plus your Intelligence modifier</p>
          <h4>Weapons: </h4>
          <p>Trained in all simple weapons plus the
          longsword, rapier, sap, shortsword, short-
          bow, and whip</p>
          <h4>Armor: </h4>
          <p>Trained in light and medium armor</p>
          <h3>Signature Skills: </h3>
          <p>Acrobatics,
          Athletics,
          Intimidation</p>
        </div>
      );
    case "Barbarian":
      return (
        <div style={classModalBodyStyle}>
          <div >
            <ClassImageComp curClass={props.selectedClass} />
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
          3 plus your Intelligence modifier.</p>
          <h4>Weapons: </h4>
          <p>Trained in all simple and martial weapons</p>
          <h4>Armor: </h4>
          <p>Trained in light and medium armor</p>
          <h3>Signature Skills: </h3>
          <p>Acrobatics,
          Athletics,
          Intimidation</p>
        </div>
      );
    case "Alchemist":
      return (
        <div style={classModalBodyStyle}>
          <div >
            <ClassImageComp curClass={props.selectedClass} />
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
};

const ClassImageComp = props => {
  const currentClass = props.curClass.toString();
  switch (currentClass) {
    case "Alchemist":
      return (
        <img
          src="https://storage.googleapis.com/championsarenastatic/static/Alchemist - Cogsnap.png"
          //					{/*694x1000*/ .40}
          width="277.6"
          height="400"
          alt=""
          className={cssStyles.classModalImageDiv}
        />
      );
    case "Monk":
      return (
        <img
          src="https://storage.googleapis.com/championsarenastatic/static/Monk - Sajan.png"
          //					{/*694x1000*/ .40}
          width="277.6"
          height="400"
          alt=""
          className={cssStyles.classModalImageDiv}
        />
      );
    case "Wizard":
      return (
        <img
          src="https://storage.googleapis.com/championsarenastatic/static/Wizard - Ezren.png"
          //{/*567x1000*/}
          width="226.8"
          height="400"
          alt=""
          className={cssStyles.classModalImageDiv}
        />
      );
    case "Fighter":
      return (
        <img
          src="https://storage.googleapis.com/championsarenastatic/static/Fighter - Valeros.png"
          //{/*572x1000*/}
          width="228.8"
          height="400"
          alt="" className={cssStyles.classModalImageDiv}
        />
      );
    case "Druid":
      return (
        <img
          src="https://storage.googleapis.com/championsarenastatic/static/Druid - Maznar.png"
          //{/*790x1000*/}
          width="276.5"
          height="350"
          alt="" className={cssStyles.classModalImageDiv}
        />
      );
    case "Ranger":
      return (
        <img
          src="https://storage.googleapis.com/championsarenastatic/static/Ranger - Harsk.png"
          //{/*831x1000*/}
          width="290.85"
          height="350"
          alt="" className={cssStyles.classModalImageDiv}
        />
      );
    case "Cleric":
      return (
        <img
          src="https://storage.googleapis.com/championsarenastatic/static/Cleric - Kyra.png"
          //{/*641x1000*/}
          width="256.4"
          height="400"
          alt="" className={cssStyles.classModalImageDiv}
        />
      );
    case "Rogue":
      return (
        <img
          src="https://storage.googleapis.com/championsarenastatic/static/Rogue - Wu-Shen.png"
          //{/*639x1000*/}
          width="255.6"
          height="400"
          alt="" className={cssStyles.classModalImageDiv}
        />
      );
    case "Sorcerer":
      return (
        <img
          src="https://storage.googleapis.com/championsarenastatic/static/Sorcerer - Qualzar.png"
          //{/*592x1000*/}
          width="236.8"
          height="400"
          alt="" className={cssStyles.classModalImageDiv}
        />
      );
    case "Paladin":
      return (
        <img
          src="https://storage.googleapis.com/championsarenastatic/static/Paladin - Seelah.png"
          //{/*702x1000*/}
          width="280.8"
          height="400"
          alt="" className={cssStyles.classModalImageDiv}
        />
      );
    case "Barbarian":
      return (
        <img
          src="https://storage.googleapis.com/championsarenastatic/static/Barbarian - Ostog.png"
          //{/*658x1000*/}
          width="263.2"
          height="400"
          alt="" className={cssStyles.classModalImageDiv}
        />
      );
    case "Bard":
      return (
        <img
          src="https://storage.googleapis.com/championsarenastatic/static/Bard - Lem.png"
          //{/*624x1000*/}
          width="249.4"
          height="400"
          alt="" className={cssStyles.classModalImageDiv}
        />
      );
  }
};