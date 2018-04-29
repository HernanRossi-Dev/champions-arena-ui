import * as types from "../constants/ActionTypes";

const initialState = {
	currentUser: {},  //Need to have unique user names {firstName: 'John', lastName: 'Smith', userName: 'ladyBoner', email: 'blah@blah.ca'}
	loggedIn: null,
	authToken: '',
	currentUserName: ''
};
const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.CREATE_GUEST_USER_START:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			})
		case types.CREATE_GUEST_USER_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				currentUser: action.newGuest,
				currentUserName: action.newGuest.name,
				loggedIn: true
			})
		case types.CREATE_GUEST_USER_FAIL:
			return {
				...state
			};
		case types.USER_LOGOUT_START:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			})
		case types.USER_LOGOUT_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				authToken: '',
				currentUserName: '',
				loggedIn: false
			})

		case types.USER_LOGOUT_FAIL:
			return {
				...state
			};
		default:
			return {
				...state
			};
	}
}

export default userReducer;