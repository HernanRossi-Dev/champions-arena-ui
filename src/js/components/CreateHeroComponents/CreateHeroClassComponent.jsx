import React from "react";
import * as cssStyles from "../../../styles/Styles.css";
import {
  Col,
  ControlLabel,
  FormGroup,
  FormControl,
  Popover,
  Tooltip,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  OverlayTrigger,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  ButtonToolbar
} from "react-bootstrap";

export default class CreateHeroClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.setClass = this.setClass.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
      selectedClass: "",
	    allowedAlignments: ['LG', 'NG', 'CG', 'LN','N','CN','LE','NE','CE'],
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  setClass(e) {
    const targetText = e.target.textContent.toString();
    this.props.updateClass(targetText);
    this.handleShow();
    this.setState({ selectedClass: targetText });
  }

  render() {
    const popover = (
      <Popover id={"modal-popover"} title={"popover"}>
        Placeholder text for popover
      </Popover>
    );
    const tooltip = <Tooltip id={"modal-tooltip"}>Tooltip text </Tooltip>;
    return (
      <FormGroup>
        <Col sm={1} />
        <Col
          componentClass={ControlLabel}
          sm={2}
          className={cssStyles.createColLabelStyle}
        >
          Class:
        </Col>
        <Col sm={7}>
          <ButtonToolbar>
            <ToggleButtonGroup
              type="radio"
              name="raceValue"
              onClick={this.setClass}
              className={cssStyles.alignmentButtonGroupParent}
            >
              <ToggleButton
                value={"Monk"}
                className={cssStyles.alignmentButtonGroup}
              >
                Monk
              </ToggleButton>
              <ToggleButton
                value={"Wizard"}
                className={cssStyles.alignmentButtonGroup}
              >
                Wizard
              </ToggleButton>
              <ToggleButton
                value={"Ranger"}
                className={cssStyles.alignmentButtonGroup}
              >
                Ranger
              </ToggleButton>
              <ToggleButton
                value={"Druid"}
                className={cssStyles.alignmentButtonGroup}
              >
                Druid
              </ToggleButton>
              <ToggleButton
                value={"Paladin"}
                className={cssStyles.alignmentButtonGroup}
              >
                Paladin
              </ToggleButton>
              <ToggleButton
                value={"Sorcerer"}
                className={cssStyles.alignmentButtonGroup}
              >
                Sorcerer
              </ToggleButton>
              <ToggleButton
                value={"Rogue"}
                className={cssStyles.alignmentButtonGroup}
              >
                Rogue
              </ToggleButton>
              <ToggleButton
                value={"Fighter"}
                className={cssStyles.alignmentButtonGroup}
              >
                Fighter
              </ToggleButton>{" "}
              <ToggleButton
                value={"Cleric"}
                className={cssStyles.alignmentButtonGroup}
              >
                Cleric
              </ToggleButton>{" "}
              <ToggleButton
                value={"Barbarian"}
                className={cssStyles.alignmentButtonGroup}
              >
                Barbarian
              </ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </Col>
        <Modal show={this.state.show} onHide={this.handleClose} className={cssStyles.createHeroClassModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.selectedClass}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SelectedClassModalBody selectedClass={this.state.selectedClass} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </FormGroup>
    );
  }
}

const ClassImageComp = props => {
  const currentClass = props.curClass.toString();
  switch (currentClass) {
    case "Monk":
      return (
        <img
          src={require("../../../assets/Monk - Sajan.png")}
          //					{/*694x1000*/ .40}
          width="277.6"
          height="400"
          alt=""
        />
      );
    case "Wizard":
      return (
        <img
          src={require("../../../assets/Wizard - Ezren.png")}
          //{/*567x1000*/}
          width="226.8"
          height="400"
          alt=""
        />
      );
    case "Fighter":
      return (
        <img
          src={require("../../../assets/Fighter - Valeros.png")}
          //{/*572x1000*/}
          width="228.8"
          height="400"
          alt=""
        />
      );
    case "Druid":
      return (
        <img
          src={require("../../../assets/Druid - Maznar.png")}
          //{/*790x1000*/}
          width="276.5"
          height="350"
          alt=""
        />
      );
    case "Ranger":
      return (
        <img
          src={require("../../../assets/Ranger - Harsk.png")}
          //{/*831x1000*/}
          width="290.85"
          height="350"
          alt=""
        />
      );
    case "Cleric":
      return (
        <img
          src={require("../../../assets/Cleric - Kyra.png")}
          //{/*641x1000*/}
          width="256.4"
          height="400"
          alt=""
        />
      );
    case "Rogue":
      return (
        <img
          src={require("../../../assets/Rogue - Wu-Shen.png")}
          //{/*639x1000*/}
          width="255.6"
          height="400"
          alt=""
        />
      );
    case "Sorcerer":
      return (
        <img
          src={require("../../../assets/Sorcerer - Qualzar.png")}
          //{/*592x1000*/}
          width="236.8"
          height="400"
          alt=""
        />
      );
    case "Paladin":
      return (
        <img
          src={require("../../../assets/Paladin - Seelah.png")}
          //{/*702x1000*/}
          width="280.8"
          height="400"
          alt=""
        />
      );
    case "Barbarian":
      return (
        <img
          src={require("../../../assets/Barbarian - Ostog.png")}
          //{/*658x1000*/}
          width="263.2"
          height="400"
          alt=""
        />
      );
  }
};

