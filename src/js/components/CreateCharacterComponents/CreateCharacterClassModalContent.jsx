import * as cssStyles from '../../../styles/Styles.css'
import React from "react";


export const SelectedClassModalBody = props => {
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
            <ClassImageComp curClass={props.selectedClass} />
          </div>

					<p>
						For the truly exemplary, martial skill transcends the battlefield—it is a lifestyle, a doctrine, a state of mind. These warrior-artists search out methods of battle beyond swords and shields, finding weapons within themselves just as capable of crippling or killing as any blade. These monks (so called since they adhere to ancient philosophies and strict martial disciplines) elevate their bodies to become weapons of war, from battle-minded ascetics to self-taught brawlers. Monks tread the path of discipline, and those with the will to endure that path discover within themselves not what they are, but what they are meant to be.<br/><br/>
					</p>
					<h4>Role</h4>
					<p>
						Monks excel at overcoming even the most daunting perils, striking where it's least expected, and taking advantage of enemy vulnerabilities. Fleet of foot and skilled in combat, monks can navigate any battlefield with ease, aiding allies wherever they are needed most.<br/><br/>
					</p>
					<h4>Class Skills</h4>
					The monk's class skills are Acrobatics (Dex), Climb (Str), Craft (Int), Escape Artist (Dex), Intimidate (Cha), Knowledge (history) (Int), Knowledge (religion) (Int), Perception (Wis), Perform (Cha), Profession (Wis), Ride (Dex), Sense Motive (Wis), Stealth (Dex), and Swim (Str)<br/><br/>
					<h4>Skill Ranks per Level</h4>
					4 + Int modifier<br/><br/>
					<h4>Hit Die</h4>
					d8<br/><br/>
					<h4>Alignment restrictions</h4>
					Any lawful<br/><br/>
					<h4>Weapon and Armor Proficiency</h4>
					Monks are proficient with the club, crossbow (light or heavy), dagger, handaxe, javelin, kama, nunchaku, quarterstaff, sai, shortspear, short sword, shuriken, siangham, sling, and spear.<br/>
					Monks are not proficient with any armor or shields.<br/>

					When wearing armor, using a shield, or carrying a medium or heavy load, a monk loses his AC bonus, as well as his fast movement and flurry of blows abilities.<br/><br/>
					<h4>AC Bonus (Ex)</h4>
					When unarmored and unencumbered, the monk adds his Wisdom bonus (if any) to his AC and his CMD. In addition, a monk gains a +1 bonus to AC and CMD at 4th level. This bonus increases by 1 for every four monk levels thereafter, up to a maximum of +5 at 20th level.<br/><br/>

					These bonuses to AC apply even against touch attacks or when the monk is flat-footed. He loses these bonuses when he is immobilized or helpless, when he wears any armor, when he carries a shield, or when he carries a medium or heavy load.

					<br/><br/>
					<h4>Flurry of Blows (Ex)</h4>
					Starting at 1st level, a monk can make a flurry of blows as a full-attack action. When doing so, he may make on additional attack, taking a -2 penalty on all of his attack rolls, as if using the Two-Weapon Fighting feat. These attacks can be any combination of unarmed strikes and attacks with a monk special weapon (he does not need to use two weapons to use this ability). For the purpose of these attacks, the monk's base attack bonus from his monk class levels is equal to his monk level. For all other purposes, such as qualifying for a feat or a prestige class, the monk uses his normal base attack bonus.<br/><br/>
					At 8th level, the monk can make two additional attacks when he uses flurry of blows, as if using Improved Two-Weapon Fighting (even if the monk does not meet the prerequisites for the feat).<br/><br/>

					At 15th level, the monk can make three additional attacks using flurry of blows, as if using Greater Two-Weapon Fighting (even if the monk does not meet the prerequisites for the feat).<br/><br/>

					A monk applies his full Strength bonus to his damage rolls for all successful attacks made with flurry of blows, whether the attacks are made with an off-hand or with a weapon wielded in both hands. A monk may substitute disarm, sunder, and trip combat maneuvers for unarmed attacks as part of a flurry of blows. A monk cannot use any weapon other than an unarmed strike or a special monk weapon as part of a flurry of blows. A monk with natural weapons cannot use such weapons as part of a flurry of blows, nor can he make natural attacks in addition to his flurry of blows attacks.<br/><br/>

					<h4>Unarmed Strike</h4>
					At 1st level, a monk gains Improved Unarmed Strike as a bonus feat. A monk's attacks may be with fist, elbows, knees, and feet. This means that a monk may make unarmed strikes with his hands full. There is no such thing as an off-hand attack for a monk striking unarmed. A monk may thus apply his full Strength bonus on damage rolls for all his unarmed strikes.<br/><br/>

					sually a monk's unarmed strikes deal lethal damage, but he can choose to deal nonlethal damage instead with no penalty on his attack roll. He has the same choice to deal lethal or nonlethal damage while grappling.

					<br/><br/>

					A monk's unarmed strike is treated as both a manufactured weapon and a natural weapon for the purpose of spells and effects that enhance or improve either manufactured weapons or natural weapons.<br/><br/>
					A monk also deals more damage with his unarmed strikes than a normal person would, as shown above on Table: Monk. The unarmed damage values listed on Table: Monk is for Medium monks. A Small monk deals less damage than the amount given there with his unarmed attacks, while a Large monk deals more damage; see Small or Large Monk Unarmed Damage on the table given below.
					<br/><br/>
					<h4>Bonus Feat</h4>
					Wizards can prepare a number of cantrips, or 0-level spells, each day, as noted on Table: Wizard under
					"Spells per Day." These spells are cast like any other spell, but they are not expended when cast and may
					be used again. A wizard can prepare a cantrip from a prohibited school, but it uses up two of his available
					slots.<br/><br/>
					<h4>Scribe Scroll</h4>
					At 1st level, a wizard gains Scribe Scroll as a bonus feat.<br/><br/>
					<h4>Bonus Feats</h4>
					At 1st level, 2nd level, and every 4 levels thereafter, a monk may select a bonus feat. These feats must be taken from the following list: Catch Off-Guard, Combat Reflexes, Deflect Arrows, Dodge, Improved Grapple, Scorpion Style, and Throw Anything. At 6th level, the following feats are added to the list: Gorgon's Fist, Improved Bull Rush, Improved Disarm, Improved Feint, Improved Trip, and Mobility. At 10th level, the following feats are added to the list: Improved Critical, Medusa's Wrath, Snatch Arrows, and Spring Attack. A monk need not have any of the prerequisites normally required for these feats to select them.<br/><br/>
					<h4>Ex-Monks</h4>
					A monk who becomes nonlawful cannot gain new levels as a monk but retains all monk abilities.
				</div>
			);
		case "Wizard":
			return (
				<div style={classModalBodyStyle}>
          <div >
            <ClassImageComp curClass={props.selectedClass} />
          </div>

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
			case "Sorcerer":
			return (
				<div style={classModalBodyStyle}>
          <div >
            <ClassImageComp curClass={props.selectedClass} />
          </div>

					<p>
						Scions of innately magical bloodlines, the chosen of deities, the spawn of monsters, pawns of fate and destiny, or simply flukes of fickle magic, sorcerers look within themselves for arcane prowess and draw forth might few mortals can imagine. Emboldened by lives ever threatening to be consumed by their innate powers, these magic-touched souls endlessly indulge in and refine their mysterious abilities, gradually learning how to harness their birthright and coax forth ever greater arcane feats. Just as varied as these innately powerful spellcasters' abilities and inspirations are the ways in which they choose to utilize their gifts. While some seek to control their abilities through meditation and discipline, becoming masters of their fantastic birthright, others give in to their magic, letting it rule their lives with often explosive results. Regardless, sorcerers live and breathe that which other spellcasters devote their lives to mastering, and for them magic is more than a boon or a field of study; it is life itself.<br/><br/>
					</p>
					<h4>Role</h4>
					<p>
						Sorcerers excel at casting a selection of favored spells frequently, making them powerful battle mages. As they become familiar with a specific and ever-widening set of spells, sorcerers often discover new and versatile ways of making use of magics other spellcasters might overlook. Their bloodlines also grant them additional abilities, assuring that no two sorcerers are ever quite alike.<br/><br/>
					</p>
					<h4>Class Skills</h4>
					The sorcerer's class skills are Appraise (Int), Bluff (Cha), Craft (Int), Fly (Dex), Intimidate (Cha), Knowledge (arcana) (Int), Profession (Wis), Spellcraft (Int), and Use Magic Device (Cha).<br/><br/>

					<h4>Skill Ranks per Level</h4>
					2 + Int modifier<br/><br/>

					<h4>Hit Die</h4>
					d6<br/><br/>

					<h4>Alignment restrictions</h4>
					Any<br/><br/>

					<h4>Weapon and Armor Proficiency</h4>
					Sorcerers are proficient with all simple weapons. They are not proficient with any type of armor or shield. Armor interferes with a sorcerer's gestures, which can cause her spells with somatic components to fail (see Arcane Spells and Armor).<br/><br/>

					<h4>Spells</h4>
					A sorcerer casts arcane spells drawn primarily from the sorcerer/wizard spell list presented in Spell Lists. She can cast any spell she knows without preparing it ahead of time. To learn or cast a spell, a sorcerer must have a Charisma score equal to at least 10 + the spell level. The Difficulty Class for a saving throw against a sorcerer's spell is 10 + the spell level + the sorcerer's Charisma modifier.<br/><br/>

					Like other spellcasters, a sorcerer can cast only a certain number of spells of each spell level per day. Her base daily spell allotment is given on Table: Sorcerer. In addition, she receives bonus spells per day if she has a high Charisma score (see Table: Ability Modifiers and Bonus Spells).<br/><br/>

					A sorcerer's selection of spells is extremely limited. A sorcerer begins play knowing four 0-level spells and two 1st-level spells of her choice. At each new sorcerer level, she gains one or more new spells, as indicated on Table: Sorcerer Spells Known. (Unlike spells per day, the number of spells a sorcerer knows is not affected by her Charisma score; the numbers on Table: Sorcerer Spells Known are fixed.) These new spells can be common spells chosen from the sorcerer/wizard spell list, or they can be unusual spells that the sorcerer has gained some understanding of through study.<br/><br/>

					Upon reaching 4th level, and at every even-numbered sorcerer level after that (6th, 8th, and so on), a sorcerer can choose to learn a new spell in place of one she already knows. In effect, the sorcerer loses the old spell in exchange for the new one. The new spell's level must be the same as that of the spell being exchanged. A sorcerer may swap only a single spell at any given level, and must choose whether or not to swap the spell at the same time that she gains new spells known for the level.<br/><br/>

					Unlike a wizard or a cleric, a sorcerer need not prepare her spells in advance. She can cast any spell she knows at any time, assuming she has not yet used up her spells per day for that spell level.<br/><br/>



					<h4>Bloodline</h4>
					Each sorcerer has a source of magic somewhere in her heritage that grants her spells, bonus feats, an additional class skill, and other special abilities. This source can represent a blood relation or an extreme event involving a creature somewhere in the family's past. For example, a sorcerer might have a dragon as a distant relative or her grandfather might have signed a terrible contract with a devil. Regardless of the source, this influence manifests in a number of ways as the sorcerer gains levels. A sorcerer must pick one bloodline upon taking her first level of sorcerer. Once made, this choice cannot be changed.<br/><br/>

					At 3rd level, and every two levels thereafter, a sorcerer learns an additional spell, derived from her bloodline. These spells are in addition to the number of spells given on Table: Sorcerer Spells Known. These spells cannot be exchanged for different spells at higher levels.<br/><br/>

					At 7th level, and every six levels thereafter, a sorcerer receives one bonus feat, chosen from a list specific to each bloodline. The sorcerer must meet the prerequisites for these bonus feats.<br/><br/>

					<h4>Cantrips</h4>
					Sorcerers learn a number of cantrips, or 0-level spells, as noted on Table: Sorcerer Spells Known under "Spells Known." These spells are cast like any other spell, but they do not consume any slots and may be used again.<br/><br/>


					<h4>Eschew Materials</h4>
					A sorcerer gains Eschew Materials as a bonus feat at 1st level.<br/><br/>

					<h4>Sorcerer Bloodlines</h4>
					Bloodlines represent some of the possible sources of power that a sorcerer can draw upon. Unless otherwise noted, most sorcerers are assumed to have the arcane bloodline.<br/><br/>
				</div>
			);
			case "Rogue":
			return (
				<div style={classModalBodyStyle}>
          <div >
            <ClassImageComp curClass={props.selectedClass} />
          </div>

					<p>
						Life is an endless adventure for those who live by their wits. Ever just one step ahead of danger, rogues bank on their cunning, skill, and charm to bend fate to their favor. Never knowing what to expect, they prepare for everything, becoming masters of a wide variety of skills, training themselves to be adept manipulators, agile acrobats, shadowy stalkers, or masters of any of dozens of other professions or talents. Thieves and gamblers, fast talkers and diplomats, bandits and bounty hunters, and explorers and investigators all might be considered rogues, as well as countless other professions that rely upon wits, prowess, or luck. Although many rogues favor cities and the innumerable opportunities of civilization, some embrace lives on the road, journeying far, meeting exotic people, and facing fantastic danger in pursuit of equally fantastic riches. In the end, any who desire to shape their fates and live life on their own terms might come to be called rogues.<br/><br/>
					</p>
					<h4>Role</h4>
					<p>
						Rogues excel at moving about unseen and catching foes unaware, and tend to avoid head-to-head combat. Their varied skills and abilities allow them to be highly versatile, with great variations in expertise existing between different rogues. Most, however, excel in overcoming hindrances of all types, from unlocking doors and disarming traps to outwitting magical hazards and conning dull-witted opponents.<br/><br/>
					</p>
					<h4>Class Skills</h4>
					The rogue's class skills are Acrobatics (Dex), Appraise (Int), Bluff (Cha), Climb (Str), Craft (Int), Diplomacy (Cha), Disable Device (Dex), Disguise (Cha), Escape Artist (Dex), Intimidate (Cha), Knowledge (dungeoneering) (Int), Knowledge (local) (Int), Linguistics (Int), Perception (Wis), Perform (Cha), Profession (Wis), Sense Motive (Wis), Sleight of Hand (Dex), Stealth (Dex), Swim (Str), and Use Magic Device (Cha).<br/><br/>

					<h4>Skill Ranks per Level</h4>
					8 + Int modifier<br/><br/>

					<h4>Hit Die</h4>
					d8<br/><br/>

					<h4>Alignment restrictions</h4>
					Any<br/><br/>


					<h4>Weapon and Armor Proficiency</h4>
					Rogues are proficient with all simple weapons, plus the hand crossbow, rapier, sap, shortbow, and short sword. They are proficient with light armor, but not with shields.<br/><br/>

					<h4>Sneak Attack</h4>
					If a rogue can catch an opponent when he is unable to defend himself effectively from her attack, she can strike a vital spot for extra damage.<br/><br/>

					The rogue's attack deals extra damage anytime her target would be denied a Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not), or when the rogue flanks her target. This extra damage is 1d6 at 1st level, and increases by 1d6 every two rogue levels thereafter. Should the rogue score a critical hit with a sneak attack, this extra damage is not multiplied. Ranged attacks can count as sneak attacks only if the target is within 30 feet.<br/><br/>

					With a weapon that deals nonlethal damage (like a sap, whip, or an unarmed strike), a rogue can make a sneak attack that deals nonlethal damage instead of lethal damage. She cannot use a weapon that deals lethal damage to deal nonlethal damage in a sneak attack, not even with the usual –4 penalty.<br/><br/>

					The rogue must be able to see the target well enough to pick out a vital spot and must be able to reach such a spot. A rogue cannot sneak attack while striking a creature with concealment.<br/><br/>

					<h4>Trapfinding</h4>
					A rogue adds 1/2 her level to Perception skill checks made to locate traps and to Disable Device skill checks (minimum +1). A rogue can use Disable Device to disarm magic traps.<br/><br/>

					<h4>Evasion (Ex)</h4>
					At 2nd level and higher, a rogue can avoid even magical and unusual attacks with great agility. If she makes a successful Reflex saving throw against an attack that normally deals half damage on a successful save, she instead takes no damage. Evasion can be used only if the rogue is wearing light armor or no armor. A helpless rogue does not gain the benefit of evasion.<br/><br/>

					<h4>Rogue Talents</h4>
					As a rogue gains experience, she learns a number of talents that aid her and confound her foes. Starting at 2nd level, a rogue gains one rogue talent. She gains an additional rogue talent for every 2 levels of rogue attained after 2nd level. A rogue cannot select an individual talent more than once.<br/><br/>

					Talents marked with an asterisk add effects to a rogue's sneak attack. Only one of these talents can be applied to an individual attack and the decision must be made before the attack roll is made.<br/><br/>

					Bleeding Attack* (Ex): A rogue with this ability can cause living opponents to bleed by hitting them with a sneak attack. This attack causes the target to take 1 additional point of damage each round for each die of the rogue's sneak attack (e.g., 4d6 equals 4 points of bleed). Bleeding creatures take that amount of damage every round at the start of each of their turns. The bleeding can be stopped by a DC 15 Heal check or the application of any effect that heals hit point damage. Bleeding damage from this ability does not stack with itself. Bleeding damage bypasses any damage reduction the creature might possess.<br/><br/>

					Combat Trick: A rogue that selects this talent gains a bonus combat feat (see Feats).<br/><br/>

					Fast Stealth (Ex): This ability allows a rogue to move at full speed using the Stealth skill without penalty.<br/><br/>

					Finesse Rogue: A rogue that selects this talent gains Weapon Finesse as a bonus feat.<br/><br/>

					Ledge Walker (Ex): This ability allows a rogue to move along narrow surfaces at full speed using the Acrobatics skill without penalty. In addition, a rogue with this talent is not flat-footed when using Acrobatics to move along narrow surfaces.

					Major Magic (Sp): A rogue with this talent gains the ability to cast a 1st-level spell from the sorcerer/wizard spell list two times a day as a spell-like ability. The caster level for this ability is equal to the rogue's level. The save DC for this spell is 11 + the rogue's Intelligence modifier. The rogue must have an Intelligence of at least 11 to select this talent. A rogue must have the minor magic rogue talent before choosing this talent.

					Minor Magic (Sp): A rogue with this talent gains the ability to cast a 0-level spell from the sorcerer/wizard spell list. This spell can be cast three times a day as a spell-like ability. The caster level for this ability is equal to the rogue's level. The save DC for this spell is 10 + the rogue's Intelligence modifier. The rogue must have an Intelligence of at least 10 to select this talent.

					Quick Disable (Ex): It takes a rogue with this ability half the normal amount of time to disable a trap using the Disable Device skill (minimum 1 round).<br/><br/>

					Resiliency (Ex): Once per day, a rogue with this ability can gain a number of temporary hit points equal to the rogue's level. Activating this ability is an immediate action that can only be performed when she is brought to below 0 hit points. This ability can be used to prevent her from dying. These temporary hit points last for 1 minute. If the rogue's hit points drop below 0 due to the loss of these temporary hit points, she falls unconscious and is dying as normal.

					Rogue Crawl (Ex): While prone, a rogue with this ability can move at half speed. This movement provokes attacks of opportunity as normal. A rogue with this talent can take a 5-foot step while crawling.<br/><br/>

					Slow Reactions* (Ex): Opponents damaged by the rogue's sneak attack can't make attacks of opportunity for 1 round.<br/><br/>

					Stand Up (Ex): A rogue with this ability can stand up from a prone position as a free action. This still provokes attacks of opportunity for standing up while threatened by a foe.<br/><br/>

					Surprise Attack (Ex): During the surprise round, opponents are always considered flat-footed to a rogue with this ability, even if they have already acted.<br/><br/>

					Trap Spotter (Ex): Whenever a rogue with this talent comes within 10 feet of a trap, she receives an immediate Perception skill check to notice the trap. This check should be made in secret by the GM.<br/><br/>

					Weapon Training: A rogue that selects this talent gains Weapon Focus as a bonus feat.<br/><br/>

					<h4>Trap Sense (Ex)</h4>
					At 3rd level, a rogue gains an intuitive sense that alerts her to danger from traps, giving her a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps. These bonuses rise to +2 when the rogue reaches 6th level, to +3 when she reaches 9th level, to +4 when she reaches 12th level, to +5 at 15th, and to +6 at 18th level.<br/><br/>

					Trap sense bonuses gained from multiple classes stack.<br/><br/>

					<h4>Uncanny Dodge (Ex)</h4>
					Starting at 4th level, a rogue can react to danger before her senses would normally allow her to do so. She cannot be caught flat-footed, nor does she lose her Dex bonus to AC if the attacker is invisible. She still loses her Dexterity bonus to AC if immobilized. A rogue with this ability can still lose her Dexterity bonus to AC if an opponent successfully uses the feint action (see Combat) against her.<br/><br/>

					If a rogue already has uncanny dodge from a different class, she automatically gains improved uncanny dodge (see below) instead.<br/><br/>

					<h4>Improved Uncanny Dodge (Ex)</h4>
					A rogue of 8th level or higher can no longer be flanked.<br/><br/>

					This defense denies another rogue the ability to sneak attack the character by flanking her, unless the attacker has at least four more rogue levels than the target does.<br/><br/>

					If a character already has uncanny dodge (see above) from another class, the levels from the classes that grant uncanny dodge stack to determine the minimum rogue level required to flank the character.<br/><br/>

					<h4>Advanced Talents</h4>
					At 10th level, and every two levels thereafter, a rogue can choose one of the following advanced talents in place of a rogue talent.<br/><br/>

					Crippling Strike* (Ex): A rogue with this ability can sneak attack opponents with such precision that her blows weaken and hamper them. An opponent damaged by one of her sneak attacks also takes 2 points of Strength damage.<br/><br/>

					Defensive Roll (Ex): With this advanced talent, the rogue can roll with a potentially lethal blow to take less damage from it than she otherwise would. Once per day, when she would be reduced to 0 or fewer hit points by damage in combat (from a weapon or other blow, not a spell or special ability), the rogue can attempt to roll with the damage. To use this ability, the rogue must attempt a Reflex saving throw (DC = damage dealt). If the save succeeds, she takes only half damage from the blow; if it fails, she takes full damage. She must be aware of the attack and able to react to it in order to execute her defensive roll—if she is denied her Dexterity bonus to AC, she can't use this ability. Since this effect would not normally allow a character to make a Reflex save for half damage, the rogue's evasion ability does not apply to the defensive roll.<br/><br/>

					Dispelling Attack* (Su): Opponents that are dealt sneak attack damage by a rogue with this ability are affected by a targeted dispel magic, targeting the lowest-level spell effect active on the target. The caster level for this ability is equal to the rogue's level. A rogue must have the major magic rogue talent before choosing dispelling attack.<br/><br/>

					Improved Evasion (Ex): This works like evasion, except that while the rogue still takes no damage on a successful Reflex saving throw against attacks, she henceforth takes only half damage on a failed save. A helpless rogue does not gain the benefit of improved evasion.<br/><br/>

					Opportunist (Ex): Once per round, the rogue can make an attack of opportunity against an opponent who has just been struck for damage in melee by another character. This attack counts as an attack of opportunity for that round. Even a rogue with the Combat Reflexes feat can't use the opportunist ability more than once per round.<br/><br/>

					Skill Mastery: The rogue becomes so confident in the use of certain skills that she can use them reliably even under adverse conditions.<br/><br/>

					Upon gaining this ability, she selects a number of skills equal to 3 + her Intelligence modifier. When making a skill check with one of these skills, she may take 10 even if stress and distractions would normally prevent her from doing so. A rogue may gain this special ability multiple times, selecting additional skills for skill mastery to apply to each time.<br/><br/>

					Slippery Mind (Ex): This ability represents the rogue's ability to wriggle free from magical effects that would otherwise control or compel her. If a rogue with slippery mind is affected by an enchantment spell or effect and fails her saving throw, she can attempt it again 1 round later at the same DC. She gets only this one extra chance to succeed on her saving throw.<br/><br/>

					Feat: A rogue may gain any feat that she qualifies for in place of a rogue talent.<br/><br/>

					<h4>Master Strike (Ex)</h4>
					Upon reaching 20th level, a rogue becomes incredibly deadly when dealing sneak attack damage. Each time the rogue deals sneak attack damage, she can choose one of the following three effects: the target can be put to sleep for 1d4 hours, paralyzed for 2d6 rounds, or slain. Regardless of the effect chosen, the target receives a Fortitude save to negate the additional effect. The DC of this save is equal to 10 + 1/2 the rogue's level + the rogue's Intelligence modifier. Once a creature has been the target of a master strike, regardless of whether or not the save is made, that creature is immune to that rogue's master strike for 24 hours. Creatures that are immune to sneak attack damage are also immune to this ability.<br/><br/>


				</div>
			);
			case "Ranger":
			return (
				<div style={classModalBodyStyle}>
          <div >
            <ClassImageComp curClass={props.selectedClass} />
          </div>

					<p>
						For those who relish the thrill of the hunt, there are only predators and prey. Be they scouts, trackers, or bounty hunters, rangers share much in common: unique mastery of specialized weapons, skill at stalking even the most elusive game, and the expertise to defeat a wide range of quarries. Knowledgeable, patient, and skilled hunters, these rangers hound man, beast, and monster alike, gaining insight into the way of the predator, skill in varied environments, and ever more lethal martial prowess. While some track man-eating creatures to protect the frontier, others pursue more cunning game—even fugitives among their own people.<br/><br/>
					</p>
					<h4>Role</h4>
					<p>
						Rangers are deft skirmishers, either in melee or at range, capable of skillfully dancing in and out of battle. Their abilities allow them to deal significant harm to specific types of foes, but their skills are valuable against all manner of enemies.<br/><br/>
					</p>
					<h4>Class Skills</h4>
					The ranger's class skills are Climb (Str), Craft (Int), Handle Animal (Cha), Heal (Wis), Intimidate (Cha), Knowledge (dungeoneering) (Int), Knowledge (geography) (Int), Knowledge (nature) (Int), Perception (Wis), Profession (Wis), Ride (Dex), Spellcraft (Int), Stealth (Dex), Survival (Wis), and Swim (Str).<br/><br/>

					<h4>Skill Ranks per Level</h4>
					6 + Int modifier<br/><br/>

					<h4>Hit Die</h4>
					d10<br/><br/>

					<h4>Alignment restrictions</h4>
					Any<br/><br/>



					<h4>Weapon and Armor Proficiency</h4>
					A ranger is proficient with all simple and martial weapons and with light armor, medium armor, and shields (except tower shields).<br/><br/>

					<h4>Favored Enemy (Ex)</h4>
					At 1st level, a ranger selects a creature type from the ranger favored enemies table. He gains a +2 bonus on Bluff, Knowledge, Perception, Sense Motive, and Survival checks against creatures of his selected type. Likewise, he gets a +2 bonus on weapon attack and damage rolls against them. A ranger may make Knowledge skill checks untrained when attempting to identify these creatures.	<br/><br/>

					At 5th level and every five levels thereafter (10th, 15th, and 20th level), the ranger may select an additional favored enemy. In addition, at each such interval, the bonus against any one favored enemy (including the one just selected, if so desired) increases by +2.	<br/><br/>

					If the ranger chooses humanoids or outsiders as a favored enemy, he must also choose an associated subtype, as indicated on the table below. (Note that there are other types of humanoid to choose from—those called out specifically on the table below are merely the most common.) If a specific creature falls into more than one category of favored enemy, the ranger's bonuses do not stack; he simply uses whichever bonus is higher.

					<br/><br/>

					<h4>Track (Ex)</h4>
					A ranger adds half his level (minimum 1) to Survival skill checks made to follow tracks.

					<br/><br/>



					<h4>Wild Empathy (Ex)</h4>
					A ranger can improve the initial attitude of an animal. This ability functions just like a Diplomacy check to improve the attitude of a person (see Using Skills). The ranger rolls 1d20 and adds his ranger level and his Charisma bonus to determine the wild empathy check result. The typical domestic animal has a starting attitude of indifferent, while wild animals are usually unfriendly.	<br/><br/>

					To use wild empathy, the ranger and the animal must be within 30 feet of one another under normal visibility conditions. Generally, influencing an animal in this way takes 1 minute, but, as with influencing people, it might take more or less time.	<br/><br/>

					The ranger can also use this ability to influence a magical beast with an Intelligence score of 1 or 2, but he takes a –4 penalty on the check.<br/><br/>

					<h4>Combat Style Feat (Ex)</h4>
					At 2nd level, a ranger must select one of two combat styles to pursue: archery or two-weapon combat. The ranger's expertise manifests in the form of bonus feats at 2nd, 6th, 10th, 14th, and 18th level. He can choose feats from his selected combat style, even if he does not have the normal prerequisites.	<br/><br/>

					If the ranger selects archery, he can choose from the following list whenever he gains a combat style feat: Far Shot, Point Blank Shot, Precise Shot, and Rapid Shot. At 6th level, he adds Improved Precise Shot and Manyshot to the list. At 10th level, he adds Pinpoint Targeting and Shot on the Run to the list.	<br/><br/>

					If the ranger selects two-weapon combat, he can choose from the following list whenever he gains a combat style feat: Double Slice, Improved Shield Bash, Quick Draw, and Two-Weapon Fighting. At 6th level, he adds Improved Two-Weapon Fighting and Two-Weapon Defense to the list. At 10th level, he adds Greater Two-Weapon Fighting and Two-Weapon Rend to the list.	<br/><br/>

					The benefits of the ranger's chosen style feats apply only when he wears light, medium, or no armor. He loses all benefits of his combat style feats when wearing heavy armor. Once a ranger selects a combat style, it cannot be changed.	<br/><br/>

					<br/><br/>

					<h4>Endurance</h4>
					A ranger gains Endurance as a bonus feat at 3rd level.<br/><br/>

					<h4>Favored Terrain (Ex)</h4>
					At 3rd level, a ranger may select a type of terrain from the Favored Terrains table. The ranger gains a +2 bonus on initiative checks and Knowledge (geography), Perception, Stealth, and Survival skill checks when he is in this terrain. A ranger traveling through his favored terrain normally leaves no trail and cannot be tracked (though he may leave a trail if he so chooses).	<br/><br/>

					At 8th level and every five levels thereafter, the ranger may select an additional favored terrain. In addition, at each such interval, the skill bonus and initiative bonus in any one favored terrain (including the one just selected, if so desired), increases by +2.	<br/><br/>

					If a specific terrain falls into more than one category of favored terrain, the ranger's bonuses do not stack; he simply uses whichever bonus is higher.	<br/><br/>

					<br/><br/>

					<h4>Hunter's Bond (Ex)</h4>
					At 4th level, a ranger forms a bond with his hunting companions. This bond can take one of two forms. Once the form is chosen, it cannot be changed. The first is a bond to his companions. This bond allows him to spend a move action to grant half his favored enemy bonus against a single target of the appropriate type to all allies within 30 feet who can see or hear him. This bonus lasts for a number of rounds equal to the ranger's Wisdom modifier (minimum 1). This bonus does not stack with any favored enemy bonuses possessed by his allies; they use whichever bonus is higher.	<br/><br/>

					The second option is to form a close bond with an animal companion. A ranger who selects an animal companion can choose from the following list: badger, bird, camel, cat (small), dire rat, dog, horse, pony, snake (viper or constrictor), or wolf. If the campaign takes place wholly or partly in an aquatic environment, the ranger may choose a shark instead. This animal is a loyal companion that accompanies the ranger on his adventures as appropriate for its kind. A ranger's animal companion shares his favored enemy and favored terrain bonuses.	<br/><br/>

					This ability functions like the druid animal companion ability (which is part of the Nature Bond class feature), except that the ranger's effective druid level is equal to his ranger level – 3.<br/><br/>

					<h4>Spells</h4>
					Beginning at 4th level, a ranger gains the ability to cast a small number of divine spells, which are drawn from the ranger spell list presented in Spell Lists. A ranger must choose and prepare his spells in advance.	<br/><br/>

					To prepare or cast a spell, a ranger must have a Wisdom score equal to at least 10 + the spell level. The Difficulty Class for a saving throw against a ranger's spell is 10 + the spell level + the ranger's Wisdom modifier.	<br/><br/>

					Like other spellcasters, a ranger can cast only a certain number of spells of each spell level per day. His base daily spell allotment is given on Table: Ranger. In addition, he receives bonus spells per day if he has a high Wisdom score (see Table: Ability Modifiers and Bonus Spells). When Table: Ranger indicates that the ranger gets 0 spells per day of a given spell level, he gains only the bonus spells he would be entitled to based on his Wisdom score for that spell level.	<br/><br/>

					A ranger must spend 1 hour per day in quiet meditation to regain his daily allotment of spells. A ranger may prepare and cast any spell on the ranger spell list, provided that he can cast spells of that level, but he must choose which spells to prepare during his daily meditation.	<br/><br/>

					Through 3rd level, a ranger has no caster level. At 4th level and higher, his caster level is equal to his ranger level – 3.<br/><br/>

					<h4>Woodland Stride (Ex)</h4>
					Starting at 7th level, a ranger may move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at his normal speed and without taking damage or suffering any other impairment.	<br/><br/>

					Thorns, briars, and overgrown areas that are enchanted or magically manipulated to impede motion, however, still affect him.<br/><br/>

					<h4>Swift Tracker (Ex)</h4>
					Beginning at 8th level, a ranger can move at his normal speed while using Survival to follow tracks without taking the normal –5 penalty. He takes only a –10 penalty (instead of the normal –20) when moving at up to twice normal speed while tracking.<br/><br/>

					<h4>Evasion (Ex)</h4>
					When he reaches 9th level, a ranger can avoid even magical and unusual attacks with great agility. If he makes a successful Reflex saving throw against an attack that normally deals half damage on a successful save, he instead takes no damage. Evasion can be used only if the ranger is wearing light armor, medium armor, or no armor. A helpless ranger does not gain the benefit of evasion.

					<br/><br/>

		<h4>Quarry (Ex)</h4>
					At 11th level, a ranger can, as a standard action, denote one target within his line of sight as his quarry. Whenever he is following the tracks of his quarry, a ranger can take 10 on his Survival skill checks while moving at normal speed, without penalty. In addition, he receives a +2 insight bonus on attack rolls made against his quarry, and all critical threats are automatically confirmed. A ranger can have no more than one quarry at a time and the creature's type must correspond to one of his favored enemy types. He can dismiss this effect at any time as a free action, but he cannot select a new quarry for 24 hours. If the ranger sees proof that his quarry is dead, he can select a new quarry after waiting 1 hour.<br/><br/>

		<h4>Camouflage (Ex)</h4>
					A ranger of 12th level or higher can use the Stealth skill to hide in any of his favored terrains, even if the terrain doesn't grant cover or concealment.

					<br/><br/>

	<h4>Improved Evasion (Ex)</h4>
					At 16th level, a ranger's evasion improves. This ability works like evasion, except that while the ranger still takes no damage on a successful Reflex saving throw against attacks, he henceforth takes only half damage on a failed save. A helpless ranger does not gain the benefit of improved evasion.

					<br/><br/>

	<h4>Hide in Plain Sight (Ex)</h4>
					While in any of his favored terrains, a ranger of 17th level or higher can use the Stealth skill even while being observed.

					<br/><br/>
<h4>Improved Quarry (Ex)</h4>
					At 19th level, the ranger's ability to hunt his quarry improves. He can now select a quarry as a free action, and can now take 20 while using Survival to track his quarry, while moving at normal speed without penalty. His insight bonus to attack his quarry increases to +4. If his quarry is killed or dismissed, he can select a new one after 10 minutes have passed.

					<br/><br/>
<h4>Master Hunter (Ex)</h4>
					A ranger of 20th level becomes a master hunter. He can always move at full speed while using Survival to follow tracks without penalty. He can, as a standard action, make a single attack against a favored enemy at his full attack bonus. If the attack hits, the target takes damage normally and must make a Fortitude save or die. The DC of this save is equal to 10 + 1/2 the ranger's level + the ranger's Wisdom modifier. A ranger can choose instead to deal an amount of nonlethal damage equal to the creature's current hit points. A successful save negates this damage. A ranger can use this ability once per day against each favored enemy type he possesses, but not against the same creature more than once in a 24-hour period.

					<br/><br/>


				</div>
			);
			case "Paladin":
			return (
				<div style={classModalBodyStyle}>
          <div >
            <ClassImageComp curClass={props.selectedClass} />
          </div>

					<p>

						Through a select, worthy few shines the power of the divine. Called paladins, these noble souls dedicate their swords and lives to the battle against evil. Knights, crusaders, and law-bringers, paladins seek not just to spread divine justice but to embody the teachings of the virtuous deities they serve. In pursuit of their lofty goals, they adhere to ironclad laws of morality and discipline. As reward for their righteousness, these holy champions are blessed with boons to aid them in their quests: powers to banish evil, heal the innocent, and inspire the faithful. Although their convictions might lead them into conflict with the very souls they would save, paladins weather endless challenges of faith and dark temptations, risking their lives to do right and fighting to bring about a brighter future.<br/><br/>
					</p>
					<h4>Role</h4>
					<p>
						Paladins serve as beacons for their allies within the chaos of battle. While deadly opponents of evil, they can also empower goodly souls to aid in their crusades. Their magic and martial skills also make them well suited to defending others and blessing the fallen with the strength to continue fighting.<br/><br/>
					</p>
					<h4>Class Skills</h4>
					The paladin's class skills are Craft (Int), Diplomacy (Cha), Handle Animal (Cha), Heal (Wis), Knowledge (nobility) (Int), Knowledge (religion) (Int), Profession (Wis), Ride (Dex), Sense Motive (Wis), and Spellcraft (Int).<br/><br/>

					<h4>Skill Ranks per Level</h4>
					2 + Int modifier<br/><br/>

					<h4>Hit Die</h4>
					d10<br/><br/>

					<h4>Alignment restrictions</h4>
					Lawful good<br/><br/>


					<h4>Weapon and Armor Proficiency</h4>
					Paladins are proficient with all simple and martial weapons, with all types of armor (heavy, medium, and light), and with shields (except tower shields).<br/><br/>

					<h4>Aura of Good (Ex)</h4>
					The power of a paladin's aura of good (see the detect good spell) is equal to her paladin level.<br/><br/>

					<h4>Detect Evil (Sp)</h4>
					At will, a paladin can use detect evil, as the spell. A paladin can, as a move action, concentrate on a single item or individual within 60 feet and determine if it is evil, learning the strength of its aura as if having studied it for 3 rounds. While focusing on one individual or object, the paladin does not detect evil in any other object or individual within range.<br/><br/>

					<h4>Smite Evil (Su)</h4>
					Once per day, a paladin can call out to the powers of good to aid her in her struggle against evil. As a swift action, the paladin chooses one target within sight to smite. If this target is evil, the paladin adds her Charisma bonus (if any) to her attack rolls and adds her paladin level to all damage rolls made against the target of her smite. If the target of smite evil is an outsider with the evil subtype, an evil-aligned dragon, or an undead creature, the bonus to damage on the first successful attack increases to 2 points of damage per level the paladin possesses. Regardless of the target, smite evil attacks automatically bypass any DR the creature might possess.<br/><br/>

					In addition, while smite evil is in effect, the paladin gains a deflection bonus equal to her Charisma modifier (if any) to her AC against attacks made by the target of the smite. If the paladin targets a creature that is not evil, the smite is wasted with no effect.<br/><br/>

					The smite evil effect remains until the target of the smite is dead or the next time the paladin rests and regains her uses of this ability. At 4th level, and at every three levels thereafter, the paladin may smite evil one additional time per day, as indicated on Table: Paladin, to a maximum of seven times per day at 19th level.<br/><br/>

					<h4>Divine Grace (Su)</h4>
					At 2nd level, a paladin gains a bonus equal to her Charisma bonus (if any) on all saving throws.<br/><br/>

					<h4>Lay On Hands (Su)</h4>
					Beginning at 2nd level, a paladin can heal wounds (her own or those of others) by touch. Each day she can use this ability a number of times equal to 1/2 her paladin level plus her Charisma modifier. With one use of this ability, a paladin can heal 1d6 hit points of damage for every two paladin levels she possesses. Using this ability is a standard action, unless the paladin targets herself, in which case it is a swift action. Despite the name of this ability, a paladin only needs one free hand to use this ability.<br/><br/>

					Alternatively, a paladin can use this healing power to deal damage to undead creatures, dealing 1d6 points of damage for every two levels the paladin possesses. Using lay on hands in this way requires a successful melee touch attack and doesn't provoke an attack of opportunity. Undead do not receive a saving throw against this damage.<br/><br/>

					<h4>Aura of Courage (Su)</h4>
					At 3rd level, a paladin is immune to fear (magical or otherwise). Each ally within 10 feet of her gains a +4 morale bonus on saving throws against fear effects. This ability functions only while the paladin is conscious, not if she is unconscious or dead.<br/><br/>

					<h4>Divine Health (Ex)</h4>
					At 3rd level, a paladin is immune to all diseases, including supernatural and magical diseases, including mummy rot.<br/><br/>

						<h4>Mercy (Su)</h4>
					At 3rd level, and every three levels thereafter, a paladin can select one mercy. Each mercy adds an effect to the paladin's lay on hands ability. Whenever the paladin uses lay on hands to heal damage to one target, the target also receives the additional effects from all of the mercies possessed by the paladin. A mercy can remove a condition caused by a curse, disease, or poison without curing the affliction. Such conditions return after 1 hour unless the mercy actually removes the affliction that causes the condition.<br/><br/>

					At 3rd level, the paladin can select from the following initial mercies.<br/><br/>

					• Fatigued: The target is no longer fatigued.<br/><br/>

					• Shaken: The target is no longer shaken.<br/><br/>

					• Sickened: The target is no longer sickened.<br/><br/>

					At 6th level, a paladin adds the following mercies to the list of those that can be selected.<br/><br/>

					• Dazed: The target is no longer dazed.<br/><br/>

					• Diseased: The paladin's lay on hands ability also acts as remove disease, using the paladin's level as the caster level.<br/><br/>

					• Staggered: The target is no longer staggered, unless the target is at exactly 0 hit points.<br/><br/>

					At 9th level, a paladin adds the following mercies to the list of those that can be selected.<br/><br/>

					• Cursed: The paladin's lay on hands ability also acts as remove curse, using the paladin's level as the caster level.<br/><br/>

					• Exhausted: The target is no longer exhausted. The paladin must have the fatigue mercy before selecting this mercy.<br/><br/>

					• Frightened: The target is no longer frightened. The paladin must have the shaken mercy before selecting this mercy.<br/><br/>

					• Nauseated: The target is no longer nauseated. The paladin must have the sickened mercy before selecting this mercy.<br/><br/>

					• Poisoned: The paladin's lay on hands ability also acts as neutralize poison, using the paladin's level as the caster level.<br/><br/>

					At 12th level, a paladin adds the following mercies to the list of those that can be selected.<br/><br/>

					• Blinded: The target is no longer blinded.<br/><br/>

					• Deafened: The target is no longer deafened.
					<br/><br/>
					• Paralyzed: The target is no longer paralyzed.<br/><br/>

					• Stunned: The target is no longer stunned.<br/><br/>

					These abilities are cumulative. For example, a 12th-level paladin's lay on hands ability heals 6d6 points of damage and might also cure fatigued and exhausted conditions as well as removing diseases and neutralizing poisons. Once a condition or spell effect is chosen, it can't be changed.<br/><br/>

						<h4>Channel Positive Energy (Su)</h4>
					When a paladin reaches 4th level, she gains the supernatural ability to channel positive energy like a cleric. Using this ability consumes two uses of her lay on hands ability. A paladin uses her level as her effective cleric level when channeling positive energy. This is a Charisma-based ability.<br/><br/>

						<h4>Spells</h4>
					Beginning at 4th level, a paladin gains the ability to cast a small number of divine spells which are drawn from the paladin spell list presented in Spell Lists. A paladin must choose and prepare her spells in advance.<br/><br/>

					To prepare or cast a spell, a paladin must have a Charisma score equal to at least 10 + the spell level. The Difficulty Class for a saving throw against a paladin's spell is 10 + the spell level + the paladin's Charisma modifier.<br/><br/>

					Like other spellcasters, a paladin can cast only a certain number of spells of each spell level per day. Her base daily spell allotment is given on Table: Paladin. In addition, she receives bonus spells per day if she has a high Charisma score (see Table: Ability Modifiers and Bonus Spells). When Table: Paladin indicates that the paladin gets 0 spells per day of a given spell level, she gains only the bonus spells she would be entitled to based on her Charisma score for that spell level.<br/><br/>

					A paladin must spend 1 hour each day in quiet prayer and meditation to regain her daily allotment of spells. A paladin may prepare and cast any spell on the paladin spell list, provided that she can cast spells of that level, but she must choose which spells to prepare during her daily meditation.<br/><br/>

					Through 3rd level, a paladin has no caster level. At 4th level and higher, her caster level is equal to her paladin level – 3.<br/><br/>

							<h4>Divine Bond (Sp)</h4>
					Upon reaching 5th level, a paladin forms a divine bond with her god. This bond can take one of two forms. Once the form is chosen, it cannot be changed.<br/><br/>

					The first type of bond allows the paladin to enhance her weapon as a standard action by calling upon the aid of a celestial spirit for 1 minute per paladin level. When called, the spirit causes the weapon to shed light as a torch. At 5th level, this spirit grants the weapon a +1 enhancement bonus. For every three levels beyond 5th, the weapon gains another +1 enhancement bonus, to a maximum of +6 at 20th level. These bonuses can be added to the weapon, stacking with existing weapon bonuses to a maximum of +5, or they can be used to add any of the following weapon properties: axiomatic, brilliant energy, defending, disruption, flaming, flaming burst, holy, keen, merciful, and speed. Adding these properties consumes an amount of bonus equal to the property's cost (see Table: Melee Weapon Special Abilities). These bonuses are added to any properties the weapon already has, but duplicate abilities do not stack. If the weapon is not magical, at least a +1 enhancement bonus must be added before any other properties can be added. The bonus and properties granted by the spirit are determined when the spirit is called and cannot be changed until the spirit is called again. The celestial spirit imparts no bonuses if the weapon is held by anyone other than the paladin but resumes giving bonuses if returned to the paladin. These bonuses apply to only one end of a double weapon. A paladin can use this ability once per day at 5th level, and one additional time per day for every four levels beyond 5th, to a total of four times per day at 17th level.<br/><br/>

					If a weapon bonded with a celestial spirit is destroyed, the paladin loses the use of this ability for 30 days, or until she gains a level, whichever comes first. During this 30-day period, the paladin takes a –1 penalty on attack and weapon damage rolls.<br/><br/>

					The second type of bond allows a paladin to gain the service of an unusually intelligent, strong, and loyal steed to serve her in her crusade against evil. This mount is usually a heavy horse (for a Medium paladin) or a pony (for a Small paladin), although more exotic mounts, such as a boar, camel, or dog are also suitable. This mount functions as a druid's animal companion, using the paladin's level as her effective druid level. Bonded mounts have an Intelligence of at least 6.<br/><br/>

					Once per day, as a full-round action, a paladin may magically call her mount to her side. This ability is the equivalent of a spell of a level equal to one-third the paladin's level. The mount immediately appears adjacent to the paladin. A paladin can use this ability once per day at 5th level, and one additional time per day for every 4 levels thereafter, for a total of four times per day at 17th level.<br/><br/>

					At 11th level, the mount gains the celestial template and becomes a magical beast for the purposes of determining which spells affect it. At 15th level, a paladin's mount gains spell resistance equal to the paladin's level + 11.<br/><br/>

					Should the paladin's mount die, the paladin may not summon another mount for 30 days or until she gains a paladin level, whichever comes first. During this 30-day period, the paladin takes a –1 penalty on attack and weapon damage rolls.<br/><br/>

							<h4>Aura of Resolve (Su)</h4>
					At 8th level, a paladin is immune to charm spells and spell-like abilities. Each ally within 10 feet of her gains a +4 morale bonus on saving throws against charm effects.<br/><br/>

					This ability functions only while the paladin is conscious, not if she is unconscious or dead.<br/><br/>

							<h4>Aura of Justice (Su)</h4>
					At 11th level, a paladin can expend two uses of her smite evil ability to grant the ability to smite evil to all allies within 10 feet, using her bonuses. Allies must use this smite evil ability by the start of the paladin's next turn and the bonuses last for 1 minute. Using this ability is a free action. Evil creatures gain no benefit from this ability.<br/><br/>

								<h4>Aura of Faith (Su)</h4>
					At 14th level, a paladin's weapons are treated as good-aligned for the purposes of overcoming damage reduction. Any attack made against an enemy within 10 feet of her is treated as good-aligned for the purposes of overcoming damage reduction.<br/><br/>

					This ability functions only while the paladin is conscious, not if she is unconscious or dead.<br/><br/>

								<h4>Aura of Righteousness (Su)</h4>
					At 17th level, a paladin gains DR 5/evil and immunity to compulsion spells and spell-like abilities. Each ally within 10 feet of her gains a +4 morale bonus on saving throws against compulsion effects.<br/><br/>

					This ability functions only while the paladin is conscious, not if she is unconscious or dead.<br/><br/>

								<h4>Holy Champion (Su)</h4>
					At 20th level, a paladin becomes a conduit for the power of her god. Her DR increases to 10/evil. Whenever she uses smite evil and successfully strikes an evil outsider, the outsider is also subject to a banishment, using her paladin level as the caster level (her weapon and holy symbol automatically count as objects that the subject hates). After the banishment effect and the damage from the attack is resolved, the smite immediately ends. In addition, whenever she channels positive energy or uses lay on hands to heal a creature, she heals the maximum possible amount.<br/><br/>

									<h4>Code of Conduct</h4>
					A paladin must be of lawful good alignment and loses all class features except proficiencies if she ever willingly commits an evil act.

					Additionally, a paladin's code requires that she respect legitimate authority, act with honor (not lying, not cheating, not using poison, and so forth), help those in need (provided they do not use the help for evil or chaotic ends), and punish those who harm or threaten innocents.<br/><br/>

									<h4>Associates</h4>
					At 3rd level, a paladin is immune to all diseases, including supernatural and magical diseases, including mummy rot.<br/><br/>

									<h4>Ex-Paladins</h4>
					A paladin who ceases to be lawful good, who willfully commits an evil act, or who violates the code of conduct loses all paladin spells and class features (including the service of the paladin's mount, but not weapon, armor, and shield proficiencies). She may not progress any further in levels as a paladin. She regains her abilities and advancement potential if she atones for her violations (see the atonement spell description in Spell Lists), as appropriate.	<br/><br/>


				</div>
			);
			case "Fighter":
			return (
				<div style={classModalBodyStyle}>
          <div >
            <ClassImageComp curClass={props.selectedClass} />
          </div>

					<p>
						Some take up arms for glory, wealth, or revenge. Others do battle to prove themselves, to protect others, or because they know nothing else. Still others learn the ways of weaponcraft to hone their bodies in battle and prove their mettle in the forge of war. Lords of the battlefield, fighters are a disparate lot, training with many weapons or just one, perfecting the uses of armor, learning the fighting techniques of exotic masters, and studying the art of combat, all to shape themselves into living weapons. Far more than mere thugs, these skilled warriors reveal the true deadliness of their weapons, turning hunks of metal into arms capable of taming kingdoms, slaughtering monsters, and rousing the hearts of armies. Soldiers, knights, hunters, and artists of war, fighters are unparalleled champions, and woe to those who dare stand against them.<br/><br/>
					</p>
					<h4>Role</h4>
					<p>
						Fighters excel at combat—defeating their enemies, controlling the flow of battle, and surviving such sorties themselves. While their specific weapons and methods grant them a wide variety of tactics, few can match fighters for sheer battle prowess.<br/><br/>
					</p>
					<h4>Class Skills</h4>
					The fighter's class skills are Climb (Str), Craft (Int), Handle Animal (Cha), Intimidate (Cha), Knowledge (dungeoneering) (Int), Knowledge (engineering) (Int), Profession (Wis), Ride (Dex), Survival (Wis), and Swim (Str).<br/><br/>
					<h4>Skill Ranks per Level</h4>
					2 + Int modifier<br/><br/>
					<h4>Hit Die</h4>
					d10<br/><br/>
					<h4>Alignment restrictions</h4>
					Any<br/><br/>

					<h4>Weapon and Armor Proficiency</h4>
					A fighter is proficient with all simple and martial weapons and with all armor (heavy, light, and medium) and shields (including tower shields).<br/><br/>

					<h4>Bonus Feats</h4>
					At 1st level, and at every even level thereafter, a fighter gains a bonus feat in addition to those gained from normal advancement (meaning that the fighter gains a feat at every level). These bonus feats must be selected from those listed as combat feats, sometimes also called "fighter bonus feats."<br/><br/>

					Upon reaching 4th level, and every four levels thereafter (8th, 12th, and so on), a fighter can choose to learn a new bonus feat in place of a bonus feat he has already learned. In effect, the fighter loses the bonus feat in exchange for the new one. The old feat cannot be one that was used as a prerequisite for another feat, prestige class, or other ability. A fighter can only change one feat at any given level and must choose whether or not to swap the feat at the time he gains a new bonus feat for the level.<br/><br/>


					<h4>Bravery (Ex)</h4>
					Starting at 2nd level, a fighter gains a +1 bonus on Will saves against fear. This bonus increases by +1 for every four levels beyond 2nd.<br/><br/>


					<h4>Armor Training (Ex)</h4>
					Starting at 3rd level, a fighter learns to be more maneuverable while wearing armor. Whenever he is wearing armor, he reduces the armor check penalty by 1 (to a minimum of 0) and increases the maximum Dexterity bonus allowed by his armor by 1. Every four levels thereafter (7th, 11th, and 15th), these bonuses increase by +1 each time, to a maximum –4 reduction of the armor check penalty and a +4 increase of the maximum Dexterity bonus allowed.<br/><br/>

					In addition, a fighter can also move at his normal speed while wearing medium armor. At 7th level, a fighter can move at his normal speed while wearing heavy armor.<br/><br/>

					<h4>Weapon Training (Ex)</h4>
					Starting at 5th level, a fighter can select one group of weapons, as noted below. Whenever he attacks with a weapon from this group, he gains a +1 bonus on attack and damage rolls.<br/><br/>

					Every four levels thereafter (9th, 13th, and 17th), a fighter becomes further trained in another group of weapons. He gains a +1 bonus on attack and damage rolls when using a weapon from this group. In addition, the bonuses granted by previous weapon groups increase by +1 each. For example, when a fighter reaches 9th level, he receives a +1 bonus on attack and damage rolls with one weapon group and a +2 bonus on attack and damage rolls with the weapon group selected at 5th level. Bonuses granted from overlapping groups do not stack. Take the highest bonus granted for a weapon if it resides in two or more groups.<br/><br/>

					A fighter also adds this bonus to any combat maneuver checks made with weapons from this group. This bonus also applies to the fighter's Combat Maneuver Defense when defending against disarm and sunder attempts made against weapons from this group.<br/><br/>

					Weapon groups are defined as follows (GMs may add other weapons to these groups, or add entirely new groups):<br/><br/>

					Axes: battleaxe, dwarven waraxe, greataxe, handaxe, heavy pick, light pick, orc double axe, and throwing axe.<br/><br/>

					Blades, Heavy: bastard sword, elven curve blade, falchion, greatsword, longsword, scimitar, scythe, and two-bladed sword.<br/><br/>

					Blades, Light: dagger, kama, kukri, rapier, sickle, starknife, and short sword.<br/><br/>

					Bows: composite longbow, composite shortbow, longbow, and shortbow.<br/><br/>

					Close: gauntlet, heavy shield, light shield, punching dagger, sap, spiked armor, spiked gauntlet, spiked shield, and unarmed strike.<br/><br/>

					Crossbows: hand crossbow, heavy crossbow, light crossbow, heavy repeating crossbow, and light repeating crossbow.<br/><br/>

					Double: dire flail, dwarven urgrosh, gnome hooked hammer, orc double axe, quarterstaff, and two-bladed sword.<br/><br/>

					Flails: dire flail, flail, heavy flail, morningstar, nunchaku, spiked chain, and whip.<br/><br/>

					Hammers: club, greatclub, heavy mace, light hammer, light mace, and warhammer.<br/><br/>

					Monk: kama, nunchaku, quarterstaff, sai, shuriken, siangham, and unarmed strike.<br/><br/>

					Natural: unarmed strike and all natural weapons, such as bite, claw, gore, tail, and wing.<br/><br/>

					Pole Arms: glaive, guisarme, halberd, and ranseur.<br/><br/>

					Spears: javelin, lance, longspear, shortspear, spear, and trident.<br/><br/>

					Thrown: blowgun, bolas, club, dagger, dart, halfling sling staff, javelin, light hammer, net, shortspear, shuriken, sling, spear, starknife, throwing axe, and trident.<br/><br/>

					<h4>Armor Mastery (Ex)</h4>
					At 19th level, a fighter gains DR 5/— whenever he is wearing armor or using a shield.<br/><br/>

					<h4>Weapon Mastery (Ex)</h4>
					At 20th level, a fighter chooses one weapon, such as the longsword, greataxe, or longbow. Any attacks made with that weapon automatically confirm all critical threats and have their damage multiplier increased by 1 (×2 becomes ×3, for example). In addition, he cannot be disarmed while wielding a weapon of this type.
				</div>
			);
			case "Druid":
			return (
				<div style={classModalBodyStyle}>
          <div >
            <ClassImageComp curClass={props.selectedClass} />
          </div>

					<p>

						Within the purity of the elements and the order of the wilds lingers a power beyond the marvels of civilization. Furtive yet undeniable, these primal magics are guarded over by servants of philosophical balance known as druids. Allies to beasts and manipulators of nature, these often misunderstood protectors of the wild strive to shield their lands from all who would threaten them and prove the might of the wilds to those who lock themselves behind city walls. Rewarded for their devotion with incredible powers, druids gain unparalleled shape-shifting abilities, the companionship of mighty beasts, and the power to call upon nature's wrath. The mightiest temper powers akin to storms, earthquakes, and volcanoes with primeval wisdom long abandoned and forgotten by civilization.<br/><br/>
					</p>
					<h4>Role</h4>
					<p>
						While some druids might keep to the fringe of battle, allowing companions and summoned creatures to fight while they confound foes with the powers of nature, others transform into deadly beasts and savagely wade into combat. Druids worship personifications of elemental forces, natural powers, or nature itself. Typically this means devotion to a nature deity, though druids are just as likely to revere vague spirits, animalistic demigods, or even specific awe-inspiring natural wonders.<br/><br/>
					</p>
					<h4>Class Skills</h4>
					The druid's class skills are Climb (Str), Craft (Int), Fly (Dex), Handle Animal (Cha), Heal (Wis), Knowledge (geography) (Int), Knowledge (nature) (Int), Perception (Wis), Profession (Wis), Ride (Dex), Spellcraft (Int), Survival (Wis), and Swim (Str).<br/><br/>
					<h4>Skill Ranks per Level</h4>
					4 + Int modifier<br/><br/>
					<h4>Hit Die</h4>
					d6<br/><br/>
					<h4>Alignment restrictions</h4>
					Any neutral<br/><br/>

					<h4>Weapon and Armor Proficiency</h4>
					Druids are proficient with the following weapons: club, dagger, dart, quarterstaff, scimitar, scythe, sickle, shortspear, sling, and spear. They are also proficient with all natural attacks (claw, bite, and so forth) of any form they assume with wild shape (see below).<br/><br/>

					Druids are proficient with light and medium armor but are prohibited from wearing metal armor; thus, they may wear only padded, leather, or hide armor. A druid may also wear wooden armor that has been altered by the ironwood spell so that it functions as though it were steel. Druids are proficient with shields (except tower shields) but must use only those crafted from wood.<br/><br/>

					A druid who wears prohibited armor or uses a prohibited shield is unable to cast druid spells or use any of her supernatural or spell-like class abilities while doing so and for 24 hours thereafter.<br/><br/>

					<h4>Spells</h4>
					A druid casts divine spells which are drawn from the druid spell list presented in Spell Lists. Her alignment may restrict her from casting certain spells opposed to her moral or ethical beliefs; see Chaotic, Evil, Good, and Lawful Spells. A druid must choose and prepare her spells in advance.<br/><br/>

					To prepare or cast a spell, the druid must have a Wisdom score equal to at least 10 + the spell level. The Difficulty Class for a saving throw against a druid's spell is 10 + the spell level + the druid's Wisdom modifier.<br/><br/>

					Like other spellcasters, a druid can cast only a certain number of spells of each spell level per day. Her base daily spell allotment is given on Table: Druid. In addition, she receives bonus spells per day if she has a high Wisdom score (see Table: Ability Modifiers and Bonus Spells).<br/><br/>

					A druid must spend 1 hour each day in a trance-like meditation on the mysteries of nature to regain her daily allotment of spells. A druid may prepare and cast any spell on the druid spell list, provided that she can cast spells of that level, but she must choose which spells to prepare during her daily meditation.<br/><br/>

					<h4>Spontaneous Casting</h4>
					A druid can channel stored spell energy into summoning spells that she hasn't prepared ahead of time. She can “lose” a prepared spell in order to cast any summon nature's ally spell of the same level or lower.<br/><br/>



					<h4>Chaotic, Evil, Good, and Lawful Spells</h4>
					A druid can't cast spells of an alignment opposed to her own or her deity's (if she has one). Spells associated with particular alignments are indicated by the chaos, evil, good, and law descriptors in their spell descriptions.<br/><br/>

					<h4>Orisons</h4>
					Druids can prepare a number of orisons, or 0-level spells, each day, as noted on Table: Druid under “Spells per Day.” These spells are cast like any other spell, but they are not expended when cast and may be used again.<br/><br/>

					<h4>Bonus Languages</h4>
					A druid's bonus language options include Sylvan, the language of woodland creatures. This choice is in addition to the bonus languages available to the character because of her race.<br/><br/>

					A druid also knows Druidic, a secret language known only to druids, which she learns upon becoming a 1st-level druid. Druidic is a free language for a druid; that is, she knows it in addition to her regular allotment of languages and it doesn't take up a language slot. Druids are forbidden to teach this language to nondruids.<br/><br/>

					Druidic has its own alphabet.<br/><br/>

					<h4>Nature Bond (Ex)</h4>
					At 1st level, a druid forms a bond with nature. This bond can take one of two forms. The first is a close tie to the natural world, granting the druid one of the following cleric domains: Air, Animal, Earth, Fire, Plant, Water, or Weather. When determining the powers and bonus spells granted by this domain, the druid's effective cleric level is equal to her druid level. A druid that selects this option also receives additional domain spell slots, just like a cleric. She must prepare the spell from her domain in this slot and this spell cannot be used to cast a spell spontaneously.<br/><br/>

					The second option is to form a close bond with an animal companion. A druid may begin play with any of the animals listed in Animal Choices. This animal is a loyal companion that accompanies the druid on her adventures.<br/><br/>

					Unlike normal animals of its kind, an animal companion's Hit Dice, abilities, skills, and feats advance as the druid advances in level. If a character receives an animal companion from more than one source, her effective druid levels stack for the purposes of determining the statistics and abilities of the companion. Most animal companions increase in size when their druid reaches 4th or 7th level, depending on the companion. If a druid releases her companion from service, she may gain a new one by performing a ceremony requiring 24 uninterrupted hours of prayer in the environment where the new companion typically lives. This ceremony can also replace an animal companion that has perished.<br/><br/>

					<h4>Nature Sense (Ex)</h4>
					A druid gains a +2 bonus on Knowledge (nature) and Survival checks.<br/><br/>
					<h4>Wild Empathy (Ex)</h4>
					A druid can improve the attitude of an animal. This ability functions just like a Diplomacy check made to improve the attitude of a person (see Using Skills). The druid rolls 1d20 and adds her druid level and her Charisma modifier to determine the wild empathy check result. The typical domestic animal has a starting attitude of indifferent, while wild animals are usually unfriendly.<br/><br/>

					To use wild empathy, the druid and the animal must be within 30 feet of one another under normal conditions. Generally, influencing an animal in this way takes 1 minute but, as with influencing people, it might take more or less time.<br/><br/>

					A druid can also use this ability to influence a magical beast with an Intelligence score of 1 or 2, but she takes a –4 penalty on the check.<br/><br/>
					<h4>Woodland Stride (Ex)</h4>
					Starting at 2nd level, a druid may move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at her normal speed and without taking damage or suffering any other impairment. Thorns, briars, and overgrown areas that have been magically manipulated to impede motion, however, still affect her.<br/><br/>

					<h4>Trackless Step (Ex)</h4>
					Starting at 3rd level, a druid leaves no trail in natural surroundings and cannot be tracked. She may choose to leave a trail if so desired.<br/><br/>

						<h4>Resist Nature's Lure (Ex)</h4>
					Starting at 4th level, a druid gains a +4 bonus on saving throws against the spell-like and supernatural abilities of fey. This bonus also applies to spells and effects that utilize or target plants, such as blight, entangle, spike growth, and warp wood.<br/><br/>

						<h4>Wild Shape (Su)</h4>
					At 4th level, a druid gains the ability to turn herself into any Small or Medium animal and back again once per day. Her options for new forms include all creatures with the animal type. This ability functions like the beast shape I spell, except as noted here. The effect lasts for 1 hour per druid level, or until she changes back. Changing form (to animal or back) is a standard action and doesn't provoke an attack of opportunity. The form chosen must be that of an animal with which the druid is familiar.<br/><br/>

					A druid loses her ability to speak while in animal form because she is limited to the sounds that a normal, untrained animal can make, but she can communicate normally with other animals of the same general grouping as her new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.)<br/><br/>

					A druid can use this ability an additional time per day at 6th level and every two levels thereafter, for a total of eight times at 18th level. At 20th level, a druid can use wild shape at will. As a druid gains levels, this ability allows the druid to take on the form of larger and smaller animals, elementals, and plants. Each form expends one daily use of this ability, regardless of the form taken.<br/><br/>

					At 6th level, a druid can also use wild shape to change into a Large or Tiny animal or a Small elemental. When taking the form of an animal, a druid's wild shape now functions as beast shape II. When taking the form of an elemental, the druid's wild shape functions as elemental body I.<br/><br/>

					At 8th level, a druid can also use wild shape to change into a Huge or Diminutive animal, a Medium elemental, or a Small or Medium plant creature. When taking the form of animals, a druid's wild shape now functions as beast shape III. When taking the form of an elemental, the druid's wild shape now functions as elemental body II. When taking the form of a plant creature, the druid's wild shape functions as plant shape I.<br/><br/>

					At 10th level, a druid can also use wild shape to change into a Large elemental or a Large plant creature. When taking the form of an elemental, the druid's wild shape now functions as elemental body III. When taking the form of a plant, the druid's wild shape now functions as plant shape II.<br/><br/>

					At 12th level, a druid can also use wild shape to change into a Huge elemental or a Huge plant creature. When taking the form of an elemental, the druid's wild shape now functions as elemental body IV. When taking the form of a plant, the druid's wild shape now functions as plant shape III.<br/><br/>

					<br/><br/>
					<h4>Venom Immunity (Ex)</h4>
					At 9th level, a druid gains immunity to all poisons.<br/><br/>

					<h4>A Thousand Faces (Su)</h4>
					t 13th level, a druid gains the ability to change her appearance at will, as if using the alter self spell, but only while in her normal form.<br/><br/>

					<h4>Timeless Body (Ex)</h4>
					After attaining 15th level, a druid no longer takes ability score penalties for aging and cannot be magically aged. Any penalties she may have already incurred, however, remain in place. Bonuses still accrue, and the druid still dies of old age when her time is up.<br/><br/>

					<h4>Ex-Druids</h4>
					A druid who ceases to revere nature, changes to a prohibited alignment, or teaches the Druidic
					language to a nondruid loses all spells and druid abilities (including her animal
					companion, but not including weapon, armor, and shield proficiencies). She cannot
					thereafter gain levels as a druid until she atones <br/><br/>
					<h4>Animal Companions</h4>
					An animal companion's abilities are determined by the druid's level and its animal racial traits.
					They remain creatures of the animal type for purposes of determining which spells can affect them.

					<br/><br/>


				</div>
			);
			case "Cleric":
			return (
				<div style={classModalBodyStyle}>
          <div >
            <ClassImageComp curClass={props.selectedClass} />
          </div>

					<p>

						In faith and the miracles of the divine, many find a greater purpose. Called to serve powers beyond most mortal understanding, all priests preach wonders and provide for the spiritual needs of their people. Clerics are more than mere priests, though; these emissaries of the divine work the will of their deities through strength of arms and the magic of their gods. Devoted to the tenets of the religions and philosophies that inspire them, these ecclesiastics quest to spread the knowledge and influence of their faith. Yet while they might share similar abilities, clerics prove as different from one another as the divinities they serve, with some offering healing and redemption, others judging law and truth, and still others spreading conflict and corruption. The ways of the cleric are varied, yet all who tread these paths walk with the mightiest of allies and bear the arms of the gods themselves.<br/><br/>
					</p>
					<h4>Role</h4>
					<p>
						More than capable of upholding the honor of their deities in battle, clerics often prove stalwart and capable combatants. Their true strength lies in their capability to draw upon the power of their deities, whether to increase their own and their allies' prowess in battle, to vex their foes with divine magic, or to lend healing to companions in need.<br/><br/>

						As their powers are influenced by their faith, all clerics must focus their worship upon a divine source. While the vast majority of clerics revere a specific deity, a small number dedicate themselves to a divine concept worthy of devotion—such as battle, death, justice, or knowledge—free of a deific abstraction. (Work with your GM if you prefer this path to selecting a specific deity.)<br/><br/>
					</p>
					<h4>Class Skills</h4>
					TThe cleric's class skills are Appraise (Int), Craft (Int), Diplomacy (Cha), Heal (Wis), Knowledge (arcana) (Int), Knowledge (history) (Int), Knowledge (nobility) (Int), Knowledge (planes) (Int), Knowledge (religion) (Int), Linguistics (Int), Profession (Wis), Sense Motive (Wis), and Spellcraft (Int).<br/><br/>
					<h4>Skill Ranks per Level</h4>
					2 + Int modifier<br/><br/>
					<h4>Hit Die</h4>
					d8<br/><br/>
					<h4>Alignment restrictions</h4>
					A cleric's alignment must be within one step of her deity's, along either the law/chaos axis or the good/evil axis <br/><br/>

					<h4>Weapon and Armor Proficiency</h4>
					Clerics are proficient with all simple weapons, light armor, medium armor, and shields (except tower shields). Clerics are also proficient with the favored weapon of their deity.<br/><br/>
					<h4>Spells</h4>
					A cleric casts divine spells which are drawn from the cleric spell list presented in Spell Lists. Her alignment, however, may restrict her from casting certain spells opposed to her moral or ethical beliefs; see chaotic, evil, good, and lawful spells. A cleric must choose and prepare her spells in advance.<br/><br/>

					To prepare or cast a spell, a cleric must have a Wisdom score equal to at least 10 + the spell level. The Difficulty Class for a saving throw against a cleric's spell is 10 + the spell level + the cleric's Wisdom modifier.<br/><br/>

					Like other spellcasters, a cleric can cast only a certain number of spells of each spell level per day. Her base daily spell allotment is given on Table: Cleric. In addition, she receives bonus spells per day if she has a high Wisdom score (see Table: Ability Modifiers and Bonus Spells).<br/><br/>

					Clerics meditate or pray for their spells. Each cleric must choose a time when she must spend 1 hour each day in quiet contemplation or supplication to regain her daily allotment of spells. A cleric may prepare and cast any spell on the cleric spell list, provided that she can cast spells of that level, but she must choose which spells to prepare during her daily meditation.<br/><br/>
					<h4>Aura (Ex)</h4>
					A cleric of a chaotic, evil, good, or lawful deity has a particularly powerful aura corresponding to the deity's alignment (<br/><br/>


					<h4>Channel Energy (Su)</h4>
					Regardless of alignment, any cleric can release a wave of energy by channeling the power of her faith through her holy (or unholy) symbol. This energy can be used to cause or heal damage, depending on the type of energy channeled and the creatures targeted. <br/><br/>

					A good cleric (or one who worships a good deity) channels positive energy and can choose to deal damage to undead creatures or to heal living creatures. An evil cleric (or one who worships an evil deity) channels negative energy and can choose to deal damage to living creatures or to heal undead creatures. A neutral cleric who worships a neutral deity (or one who is not devoted to a particular deity) must choose whether she channels positive or negative energy. Once this choice is made, it cannot be reversed. This decision also determines whether the cleric casts spontaneous cure or inflict spells (see spontaneous casting). <br/><br/>

					Channeling energy causes a burst that affects all creatures of one type (either undead or living) in a 30-foot radius centered on the cleric. The amount of damage dealt or healed is equal to 1d6 points of damage plus 1d6 points of damage for every two cleric levels beyond 1st (2d6 at 3rd, 3d6 at 5th, and so on). Creatures that take damage from channeled energy receive a Will save to halve the damage. The DC of this save is equal to 10 + 1/2 the cleric's level + the cleric's Charisma modifier. Creatures healed by channeled energy cannot exceed their maximum hit point total—all excess healing is lost. A cleric may channel energy a number of times per day equal to 3 + her Charisma modifier. This is a standard action that does not provoke an attack of opportunity. A cleric can choose whether or not to include herself in this effect. A cleric must be able to present her holy symbol to use this ability.<br/><br/>
					<h4>Domains</h4>
					A cleric's deity influences her alignment, what magic she can perform, her values, and how others see her. A cleric chooses two domains from among those belonging to her deity. A cleric can select an alignment domain (Chaos, Evil, Good, or Law) only if her alignment matches that domain. If a cleric is not devoted to a particular deity, she still selects two domains to represent her spiritual inclinations and abilities (subject to GM approval). The restriction on alignment domains still applies. <br/><br/>

					Each domain grants a number of domain powers, dependent upon the level of the cleric, as well as a number of bonus spells. A cleric gains one domain spell slot for each level of cleric spell she can cast, from 1st on up. Each day, a cleric can prepare one of the spells from her two domains in that slot. If a domain spell is not on the cleric spell list, a cleric can prepare it only in her domain spell slot. Domain spells cannot be used to cast spells spontaneously. <br/><br/>

					In addition, a cleric gains the listed powers from both of her domains, if she is of a high enough level. Unless otherwise noted, using a domain power is a standard action. Cleric domains are listed at the end of this class entry.<br/><br/>

					<h4>Orisons</h4>
					Clerics can prepare a number of orisons, or 0-level spells, each day, as noted on Table: Cleric under “Spells per Day.” These spells are cast like any other spell, but they are not expended when cast and may be used again.<br/><br/>
					<h4>Spontaneous Casting</h4>
					A good cleric (or a neutral cleric of a good deity) can channel stored spell energy into healing spells that
					she did not prepare ahead of time. The cleric can “lose” any prepared spell that is not an orison or domain
					spell in order to cast any cure spell of the same spell level or lower (a cure spell is any spell with “cure” in its name). <br/><br/>

					An evil cleric (or a neutral cleric who worships an evil deity) can't convert prepared spells to cure spells but
					can convert them to inflict spells (an inflict spell is one with “inflict” in its name). <br/><br/>

					A cleric who is neither good nor evil and whose deity is neither good nor evil can convert spells to either cure
					spells or inflict spells (player's choice). Once the player makes this choice, it cannot be reversed. This
					choice also determines whether the cleric channels positive or negative energy <br/><br/>
					<h4>Chaotic, Evil, Good, and Lawful Spells</h4>
					A cleric can't cast spells of an alignment opposed to her own or her deity's (if she has one). Spells associated with particular alignments are indicated by the chaotic, evil, good, and lawful descriptors in their spell descriptions. <br/><br/>

					<h4>Bonus Languages</h4>
					A cleric's bonus language options include Celestial, Abyssal, and Infernal (the languages of good, chaotic evil, and lawful evil outsiders, respectively). These choices are in addition to the bonus languages available to the character because of her race.<br/><br/>

					<h4>Ex-Clerics</h4>
					A cleric who grossly violates the code of conduct required by her god loses all spells and class features, except for armor and shield proficiencies and proficiency with simple weapons. She cannot thereafter gain levels as a cleric of that god until she atones for her deeds  <br/><br/>


				</div>
			);
			case "Bard":
			return (
				<div style={classModalBodyStyle}>
          <div>
            <ClassImageComp curClass={props.selectedClass} />
          </div>

					<p>
						Untold wonders and secrets exist for those skillful enough to discover them. Through cleverness, talent, and magic, these cunning few unravel the wiles of the world, becoming adept in the arts of persuasion, manipulation, and inspiration. Typically masters of one or many forms of artistry, bards possess an uncanny ability to know more than they should and use what they learn to keep themselves and their allies ever one step ahead of danger. Bards are quick-witted and captivating, and their skills might lead them down many paths, be they gamblers or jacks-of-all-trades, scholars or performers, leaders or scoundrels, or even all of the above. For bards, every day brings its own opportunities, adventures, and challenges, and only by bucking the odds, knowing the most, and being the best might they claim the treasures of each.<br/><br/>
					</p>
					<h4>Role</h4>
					<p>
						Bards capably confuse and confound their foes while inspiring their allies to ever-greater daring. While accomplished with both weapons and magic, the true strength of bards lies outside melee, where they can support their companions and undermine their foes without fear of interruptions to their performances.<br/><br/>
					</p>
					<h4>Class Skills</h4>
					The bard's class skills are Acrobatics (Dex), Appraise (Int), Bluff (Cha), Climb (Str), Craft (Int), Diplomacy (Cha), Disguise (Cha), Escape Artist (Dex), Intimidate (Cha), Knowledge (all) (Int), Linguistics (Int), Perception (Wis), Perform (Cha), Profession (Wis), Sense Motive (Wis), Sleight of Hand (Dex), Spellcraft (Int), Stealth (Dex), and Use Magic Device (Cha).<br/><br/>
					<h4>Skill Ranks per Level</h4>
					6 + Int modifier<br/><br/>
					<h4>Hit Die</h4>
					d8<br/><br/>
					<h4>Alignment restrictions</h4>
					Any<br/><br/>

					<h4>Weapon and Armor Proficiency</h4>
					A bard is proficient with all simple weapons, plus the longsword, rapier, sap, short sword, shortbow, and whip. Bards are also proficient with light armor and shields (except tower shields). A bard can cast bard spells while wearing light armor and use a shield without incurring the normal arcane spell failure chance. Like any other arcane spellcaster, a bard wearing medium or heavy armor incurs a chance of arcane spell failure if the spell in question has a somatic component. A multiclass bard still incurs the normal arcane spell failure chance for arcane spells received from other classes.<br/><br/>
					<h4>Spells</h4>
					A bard casts arcane spells drawn from the bard spell list presented in Spell Lists. He can cast any spell he knows without preparing it ahead of time. Every bard spell has a verbal component (song, recitation, or music). To learn or cast a spell, a bard must have a Charisma score equal to at least 10 + the spell level. The Difficulty Class for a saving throw against a bard's spell is 10 + the spell level + the bard's Charisma modifier.<br/><br/>

					Like other spellcasters, a bard can cast only a certain number of spells of each spell level per day. His base daily spell allotment is given on Table: Bard. In addition, he receives bonus spells per day if he has a high Charisma score (see Table: Ability Modifiers and Bonus Spells).<br/><br/>

					The bard's selection of spells is extremely limited. A bard begins play knowing four 0-level spells and two 1st-level spells of the bard's choice. At each new bard level, he gains one or more new spells, as indicated on Table: Bard Spells Known. (Unlike spells per day, the number of spells a bard knows is not affected by his Charisma score. The numbers on Table: Bard Spells Known are fixed.)<br/><br/>

					Upon reaching 5th level, and at every third bard level after that (8th, 11th, and so on), a bard can choose to learn a new spell in place of one he already knows. In effect, the bard "loses" the old spell in exchange for the new one. The new spell's level must be the same as that of the spell being exchanged, and it must be at least one level lower than the highest-level bard spell the bard can cast. A bard may swap only a single spell at any given level and must choose whether or not to swap the spell at the same time that he gains new spells known for the level.<br/><br/>

					A bard need not prepare his spells in advance. He can cast any spell he knows at any time, assuming he has not yet used up his allotment of spells per day for the spell's level.<br/><br/>
					<h4>Bardic Knowledge (Ex)</h4>
					A bard adds half his class level (minimum 1) on all Knowledge skill checks and may make all Knowledge skill checks untrained.<br/><br/>


					<h4>Bardic Performance</h4>
					A bard is trained to use the Perform skill to create magical effects on those around him, including himself if desired. He can use this ability for a number of rounds per day equal to 4 + his Charisma modifier. At each level after 1st a bard can use bardic performance for 2 additional rounds per day. Each round, the bard can produce any one of the types of bardic performance that he has mastered, as indicated by his level.<br/><br/>

					Starting a bardic performance is a standard action, but it can be maintained each round as a free action. Changing a bardic performance from one effect to another requires the bard to stop the previous performance and start a new one as a standard action. A bardic performance cannot be disrupted, but it ends immediately if the bard is killed, paralyzed, stunned, knocked unconscious, or otherwise prevented from taking a free action to maintain it each round. A bard cannot have more than one bardic performance in effect at one time.<br/><br/>

					At 7th level, a bard can start a bardic performance as a move action instead of a standard action. At 13th level, a bard can start a bardic performance as a swift action.<br/><br/>

					Each bardic performance has audible components, visual components, or both.<br/><br/>

					If a bardic performance has audible components, the targets must be able to hear the bard for the performance to have any effect, and many such performances are language dependent (as noted in the description). A deaf bard has a 20% chance to fail when attempting to use a bardic performance with an audible component. If he fails this check, the attempt still counts against his daily limit. Deaf creatures are immune to bardic performances with audible components.<br/><br/>

					If a bardic performance has a visual component, the targets must have line of sight to the bard for the performance to have any effect. A blind bard has a 50% chance to fail when attempting to use a bardic performance with a visual component. If he fails this check, the attempt still counts against his daily limit. Blind creatures are immune to bardic performances with visual components.<br/><br/>


					<h4>Cantrips</h4>
					Bards learn a number of cantrips, or 0-level spells, as noted on Table: Bard Spells Known under "Spells Known." These spells are cast like any other spell, but they do not consume any slots and may be used again.<br/><br/>
					<h4>Versatile Performance (Ex)</h4>
					At 2nd level, a bard can choose one type of Perform skill. He can use his bonus in that skill in place of his bonus in associated skills. When substituting in this way, the bard uses his total Perform skill bonus, including class skill bonus, in place of its associated skill's bonus, whether or not he has ranks in that skill or if it is a class skill. At 6th level, and every 4 levels thereafter, the bard can select an additional type of Perform to substitute.<br/><br/>

					The types of Perform and their associated skills are: Act (Bluff, Disguise), Comedy (Bluff, Intimidate), Dance (Acrobatics, Fly), Keyboard Instruments (Diplomacy, Intimidate), Oratory (Diplomacy, Sense Motive), Percussion (Handle Animal, Intimidate), Sing (Bluff, Sense Motive), String (Bluff, Diplomacy), and Wind (Diplomacy, Handle Animal).

					<br/><br/>
					<h4>Well-Versed (Ex)</h4>
					At 2nd level, the bard becomes resistant to the bardic performance of others, and to sonic effects in general. The bard gains a +4 bonus on saving throws made against bardic performance, sonic, and language-dependent effects.<br/><br/>
					<h4>Lore Master (Ex)</h4>
					At 5th level, the bard becomes a master of lore and can take 10 on any Knowledge skill check that he has ranks in. A bard can choose not to take 10 and can instead roll normally. In addition, once per day, the bard can take 20 on any Knowledge skill check as a standard action. He can use this ability one additional time per day for every six levels he possesses beyond 5th, to a maximum of three times per day at 17th level.<br/><br/>
					<h4>Jack-of-All-Trades (Ex)</h4>
					At 10th level, the bard can use any skill, even if the skill normally requires him to be trained. At 16th level, the bard considers all skills to be class skills. At 19th level, the bard can take 10 on any skill check, even if it is not normally allowed.
				</div>
			);
			case "Barbarian":
			return (
				<div style={classModalBodyStyle}>
          <div >
            <ClassImageComp curClass={props.selectedClass} />
          </div>

					<p>

						For some, there is only rage. In the ways of their people, in the fury of their passion, in the howl of battle, conflict is all these brutal souls know. Savages, hired muscle, masters of vicious martial techniques, they are not soldiers or professional warriors—they are the battle possessed, creatures of slaughter and spirits of war. Known as barbarians, these warmongers know little of training, preparation, or the rules of warfare; for them, only the moment exists, with the foes that stand before them and the knowledge that the next moment might hold their death. They possess a sixth sense in regard to danger and the endurance to weather all that might entail. These brutal warriors might rise from all walks of life, both civilized and savage, though whole societies embracing such philosophies roam the wild places of the world. Within barbarians storms the primal spirit of battle, and woe to those who face their rage.<br/><br/>
					</p>
					<h4>Role</h4>
					<p>
						Barbarians excel in combat, possessing the martial prowess and fortitude to take on foes seemingly far superior to themselves. With rage granting them boldness and daring beyond that of most other warriors, barbarians charge furiously into battle and ruin all who would stand in their way.<br/><br/>
					</p>
					<h4>Class Skills</h4>
					The barbarian's class skills are Acrobatics (Dex), Climb (Str), Craft (Int), Handle Animal (Cha), Intimidate (Cha), Knowledge (nature) (Int), Perception (Wis), Ride (Dex), Survival (Wis), and Swim (Str).<br/><br/>
					<h4>Skill Ranks per Level</h4>
					4 + Int modifier<br/><br/>
					<h4>Hit Die</h4>
					d12<br/><br/>
					<h4>Alignment restrictions</h4>
					Any nonlawful.<br/><br/>

					<h4>Weapon and Armor Proficiency</h4>
					A barbarian is proficient with all simple and martial weapons, light armor, medium armor, and shields (except tower shields).<br/><br/>
					<h4>Fast Movement (Ex)</h4>
					A barbarian's land speed is faster than the norm for her race by +10 feet. This benefit applies only when she is wearing no armor, light armor, or medium armor, and not carrying a heavy load. Apply this bonus before modifying the barbarian's speed because of any load carried or armor worn. This bonus stacks with any other bonuses to the barbarian's land speed.<br/><br/>

					<h4>Rage (Ex)</h4>
					A barbarian can call upon inner reserves of strength and ferocity, granting her additional combat prowess. Starting at 1st level, a barbarian can rage for a number of rounds per day equal to 4 + her Constitution modifier. At each level after 1st, she can rage for 2 additional rounds. Temporary increases to Constitution, such as those gained from rage and spells like bear's endurance, do not increase the total number of rounds that a barbarian can rage per day. A barbarian can enter rage as a free action. The total number of rounds of rage per day is renewed after resting for 8 hours, although these hours do not need to be consecutive.<br/><br/>

					While in rage, a barbarian gains a +4 morale bonus to her Strength and Constitution, as well as a +2 morale bonus on Will saves. In addition, she takes a –2 penalty to Armor Class. The increase to Constitution grants the barbarian 2 hit points per Hit Dice, but these disappear when the rage ends and are not lost first like temporary hit points. While in rage, a barbarian cannot use any Charisma-, Dexterity-, or Intelligence-based skills (except Acrobatics, Fly, Intimidate, and Ride) or any ability that requires patience or concentration.<br/><br/>

					A barbarian can end her rage as a free action and is fatigued after rage for a number of rounds equal to 2 times the number of rounds spent in the rage. A barbarian cannot enter a new rage while fatigued or exhausted but can otherwise enter rage multiple times during a single encounter or combat. If a barbarian falls unconscious, her rage immediately ends, placing her in peril of death.<br/><br/>

					<h4>Rage Powers (Ex)</h4>
					As a barbarian gains levels, she learns to use her rage in new ways. Starting at 2nd level, a barbarian gains a rage power. She gains another rage power for every two levels of barbarian attained after 2nd level. A barbarian gains the benefits of rage powers only while raging, and some of these powers require the barbarian to take an action first. Unless otherwise noted, a barbarian cannot select an individual power more than once.<br/><br/>

					<h4>Uncanny Dodge (Ex)</h4>
					At 2nd level, a barbarian gains the ability to react to danger before her senses would normally allow her to do so. She cannot be caught flat-footed, nor does she lose her Dexterity bonus to AC if the attacker is invisible. She still loses her Dexterity bonus to AC if immobilized. A barbarian with this ability can still lose her Dexterity bonus to AC if an opponent successfully uses the feint action against her..<br/><br/>
					If a barbarian already has uncanny dodge from a different class, she automatically gains improved uncanny dodge instead. <br/><br/>
					<h4>Trap Sense (Ex)</h4>
					At 3rd level, a barbarian gains a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps. These bonuses increase by +1 every three barbarian levels thereafter (6th, 9th, 12th, 15th, and 18th level). Trap sense bonuses gained from multiple classes stack.<br/><br/>
					<h4>Improved Uncanny Dodge (Ex)</h4>
					At 5th level and higher, a barbarian can no longer be flanked. This defense denies a rogue the ability to sneak attack the barbarian by flanking her, unless the attacker has at least four more rogue levels than the target has barbarian levels.

					If a character already has uncanny dodge (see above) from another class, the levels from the classes that grant uncanny dodge stack to determine the minimum rogue level required to flank the character.<br/><br/>
					<h4>Damage Reduction (Ex)</h4>
					At 7th level, a barbarian gains damage reduction. Subtract 1 from the damage the barbarian takes each time she is dealt damage from a weapon or a natural attack. At 10th level, and every three barbarian levels thereafter (13th, 16th, and 19th level), this damage reduction rises by 1 point. Damage reduction can reduce damage to 0 but not below 0.<br/><br/>

					<h4>Greater Rage (Ex)</h4>
					At 11th level, when a barbarian enters rage, the morale bonus to her Strength and Constitution
					increases to +6 and the morale bonus on her Will saves increases to +3.<br/><br/>
					<h4>Indomitable Will (Ex)</h4>
					While in rage, a barbarian of 14th level or higher gains a +4 bonus on Will saves to resist enchantment spells. This bonus stacks with all other modifiers, including the morale bonus on Will saves she also receives during her rage.<br/><br/>
					<h4>Tireless Rage (Ex)</h4>
					Starting at 17th level, a barbarian no longer becomes fatigued at the end of her rage.<br/><br/>
					<h4>Mighty Rage (Ex)</h4>
					At 20th level, when a barbarian enters rage, the morale bonus to her Strength and Constitution increases to +8 and the morale bonus on her Will saves increases to +4.
	<h4>Ex-Barbarians</h4>
					A barbarian who becomes lawful loses the ability to rage and cannot gain more levels as a barbarian. She retains all other benefits of the class.
					<br/><br/>

				</div>
			);
		default:
			return <div >This should show yet</div>;
	}
};

