import * as types from "../constants/ActionTypes";

const initialState = {
	currentUser: {},  //Need to have unique user names {name: 'John',email: 'blah@blah.ca', password: 'alsdgqorjgpo'}
	loggedIn: null,
	authToken: '',
	currentUserName: '',
};
const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.CREATE_GUEST_USER_START:
			return Object.assign({}, state, {
				currentUser:{},
				currentUserName: '',
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

			case types.CREATE_USER_START:
			return Object.assign({}, state, {
				currentUser:{},
				currentUserName: '',
				isFetching: true,
				didInvalidate: false
			})
		case types.CREATE_USER_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				currentUser: action.newUser,
				loggedIn: false
			})
		case types.CREATE_USER_FAIL:
			return {
				...state
			};
			case types.FETCH_USER_START:
			return Object.assign({}, state, {
				currentUser: {},
				currentUserName: '',
				isFetching: true,
				didInvalidate: false
			})
		case types.FETCH_USER_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				currentUser: action.registeredUser,
				loggedIn: false,
			})
		case types.FETCH_USER_FAIL:
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