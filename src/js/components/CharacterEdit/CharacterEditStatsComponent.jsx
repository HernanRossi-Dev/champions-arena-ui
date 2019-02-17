import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles/index";
import { cloneDeep, isEqual } from 'lodash';
import styled from 'styled-components';
import Character from './characterModel.js';
import Divider from '@material-ui/core/Divider';

const DefenseStatBack = styled.div`
    position: relative;
    left: 42px;
    top: -3px;
    width: 0;
    height: 0;
    border: 40px solid transparent;
    border-top: 10px solid #df691a;
    text-align: center;
`;

const StatName = styled.div`
  font-size: 13px;
  color: #ffffff;
  text-align: left;
  font-family: 'Cinzel Decorative', sans-serif;
  margin-bottom: 5px;

`;

const DefName = styled.div`
  font-size: 17px;
  color: #ffffff;
  text-align: center;
  font-family: 'Cinzel Decorative', sans-serif;
  margin-bottom: 5px;
  width: 160px;
`;

const PerName = styled.span`
  font-size: 17px;
  color: #ffffff;
  text-align: center;
  font-family: 'Cinzel Decorative', sans-serif;
  margin-bottom: 25px;
  width: 160px;
`;

const StatLabel = styled.div`
  font-size: 25px;
  color: #ffffff;
  text-align: center;
  font-family: 'Volkhov', serif;
  margin-bottom: 15px;
  background-color: #D75600;
  border-radius: 10px;
  width: 60px;
  height: 35px;
  margin-bottom: 40px
`;

const ContainerStyle = styled.div`
  margin-bottom: 45px;
  margin-top: 45px;
`;

