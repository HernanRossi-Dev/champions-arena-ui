import React from "react";
import { Col, FormGroup } from "react-bootstrap";
import { TextField } from "material-ui";
import { withStyles } from "material-ui/styles/index";

const styles = {
	root: {
		fontColor: "white"
	},
	input: {
		color: "white",
		fontSize: 20,
		fontColor: "white",
		fontFamily: "'Josefin Sans', sans-serif"
	},
	helperText: {
		color: "white",
		fontSize: 14,
		fontColor: "white",
		fontFamily: "'Cinzel Decorative', sans-serif"
		// textShadow: '1px 1px 0px #DFFE02',
	}
};

class CharacterEditSkillsComponent extends React.Component {
	constructor(){
		super()


	}


	render() {

		return(
			<div style={{textAlign:'center'}}>Skills segment under construction</div>
		)
	}
}

export default withStyles(styles)(CharacterEditSkillsComponent);