import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import { set } from 'lodash';
import { withStyles } from '@material-ui/core/styles/index';
import PropTypes from 'prop-types';
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
    set(updateChar, type, event.target.value);
    updateCharacter(updateChar);
  };

  const changeLanguages = (event) => {
    saveCaretPosition(event);
    const updateChar = editCharacter;
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
            onChange={event => handleUpdate(event, 'basics.name')}
            id="characterName"
            helperText="Character"
            value={editCharacter.basics.name}
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
            onChange={event => handleUpdate(event, 'ancestryProps.ancestry')}
            value={
              editCharacter.ancestryProps.ancestry
            }
            {...textFieldProps}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="backgound"
            helperText="Background"
            onChange={event => handleUpdate(event, 'backgroundProps.background')}
            value={
              editCharacter.backgroundProps.background
            }
            {...textFieldProps}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="class"
            helperText="Class"
            onChange={event => handleUpdate(event, 'classProps.class')}
            value={
              editCharacter.classProps.class
            }
            {...textFieldProps}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            id="level"
            helperText="Level"
            onChange={event => handleUpdate(event, 'basics.LVL')}
            value={
              editCharacter.basics.LVL
            }
            {...textFieldProps}
            style={{ paddingRight: '15px' }}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            id="XP"
            helperText="XP"
            onChange={event => handleUpdate(event, 'basics.XP')}
            value={
              editCharacter.basics.XP
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
            onChange={event => handleUpdate(event, 'basics.deity')}
            value={
              editCharacter.basics.deity
            }
            {...textFieldProps}
            style={{ paddingLeft: '25px', paddingRight: '15px' }}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="alignment"
            helperText="Alignment"
            onChange={event => handleUpdate(event, 'basics.alignment')}
            value={
              editCharacter.basics.alignment
            }
            {...textFieldProps}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="homeland"
            helperText="Homeland"
            onChange={event => handleUpdate(event, 'basics.homeland')}
            value={
              editCharacter.basics.homeland
            }
            {...textFieldProps}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="player"
            helperText="Player Name"
            onChange={event => handleUpdate(event, 'basics.player')}
            value={
              editCharacter.basics.player
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
            onChange={event => handleUpdate(event, 'appearance.age')}
            value={
              editCharacter.appearance.age
            }
            {...textFieldProps}
            style={{ paddingLeft: '25px', paddingRight: '15px' }}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            id="gender"
            helperText="Gender"
            onChange={event => handleUpdate(event, 'appearance.gender')}
            value={
              editCharacter.appearance.gender
            }
            {...textFieldProps}
            style={{ paddingRight: '15px' }}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            id="height"
            helperText="Height"
            onChange={event => handleUpdate(event, 'appearance.height')}
            value={
              editCharacter.appearance.height
            }
            {...textFieldProps}
            style={{ paddingRight: '15px' }}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            id="weight"
            helperText="Weight"
            onChange={event => handleUpdate(event, 'appearance.weight')}
            value={
              editCharacter.appearance.weight
            }
            {...textFieldProps}
            style={{ paddingRight: '15px' }}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            id="hair"
            helperText="Hair"
            onChange={event => handleUpdate(event, 'appearance.hair')}
            value={
              editCharacter.appearance.hair
            }
            {...textFieldProps}
            style={{ paddingRight: '15px' }}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            id="eyes"
            helperText="Eye Color"
            onChange={event => handleUpdate(event, 'appearance.eyes')}
            value={
              editCharacter.appearance.eyes
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
            onChange={event => handleUpdate(event, 'ancestryProps.size')}
            value={
              editCharacter.ancestryProps.size
            }
            {...textFieldProps}
            style={{ paddingRight: '15px' }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

CharacterEditBasicInfoComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  editCharacter: PropTypes.object.isRequired,
  updateCharacter: PropTypes.func.isRequired
};

export default withStyles(styles)(CharacterEditBasicInfoComponent);
