import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles/index';
import * as cssStyles from "../../../styles/Styles.css";
import Character from './characterModel.js';
import styled from 'styled-components';

const EditTitleStyle = styled.div`
  font-size: 25px;
  color: #ffffff;
  text-align: center;
  font-family: 'ZCOOL XiaoWei', serif;
  margin-bottom: 35px;
  text-shadow: 1px 1px 1px #df691a;
`;

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
    // color: '#E9CB9A',
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
      editCharacter: new Character(),
      show: false
    };
  }

  componentDidMount(){
    this.setState({ editCharater: this.props.editCharacter });
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (this.props !== nextProps) {
      this.setState({ editCharacter: nextProps.editCharacter });
    }
  }

  changeName = () => {
    this.props.changeName(this.characterName.value);
  }

  changeAlignment = () => {
    this.props.changeAlignment(this.alignment.value);
  }

  changeLevel = () => {
    this.props.changeLevel(this.level.value);
  }

  changeAge = () => {
    this.props.changeAge(this.age.value);
  }

  changeHeight = () => {
    this.props.changeHeight(this.height.value);
  }

  changeWeight = () => {
    this.props.changeWeight(this.weight.value);
  }

  changeHair = () => {
    this.props.changeHair(this.hair.value);
  }

  changeEyes = () => {
    this.props.changeEyes(this.eyes.value);
  }

  changePlayer = () => {
    this.props.changePlayer(this.player.value);
  }

  changeDeity = () => {
    this.props.changeDeity(this.deity.value);
  }

  changeHomeland = () => {
    this.props.changeHomeland(this.homeland.value);
  }

  changeSize = () => {
    this.props.changeSize(this.size.value);
  }

  changeGender = () => {
    this.props.changeGender(this.gender.value);
  }

  changeAncestry = () => {
    this.props.changeAncestry(this.ancestry.value);
  }

  changeClass = () => {
    this.props.changeClass(this.class.value);
  }
  changeBackground = () => {
    this.props.changeBackground(this.class.background);
  }

  render() {
    const { classes } = this.props;
    return (
      <div >
        {/* <EditTitleStyle>Details</EditTitleStyle> */}
        <Grid container spacing={16} justify="center">
          <Grid item xs={2}>
            <TextField
                onChange={this.changeName}
                id="characterName"
                helperText="Character Name"
                htmlFor="custom-css-standard-input"
                value={
                  this.state.editCharacter.name
                    ? this.state.editCharacter.name
                    : ""
                }
                inputRef={ref => {
                  this.characterName = ref;
                }}
                InputProps={{
                  classes: {
                    root: classes.input,
                    input: classes.inputName,
                  }
                }}
                FormHelperTextProps={{
                  className: classes.helperText
                }}
                style={{ paddingLeft: '25px', paddingRight: '15px'  }}
              />
          </Grid>
          <Grid item xs={2}>
            <TextField
                id="ancestry"
                helperText="Ancestry"
                onChange={this.changeAncestry}
                inputRef={ref => {
                  this.ancestry = ref;
                }}
                value={
                  this.state.editCharacter.ancestry
                    ? this.state.editCharacter.ancestry
                    : ""
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
                id="size"
                helperText="size"
                onChange={this.changeSize}
                inputRef={ref => {
                  this.size = ref;
                }}
                value={
                  this.state.editCharacter.size
                    ? this.state.editCharacter.size
                    : ""
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
                style={{ paddingRight: '15px'  }}

              />
          </Grid>
          <Grid item xs={2}>
            <TextField
                id="backgound"
                helperText="Background"
                onChange={this.changeBackground}
                inputRef={ref => {
                  this.background = ref;
                }}
                value={
                  this.state.editCharacter.background
                    ? this.state.editCharacter.background
                    : ""
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
                inputRef={ref => {
                  this.class = ref;
                }}
                value={
                  this.state.editCharacter.class
                    ? this.state.editCharacter.class
                    : ""
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
                inputRef={ref => {
                  this.level = ref;
                }}
                value={
                  this.state.editCharacter.level
                    ? this.state.editCharacter.level
                    : ""
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
        <Grid container spacing={16} style={{marginTop:'40px'}} justify="center">
          <Grid item xs={2}>
            <TextField
                id="deity"
                helperText="Deity"
                onChange={this.changeDeity}
                inputRef={ref => {
                  this.deity = ref;
                }}
                value={
                  this.state.editCharacter.deity
                    ? this.state.editCharacter.deity
                    : ""
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
                style={{ paddingLeft: '25px', paddingRight: '15px'  }}
              />
          </Grid>
          <Grid item xs={2}>
            <TextField
                id="alignment"
                helperText="Alignment"
                onChange={this.changeAlignment}
                inputRef={ref => {
                  this.alignment = ref;
                }}
                value={
                  this.state.editCharacter.alignment
                    ? this.state.editCharacter.alignment
                    : ""
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
                inputRef={ref => {
                  this.homeland = ref;
                }}
                value={
                  this.state.editCharacter.homeland
                    ? this.state.editCharacter.homeland
                    : ""
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
                inputRef={ref => {
                  this.player = ref;
                }}
                value={
                  this.state.editCharacter.player
                    ? this.state.editCharacter.player
                    : ""
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

        <Grid container spacing={16} style={{marginTop:'40px'}} justify="center">
        <Grid item xs={1}>
            <TextField
                id="age"
                helperText="Age"
                onChange={this.changeAge}
                inputRef={ref => {
                  this.age = ref;
                }}
                value={
                  this.state.editCharacter.age ? this.state.editCharacter.age : ""
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
                inputRef={ref => {
                  this.gender = ref;
                }}
                value={
                  this.state.editCharacter.gender
                    ? this.state.editCharacter.gender
                    : ""
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
                inputRef={ref => {
                  this.height = ref;
                }}
                value={
                  this.state.editCharacter.height
                    ? this.state.editCharacter.height
                    : ""
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
                inputRef={ref => {
                  this.weight = ref;
                }}
                onChange={this.changeWeight}
                value={
                  this.state.editCharacter.weight
                    ? this.state.editCharacter.weight
                    : ""
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
                inputRef={ref => {
                  this.hair = ref;
                }}
                value={
                  this.state.editCharacter.hair
                    ? this.state.editCharacter.hair
                    : ""
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
                helperText="Eyes Color"
                inputRef={ref => {
                  this.eyes = ref;
                }}
                onChange={this.changeEyes}
                value={
                  this.state.editCharacter.eyes
                    ? this.state.editCharacter.eyes
                    : ""
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

      </div>
    );
  }
}

export default withStyles(styles)(CharacterEditBasicInfoComponent);
