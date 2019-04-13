import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles/index';
import { styles } from './styles/EditBasicStyles';

export function CharacterEditBasicInfoComponent(props) {
  const { classes } = props;
  const saveCaretPosition = (event) => {
    const caret = event.target.selectionStart
    const element = event.target
    window.requestAnimationFrame(() => {
      element.selectionStart = caret
      element.selectionEnd = caret
    })
  }

  const handleUpdate = (event, type) => {
    saveCaretPosition(event);
    const updateChar = props.editCharacter;
    updateChar[type] = event.target.value;
    props.updateCharacter(updateChar);
  }
  const changeLanguages = (event) => {
    saveCaretPosition(event);
    const updateChar = props.editCharacter;
    updateChar.ancestryProps.languages = event.target.value;
    props.updateCharacter(updateChar);
  }
  const textFieldProps = {
    InputProps: {
      classes: {
        root: classes.input,
        input: classes.input,
      }
    },
    FormHelperTextProps: {
      className: classes.helperText
    },
    htmlFor: "custom-css-standard-input",
  };
  return (
    <div >
      <Grid container spacing={16} justify="center">
        <Grid item xs={2}>
          <TextField
            onChange={(event) => handleUpdate(event, 'name')}
            id="characterName"
            helperText="Character"
            value={props.editCharacter.name}
            htmlFor= "custom-css-standard-input"
            InputProps= {{
              classes: {
                root: classes.input,
                input: classes.inputName,
              }
            }}
            FormHelperTextProps= {{
              className: classes.helperText
            }}
            style={{ paddingLeft: '25px', paddingRight: '15px' }}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="ancestry"
            helperText="Ancestry"
            onChange={(event) => handleUpdate(event, 'ancestry')}
            value={
              props.editCharacter.ancestry
            }
            {...textFieldProps}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="backgound"
            helperText="Background"
            onChange={(event) => handleUpdate(event, 'background')}            
            value={
              props.editCharacter.background
            }
            {...textFieldProps}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="class"
            helperText="Class"
            onChange={(event) => handleUpdate(event, 'class')}
            value={
              props.editCharacter.class
            }
            {...textFieldProps}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            id="level"
            helperText="Level"
            onChange={(event) => handleUpdate(event, 'level')}
            value={
              props.editCharacter.level
            }
            {...textFieldProps}
            style={{ paddingRight: '15px' }}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            id="XP"
            helperText="XP"
            onChange={(event) => handleUpdate(event, 'XP')}
            value={
              props.editCharacter.XP
            }
            {...textFieldProps}
            style={{ paddingRight: '15px' }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={16} style={{ marginTop: '40px' }} justify="center">
        <Grid item xs={2}>
          <TextField
            id="deity"
            helperText="Deity"
            onChange={(event) => handleUpdate(event, 'deity')}
            value={
              props.editCharacter.deity
            }
            {...textFieldProps}
            style={{ paddingLeft: '25px', paddingRight: '15px' }}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="alignment"
            helperText="Alignment"
            onChange={(event) => handleUpdate(event, 'alignment')}
            value={
              props.editCharacter.alignment
            }
            {...textFieldProps}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="homeland"
            helperText="Homeland"
            onChange={(event) => handleUpdate(event, 'homeland')}
            value={
              props.editCharacter.homeland
            }
            {...textFieldProps}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="player"
            helperText="Player Name"
            onChange={(event) => handleUpdate(event, 'player')}
            value={
              props.editCharacter.player
            }
            {...textFieldProps}
          />
        </Grid>
      </Grid>
      <Grid container spacing={16} style={{ marginTop: '40px' }} justify="center">
        <Grid item xs={1}>
          <TextField
            id="age"
            helperText="Age"
            onChange={(event) => handleUpdate(event, 'age')}
            value={
              props.editCharacter.age
            }
            {...textFieldProps}
            style={{ paddingLeft: '25px', paddingRight: '15px' }}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            id="gender"
            helperText="Gender"
            onChange={(event) => handleUpdate(event, 'gender')}
            value={
              props.editCharacter.gender
            }
            {...textFieldProps}
            style={{ paddingRight: '15px' }}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            id="height"
            helperText="Height"
            onChange={(event) => handleUpdate(event, 'height')}
            value={
              props.editCharacter.height
            }
            {...textFieldProps}
            style={{ paddingRight: '15px' }}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            id="weight"
            helperText="Weight"
            onChange={(event) => handleUpdate(event, 'weight')}
            value={
              props.editCharacter.weight
            }
            {...textFieldProps}
            style={{ paddingRight: '15px' }}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            id="hair"
            helperText="Hair"
            onChange={(event) => handleUpdate(event, 'hair')}
            value={
              props.editCharacter.hair
            }
            {...textFieldProps}
            style={{ paddingRight: '15px' }}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            id="eyes"
            helperText="Eye Color"
            onChange={(event) => handleUpdate(event, 'eyes')}
            value={
              props.editCharacter.eyes
            }
            {...textFieldProps}
          />
        </Grid>
      </Grid>
      <Grid container spacing={16} style={{ marginTop: '40px' }} justify="center">
        <Grid item xs={4}>
          <TextField
            id="languages"
            helperText="Languages"
            onChange={changeLanguages}
            value={
              props.editCharacter.ancestryProps.languages
            }
            {...textFieldProps}
            style={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            id="size"
            helperText="size"
            onChange={(event) => handleUpdate(event, 'size')}
            value={
              props.editCharacter.size
            }
            {...textFieldProps}
            style={{ paddingRight: '15px' }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(CharacterEditBasicInfoComponent);
