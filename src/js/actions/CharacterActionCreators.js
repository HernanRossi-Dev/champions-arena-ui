import * as types from "../constants/ActionTypes";
import "whatwg-fetch";
import store from "../store/index";

export const clearCharacterEdit = () => {
  return {
    type: types.CLEAR_CHARACTER_EDIT
  };
};

function updatingCharacter() {
  return {
    type: types.UPDATING_CHARACTER
  };
}

export const updateCharacter = (updateCharacter, callBackSetState) => (dispatch) => {
  const URL = `/api/characters/${updateCharacter._id}`;
  dispatch(updatingCharacter());
  fetch(URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: store.getState().userReducer.authToken
    },
    body: JSON.stringify(updateCharacter)
  }).then((response) => {
    if (!response.ok) {
      response.json().then(error => {
        alert(`Failed to update character: ${error}`);
        dispatch({
          type: types.UPDATING_CHARACTER_FAIL,
          payload: error,
          error: true
        });
      });
    } else {
      response.json().then((data) => {
        function resolveDispatch() {
          return new Promise((resolve) => {
            resolve(
              dispatch({
                type: types.UPDATING_CHARACTER_SUCCESS,
                updatedCharacter: data
              })
            );
          });
        }
        async function asyncDispatch() {
          await resolveDispatch();
	        callBackSetState();
        }
        asyncDispatch();
      });
    }
  });
};

function requestCharacter(URL) {
  return {
    type: types.FETCHING_CHARACTER,
    url: URL
  };
}

export const fetchCharacter = (characterID, callbackSetState) => {
  return (dispatch, getState) => {
    dispatch(requestCharacter(URL));
    fetch(`/api/characters/${characterID}`, {
      method: "GET",
      headers: { authorization: store.getState().userReducer.authToken }
    }).then((response) => {
      if (!response.ok) {
        response.json().then((error) => {
          alert(`Failed to fetch character: ${error.message}`);
          dispatch({
            type: types.FETCHING_CHARACTER_FAIL,
            payload: error,
            error: true
          });
        });
      } else {
        response.json().then((data) => {
          function resolveDispatch() {
            return new Promise((resolve) => {
              resolve(
                dispatch({
                  type: types.FETCHING_CHARACTER_SUCCESS,
                  editCharacter: data
                })
              );
            });
          }
          async function asyncDispatch() {
            const result = await resolveDispatch();
            callbackSetState();
          }
          asyncDispatch();
        });
      }
    });
  };
};

function deletingCharacter(characterID) {
  return {
    type: types.DELETING_CHARACTERS_START,
    id: characterID
  };
}

export const deleteCharacter = (characterID) => {
  return (dispatch, getState) => {
    dispatch(deletingCharacter(characterID));
    fetch(`/api/characters/${characterID}`, {
      method: "DELETE",
      headers: { authorization: store.getState().userReducer.authToken }
    }).then((response) => {
      if (!response.ok) {
        alert("Failed to delete character");
        dispatch({
          type: types.DELETING_CHARACTERS_FAIL,
          payload: response.status,
          error: true
        });
      } else {
        dispatch({
          type: types.DELETING_CHARACTERS_SUCCESS,
          characterID: characterID
        });
      }
    });
  };
};

function requestCharacterList(URL) {
  return {
    type: types.FETCHING_CHARACTERS,
    url: URL
  };
}

export const fetchCharacters = (filter = "") => (dispatch) => {
  dispatch(requestCharacterList(filter));
  fetch(`/api/characters${filter}`, {
    method: "GET",
    headers: { authorization: store.getState().userReducer.authToken }
  }).then((response) => {
    if (response.ok) {
      response.json().then((data) => {
        dispatch({
          type: types.FETCHING_CHARACTERS_SUCCESS,
          characters: data.characters
        });
      });
    } else {
      response.json().then((error) => {
        alert(`Failed to fetch characters: ${error.message}`);
        dispatch({
          type: types.FETCHING_CHARACTERS_FAIL,
          payload: error,
          error: true
        });
      });
    }
  });
};