const ClassImageComp = props => {
	const currentClass = props.curClass.toString();
	switch (currentClass) {
		case "Monk":
			return (
				<img
					src={require("../../../../public/assets/Monk - Sajan.png")}
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
					src={require("../../../../public/assets/Wizard - Ezren.png")}
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
					src={require("../../../../public/assets/Fighter - Valeros.png")}
					//{/*572x1000*/}
					width="228.8"
					height="400"
					alt="" className={cssStyles.classModalImageDiv}
				/>
			);
		case "Druid":
			return (
				<img
					src={require("../../../../public/assets/Druid - Maznar.png")}
					//{/*790x1000*/}
					width="276.5"
					height="350"
					alt="" className={cssStyles.classModalImageDiv}
				/>
			);
		case "Ranger":
			return (
				<img
					src={require("../../../../public/assets/Ranger - Harsk.png")}
					//{/*831x1000*/}
					width="290.85"
					height="350"
					alt="" className={cssStyles.classModalImageDiv}
				/>
			);
		case "Cleric":
			return (
				<img
					src={require("../../../../public/assets/Cleric - Kyra.png")}
					//{/*641x1000*/}
					width="256.4"
					height="400"
					alt="" className={cssStyles.classModalImageDiv}
				/>
			);
		case "Rogue":
			return (
				<img
					src={require("../../../../public/assets/Rogue - Wu-Shen.png")}
					//{/*639x1000*/}
					width="255.6"
					height="400"
					alt="" className={cssStyles.classModalImageDiv}
				/>
			);
		case "Sorcerer":
			return (
				<img
					src={require("../../../../public/assets/Sorcerer - Qualzar.png")}
					//{/*592x1000*/}
					width="236.8"
					height="400"
					alt="" className={cssStyles.classModalImageDiv}
				/>
			);
		case "Paladin":
			return (
				<img
					src={require("../../../../public/assets/Paladin - Seelah.png")}
					//{/*702x1000*/}
					width="280.8"
					height="400"
					alt="" className={cssStyles.classModalImageDiv}
				/>
			);
		case "Barbarian":
			return (
				<img
					src={require("../../../../public/assets/Barbarian - Ostog.png")}
					//{/*658x1000*/}
					width="263.2"
					height="400"
					alt="" className={cssStyles.classModalImageDiv}
				/>
			);
			case "Bard":
			return (
				<img
					src={require("../../../../public/assets/Bard - Lem.png")}
					//{/*624x1000*/}
					width="249.4"
					height="400"
					alt="" className={cssStyles.classModalImageDiv}
				/>
			);
	}
};