const styles = theme => ({
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
  inputStatPER: {
    color: '#ffffff',
    fontSize: 18,
    fontColor: '#ffffff',
    fontFamily: "'ZCOOL XiaoWei', serif",
  },
  inputStatMain: {
    color: '#ffffff',
    fontSize: 25,
    fontColor: '#ffffff',
    fontFamily: "'ZCOOL XiaoWei', serif",
  },
  inputStatRoot: {
    paddingTop: '20px',
  },
  inputStatModifier: {
    color: '#ffffff',
    fontSize: 20,
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
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`,
  },
});


class CharacterEditStatsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }


  static defaultProps = {
    editCharacter: new Character(),
  }

  saveCaretPosition = (event) => {
    const caret = event.target.selectionStart
    const element = event.target
    window.requestAnimationFrame(() => {
      element.selectionStart = caret
      element.selectionEnd = caret
    })
  }

  changeSTR = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.STR = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeSTRModifier = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.modifiers.STR = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeDEX = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.DEX = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeDEXModifier = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.modifiers.DEX = event.target.value;
    this.props.updateCharacter(updateChar);
  }
  changeCON = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.CON = event.target.value;
    this.props.updateCharacter(updateChar);
  }


  changeCONModifier = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.modifiers.CON = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeINT = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.INT = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeINTModifier = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.modifiers.INT = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeWIS = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.WIS = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeWISModifier = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.modifiers.WIS = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeCHA = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.CHA = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeCHAModifier = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.modifiers.CHA = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeHP = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.hitPoints = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeAC = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.AC = event.target.value;
    this.props.updateCharacter(updateChar);
  }
  changeTOUCHAC = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.TOUCHAC = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeFORT = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.modifiers.FORT = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeREFLEX = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.modifiers.REFLEX = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changeWILL = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.modifiers.WILL = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  changePER = (event) => {
    this.saveCaretPosition(event);
    const updateChar = this.props.editCharacter;
    updateChar.modifiers.PER = event.target.value;
    this.props.updateCharacter(updateChar);
  }

  render() {
    const { classes } = this.props;
    return (
      <ContainerStyle>
        {/* <EditTitleStyle>Stats</EditTitleStyle> */}
        <div style={{ marginLeft: '8%', marginRight: '8%' }}>
          <Grid container xs={12} direction="row" justify="center" spacing={32}>
            <Grid container xs={6}>
              <Grid container xs={12}>
                <Grid item xs={4} style={itemStyle} >
                  <Grid container xs={12}>
                    <Grid item xs={4} style={itemStyle} >
                      <StatName>Strength</StatName>
                      <StatLabel>STR</StatLabel>
                    </Grid>
                    <Grid item xs={8} style={itemStyle} >
                      <TextField
                        type="number"
                        autoComplete='nope'
                        onChange={this.changeSTR}
                        id="STR"
                        htmlFor="custom-css-standard-input"
                        value={this.props.editCharacter.STR}
                        InputProps={{
                          classes: {
                            root: classes.inputStatRoot,
                            input: classes.inputStatMain,
                          }
                        }}
                        FormHelperTextProps={{
                          className: classes.helperText
                        }}
                        style={{ width: '40px', paddingBottom: '0px', marginLeft: '10px' }}
                      />
                      <TextField
                        onChange={this.changeSTRModifier}
                        id="STRMod"
                        helperText="Modifier"
                        htmlFor="custom-css-standard-input"
                        value={
                          this.props.editCharacter.modifiers.STR
                        }
                        InputProps={{
                          classes: {
                            root: classes.inputStatRoot,
                            input: classes.inputStatModifier,
                          }
                        }}
                        FormHelperTextProps={{
                          className: classes.helperText
                        }}
                        style={{ width: '40px', paddingBottom: '0px', marginLeft: '15px' }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4} style={itemStyle} >
                  <Grid container xs={12}>
                    <Grid item xs={4} style={itemStyle} >
                      <StatName>Dexterity</StatName>
                      <StatLabel>DEX</StatLabel>
                    </Grid>
                    <Grid item xs={8} style={itemStyle} >
                      <TextField
                        type="number"
                        autoComplete='nope'
                        onChange={this.changeDEX}
                        id="DEX"
                        htmlFor="custom-css-standard-input"
                        value={
                          this.props.editCharacter.DEX
                        }
                        InputProps={{
                          classes: {
                            root: classes.inputStatRoot,
                            input: classes.inputStatMain,
                          }
                        }}
                        style={{ width: '40px', paddingBottom: '0px', marginLeft: '10px' }}
                      />
                      <TextField
                        onChange={this.changeDEXModifier}
                        id="DEXMod"
                        helperText="Modifier"
                        htmlFor="custom-css-standard-input"
                        value={
                          this.props.editCharacter.modifiers.DEX
                        }
                        InputProps={{
                          classes: {
                            root: classes.inputStatRoot,
                            input: classes.inputStatModifier,
                          }
                        }}
                        FormHelperTextProps={{
                          className: classes.helperText
                        }}
                        style={{ width: '40px', paddingBottom: '0px', marginLeft: '15px' }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4} style={itemStyle} >
                  <Grid container justify="center" xs={12}>
                    <Grid item xs={4} >
                      <StatName>Constitution</StatName>
                      <StatLabel>CON</StatLabel>
                    </Grid>
                    <Grid item xs={8} >
                      <TextField
                        type="number"
                        autoComplete='nope'
                        onChange={this.changeCON}
                        id="CON"
                        htmlFor="custom-css-standard-input"
                        value={
                          this.props.editCharacter.CON
                        }
                        InputProps={{
                          classes: {
                            root: classes.inputStatRoot,
                            input: classes.inputStatMain,
                          }
                        }}
                        style={{ width: '40px', paddingBottom: '0px', marginLeft: '10px' }}
                      />
                      <TextField
                        onChange={this.changeCONModifier}
                        id="CONMod"
                        helperText="Modifier"
                        htmlFor="custom-css-standard-input"
                        value={
                          this.props.editCharacter.modifiers.CON
                        }
                        InputProps={{
                          classes: {
                            root: classes.inputStatRoot,
                            input: classes.inputStatModifier,
                          }
                        }}
                        FormHelperTextProps={{
                          className: classes.helperText
                        }}
                        style={{ width: '40px', paddingBottom: '0px', marginLeft: '15px' }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Divider className={classes.divider} />
              <Grid container justify="center" xs={12}>
                <Grid item xs={4} style={itemStyle} >
                  <Grid container justify="center" xs={12}>
                    <Grid item xs={4} style={itemStyle} >
                      <StatName>Intelligence</StatName>
                      <StatLabel>INT</StatLabel>
                    </Grid>
                    <Grid item xs={8} style={itemStyle} >
                      <TextField
                        type="number"
                        autoComplete='nope'
                        onChange={this.changeINT}
                        id="INT"
                        htmlFor="custom-css-standard-input"
                        value={
                          this.props.editCharacter.INT
                        }
                        InputProps={{
                          classes: {
                            root: classes.inputStatRoot,
                            input: classes.inputStatMain,
                          }
                        }}
                        style={{ width: '40px', paddingBottom: '0px', marginLeft: '10px' }}
                      />
                      <TextField
                        onChange={this.changeINTModifier}
                        id="INTMod"
                        helperText="Modifier"
                        htmlFor="custom-css-standard-input"
                        value={
                          this.props.editCharacter.modifiers.INT
                        }

                        InputProps={{
                          classes: {
                            root: classes.inputStatRoot,
                            input: classes.inputStatModifier,
                          }
                        }}
                        FormHelperTextProps={{
                          className: classes.helperText
                        }}
                        style={{ width: '40px', paddingBottom: '0px', marginLeft: '15px' }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4} style={itemStyle} >
                  <Grid container justify="center" xs={12}>
                    <Grid item xs={4} style={itemStyle} >
                      <StatName>Wisdom</StatName>
                      <StatLabel>WIS</StatLabel>
                    </Grid>
                    <Grid item xs={8} style={itemStyle} >
                      <TextField
                        type="number"
                        autoComplete='nope'
                        onChange={this.changeWIS}
                        id="WIS"
                        htmlFor="custom-css-standard-input"
                        value={
                          this.props.editCharacter.WIS
                        }
                        InputProps={{
                          classes: {
                            root: classes.inputStatRoot,
                            input: classes.inputStatMain,
                          }
                        }}
                        style={{ width: '40px', paddingBottom: '0px', marginLeft: '10px' }}
                      />
                      <TextField
                        onChange={this.changeWISModifier}
                        id="WISMod"
                        helperText="Modifier"
                        htmlFor="custom-css-standard-input"
                        value={
                          this.props.editCharacter.modifiers.WIS
                        }
                        InputProps={{
                          classes: {
                            root: classes.inputStatRoot,
                            input: classes.inputStatModifier,
                          }
                        }}
                        FormHelperTextProps={{
                          className: classes.helperText
                        }}
                        style={{ width: '40px', paddingBottom: '0px', marginLeft: '15px' }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4} style={itemStyle} >

                  <Grid container justify="center" xs={12}>
                    <Grid item xs={4}  >
                      <StatName>Charisma</StatName>
                      <StatLabel>CHA</StatLabel>
                    </Grid>
                    <Grid item xs={8} style={itemStyle} >
                      <TextField
                        type="number"
                        autoComplete='nope'
                        onChange={this.changeCHA}
                        id="CHA"
                        htmlFor="custom-css-standard-input"
                        value={
                          this.props.editCharacter.CHA
                        }
                        InputProps={{
                          classes: {
                            root: classes.inputStatRoot,
                            input: classes.inputStatMain,
                          }
                        }}
                        style={{ width: '40px', paddingBottom: '0px', marginLeft: '10px' }}
                      />
                      <TextField
                        onChange={this.changeCHAModifier}
                        id="CHAMod"
                        helperText="Modifier"
                        htmlFor="custom-css-standard-input"
                        value={
                          this.props.editCharacter.modifiers.CHA
                        }
                        InputProps={{
                          classes: {
                            root: classes.inputStatRoot,
                            input: classes.inputStatModifier,
                          }
                        }}
                        FormHelperTextProps={{
                          className: classes.helperText
                        }}
                        style={{ width: '40px', paddingBottom: '0px', marginLeft: '15px' }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>


            <Grid container justify="space-evenly" direction="row" xs={6}>
              <Grid container justify="space-evenly">
                <Grid item xs={2} >
                  <DefName>Hit Points</DefName>
                  <DefenseStatBack>
                    <TextField
                      type="number"
                      autoComplete='nope'
                      onChange={this.changeHP}
                      id="HP"
                      htmlFor="custom-css-standard-input"
                      value={
                        this.props.editCharacter.hitPoints
                      }
                      InputProps={{
                        disableUnderline: true,
                        classes: {
                          root: classes.inputStatRoot,
                          input: classes.inputStatMain,
                        }
                      }}
                      style={{
                        width: '55px',
                        paddingBottom: '0px',
                        marginLeft: '-12px',
                        marginBlockStart: '-25px'
                      }}
                    />
                  </DefenseStatBack>
                </Grid>
                <Grid item xs={2} >
                  <DefName>Armor Class</DefName>
                  <DefenseStatBack>
                    <TextField
                      type="number"
                      autoComplete='nope'
                      onChange={this.changeAC}
                      id="AC"
                      htmlFor="custom-css-standard-input"
                      value={
                        this.props.editCharacter.AC
                      }
                      InputProps={{
                        disableUnderline: true,
                        classes: {
                          root: classes.inputStatRoot,
                          input: classes.inputStatMain,
                        }
                      }}
                      style={{
                        width: '55px',
                        paddingBottom: '0px',
                        marginLeft: '-12px',
                        marginBlockStart: '-25px'
                      }}
                    />
                  </DefenseStatBack>

                </Grid>
                <Grid item xs={2} >
                  <DefName>Touch AC</DefName>
                  <DefenseStatBack>
                    <TextField
                      type="number"
                      autoComplete='nope'
                      onChange={this.changeTOUCHAC}
                      id="TOUCHAC"
                      htmlFor="custom-css-standard-input"
                      value={
                        this.props.editCharacter.TOUCHAC
                      }
                      InputProps={{
                        disableUnderline: true,
                        classes: {
                          root: classes.inputStatRoot,
                          input: classes.inputStatMain,
                        }
                      }}
                      style={{
                        width: '55px',
                        paddingBottom: '0px',
                        marginLeft: '-12px',
                        marginBlockStart: '-25px'
                      }}
                    />
                  </DefenseStatBack>

                </Grid>
              </Grid>


              <Grid container justify="space-evenly" >
                <Grid item xs={2} style={itemStyle} >
                  <DefName>Fortitude</DefName>
                  <i class="fas fa-dice-d20" style={{ marginLeft: '20px', marginTop: '10px' }}> <TextField
                    autoComplete='nope'
                    onChange={this.changeFORT}
                    id="FORT"
                    htmlFor="custom-css-standard-input"
                    value={
                      this.props.editCharacter.modifiers.FORT
                    }
                    InputProps={{
                      classes: {
                        root: classes.inputStatRoot,
                        input: classes.inputStatMain,
                      }
                    }}
                    style={{
                      width: '45px',
                      paddingBottom: '0px',
                      marginLeft: '40px',
                      marginBlockStart: '-50px',
                      textAlign: 'center',
                    }}
                  /></i>
                </Grid>
                <Grid item xs={2} style={itemStyle} >
                  <DefName>Reflex</DefName>
                  <i class="fas fa-dice-d20" style={{ marginLeft: '20px', marginTop: '10px' }}> <TextField
                    autoComplete='nope'
                    onChange={this.changeREFLEX}
                    id="REFLEX"
                    htmlFor="custom-css-standard-input"
                    value={
                      this.props.editCharacter.modifiers.REFLEX
                    }
                    InputProps={{
                      classes: {
                        root: classes.inputStatRoot,
                        input: classes.inputStatMain,
                      }
                    }}
                    style={{
                      width: '45px',
                      paddingBottom: '0px',
                      marginLeft: '40px',
                      marginBlockStart: '-50px',
                      textAlign: 'center',
                    }}
                  /></i>
                </Grid>
                <Grid item xs={2} style={itemStyle} >
                  <DefName>Will</DefName>
                  <i class="fas fa-dice-d20" style={{ marginLeft: '20px', marginTop: '10px' }}> <TextField
                    autoComplete='nope'
                    onChange={this.changeWILL}
                    id="WILL"
                    htmlFor="custom-css-standard-input"
                    value={
                      this.props.editCharacter.modifiers.WILL
                    }
                    InputProps={{
                      classes: {
                        root: classes.inputStatRoot,
                        input: classes.inputStatMain,
                      }
                    }}
                    style={{
                      width: '45px',
                      paddingBottom: '0px',
                      marginLeft: '40px',
                      marginBlockStart: '-50px',
                      textAlign: 'center',
                    }}
                  /></i>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
          <Grid container xs={12} justify="center" spacing={24}>
            <Grid item xs={4} >
              <PerName>Perception </PerName>
              <i class="fas fa-dice-d20" style={{ marginLeft: '10px', marginTop: '20px' }}> <TextField
                autoComplete='nope'
                onChange={this.changePER}
                id="PER"
                htmlFor="custom-css-standard-input"
                value={
                  this.props.editCharacter.modifiers.PER
                }
                InputProps={{
                  classes: {
                    root: classes.inputStatRoot,
                    input: classes.inputStatPER,
                  }
                }}
                style={{
                  width: '220px',
                  paddingBottom: '25px',
                  marginLeft: '30px',
                  textAlign: 'center',
                  marginBlockStart: '-30px',
                }}
              /></i>
            </Grid>
          </Grid>
        </div >
      </ContainerStyle>
    );
  }
}

const itemStyle = {
  background: "transparent",
  fontSize: "15px",
  fontFamily: '"Crimson Text", serif'
}


export default withStyles(styles)(CharacterEditStatsComponent);
