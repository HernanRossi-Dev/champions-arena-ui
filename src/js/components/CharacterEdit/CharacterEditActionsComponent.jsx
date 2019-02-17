import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import { Button } from "react-bootstrap";
import { withStyles } from '@material-ui/core/styles/index';
import { cloneDeep, isEqual } from 'lodash';
import Character from './characterModel.js';
import styled from 'styled-components';
import * as cssStyles from "../../../styles/Styles.css";


const EditTitleStyle = styled.div`
  font-size: 38px;
  color: #ffffff;
  text-align: left;
  font-family: 'ZCOOL XiaoWei', serif;
  text-shadow: 1px 1px 1px #df691a;
  margin-left: 25px;
`;


const GradientHeadingUnder = styled.div`
    background: rgba(225,105,25,1);
    background: -moz-linear-gradient(-45deg, rgba(225,105,25,1) 0%, rgba(255,185,138,0.37) 43%, rgba(255,185,138,0.24) 52%);
    background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(225,105,25,1)), color-stop(43%, rgba(255,185,138,0.37)), color-stop(52%, rgba(255,185,138,0.24)));
    background: -webkit-linear-gradient(-45deg, rgba(225,105,25,1) 0%, rgba(255,185,138,0.37) 43%, rgba(255,185,138,0.24) 52%);
    background: -o-linear-gradient(-45deg, rgba(225,105,25,1) 0%, rgba(255,185,138,0.37) 43%, rgba(255,185,138,0.24) 52%);
    background: -ms-linear-gradient(-45deg, rgba(225,105,25,1) 0%, rgba(255,185,138,0.37) 43%, rgba(255,185,138,0.24) 52%);
    background: linear-gradient(135deg, rgba(225,105,25,1) 0%, rgba(255,185,138,0.37) 43%, rgba(255,185,138,0.24) 52%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e16919', endColorstr='#ffb98a', GradientType=1 );
    border-radius: 0px 13px 200px 0px;
    -moz-border-radius: 0px 13px 200px 0px;
    -webkit-border-radius: 0px 13px 200px 0px;
    border: 7px none #000000;
    width: 65%;
    height: 12px; 
    margin-left: 25px;
    margin-top: -10p;
    margin-bottom: 20px;
`;

