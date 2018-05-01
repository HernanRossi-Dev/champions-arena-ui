import * as types from "../constants/ActionTypes";
import "whatwg-fetch";

/**
 * Registered User Actions Creators
 */
function createRegisteredUserStart(newUser) {
  return {
    type: types.CREATE_USER_START,
    payload: newUser
  };
}

export const createRegisteredUser = (newRegisteredUser, callbackRedirect) => {
  return function(dispatch, getState) {
    dispatch(createRegisteredUserStart(newRegisteredUser));
    fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRegisteredUser)
    }).then(response => {
      if (response.ok) {
        response.json().then(newUser => {
          console.log(newUser);
          console.log("newUser");
          // let authToken = newUser.authToken;
          newUser.created = new Date(newUser.created);
          dispatch({
            type: types.CREATE_USER_SUCCESS,
            newUser: newUser
          });
          // callbackRedirect();
        });
      } else {
        response.json().then(error => {
          alert(`Failed to create registered user: ${error.message}`);
          dispatch({
            type: types.CREATE_USER_FAIL,
            payload: error,
            error: true
          });
        });
      }
    });
  };
};

function logoutRegisteredUserStart() {
  return {
    type: types.USER_LOGOUT_START,
    payload: null
  };
}

export const logoutRegisteredUser = (callbackRedirect) => {
  return function(dispatch, getState) {
    dispatch(logoutRegisteredUserStart());

    let result = dispatch({
      type: types.USER_LOGOUT_SUCCESS,
      payload: null,
    });
    while (result === null) {
      console.log("waiting");
    }
    callbackRedirect();
  };
};

function loginRegisteredUserStart() {
  return {
    type: types.USER_LOGIN_START,
    payload: null
  };
}

export const loginRegisteredUser = callbackRedirect => {
  return function(dispatch, getState) {
    dispatch(loginRegisteredUserStart());
    dispatch({
      type: types.USER_LOGIN_SUCCESS
    });
    callbackRedirect();
  };
};

function fetchRegisteredUserStart() {
  return {
    type: types.FETCH_USER_START,
    payload: null
  };
}

export const fetchRegisteredUser = (filter = "", queryCallBack) => {
  return function(dispatch, getState) {
    dispatch(fetchRegisteredUserStart());
    fetch(`/api/users${filter}`).then(response => {
      if (response.ok) {
        response.json().then(data => {
          if (data.users && data.users.length === 1) {
            data = data.users[0];
          }
          let result = dispatch({
            type: types.FETCH_USER_SUCCESS,
            registeredUser: data
          });
          while (result === null) {
            console.log("waiting");
          }
          queryCallBack();
        });
      } else {
        response.json().then(error => {
          alert(`Failed to fetch characters: ${error.message}`);
          dispatch({
            type: types.FETCH_USER_FAIL,
            payload: error,
            error: true
          });
        });
      }
    });
  };
};

/**
 * Guest User actions creators
 */
function createGuestUserStart(newUser) {
  return {
    type: types.CREATE_GUEST_USER_START,
    payload: newUser
  };
}

export const createGuestUser = (newGuestUser, callbackRedirect) => {
  return function(dispatch, getState) {
    dispatch(createGuestUserStart(newGuestUser));
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

export const logoutGuestUser = (userName, callbackRedirect) => {
  return function(dispatch, getState) {
    dispatch(logoutGuestUserStart());
    fetch(`/api/users/${userName}`, {
      method: "DELETE"
    }).then(response => {
      if (!response.ok) {
        alert("Failed to delete user");
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
