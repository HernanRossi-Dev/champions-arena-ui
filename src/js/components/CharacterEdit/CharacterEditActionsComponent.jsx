import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';
import Character from './characterModel.js';
import * as cssStyles from '../../../styles/Styles.css';
import {
  EditTitleStyle, GradientHeadingUnder, styles, getInputProps
} from './styles/EditActionsStyles';

export const CharacterEditActionsComponent = (props) => {
  const { classes, editCharacter, updateCharacter } = props;
  const inputProps = getInputProps(classes);

  const saveCaretPosition = (event) => {
    const caret = event.target.selectionStart;
    const element = event.target;
    window.requestAnimationFrame(() => {
      element.selectionStart = caret;
      element.selectionEnd = caret;
    });
  };

  const handleUpdate = (event, type, index) => {
    saveCaretPosition(event);
    const updateChar = editCharacter;
    if (index) {
      updateChar.actions[type][index] = event.target.value;
    } else {
      updateChar.actions[type] = event.target.value;
    }
    updateCharacter(updateChar);
  };

  const addRow = (type) => {
    const updateChar = editCharacter;
    updateChar.actions[type].push('');
    updateCharacter(updateChar);
  };

  const deleteRow = (index, type) => {
    const updateChar = editCharacter;
    updateChar.actions[type].splice(index, 1);
    updateCharacter(updateChar);
  };

  const renderMeleeStrike = (entry, index) => {
    const entryRender = (
      <TextField
        onChange={e => handleUpdate(e, 'melee', index)}
        id={`melee-${index}`}
        helperText='Melee Strike'
        value={entry}
        {...inputProps}
      />
    );
    return entryRender;
  };

  const renderRangedStrike = (entry, index) => {
    const entryRender = (
      <TextField
        onChange={e => handleUpdate(e, 'ranged', index)}
        id={`ranged-${index}`}
        helperText='Ranged Strike'
        value={entry}
        {...inputProps}
      />
    );
    return entryRender;
  };

  return (
    <div>
      <Grid container spacing={16} justify='flex-start'>
        <Grid container spacing={16} justify='flex-start'>
          <Grid item xs={1} />
          <Grid item xs={3}>
            <EditTitleStyle>Actions</EditTitleStyle>
            <GradientHeadingUnder />
          </Grid>
          <Grid item xs={2}>
            <TextField
              onChange={e => handleUpdate(e, 'stride')}
              id='Stride'
              helperText='Stride'
              htmlFor='custom-css-standard-input'
              value={editCharacter.actions.stride}
              InputProps={{
                classes: {
                  root: classes.input,
                  input: classes.inputStride,
                }
              }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
              style={{ marginTop: '15px', marginBottom: '20px' }}
            />
          </Grid>
        </Grid>
        {editCharacter.actions.melee.map((entry, index) => {
          return (
            <Grid container spacing={16} justify='flex-start' direction='row'>
              <Grid item xs={1} />
              <Grid item xs={10}>
                {renderMeleeStrike(entry, index)}
                <Button type='button' bsClass={cssStyles.deleteButtonActions} onClick={() => deleteRow(index, 'melee')}>
                  <i className='fas fa-times-circle fa-lg' />
                </Button>
              </Grid>
            </Grid>
          );
        })}
        <Grid container spacing={16} justify='center' direction='row'>
          <Grid item xs={1} />
          <Grid item xs={4}>
            <Button type='button' bsClass={cssStyles.deleteButton} onClick={() => addRow('melee')}>
              Add Melee entry
              <i class='fas fa-plus-circle' style={{ marginLeft: '25px', marginBottom: '25px' }}></i>
            </Button>
          </Grid>
        </Grid>
        {editCharacter.actions.ranged.map((entry, index) => {
          return (
            <Grid container spacing={16} justify='flex-start' direction='row'>
              <Grid item xs={1} />
              <Grid item xs={10}>
                {renderRangedStrike(entry, index)}
                <Button type='button' bsClass={cssStyles.deleteButtonActions} onClick={() => deleteRow(index, 'ranged')}>
                  <i className='fas fa-times-circle fa-lg' />
                </Button>
              </Grid>
            </Grid>
          );
        })}
        <Grid container spacing={16} justify='center' direction='row'>
          <Grid item xs={1} />
          <Grid item xs={4}>
            <Button
              type='button'
              bsClass={cssStyles.deleteButton}
              onClick={() => addRow('ranged')}
            >
              Add Ranged entry
              <i
                className='fas fa-plus-circle'
                style={{ marginLeft: '17px' }}
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

CharacterEditActionsComponent.defaultProps = {
  editCharacter: new Character(),
};

CharacterEditActionsComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  editCharacter: PropTypes.object,
  updateCharacter: PropTypes.func.isRequired
};

export default withStyles(styles)(CharacterEditActionsComponent);
