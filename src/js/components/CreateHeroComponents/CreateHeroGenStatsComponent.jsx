import React from "react";
import * as cssStyles from "../../../styles/Styles.css";
import { Col, ControlLabel, FormGroup, FormControl, Button, OverlayTrigger, ButtonToolbar, Tooltip} from "react-bootstrap";
import { Card, CardImg, CardText, CardBody} from 'reactstrap';

export default class CreateHeroGenStatsComponent extends React.Component {
	constructor (props){
		super(props);
		this.generateStats = this.generateStats.bind(this);
		this.state = {
			heroStats: {
				STR: 15,
				DEX: 14,
				CON: 13,
				INT: 12,
				WIS: 10,
				CHA: 8,
			}
		};
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
				statRolls.push(Math.floor(Math.random() * 6) + 1);
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
		}
		this.props.saveStats(newHeroStats);
		this.setState({
			heroStats: newHeroStats
		});


	}


	render(){
		return (
			<div>
			<GenerateStatsFormGroup genStats={this.generateStats}/>
			<StatsHeaderFormGroup />
				<FormGroup>
					<Col sm={2}>
						<FormControl.Static className={cssStyles.genStatsNumberStyle}>
							{" "}

								{this.state.heroStats.STR}


						</FormControl.Static>
					</Col>
					<Col sm={2}>
						<FormControl.Static className={cssStyles.genStatsNumberStyle}>
							{" "}
							{this.state.heroStats.DEX}{" "}
						</FormControl.Static>
					</Col>
					<Col sm={2}>
						<FormControl.Static className={cssStyles.genStatsNumberStyle}>
							{" "}
							{this.state.heroStats.CON}{" "}
						</FormControl.Static>
					</Col>
					<Col sm={2}>
						<FormControl.Static className={cssStyles.genStatsNumberStyle}>
							{" "}
							{this.state.heroStats.INT}{" "}
						</FormControl.Static>
					</Col>
					<Col sm={2}>
						<FormControl.Static className={cssStyles.genStatsNumberStyle}>
							{" "}
							{this.state.heroStats.WIS}{" "}
						</FormControl.Static>
					</Col>
					<Col sm={2}>
						<FormControl.Static className={cssStyles.genStatsNumberStyle}>
							{" "}
							{this.state.heroStats.CHA}
						</FormControl.Static>
					</Col>
				</FormGroup>
			</div>

		);
	};

}

const GenerateStatsFormGroup=(props)=> (
    <FormGroup >
      <Col sm={1} />
      <Col sm={2} className={cssStyles.createColLabelStyle}>
        <ButtonToolbar >
          <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">Roll 4d6 keep best 3 dice</Tooltip>}>
            <Button bsStyle="primary" onClick={props.genStats} >
              Roll For Stats
            </Button>
          </OverlayTrigger>
        </ButtonToolbar>
      </Col>
    </FormGroup>
  )


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