const itemStyle = {
  background: "transparent",
  fontSize: "15px",
  fontFamily: '"Crimson Text", serif'
}

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
    fontSize: 30,
    fontColor: '#ffffff',
    fontFamily: "'ZCOOL XiaoWei', serif"
  },
  inputStride: {
    color: '#ffffff',
    fontSize: 35,
    fontColor: '#ffffff',
    fontFamily: "'ZCOOL XiaoWei', serif"
  },
  inputMelee: {
    color: '#ffffff',
    fontSize: 22,
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

class CharacterEditActionsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editCharacter: new Character(),
      show: false,
      meleeRows: [],
      rangedRows: [],
      stride: '',
    };
  }

  static defaultProps = {
    editCharacter: {
      actions: {
        melee: [],
      },
    }
  }


  saveCaretPosition = (event) => {
    const caret = event.target.selectionStart
    const element = event.target
    window.requestAnimationFrame(() => {
      element.selectionStart = caret
      element.selectionEnd = caret
    })
  }

  changeStride = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.actions.stride = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  addMeleeEntry = () => {
    const meleeEntry = '';
    const updateChar = this.props.editCharacter;
    updateChar.actions.melee.push(meleeEntry);
    this.props.updateCharacter(updateChar);
  }

  addRangedEntry = () => {
    const rangedEntry = '';
    const updateChar = this.props.editCharacter;
    updateChar.actions.ranged.push(rangedEntry);
    this.props.updateCharacter(updateChar);
  }

  changeMelee = (event, index) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.actions.melee[index] = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeRanged = (event, index) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.actions.ranged[index] = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  deleteMelee = (index) => {
    const updateChar = this.props.editCharacter;
    updateChar.actions.melee.splice(index, 1);
    this.props.updateCharacter(updateChar);
  }

  deleteRanged = (index) => {
    const updateChar = this.props.editCharacter;
    updateChar.actions.ranged.splice(index, 1);
    this.props.updateCharacter(updateChar);
  }

  renderMeleeStrike = (entry, index) => {
    const { classes } = this.props;
    const entryRender = (
      <TextField
        onChange={(e) => this.changeMelee(e, index)}
        id={`melee-${index}`}
        helperText="Melee Strike"
        htmlFor="custom-css-standard-input"
        value={entry}
        InputProps={{
          classes: {
            root: classes.input,
            input: classes.inputMelee,
          }
        }}
        FormHelperTextProps={{
          className: classes.helperText
        }}
        style={{ paddingLeft: '25px', paddingRight: '15px', marginTop: '15px', width: '90%' }}
      />
    );
    return entryRender;
  }

  renderRangedStrike = (entry, index) => {
    const { classes } = this.props;
    const entryRender = (
      <TextField
        onChange={(e) => this.changeRanged(e, index)}
        id={`ranged-${index}`}
        helperText="Ranged Strike"
        htmlFor="custom-css-standard-input"
        value={entry}
        InputProps={{
          classes: {
            root: classes.input,
            input: classes.inputMelee,
          }
        }}
        FormHelperTextProps={{
          className: classes.helperText
        }}
        style={{ paddingLeft: '25px', paddingRight: '15px', marginTop: '15px', width: '90%' }}
      />
    );
    return entryRender;
  }

  render() {
    const { classes } = this.props;
    return (
      <div >
        <Grid container spacing={16} justify="flex-start">
          <Grid container spacing={16} justify="flex-start">
            <Grid item xs={1}></Grid>
            <Grid item xs={3} >
              <EditTitleStyle>Actions</EditTitleStyle>
              <GradientHeadingUnder />
            </Grid>
            <Grid item xs={2}>

              <TextField
                onChange={this.changeStride}
                id="Stride"
                helperText="Stride"
                htmlFor="custom-css-standard-input"
                value={this.props.editCharacter.actions.stride}
                InputProps={{
                  classes: {
                    root: classes.input,
                    input: classes.inputStride,
                  }
                }}
                FormHelperTextProps={{
                  className: classes.helperText
                }}
                style={{marginTop: '15px', marginBottom: '20px' }}
              />
            </Grid>
          </Grid>
          {this.props.editCharacter.actions.melee.map((entry, index) => {
            return (
              <Grid container spacing={16} justify="flex-start" direction='row'>

                <Grid item xs={1}></Grid>
                <Grid item xs={10} >
                  {this.renderMeleeStrike(entry, index)}
                  <Button type="button" bsClass={cssStyles.deleteButtonActions} onClick={() => this.deleteMelee(index)}>
                    <i className="fas fa-times-circle fa-lg" />
                  </Button>
                </Grid>
              </Grid>
            );
          })}
          <Grid container spacing={16} justify="center" direction='row'>
            <Grid item xs={1}></Grid>
            <Grid item xs={4}>
              <Button type="button" bsClass={cssStyles.deleteButton} onClick={this.addMeleeEntry}>
                Add Melee entry
                  <i class="fas fa-plus-circle" style={{ marginLeft: '25px', marginBottom: '25px' }}></i>
              </Button>
            </Grid>
          </Grid>

          {this.props.editCharacter.actions.ranged.map((entry, index) => {
            return (
              <Grid container spacing={16} justify="flex-start" direction='row'>

                <Grid item xs={1}></Grid>
                <Grid item xs={10} >
                  {this.renderRangedStrike(entry, index)}
                  <Button type="button" bsClass={cssStyles.deleteButtonActions} onClick={() => this.deleteRanged(index)}>
                    <i className="fas fa-times-circle fa-lg" />
                  </Button>
                </Grid>
              </Grid>
            );
          })}
          <Grid container spacing={16} justify="center" direction='row'>
            <Grid item xs={1}></Grid>
            <Grid item xs={4}>
              <Button type="button" bsClass={cssStyles.deleteButton} onClick={this.addRangedEntry}>
                Add Ranged entry
                  <i class="fas fa-plus-circle" style={{ marginLeft: '17px' }}></i>
              </Button>
            </Grid>
          </Grid>

        </Grid>

      </div>
    );
  }
}
const deleteButtonStyle = {
  color: '#fa621f',
  outline: 'none',
  border: 'none',
  backgroundColor: 'transparent !important',
  marginTop: '35px',
}
export default withStyles(styles)(CharacterEditActionsComponent);
