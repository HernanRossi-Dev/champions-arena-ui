import * as types from "../constants/ActionTypes";

const initialState = {
	editCharacter: {},
	characters: [],
	isFetching: false,
	didInvalidate: false,
	numberOfCharacters: 0,
};

const characterReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCHING_CHARACTER:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			})
		case types.FETCHING_CHARACTER_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				editCharacter: action.editCharacter

			})

		case types.UPDATING_CHARACTER:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false,
				editCharacter: action.updatedCharacter
			})
		case types.UPDATING_CHARACTER_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				editCharacter:  action.updatedCharacter
			})
		case types.FETCHING_CHARACTERS_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				characters: action.characters,
				numberOfCharacters: action.characters.length
			})
		case types.FETCHING_CHARACTERS:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			})

		case types.CREATING_CHARACTER_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				characters: state.characters.concat(action.character),
				numberOfCharacters: state.numberOfCharacters + 1,
			})
		case types.CREATING_CHARACTER:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			})
		case types.DELETING_CHARACTERS_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				characters: state.characters.filter(e => e._id !== action.characterID)
			})
		case types.DELETING_CHARACTERS_START:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			})
		case types.CLEAR_CHARACTER_EDIT:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				editCharacter: {}
			})
		default:
			return {
				...state
			};
	}
};

export default characterReducer;