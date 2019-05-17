import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles/index';
import Character from "./characterModel.js";
import { styles } from './styles/EditBasicStyles';

export const CharacterEditBasicInfoComponent = (props) => {
  const { classes, editCharacter, updateCharacter } = props;

  const saveCaretPosition = (event) => {
    const caret = event.target.selectionStart;
    const element = event.target;
    window.requestAnimationFrame(() => {
      element.selectionStart = caret;
      element.selectionEnd = caret;
    });
  };

  const handleUpdate = (event, type) => {
    saveCaretPosition(event);
    const updateChar = props.editCharacter;
    updateChar[type] = event.target.value;
    updateCharacter(updateChar);
  };

  const changeLanguages = (event) => {
    saveCaretPosition(event);
    const updateChar = props.editCharacter;
    updateChar.ancestryProps.languages = event.target.value;
    updateCharacter(updateChar);
  };

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
    <div>
      <Grid container spacing={16} justify="center">
        <Grid item xs={2}>
          <TextField
            onChange={event => handleUpdate(event, 'name')}
            id="characterName"
            helperText="Character"
            value={editCharacter.name}
            htmlFor="custom-css-standard-input"
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
            onChange={event => handleUpdate(event, 'ancestry')}
            value={
              editCharacter.ancestry
            }
            {...textFieldProps}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="backgound"
            helperText="Background"
            onChange={event => handleUpdate(event, 'background')}
            value={
              editCharacter.background
            }
            {...textFieldProps}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="class"
            helperText="Class"
            onChange={event => handleUpdate(event, 'class')}
            value={
              editCharacter.class
            }
            {...textFieldProps}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            id="level"
            helperText="Level"
            onChange={event => handleUpdate(event, 'level')}
            value={
              editCharacter.level
            }
            {...textFieldProps}
            style={{ paddingRight: '15px' }}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            id="XP"
            helperText="XP"
            onChange={event => handleUpdate(event, 'XP')}
            value={
              editCharacter.XP
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
            onChange={event => handleUpdate(event, 'deity')}
            value={
              editCharacter.deity
            }
            {...textFieldProps}
            style={{ paddingLeft: '25px', paddingRight: '15px' }}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="alignment"
            helperText="Alignment"
            onChange={event => handleUpdate(event, 'alignment')}
            value={
              editCharacter.alignment
            }
            {...textFieldProps}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="homeland"
            helperText="Homeland"
            onChange={event => handleUpdate(event, 'homeland')}
            value={
              editCharacter.homeland
            }
            {...textFieldProps}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="player"
            helperText="Player Name"
            onChange={event => handleUpdate(event, 'player')}
            value={
              editCharacter.player
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
            onChange={event => handleUpdate(event, 'age')}
            value={
              editCharacter.age
            }
            {...textFieldProps}
            style={{ paddingLeft: '25px', paddingRight: '15px' }}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            id="gender"
            helperText="Gender"
            onChange={event => handleUpdate(event, 'gender')}
            value={
              editCharacter.gender
            }
            {...textFieldProps}
            style={{ paddingRight: '15px' }}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            id="height"
            helperText="Height"
            onChange={event => handleUpdate(event, 'height')}
            value={
              editCharacter.height
            }
            {...textFieldProps}
            style={{ paddingRight: '15px' }}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            id="weight"
            helperText="Weight"
            onChange={event => handleUpdate(event, 'weight')}
            value={
              editCharacter.weight
            }
            {...textFieldProps}
            style={{ paddingRight: '15px' }}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            id="hair"
            helperText="Hair"
            onChange={event => handleUpdate(event, 'hair')}
            value={
              editCharacter.hair
            }
            {...textFieldProps}
            style={{ paddingRight: '15px' }}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            id="eyes"
            helperText="Eye Color"
            onChange={event => handleUpdate(event, 'eyes')}
            value={
              editCharacter.eyes
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
              editCharacter.ancestryProps.languages
            }
            {...textFieldProps}
            style={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            id="size"
            helperText="size"
            onChange={event => handleUpdate(event, 'size')}
            value={
              editCharacter.size
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
