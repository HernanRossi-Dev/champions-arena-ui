import React from 'react';
import {
	Col,
	FormGroup,
} from 'react-bootstrap';
import {TextField} from 'material-ui';
import { withStyles } from 'material-ui/styles/index'
import * as cssStyles from '../../../styles/Styles.css'

const styles = {
	root: {
		fontColor:'white'
	},
	input: {
		color: "white",
		fontSize: 20,
		fontColor:'white',
		fontFamily: "'Josefin Sans', sans-serif"
	},
	helperText: {
		color: "white",
		fontSize: 14,
		fontColor:'white',
		fontFamily: "'Cinzel Decorative', sans-serif",
		// textShadow: '1px 1px 0px #DFFE02',
	},

};

class CharacterEditBasicInfoComponent extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			editCharacter: {},
			show: false,
		}
		this.changeName = this.changeName.bind(this);
		this.changeAlignment = this.changeAlignment.bind(this);
		this.changeLevel = this.changeLevel.bind(this);
		this.changeAge = this.changeAge.bind(this);
		this.changeHeight = this.changeHeight.bind(this);
		this.changeWeight = this.changeWeight.bind(this);
		this.changeHair = this.changeHair.bind(this);
		this.changeEyes = this.changeEyes.bind(this);
	}

	componentDidMount(){
		console.log(this.props.editCharacter);
		this.setState({editCharater: this.props.editCharacter})
	}

	componentWillReceiveProps(nextProps, nextContext){
		if(this.props !== nextProps) {
			this.setState({editCharacter: nextProps.editCharacter})
		}
	}

	changeName(){
		this.props.changeName(this.characterName.value);
	}
	changeAlignment(){
		this.props.changeAlignment(this.alignment.value);
	}
	changeLevel() {

	}
	changeAge() {

	}
	changeHeight() {

	}
	changeWeight() {

	}
	changeHair() {

	}
	changeEyes() {

	}


	render() {
		const { classes } = this.props;
		return (
			<div>
			<FormGroup >
				<Col sm={1}/>
				<Col sm={2}>
					<TextField
						onChange={this.changeName}
						id="characterName"
						helperText="Character Name"
						value={(this.state.editCharacter.name) ? this.state.editCharacter.name: ''}
						inputRef={ref => {
							this.characterName = ref;}}
						className={classes.root}
						InputProps={{
							className: classes.input

						}}
						FormHelperTextProps={{
							className: classes.helperText

						}}
					/>
				</Col>
				<Col sm={2}>
					<TextField
						id="alignment"
						helperText="Alignment"
						onChange={this.changeAlignment}
						inputRef={ref => {
							this.alignment = ref;
						}}
						value={this.state.editCharacter.alignment ? this.state.editCharacter.alignment : ''}
						className={classes.root}
						InputProps={{
							className: classes.input

						}}
						FormHelperTextProps={{
							className: classes.helperText

						}}
					/>
				</Col>
				<Col sm={2}>
					<TextField
						id="player"
						helperText="Player"
						inputRef={ref => {
							this.player = ref;
						}}
						value={this.state.editCharacter.user? this.state.editCharacter.user : ''}
						className={classes.root}
						InputProps={{
							className: classes.input

						}}
						FormHelperTextProps={{
							className: classes.helperText

						}}
					/>
				</Col>
				<Col sm={1}>
					<TextField
						id="level"
						helperText="Level"
						onChange={this.changeLevel}
						inputRef={ref => {
							this.level = ref;
						}}
						value={this.state.editCharacter.level ? this.state.editCharacter.level  : '' }
						className={classes.root}
						InputProps={{
							className: classes.input

						}}
						FormHelperTextProps={{
							className: classes.helperText

						}}
						style={{width:'75%'}}
					/>
				</Col>
				<Col sm={1}>
					<TextField
						id="deity"
						helperText="Deity"
						inputRef={ref => {
							this.deity = ref;
						}}
						value={this.state.editCharacter.deity ? this.state.editCharacter.deity : ''}
						className={classes.root}
						InputProps={{
							className: classes.input

						}}
						FormHelperTextProps={{
							className: classes.helperText

						}}
						style={{ width:'150px'}}

					/>
				</Col>	<Col sm={2}>
				<TextField
					id="homeland"
					helperText="Homeland"
					inputRef={ref => {
						this.homeland = ref;
					}}
					value={this.state.editCharacter.homeland ? this.state.editCharacter.homeland : ''}
					className={classes.root}
					InputProps={{
						className: classes.input

					}}
					FormHelperTextProps={{
						className: classes.helperText

					}}
					style={{ marginLeft: '50px', width:'90%'}}

				/>
			</Col>
				<Col sm={1}/>
			</FormGroup>

				<FormGroup style={{marginTop:'35px'}}>
				<Col sm={2}/>
				<Col sm={1}>
					<TextField
						// onChange={this.changeName}
						id="race"
						helperText="Race"
						value={(this.state.editCharacter.race) ? this.state.editCharacter.race: ''}
						inputRef={ref => {
							this.race = ref;}}
						className={classes.root}
						InputProps={{
							className: classes.input

						}}
						FormHelperTextProps={{
							className: classes.helperText

						}}	style={{width:'95%'}}
					/>
				</Col>
				<Col sm={1}>
					<TextField
						id="size"
						helperText="size"
						onChange={this.size}
						inputRef={ref => {
							this.size = ref;
						}}
						value={this.state.editCharacter.size ? this.state.editCharacter.size : ''}
						className={classes.root}
						InputProps={{
							className: classes.input

						}}
						FormHelperTextProps={{
							className: classes.helperText

						}}	style={{width:'95%'}}
					/>
				</Col>
				<Col sm={1}>
					<TextField
						id="gender"
						helperText="Gender"
						inputRef={ref => {
							this.gender = ref;
						}}
						value={this.state.editCharacter.gender? this.state.editCharacter.gender : ''}
						className={classes.root}
						InputProps={{
							className: classes.input

						}}
						FormHelperTextProps={{
							className: classes.helperText

						}}
						style={{width:'75%'}}
					/>
				</Col>
				<Col sm={1}>
					<TextField
						id="age"
						helperText="Age"
						onChange={this.changeAge}
						inputRef={ref => {
							this.level = ref;
						}}
						value={this.state.editCharacter.age ? this.state.editCharacter.age  : '' }
						className={classes.root}
						InputProps={{
							className: classes.input

						}}
						FormHelperTextProps={{
							className: classes.helperText

						}}
						style={{width:'75%'}}
					/>
				</Col>
				<Col sm={1}>
					<TextField
						id="height"
						helperText="Height"
						onChange={this.changeHeight}
						inputRef={ref => {
							this.deity = ref;
						}}
						value={this.state.editCharacter.height ? this.state.editCharacter.height : ''}
						className={classes.root}
						InputProps={{
							className: classes.input

						}}
						FormHelperTextProps={{
							className: classes.helperText

						}}	style={{width:'75%'}}


					/>
				</Col>	<Col sm={1}>
				<TextField
					id="weight"
					helperText="Weight"
					inputRef={ref => {
						this.weight = ref;
					}}
					onChange={this.changeWeight}
					value={this.state.editCharacter.weight ? this.state.editCharacter.weight : ''}
					className={classes.root}
					InputProps={{
						className: classes.input

					}}
					FormHelperTextProps={{
						className: classes.helperText

					}}
					style={{width:'75%'}}

				/>
			</Col>
					<Col sm={1}>
					<TextField
						id="hair"
						helperText="Hair"
						onChange={this.changeHair}
						inputRef={ref => {
							this.deity = ref;
						}}
						value={this.state.editCharacter.hair ? this.state.editCharacter.hair : ''}
						className={classes.root}
						InputProps={{
							className: classes.input

						}}
						FormHelperTextProps={{
							className: classes.helperText

						}}

						style={{width:'75%'}}
					/>
				</Col>	<Col sm={1}>
				<TextField
					id="eyes"
					helperText="Eyes"
					inputRef={ref => {
						this.eyes = ref;
					}}
					onChange={this.changeEyes}
					value={this.state.editCharacter.eyes ? this.state.editCharacter.eyes : ''}
					className={classes.root}
					InputProps={{
						className: classes.input

					}}
					FormHelperTextProps={{
						className: classes.helperText

					}}

					style={{width:'75%'}}
				/>
			</Col>
				<Col sm={1}/>
			</FormGroup>
			</div>
		)
	}
}

export default  withStyles(styles)(CharacterEditBasicInfoComponent);