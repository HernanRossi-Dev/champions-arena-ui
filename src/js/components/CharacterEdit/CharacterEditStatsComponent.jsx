import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles/index";
import Divider from '@material-ui/core/Divider';
import Character from './characterModel.js';
import {
  DefName, PerName, StatLabel, ContainerStyle, DefenseStatBack,
  StatName, styles, mainStatProps, modifierStatProps, additionalTopStatProps,
  additionalBotStatProps, itemStyle, getAdditionalPropsMain,
  getAdditionalPropsModifier, getAdditionalPropsModTop, getAdditionalPropsModBot
} from './styles/EditStatsStyles';

export const CharacterEditStatsComponent = (props) => {
  const { classes, updateCharacter, editCharacter } = props;

  const saveCaretPosition = (event) => {
    const caret = event.target.selectionStart;
    const element = event.target;
    window.requestAnimationFrame(() => {
      element.selectionStart = caret;
      element.selectionEnd = caret;
    });
  };

  const updateBaseStat = (event, type) => {
    saveCaretPosition(event);
    const updateChar = editCharacter;
    updateChar[type] = event.target.value;
    updateCharacter(updateChar);
  };

  const updateModifierStat = (event, type) => {
    saveCaretPosition(event);
    const updateChar = editCharacter;
    updateChar.modifiers[type] = event.target.value;
    updateCharacter(updateChar);
  };

  const additionalPropsMain = getAdditionalPropsMain(classes);
  const additionalPropsModifier = getAdditionalPropsModifier(classes);
  const additionalPropsModTop = getAdditionalPropsModTop(classes);
  const additionalPropsModBot = getAdditionalPropsModBot(classes);
  return (
    <ContainerStyle>
      <div style={{ marginLeft: '8%', marginRight: '8%' }}>
        <Grid container xs={12} direction="row" justify="center" spacing={32}>
          <Grid container xs={6}>
            <Grid container xs={12}>
              <Grid item xs={4} style={itemStyle}>
                <Grid container xs={12}>
                  <Grid item xs={4} style={itemStyle}>
                    <StatName>Strength</StatName>
                    <StatLabel>STR</StatLabel>
                  </Grid>
                  <Grid item xs={8} style={itemStyle}>
                    <TextField
                      onChange={e => updateBaseStat(e, 'STR')}
                      id="STR"
                      value={editCharacter.STR}
                      {...mainStatProps}
                      {...additionalPropsMain}
                    />
                    <TextField
                      onChange={e => updateModifierStat(e, 'STR')}
                      id="STRMod"
                      value={
                        editCharacter.modifiers.STR
                      }
                      {...modifierStatProps}
                      {...additionalPropsModifier}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4} style={itemStyle}>
                <Grid container xs={12}>
                  <Grid item xs={4} style={itemStyle}>
                    <StatName>Dexterity</StatName>
                    <StatLabel>DEX</StatLabel>
                  </Grid>
                  <Grid item xs={8} style={itemStyle}>
                    <TextField
                      onChange={e => updateBaseStat(e, 'DEX')}
                      id="DEX"
                      value={
                        editCharacter.DEX
                      }
                      {...mainStatProps}
                      {...additionalPropsMain}
                    />
                    <TextField
                      onChange={e => updateModifierStat(e, 'DEX')}                        
                      id="DEXMod"
                      value={
                        editCharacter.modifiers.DEX
                      }
                      {...modifierStatProps}
                      {...additionalPropsModifier}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4} style={itemStyle}>
                <Grid container justify="center" xs={12}>
                  <Grid item xs={4}>
                    <StatName>Constitution</StatName>
                    <StatLabel>CON</StatLabel>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      onChange={e => updateBaseStat(e, 'CON')}
                      id="CON"
                      value={
                        editCharacter.CON
                      }
                      {...mainStatProps}
                      {...additionalPropsMain}
                    />
                    <TextField
                      onChange={e => updateModifierStat(e, 'CON')}                        
                      id="CONMod"
                      value={
                        editCharacter.modifiers.CON
                      }
                      {...modifierStatProps}
                      {...additionalPropsModifier}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Grid container justify="center" xs={12}>
              <Grid item xs={4} style={itemStyle}>
                <Grid container justify="center" xs={12}>
                  <Grid item xs={4} style={itemStyle}>
                    <StatName>Intelligence</StatName>
                    <StatLabel>INT</StatLabel>
                  </Grid>
                  <Grid item xs={8} style={itemStyle}>
                    <TextField
                      onChange={e => updateBaseStat(e, 'INT')}
                      id="INT"
                      value={
                        editCharacter.INT
                      }
                      {...mainStatProps}
                      {...additionalPropsMain}
                    />
                    <TextField
                      onChange={e => updateModifierStat(e, 'INT')}                        
                      id="INTMod"
                      value={
                        editCharacter.modifiers.INT
                      }
                      {...modifierStatProps}
                      {...additionalPropsModifier}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4} style={itemStyle}>
                <Grid container justify="center" xs={12}>
                  <Grid item xs={4} style={itemStyle}>
                    <StatName>Wisdom</StatName>
                    <StatLabel>WIS</StatLabel>
                  </Grid>
                  <Grid item xs={8} style={itemStyle}>
                    <TextField
                      onChange={e => updateBaseStat(e, 'WIS')}
                      id="WIS"
                      value={
                        editCharacter.WIS
                      }
                      {...mainStatProps}
                      {...additionalPropsMain}
                    />
                    <TextField
                      onChange={e => updateModifierStat(e, 'WIS')}                        
                      id="WISMod"
                      value={
                        editCharacter.modifiers.WIS
                      }
                      {...modifierStatProps}
                      {...additionalPropsModifier}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4} style={itemStyle}>
                <Grid container justify="center" xs={12}>
                  <Grid item xs={4}>
                    <StatName>Charisma</StatName>
                    <StatLabel>CHA</StatLabel>
                  </Grid>
                  <Grid item xs={8} style={itemStyle}>
                    <TextField
                      onChange={e => updateBaseStat(e, 'CHA')}
                      id="CHA"
                      value={
                        editCharacter.CHA
                      }
                      {...mainStatProps}
                      {...additionalPropsMain}
                    />
                    <TextField
                      onChange={e => updateModifierStat(e, 'CHA')}
                      id="CHAMod"
                      value={
                        editCharacter.modifiers.CHA
                      }
                      {...modifierStatProps}
                      {...additionalPropsModifier}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justify="space-evenly" direction="row" xs={6}>
            <Grid container justify="space-evenly">
              <Grid item xs={2}>
                <DefName>Hit Points</DefName>
                <DefenseStatBack>
                  <TextField
                    onChange={e => updateBaseStat(e, 'hitPoints')}
                    id="HP"
                    value={
                      editCharacter.hitPoints
                    }
                    {...additionalTopStatProps}
                    {...additionalPropsModTop}
                  />
                </DefenseStatBack>
              </Grid>
              <Grid item xs={2}>
                <DefName>Armor Class</DefName>
                <DefenseStatBack>
                  <TextField
                    onChange={e => updateBaseStat(e, 'AC')}
                    id="AC"
                    value={
                      editCharacter.AC
                    }
                    {...additionalTopStatProps}
                    {...additionalPropsModTop}
                  />
                </DefenseStatBack>
              </Grid>
              <Grid item xs={2}>
                <DefName>Touch AC</DefName>
                <DefenseStatBack>
                  <TextField
                    onChange={e => updateBaseStat(e, 'TOUCHAC')}
                    id="TOUCHAC"
                    value={
                      editCharacter.TOUCHAC
                    }
                    {...additionalTopStatProps}
                    {...additionalPropsModTop}
                  />
                </DefenseStatBack>
              </Grid>
            </Grid>
            <Grid container justify="space-evenly">
              <Grid item xs={2} style={itemStyle}>
                <DefName>Fortitude</DefName>
                <i className="fas fa-dice-d20" style={{ marginLeft: '20px', marginTop: '10px' }}>
                  <TextField
                    onChange={e => updateModifierStat(e, 'FORT')}
                    id="FORT"
                    value={
                      editCharacter.modifiers.FORT
                    }
                    {...additionalBotStatProps}
                    {...additionalPropsModBot}
                  />
                </i>
              </Grid>
              <Grid item xs={2} style={itemStyle}>
                <DefName>Reflex</DefName>
                <i className="fas fa-dice-d20" style={{ marginLeft: '20px', marginTop: '10px' }}>
                  <TextField
                    onChange={e => updateModifierStat(e, 'REFLEX')}                    
                    id="REFLEX"
                    value={
                      editCharacter.modifiers.REFLEX
                    }
                    {...additionalBotStatProps}
                    {...additionalPropsModBot}
                  />
                </i>
              </Grid>
              <Grid item xs={2} style={itemStyle}>
                <DefName>Will</DefName>
                <i className="fas fa-dice-d20" style={{ marginLeft: '20px', marginTop: '10px' }}>
                  <TextField
                    onChange={e => updateModifierStat(e, 'WILL')}
                    id="WILL"
                    value={
                      editCharacter.modifiers.WILL
                    }
                    {...additionalBotStatProps}
                    {...additionalPropsModBot}
                  />
                </i>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12} justify="center" spacing={24}>
          <Grid item xs={4}>
            <PerName>Perception </PerName>
            <i className="fas fa-dice-d20" style={{ marginLeft: '10px', marginTop: '20px' }}>
              <TextField
                autoComplete="nope"
                htmlFor="custom-css-standard-input"
                onChange={e => updateModifierStat(e, 'PER')}
                id="PER"
                value={
                  editCharacter.modifiers.PER
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
              />
            </i>
          </Grid>
        </Grid>
      </div>
    </ContainerStyle>
  );
};

CharacterEditStatsComponent.defaultProps = {
  editCharacter: new Character(),
};

export default withStyles(styles)(CharacterEditStatsComponent);
