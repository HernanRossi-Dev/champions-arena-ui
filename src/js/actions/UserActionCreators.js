import * as types from "../constants/ActionTypes";
import "whatwg-fetch";

function creatingGuestUser(newUser) {
  return {
    type: types.CREATE_GUEST_USER_START,
    payload: newUser
  };
}

export const createGuestUser = (newGuestUser, callbackRedirect) => {
  return function(dispatch, getState) {
    dispatch(creatingGuestUser(newGuestUser));
    fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGuestUser)
    }).then(response => {
      if (response.ok) {
        response.json().then(updatedUser => {
          updatedUser.created = new Date(updatedUser.created);
          dispatch({
            type: types.CREATE_GUEST_USER_SUCCESS,
            newGuest: updatedUser
          });
          callbackRedirect();
        });
      } else {
        response.json().then(error => {
          alert(`Failed to create guest user: ${error.message}`);
          dispatch({
            type: types.CREATE_GUEST_USER_FAIL,
            payload: error,
            error: true
          });
        });
      }
    });
  };
};
function logoutGuestUserStart() {
  return {
    type: types.USER_LOGOUT_START,
    payload: null
  };
}

export const logoutGuestUser = (userName,callbackRedirect) => {
  return function(dispatch, getState) {
    dispatch(logoutGuestUserStart());
    fetch(`/api/users/${userName}`, {
      method: "DELETE"
    }).then(response => {
      if (!response.ok) {
        alert("Failed to delete character");
        dispatch({
          type: types.USER_LOGOUT_FAIL,
          payload: error,
          error: true
        });
      } else {
        dispatch({
          type: types.USER_LOGOUT_SUCCESS,
          loggedOut: true
        });
	      callbackRedirect();
      }
    });
  };
};
