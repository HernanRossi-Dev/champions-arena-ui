import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles/index';

const styles = {
  root: {
    fontColor: '#E9CB9A'
  },
  input: {
    color: '#ffffff',
    fontSize: 22,
    fontColor: '#ffffff',
    fontFamily: "'ZCOOL XiaoWei', serif"
  },
  inputName: {
    color: '#ffffff',
    fontSize: 35,
    fontColor: '#ffffff',
    fontFamily: "'ZCOOL XiaoWei', serif"
  },
  helperText: {
    color: '#ffffff',
    fontSize: 12,
    fontColor: '#ffffff',
    fontFamily: "'Cinzel Decorative', sans-serif",
    textShadow: '1px 1px 1px #E9CB9A',
  },
  selectEmpty: {
    color: "white",
    width: '125px',
    paddingTop: '5px',
    fontSize: '19px',
  },
  selectIcon: {
    color: '#df691a',
  },
};

class CharacterEditBasicInfoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  saveCaretPosition = (event) => {
    const caret = event.target.selectionStart
    const element = event.target
    window.requestAnimationFrame(() => {
      element.selectionStart = caret
      element.selectionEnd = caret
    })
  }

  changeName = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.name = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeAlignment = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.alignment = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeLevel = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.level = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeAge = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.age = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeHeight = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.height = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeWeight = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.weight = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeHair = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.hair = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeEyes = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.eyes = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changePlayer = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.player = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeDeity = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.deity = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeHomeland = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.homeland = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeSize = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.size = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeGender = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.gender = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeAncestry = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.ancestry = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeClass = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.class = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeBackground = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.background = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeLanguages = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.ancestryProps.languages = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeXP = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.XP = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  render() {
    const { classes } = this.props;
    return (
      <div >
        <Grid container spacing={16} justify="center">
          <Grid item xs={2}>
            <TextField
              onChange={this.changeName}
              id="characterName"
              helperText="Character Name"
              htmlFor="custom-css-standard-input"
              value={this.props.editCharacter.name}
              InputProps={{
                classes: {
                  root: classes.input,
                  input: classes.inputName,
                }
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
              style={{ paddingLeft: '25px', paddingRight: '15px' }}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="ancestry"
              helperText="Ancestry"
              onChange={this.changeAncestry}
              value={
                this.props.editCharacter.ancestry
              }
              InputProps={{
                classes: {
                  root: classes.input,
                  input: classes.input,
                }
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
            />
          </Grid>
         
          <Grid item xs={2}>
            <TextField
              id="backgound"
              helperText="Background"
              onChange={this.changeBackground}
              value={
                this.props.editCharacter.background
              }
              InputProps={{
                classes: {
                  root: classes.input,
                  input: classes.input,
                }
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="class"
              helperText="Class"
              onChange={this.changeClass}
              value={
                this.props.editCharacter.class
              }
              InputProps={{
                classes: {
                  root: classes.input,
                  input: classes.input,
                }
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
            />
          </Grid>
          <Grid item xs={1}>
            <TextField
              id="level"
              helperText="Level"
              onChange={this.changeLevel}
              value={
                this.props.editCharacter.level
              }
              InputProps={{
                classes: {
                  root: classes.input,
                  input: classes.input,
                }
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
              style={{ paddingRight: '15px' }}
            />
          </Grid>
          <Grid item xs={1}>
            <TextField
              id="XP"
              helperText="XP"
              onChange={this.changeXP}
              value={
                this.props.editCharacter.XP
              }
              InputProps={{
                classes: {
                  root: classes.input,
                  input: classes.input,
                }
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
              style={{ paddingRight: '15px' }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={16} style={{ marginTop: '40px' }} justify="center">
          <Grid item xs={2}>
            <TextField
              id="deity"
              helperText="Deity"
              onChange={this.changeDeity}
              value={
                this.props.editCharacter.deity
              }
              InputProps={{
                classes: {
                  root: classes.input,
                  input: classes.input,
                }
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
              style={{ paddingLeft: '25px', paddingRight: '15px' }}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="alignment"
              helperText="Alignment"
              onChange={this.changeAlignment}
              value={
                this.props.editCharacter.alignment
              }
              InputProps={{
                classes: {
                  root: classes.input,
                  input: classes.input,
                }
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="homeland"
              helperText="Homeland"
              onChange={this.changeHomeland}
              value={
                this.props.editCharacter.homeland
              }
              InputProps={{
                classes: {
                  root: classes.input,
                  input: classes.input,
                }
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="player"
              helperText="Player Name"
              onChange={this.changePlayer}
              value={
                this.props.editCharacter.player
              }
              InputProps={{
                classes: {
                  root: classes.input,
                  input: classes.input,
                }
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={16} style={{ marginTop: '40px' }} justify="center">
          <Grid item xs={1}>
            <TextField
              id="age"
              helperText="Age"
              onChange={this.changeAge}
              value={
                this.props.editCharacter.age
              }
              InputProps={{
                classes: {
                  root: classes.input,
                  input: classes.input,
                }
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
              style={{ paddingLeft: '25px', paddingRight: '15px' }}
            />
          </Grid>
          <Grid item xs={1}>
            <TextField
              id="gender"
              helperText="Gender"
              onChange={this.changeGender}
              value={
                this.props.editCharacter.gender
              }
              InputProps={{
                classes: {
                  root: classes.input,
                  input: classes.input,
                }
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
              style={{ paddingRight: '15px' }}
            />
          </Grid>
          <Grid item xs={1}>
            <TextField
              id="height"
              helperText="Height"
              onChange={this.changeHeight}
              value={
                this.props.editCharacter.height
              }
              InputProps={{
                classes: {
                  root: classes.input,
                  input: classes.input,
                }
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
              style={{ paddingRight: '15px' }}
            />
          </Grid>
          <Grid item xs={1}>
            <TextField
              id="weight"
              helperText="Weight"
              onChange={this.changeWeight}
              value={
                this.props.editCharacter.weight
              }
              InputProps={{
                classes: {
                  root: classes.input,
                  input: classes.input,
                }
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
              style={{ paddingRight: '15px' }}
            />
          </Grid>
          <Grid item xs={1}>
            <TextField
              id="hair"
              helperText="Hair"
              onChange={this.changeHair}
              value={
                this.props.editCharacter.hair
              }
              InputProps={{
                classes: {
                  root: classes.input,
                  input: classes.input,
                }
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
              style={{ paddingRight: '15px' }}
            />
          </Grid>
          <Grid item xs={1}>
            <TextField
              id="eyes"
              helperText="Eye Color"
              onChange={this.changeEyes}
              value={
                this.props.editCharacter.eyes
              }
              InputProps={{
                classes: {
                  root: classes.input,
                  input: classes.input,
                }
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={16} style={{ marginTop: '40px' }} justify="center">
          <Grid item xs={4}>
          <TextField
              id="languages"
              helperText="Languages"
              onChange={this.changeLanguages}
              value={
                this.props.editCharacter.ancestryProps.languages
              }
              InputProps={{
                classes: {
                  root: classes.input,
                  input: classes.input,
                }
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={1}>
            <TextField
              id="size"
              helperText="size"
              onChange={this.changeSize}
              value={
                this.props.editCharacter.size
              }
              className={classes.root}
              InputProps={{
                classes: {
                  root: classes.input,
                  input: classes.input,
                }
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
              style={{ paddingRight: '15px' }}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(CharacterEditBasicInfoComponent);
