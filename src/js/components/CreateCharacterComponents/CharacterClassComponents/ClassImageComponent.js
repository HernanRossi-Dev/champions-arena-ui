import React from "react";
import * as cssStyles from '../../../../styles/Styles.css';

export default function ClassImageComponent(props) {
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
          alt=""
          className={cssStyles.classModalImageDiv}
        />
      );
    case "Druid":
      return (
        <img
          src="https://storage.googleapis.com/championsarenastatic/static/Druid - Maznar.png"
          //{/*790x1000*/}
          width="276.5"
          height="350"
          alt=""
          className={cssStyles.classModalImageDiv}
        />
      );
    case "Ranger":
      return (
        <img
          src="https://storage.googleapis.com/championsarenastatic/static/Ranger - Harsk.png"
          //{/*831x1000*/}
          width="290.85"
          height="350"
          alt=""
          className={cssStyles.classModalImageDiv}
        />
      );
    case "Cleric":
      return (
        <img
          src="https://storage.googleapis.com/championsarenastatic/static/Cleric - Kyra.png"
          //{/*641x1000*/}
          width="256.4"
          height="400"
          alt=""
          className={cssStyles.classModalImageDiv}
        />
      );
    case "Rogue":
      return (
        <img
          src="https://storage.googleapis.com/championsarenastatic/static/Rogue - Wu-Shen.png"
          //{/*639x1000*/}
          width="255.6"
          height="400"
          alt=""
          className={cssStyles.classModalImageDiv}
        />
      );
    case "Sorcerer":
      return (
        <img
          src="https://storage.googleapis.com/championsarenastatic/static/Sorcerer - Qualzar.png"
          //{/*592x1000*/}
          width="236.8"
          height="400"
          alt=""
          className={cssStyles.classModalImageDiv}
        />
      );
    case "Paladin":
      return (
        <img
          src="https://storage.googleapis.com/championsarenastatic/static/Paladin - Seelah.png"
          //{/*702x1000*/}
          width="280.8"
          height="400"
          alt=""
          className={cssStyles.classModalImageDiv}
        />
      );
    case "Barbarian":
      return (
        <img
          src="https://storage.googleapis.com/championsarenastatic/static/Barbarian - Ostog.png"
          //{/*658x1000*/}
          width="263.2"
          height="400"
          alt=""
          className={cssStyles.classModalImageDiv}
        />
      );
    case "Bard":
      return (
        <img
          src="https://storage.googleapis.com/championsarenastatic/static/Bard - Lem.png"
          //{/*624x1000*/}
          width="249.4"
          height="400"
          alt=""
          className={cssStyles.classModalImageDiv}
        />
      );
    default:
      return null;
  }
};
