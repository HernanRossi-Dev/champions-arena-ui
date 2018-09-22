import React from "react";
import * as cssStyles from "../../../styles/Styles.css";
import { Col, ControlLabel, FormGroup, FormControl} from "react-bootstrap";
import {TextField} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";


const styles = {
	root: {
		marginTop:'8px',
		width: 'calc(100% - 150px)'
	},
	input: {
		color: "white",
		fontSize: 18
	},

};

class CreateCharacterNameComponent extends React.Component {

	render () {
		const { classes } = this.props;
		const changeName = () => {
			 this.props.updateName(this.characterName.value.trim());
		};
		return (
			<FormGroup >
				<Col sm={1} />
				<Col
					componentClass={ControlLabel}
					sm={2}
					className={cssStyles.createColLabelStyle}
				>
					<div style={{fontSize:'19px',fontFamily: "'Josefin Sans', sans-serif"}}>Name:</div>

				</Col>
				<Col sm={8}>

					<TextField
						id="nameInput"
						placeholder="Enter Character Name"

						margin="normal"
						inputRef={ref => {
							this.characterName = ref;}}

						onChange={changeName}
						className={classes.root}
						InputProps={{
							className: classes.input

						}}
					/>
				</Col>
			</FormGroup>
		);
	}
}

CreateCharacterNameComponent.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(CreateCharacterNameComponent);