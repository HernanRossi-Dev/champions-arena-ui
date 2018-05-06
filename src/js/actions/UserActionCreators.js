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

export const createRegisteredUser = (newRegisteredUser) => {
  return function(dispatch, getState) {
    dispatch(createRegisteredUserStart(newRegisteredUser));
	  fetch('api/authenticate').then(response => {
		  response.json().then(data => {
			  let token = JSON.parse(data.body);
			  fetch("/api/users", {
				  method: "POST",
				  headers: {"Content-Type": "application/json",authorization: token.token_type + ' ' + token.access_token},
				  body: JSON.stringify(newRegisteredUser)
			  }).then(response => {
				  if (response.ok) {
					  response.json().then(newUser => {

						  newUser.created = new Date(newUser.created);
						  dispatch({
							  type: types.CREATE_USER_SUCCESS,
							  newUser: newUser
						  });

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
		  })
	  })
  };
};

function logoutRegisteredUserStart() {
  return {
    type: types.USER_LOGOUT_START,
    payload: null
  };
}

export const logoutRegisteredUser = () => {
  return function(dispatch, getState) {
    dispatch(logoutRegisteredUserStart());

    return dispatch({
      type: types.USER_LOGOUT_SUCCESS,
      payload: null,
    });
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
	  fetch('api/authenticate').then(response => {
		  response.json().then(data => {
			  let token = JSON.parse(data.body);
			  dispatch({
				  type: types.USER_LOGIN_SUCCESS,
				  auth0Token: token.token_type + ' ' + token.access_token,
			  })
			  callbackRedirect();
		  })
	  })
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

	  fetch('api/authenticate').then(response => {
		  response.json().then(data => {
			  let token = JSON.parse(data.body);
			  fetch(`/api/users${filter}`, {
					  method: 'GET',
					  headers: {authorization: token.token_type + ' ' + token.access_token}
				  },
			  ).then(response => {
				  if (response.ok) {
					  response.json().then(data => {
						  if (data.users && data.users.length === 1) {
							  data = data.users[0];
						  }
						  function resolveDispatch () {
							  return new Promise(resolve => {
								  resolve(dispatch({
									  type: types.FETCH_USER_SUCCESS,
									  registeredUser: data
								  }));
							  })
						  }
						  async function asyncDispatch () {
							  let result = await resolveDispatch();
							  queryCallBack();
							  console.log(result);
						  }
						  asyncDispatch();
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
		  });
	  })
  }
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
	  fetch('api/authenticate').then(response => {
		  response.json().then(data => {
			  let token = JSON.parse(data.body);
			  fetch("/api/users", {
				  method: "POST",
				  headers: {"Content-Type": "application/json", authorization: token.token_type + ' ' + token.access_token},
				  body: JSON.stringify(newGuestUser)
			  }).then(response => {
				  if (response.ok) {
					  response.json().then(updatedUser => {
						  updatedUser.created = new Date(updatedUser.created);
						  dispatch({
							  type: types.CREATE_GUEST_USER_SUCCESS,
							  newGuest: updatedUser,
							  auth0Token: token.token_type + ' ' + token.access_token,
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
		  })
	  })
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

    fetch('api/authenticate').then(response => {
      response.json().then(data => {
        let token = JSON.parse(data.body);
        fetch(`/api/users/${userName}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json", authorization: token.token_type + ' ' + token.access_token },
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
      })
    })
  };
};