const SelectedClassModalBody = props => {
  switch (props.selectedClass) {
    case "Monk":
      return (
        <div>
          <span className={cssStyles.classModalImageDiv}>
            <ClassImageComp curClass={props.selectedClass} />
          </span>

          <p>
            A student of martial arts, the monk trains his body to be his
            greatest weapon and defense.
          </p>
          <h4>Role:</h4>
	        <p>
	         Monks excel at overcoming even the most daunting perils,
	        striking where it's least expected, and taking advantage of enemy vulnerabilities.
	        Fleet of foot and skilled in combat, monks can navigate any battlefield with ease,
	        aiding allies wherever they are needed most.
	        </p>
	          <h4>Hit Die: </h4>
	          d8

	          <h4>Any lawful</h4>
	          Any lawful
        </div>
      );
	  case "Wizard":
		  return (
			  <div>
          <span className={cssStyles.classModalImageDiv}>
            <ClassImageComp curClass={props.selectedClass} />
          </span>

				  <p>
					  Beyond the veil of the mundane hide the secrets of absolute power. The works of beings beyond mortals,
					  the legends of realms where gods and spirits tread, the lore of creations both wondrous and terrible—such
					  mysteries call to those with the ambition and the intellect to rise above the common folk to grasp true might.
					  Such is the path of the wizard. These shrewd magic-users seek, collect, and covet esoteric knowledge, drawing
					  on cultic arts to work wonders beyond the abilities of mere mortals. While some might choose a particular
					  field of magical study and become masters of such powers, others embrace versatility, reveling in the unbounded
					  wonders of all magic. In either case, wizards prove a cunning and potent lot, capable of smiting their foes,
					  empowering their allies, and shaping the world to their every desire.<br/><br/>
				  </p>
				  <h4>Role</h4>
				  <p>
					  While universalist wizards might study to prepare themselves for any manner of danger, specialist wizards
            research schools of magic that make them exceptionally skilled within a specific focus. Yet no matter their
            specialty, all wizards are masters of the impossible and can aid their allies in overcoming any danger.<br/><br/>
				  </p>
          <h4>Class Skills</h4>
				  The wizard's class skills are Appraise (Int), Craft (Int), Fly (Dex), Knowledge (all) (Int), Linguistics (Int),
          Profession (Wis), and Spellcraft (Int).<br/><br/>
				  <h4>Skill Ranks per Level</h4>
				  2 + Int modifier<br/><br/>
          <h4>Hit Die</h4>
				  d6<br/><br/>
				  <h4>Alignment restrictions</h4>
				  Any<br/><br/>
          <h4>Special Abilities</h4>
				  Arcane bond, arcane school, cantrips, Scribe Scroll<br/><br/>
				  <h4>Weapon and Armor Proficiency</h4>
				  Wizards are proficient with the club, dagger, heavy crossbow, light crossbow, and quarterstaff, but not with
				  any type of armor or shield. Armor interferes with a wizard's movements, which can cause his spells with somatic
				  components to fail<br/><br/>
				  <h4>Spells</h4>
				  A wizard casts arcane spells drawn from the sorcerer/wizard spell list presented in Spell Lists. A wizard must
				  choose and prepare his spells ahead of time.<br/><br/>

				  To learn, prepare, or cast a spell, the wizard must have an Intelligence score equal to at least 10 + the spell
				  level. The Difficulty Class for a saving throw against a wizard's spell is 10 + the spell level + the wizard's
				  Intelligence modifier.<br/><br/>

				  A wizard can cast only a certain number of spells of each spell level per day. His base daily spell allotment is
				  given on Table: Wizard. In addition, he receives bonus spells per day if he has a high Intelligence score.<br/><br/>

				  A wizard may know any number of spells. He must choose and prepare his spells ahead of time by getting 8 hours
				  of sleep and spending 1 hour studying his spellbook. While studying, the wizard decides which spells to prepare.<br/><br/>
				  <h4>Arcane Bond (Ex or Sp)</h4>
				  At 1st level, wizards form a powerful bond with an object or a creature. This bond can take one of two forms:
				  a familiar or a bonded object. A familiar is a magical pet that enhances the wizard's skills and senses and can
				  aid him in magic, while a bonded object is an item a wizard can use to cast additional spells or to serve as a
				  magical item. Once a wizard makes this choice, it is permanent and cannot be changed. Rules for bonded items
				  are given below, while rules for familiars are at the end of this section.<br/><br/>

				  Wizards who select a bonded object begin play with one at no cost. Objects that are the subject of an arcane bond
				  must fall into one of the following categories: amulet, ring, staff, wand, or weapon. These objects are always
				  masterwork quality. Weapons acquired at 1st level are not made of any special material. If the object is an amulet
				  or ring, it must be worn to have effect, while staves, wands, and weapons must be held in one hand. If a wizard
				  attempts to cast a spell without his bonded object worn or in hand, he must make a concentration check or lose
				  the spell. The DC for this check is equal to 20 + the spell's level. If the object is a ring or amulet, it
				  occupies the ring or neck slot accordingly.<br/><br/>

				  A bonded object can be used once per day to cast any one spell that the wizard has in his spellbook and is
				  capable of casting, even if the spell is not prepared. This spell is treated like any other spell cast by the
				  wizard, including casting time, duration, and other effects dependent on the wizard's level. This spell cannot
				  be modified by metamagic feats or other abilities. The bonded object cannot be used to cast spells from the
				  wizard's opposition schools.<br/><br/>

				  A wizard can add additional magic abilities to his bonded object as if he has the required item creation feats
				  and if he meets the level prerequisites of the feat. For example, a wizard with a bonded dagger must be at least
				  5th level to add magic abilities to the dagger (see the Craft Magic Arms and Armor feat in Feats). If the bonded
				  object is a wand, it loses its wand abilities when its last charge is consumed, but it is not destroyed and it
				  retains all of its bonded object properties and can be used to craft a new wand. The magic properties of a bonded
				  object, including any magic abilities added to the object, only function for the wizard who owns it. If a bonded
				  object's owner dies, or the item is replaced, the object reverts to being an ordinary masterwork item of the
				  appropriate type.<br/><br/>

				  If a bonded object is damaged, it is restored to full hit points the next time the wizard prepares his spells.
				  If the object of an arcane bond is lost or destroyed, it can be replaced after 1 week in a special ritual that
				  costs 200 gp per wizard level plus the cost of the masterwork item. This ritual takes 8 hours to complete. Items
				  replaced in this way do not possess any of the additional enchantments of the previous bonded item. A wizard
				  can designate an existing magic item as his bonded item. This functions in the same way as replacing a lost
				  or destroyed item except that the new magic item retains its abilities while gaining the benefits and drawbacks
				  of becoming a bonded item.<br/><br/>
					<h4>Arcane School</h4>
				  A wizard can choose to specialize in one school of magic, gaining additional spells and powers based on that
				  school. This choice must be made at 1st level, and once made, it cannot be changed. A wizard that does not
				  select a school receives the universalist school instead.<br/><br/>

				  A wizard that chooses to specialize in one school of magic must select two other schools as his opposition
				  schools, representing knowledge sacrificed in one area of arcane lore to gain mastery in another. A wizard
				  who prepares spells from his opposition schools must use two spell slots of that level to prepare the spell.
				  For example, a wizard with evocation as an opposition school must expend two of his available 3rd-level spell
				  slots to prepare a fireball. In addition, a specialist takes a –4 penalty on any skill checks made when
				  crafting a magic item that has a spell from one of his opposition schools as a prerequisite. A universalist
				  wizard can prepare spells from any school without restriction.<br/><br/>

				  Each arcane school gives the wizard a number of school powers. In addition, specialist wizards receive an
				  additional spell slot of each spell level he can cast, from 1st on up. Each day, a wizard can prepare a
				  spell from his specialty school in that slot. This spell must be in the wizard's spellbook. A wizard can
				  select a spell modified by a metamagic feat to prepare in his school slot, but it uses up a higher-level
				  spell slot. Wizards with the universalist school do not receive a school slot.<br/><br/>
				  <h4>Cantrips</h4>
				  Wizards can prepare a number of cantrips, or 0-level spells, each day, as noted on Table: Wizard under
				  "Spells per Day." These spells are cast like any other spell, but they are not expended when cast and may
				  be used again. A wizard can prepare a cantrip from a prohibited school, but it uses up two of his available
				  slots.<br/><br/>
				  <h4>Scribe Scroll</h4>
				  At 1st level, a wizard gains Scribe Scroll as a bonus feat.<br/><br/>
				  <h4>Bonus Feats</h4>
				  At 5th, 10th, 15th, and 20th level, a wizard gains a bonus feat. At each such opportunity, he can choose a
				  metamagic feat, an item creation feat, or Spell Mastery. The wizard must still meet all prerequisites for a
				  bonus feat, including caster level minimums. These bonus feats are in addition to the feats that a character
				  of any class gets from advancing levels. The wizard is not limited to the categories of item creation feats,
				  metamagic feats, or Spell Mastery when choosing those feats.<br/><br/>
				  <h4>Spellbooks</h4>
				  A wizard must study his spellbook each day to prepare his spells. He cannot prepare any spell not recorded in
				  his spellbook, except for read magic, which all wizards can prepare from memory.<br/><br/>

				  A wizard begins play with a spellbook containing all 0-level wizard spells (except those from his prohibited
				  schools, if any; see Arcane Schools) plus three 1st-level spells of his choice. The wizard also selects a number
				  of additional 1st-level spells equal to his Intelligence modifier to add to the spellbook. At each new wizard
				  level, he gains two new spells of any spell level or levels that he can cast (based on his new wizard level)
				  for his spellbook. At any time, a wizard can also add spells found in other wizards' spellbooks to his own.
			  </div>
		  );
    default:
      return <div >This should show yet</div>;
  }
};
