import React from "react";
import * as cssStyles from "../../../styles/Styles.css";
import {ButtonToolbar, Col, ControlLabel, FormGroup, ToggleButton, ToggleButtonGroup} from "react-bootstrap";

export default class CreateHeroAlignmentComponent extends React.Component {
	constructor (props, context) {
		super(props, context);
		this.state = {
			alignment: "",
			alignmentInfo: "",
			showAlignment: false,
			prevButtonPressed: "",
		}
	}

	render () {
		const AlignmentTextToggle = () => {
			const alignmentDivStyle = {
				fontSize: "17px !important",
				fontFamily: "'Josefin Sans', sans-serif",
				textAlign: "left"
			};
			if (this.state.showAlignment) {
				return <div style={alignmentDivStyle}> {this.state.alignmentInfo}</div>;
			} else {
				return <div />;
			}
		};
		const changeAlignment = e => {
			const targetText = e.target.textContent.toString();
			if (!this.state.showAlignment) {
				this.setState({ showAlignment: true });
			}
			if (targetText === this.state.prevButtonPressed) {
				if (this.state.showAlignment) {
					this.setState({ showAlignment: !this.state.showAlignment });
				} else {
				}
			} else {
				this.setState({ showAlignment: true });
			}
			const currentAlignment = e.target.textContent.toString()
			this.setState({ alignment:  currentAlignment});
			this.changeAlignmentInfo(currentAlignment);
			this.setState({ prevButtonPressed: targetText });
			this.props.updateAlignment(currentAlignment);
		};
		return (
			<div>
			<FormGroup controlId="alignmentValue">
				<Col sm={1} />
				<Col
					componentClass={ControlLabel}
					sm={2}
					className={cssStyles.createColLabelStyle}
				>
					Alignment:
				</Col>
				<Col sm={8}>
					<ButtonToolbar>
						<ToggleButtonGroup
							type="radio"
							name="alignmentValue"
							ref="alignmentValue"
							onClick={changeAlignment}
							className={cssStyles.alignmentButtonGroupParent}
						>
							<ToggleButton
								value={"Lawful Good"}
								className={cssStyles.alignmentButtonGroup}
							>
								Lawful Good
							</ToggleButton>
							<ToggleButton
								value={"Neutral Good"}
								className={cssStyles.alignmentButtonGroup}
							>
								Neutral Good
							</ToggleButton>
							<ToggleButton
								value={"Chaotic Good"}
								className={cssStyles.alignmentButtonGroup}
							>
								Chaotic Good
							</ToggleButton>
							<ToggleButton
								value={"Lawful Neutral"}
								className={cssStyles.alignmentButtonGroup}
							>
								Lawful Neutral
							</ToggleButton>
							<ToggleButton
								value={"Neutral"}
								className={cssStyles.alignmentButtonGroup}
							>
								Neutral
							</ToggleButton>

							<ToggleButton
								value={"Chaotic Neutral"}
								className={cssStyles.alignmentButtonGroup}
							>
								Chaotic Neutral
							</ToggleButton>

							<ToggleButton
								value={"Lawful Evil"}
								className={cssStyles.alignmentButtonGroup}
							>
								Lawful Evil
							</ToggleButton>

							<ToggleButton
								value={"Neutral Evil"}
								className={cssStyles.alignmentButtonGroup}
							>
								Neutral Evil
							</ToggleButton>

							<ToggleButton
								value={"Chaotic Evil"}
								className={cssStyles.alignmentButtonGroup}
							>
								Chaotic Evil
							</ToggleButton>
						</ToggleButtonGroup>
					</ButtonToolbar>
				</Col>

				<Col sm={1} />
			</FormGroup>
				<FormGroup>
					<Col sm={1} />
					<Col sm={8}>
						<AlignmentTextToggle />
					</Col>
					<Col sm={2} />
				</FormGroup>
			</div>
		)
	}

