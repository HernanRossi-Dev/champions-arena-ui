import React from "react";
import * as cssStyles from "../../../styles/Styles.css";
import { Col, ControlLabel, FormGroup, FormControl, Button, OverlayTrigger, ButtonToolbar, Tooltip} from "react-bootstrap";
import { Card, CardImg, CardText, CardBody} from 'reactstrap';

export default class CreateCharacterGenStatsComponent extends React.Component {
	constructor (props){
		super(props);
		this.generateStats = this.generateStats.bind(this);
		this.state = {
			characterStats: {
				STR: 15,
				DEX: 14,
				CON: 13,
				INT: 12,
				WIS: 10,
				CHA: 8,
			},
			racialBonus:{},
		};
	}

	componentWillReceiveProps(props){
		this.setState({characterStats: props.characterStats, racialBonus: props.racialBonus});
	}

	componentDidMount(){
		if(this.props.characterStats){
			this.setState({characterStats: this.props.characterStats, racialBonus: this.props.racialBonus});
		}
	}

	generateStats() {
		const newStats = [];
		// Use 4d6 lowest drop method
		let i;
		let j;
		let currentStat = 0;
		let statRolls = [];
		for (i = 0; i < 6; i += 1) {
			statRolls = [];
			currentStat = 0;
			for (j = 0; j < 4; j += 1) {
				let roll = Math.random() * 6;
				while(roll < 1){

					roll = Math.random() * 6;
				}
				statRolls.push(Math.floor(roll) + 1);
			}
			statRolls.sort();
			currentStat = statRolls[1] + statRolls[2] + statRolls[3];
			newStats.push(currentStat);
		}
		let newHeroStats = {
			STR: newStats[0],
			DEX: newStats[1],
			CON: newStats[2],
			INT: newStats[3],
			WIS: newStats[4],
			CHA: newStats[5],
		};
		this.props.setStateStats(newHeroStats);
		this.setState({characterStats: newHeroStats});
	}


	render(){
		const ShowRacialBonus = () => {
			if(this.props.racialBonus.statsBonus){
				let rBon = this.props.racialBonus.statsBonus;
				let key;
				let infoString = "Racial bonus applied to stats: ";

				for (key in rBon) {
					if(rBon[key] > 0){
						infoString += key + ": +" + rBon[key] + ", ";
					} else {
						infoString += key + ": " + rBon[key];
					}
				}return(
					<div style={{wordSpacing:'3px'}}>{infoString}</div>
				)
			} else {
				return(
					<div></div>
				)
			}
		}
		return (
			<div>
			<GenerateStatsFormGroup genStats={this.generateStats} racialBonus={this.state.racialBonus}/>
			<StatsHeaderFormGroup />
				<FormGroup>
					<Col sm={2}>
						<FormControl.Static className={cssStyles.genStatsNumberStyle}>
								{this.state.characterStats.STR}
						</FormControl.Static>
					</Col>
					<Col sm={2}>
						<FormControl.Static className={cssStyles.genStatsNumberStyle}>
							{this.state.characterStats.DEX}
						</FormControl.Static>
					</Col>
					<Col sm={2}>
						<FormControl.Static className={cssStyles.genStatsNumberStyle}>
							{this.state.characterStats.CON}
						</FormControl.Static>
					</Col>
					<Col sm={2}>
						<FormControl.Static className={cssStyles.genStatsNumberStyle}>
							{this.state.characterStats.INT}
						</FormControl.Static>
					</Col>
					<Col sm={2}>
						<FormControl.Static className={cssStyles.genStatsNumberStyle}>
							{this.state.characterStats.WIS}
						</FormControl.Static>
					</Col>
					<Col sm={2}>
						<FormControl.Static className={cssStyles.genStatsNumberStyle}>
							{this.state.characterStats.CHA}
						</FormControl.Static>
					</Col>
				</FormGroup>
				<FormGroup>
				<Col sm={4}/>
				<Col sm={6}>
					<ShowRacialBonus />
				</Col>
				</FormGroup>
			</div>
		);
	};
}



class GenerateStatsFormGroup extends React.Component {
	constructor (props){
		super()
	}

	render() {

		return(
		<FormGroup>
			<Col sm={1}/>
			<Col sm={4} style={{marginLeft:'20px'}} className={cssStyles.createColLabelStyle}>
				<ButtonToolbar>
					<OverlayTrigger  placement="right" overlay={<Tooltip id="tooltip">Roll 4d6 keep best 3 dice (re-roll all 1's)</Tooltip>}>
						<Button className={cssStyles.rollForStatsButton} bsStyle="primary" onClick={this.props.genStats}>
							Roll For Stats
						</Button>
					</OverlayTrigger>
				</ButtonToolbar>
			</Col>

		</FormGroup>
		)
	}
}


 const StatsHeaderFormGroup=()=> (
		<FormGroup>
			<Col
				componentClass={ControlLabel}
				sm={2}
				className={cssStyles.createColStyle}
			>
				STR
			</Col>
			<Col
				componentClass={ControlLabel}
				sm={2}
				className={cssStyles.createColStyle}
			>
				DEX
			</Col>
			<Col
				componentClass={ControlLabel}
				sm={2}
				className={cssStyles.createColStyle}
			>
				CON
			</Col>
			<Col
				componentClass={ControlLabel}
				sm={2}
				className={cssStyles.createColStyle}
			>
				INT
			</Col>
			<Col
				componentClass={ControlLabel}
				sm={2}
				className={cssStyles.createColStyle}
			>
				WIS
			</Col>
			<Col
				componentClass={ControlLabel}
				sm={2}
				className={cssStyles.createColStyle}
			>
				CHA
			</Col>
		</FormGroup>
	)
