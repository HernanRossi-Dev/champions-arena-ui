import * as types from "../constants/ActionTypes";

export const clearCharacterEdit = () => {
  return {
    type: types.CLEAR_CHARACTER_EDIT
  };
};

export const setNumberOfCharacters = (numberOfCharacters) => {
  return (dispatch) => {
    dispatch({
      type: types.UPDATE_NUMBER_OF_CHARACTERS,
      numberOfCharacters
    });
  }
};
