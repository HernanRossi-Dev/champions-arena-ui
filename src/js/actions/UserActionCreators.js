import * as types from "../constants/ActionTypes";
import "whatwg-fetch";

function creatingGuestUser(newUser) {
	return {
		type: types.CREATE_GUEST_USER_START,
		payload: newUser
	};
}

export const createGuestUser = newGuestUser => {
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
function logoutUserStart() {
	return {
		type: types.USER_LOGOUT_START,
		payload: null
	};
}

export const logoutUser = () => {
	return function(dispatch, getState) {
		dispatch(logoutUserStart());
				dispatch({
					type: types.USER_LOGOUT_SUCCESS,
					loggedOut: true

				})
	};
};