	changeAlignmentInfo(e) {
		switch (e) {
			case "Lawful Good":
				this.setState({
					alignmentInfo: (
						<p>
							<strong>Lawful Good:</strong>
							<br /> A lawful good character acts as a good person is expected
							or required to act. She combines a commitment to oppose evil with
							the discipline to fight relentlessly. She tells the truth, keeps
							her word, helps those in need, and speaks out against injustice.<br />
							<br />
							A lawful good character hates to see the guilty go unpunished.
							Lawful good combines honor with compassion.
						</p>
					)
				});
				break;
			case "Neutral Good":
				this.setState({
					alignmentInfo: (
						<p>
							<strong>Neutral Good:</strong>
							<br />A neutral good character does the best that a good person
							can do. He is devoted to helping others. He works with kings and
							magistrates but does not feel beholden to them.
							<br />
							<br />Neutral good means doing what is good and right without bias
							for or against order.
						</p>
					)
				});
				break;
			case "Chaotic Good":
				this.setState({
					alignmentInfo: (
						<p>
							<strong>Chaotic Good:</strong>
							<br />A chaotic good character acts as his conscience directs him
							with little regard for what others expect of him. He makes his own
							way, but he's kind and benevolent. He believes in goodness and
							right but has little use for laws and regulations.
							<br />
							<br />
							Chaotic good combines a good heart with a free spirit.
						</p>
					)
				});
				break;
			case "Lawful Neutral":
				this.setState({
					alignmentInfo: (
						<p>
							<strong>Chaotic Good:</strong>
							<br />A lawful neutral character acts as law, tradition, or a
							personal code directs her. Order and organization are paramount.
							She may believe in personal order and live by a code or standard,
							or she may believe in order for all and favor a strong, organized
							government.
							<br />
							<br />
							Lawful neutral means you are reliable and honorable without being
							a zealot.
						</p>
					)
				});
				break;
			case "Neutral":
				this.setState({
					alignmentInfo: (
						<p>
							<strong>Neutral:</strong>
							<br />A neutral character does what seems to be a good idea. She
							doesn't feel strongly one way or the other when it comes to good
							vs. evil or law vs. chaos (and thus neutral is sometimes called
							"true neutral"). Most neutral characters exhibit a lack of
							conviction or bias rather than a commitment to neutrality.
							<br />
							<br />
							Neutral means you act naturally in any situation, without
							prejudice or compulsion.
						</p>
					)
				});
				break;
			case "Chaotic Neutral":
				this.setState({
					alignmentInfo: (
						<p>
							<strong>Chaotic Neutral:</strong>
							<br />A chaotic neutral character follows his whims. He is an
							individualist first and last. He values his own liberty but
							doesn't strive to protect others' freedom. He avoids authority,
							resents restrictions, and challenges traditions. <br />
							<br />
							Chaotic neutral represents freedom from both society's
							restrictions and a do-gooder's zeal.{" "}
						</p>
					)
				});
				break;
			case "Lawful Evil":
				this.setState({
					alignmentInfo: (
						<p>
							<strong>Lawful Evil:</strong>
							<br />A lawful evil villain methodically takes what he wants
							within the limits of his code of conduct without regard for whom
							it hurts. He cares about tradition, loyalty, and order, but not
							about freedom, dignity, or life. He plays by the rules but without
							mercy or compassion. <br />
							<br />
							Lawful evil represents methodical, intentional, and organized
							evil.
						</p>
					)
				});
				break;
			case "Neutral Evil":
				this.setState({
					alignmentInfo: (
						<p>
							<strong>Neutral Evil:</strong>
							<br />A neutral evil villain does whatever she can get away with.
							She is out for herself, pure and simple. She sheds no tears for
							those she kills, whether for profit, sport, or convenience. Some
							neutral evil villains hold up evil as an ideal, committing evil
							for its own sake. <br />
							<br />
							Neutral evil represents pure evil without honor and without
							variation.
						</p>
					)
				});
				break;
			case "Chaotic Evil":
				this.setState({
					alignmentInfo: (
						<p>
							<strong>Chaotic Evil:</strong>
							<br />A chaotic evil character does what his greed, hatred, and
							lust for destruction drive him to do. He is vicious, arbitrarily
							violent, and unpredictable. If he is simply out for whatever he
							can get, he is ruthless and brutal.
							<br />
							<br />
							Chaotic evil represents the destruction not only of beauty and
							life, but also of the order on which beauty and life depend.
						</p>
					)
				});
				break;
		}
	}
}