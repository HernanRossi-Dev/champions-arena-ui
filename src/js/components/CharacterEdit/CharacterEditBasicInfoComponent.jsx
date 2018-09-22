import React from "react";
import { Col, FormGroup } from "react-bootstrap";
import { TextField } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles/index';
import * as cssStyles from "../../../styles/Styles.css";

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

class CharacterEditBasicInfoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editCharacter: {},
      show: false
    };
    this.changeName = this.changeName.bind(this);
    this.changeAlignment = this.changeAlignment.bind(this);
    this.changeLevel = this.changeLevel.bind(this);
    this.changeAge = this.changeAge.bind(this);
    this.changeHeight = this.changeHeight.bind(this);
    this.changeWeight = this.changeWeight.bind(this);
    this.changeHair = this.changeHair.bind(this);
    this.changeEyes = this.changeEyes.bind(this);
    this.changePlayer = this.changePlayer.bind(this);
    this.changeGender = this.changeGender.bind(this);
    this.changeSize = this.changeSize.bind(this);
    this.changeHomeland = this.changeHomeland.bind(this);
    this.changeDeity = this.changeDeity.bind(this);
  }

  componentDidMount() {
    this.setState({ editCharater: this.props.editCharacter });
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (this.props !== nextProps) {
      this.setState({ editCharacter: nextProps.editCharacter });
    }
  }

  changeName() {
    this.props.changeName(this.characterName.value);
  }

  changeAlignment() {
    this.props.changeAlignment(this.alignment.value);
  }

  changeLevel() {
    this.props.changeLevel(this.level.value);
  }

  changeAge() {
    this.props.changeAge(this.age.value);
  }

  changeHeight() {
    this.props.changeHeight(this.height.value);
  }

  changeWeight() {
    this.props.changeWeight(this.weight.value);
  }

  changeHair() {
    this.props.changeHair(this.hair.value);
  }

  changeEyes() {
    this.props.changeEyes(this.eyes.value);
  }

  changePlayer() {
    this.props.changePlayer(this.player.value);
  }

  changeDeity() {
    this.props.changeDeity(this.deity.value);
  }

  changeHomeland() {
    this.props.changeHomeland(this.homeland.value);
  }

  changeSize() {
    this.props.changeSize(this.size.value);
  }

  changeGender() {
    this.props.changeGender(this.gender.value);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <FormGroup>
          <Col sm={1} />
          <Col sm={2}>
            <TextField
              onChange={this.changeName}
              id="characterName"
              helperText="Character Name"
              value={
                this.state.editCharacter.name
                  ? this.state.editCharacter.name
                  : ""
              }
              inputRef={ref => {
                this.characterName = ref;
              }}
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
              value={
                this.state.editCharacter.alignment
                  ? this.state.editCharacter.alignment
                  : ""
              }
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
              onChange={this.changePlayer}
              inputRef={ref => {
                this.player = ref;
              }}
              value={
                this.state.editCharacter.player
                  ? this.state.editCharacter.player
                  : ""
              }
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
              value={
                this.state.editCharacter.level
                  ? this.state.editCharacter.level
                  : ""
              }
              className={classes.root}
              InputProps={{
                className: classes.input
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
              style={{ width: "75%" }}
            />
          </Col>
          <Col sm={1}>
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
              className={classes.root}
              InputProps={{
                className: classes.input
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
              style={{ width: "150px" }}
            />
          </Col>{" "}
          <Col sm={2}>
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
              className={classes.root}
              InputProps={{
                className: classes.input
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
              style={{ marginLeft: "50px", width: "90%" }}
            />
          </Col>
          <Col sm={1} />
        </FormGroup>

        <FormGroup style={{ marginTop: "35px" }}>
          <Col sm={2} />
          <Col sm={1}>
            <TextField
              id="race"
              helperText="Race"
              value={
                this.state.editCharacter.race
                  ? this.state.editCharacter.race
                  : ""
              }
              className={classes.root}
              InputProps={{
                className: classes.input
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
              style={{ width: "95%" }}
            />
          </Col>
          <Col sm={1}>
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
                className: classes.input
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
              style={{ width: "95%" }}
            />
          </Col>
          <Col sm={1}>
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
              className={classes.root}
              InputProps={{
                className: classes.input
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
              style={{ width: "75%" }}
            />
          </Col>
          <Col sm={1}>
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
              className={classes.root}
              InputProps={{
                className: classes.input
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
              style={{ width: "75%" }}
            />
          </Col>
          <Col sm={1}>
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
              className={classes.root}
              InputProps={{
                className: classes.input
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
              style={{ width: "75%" }}
            />
          </Col>{" "}
          <Col sm={1}>
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
              className={classes.root}
              InputProps={{
                className: classes.input
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
              style={{ width: "75%" }}
            />
          </Col>
          <Col sm={1}>
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
              className={classes.root}
              InputProps={{
                className: classes.input
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
              style={{ width: "75%" }}
            />
          </Col>{" "}
          <Col sm={1}>
            <TextField
              id="eyes"
              helperText="Eyes"
              inputRef={ref => {
                this.eyes = ref;
              }}
              onChange={this.changeEyes}
              value={
                this.state.editCharacter.eyes
                  ? this.state.editCharacter.eyes
                  : ""
              }
              className={classes.root}
              InputProps={{
                className: classes.input
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
              style={{ width: "75%" }}
            />
          </Col>
          <Col sm={1} />
        </FormGroup>
      </div>
    );
  }
}

export default withStyles(styles)(CharacterEditBasicInfoComponent);
