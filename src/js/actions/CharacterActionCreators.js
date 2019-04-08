import * as types from "../constants/ActionTypes";
import "whatwg-fetch";
import store from "../store/index";

export const clearCharacterEdit = () => {
  return {
    type: types.CLEAR_CHARACTER_EDIT
  };
};

export const setNumberOfCharacters = (numberOfCharacters) => {
  return (dispatch, getState) => {
    dispatch({
      type: types.UPDATE_NUMBER_OF_CHARACTERS,
      numberOfCharacters
    });
  }
};
