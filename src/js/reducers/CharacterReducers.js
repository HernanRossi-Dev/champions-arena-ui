import * as types from "../constants/ActionTypes";
import store from "../store";

const initialState = {
	editCharacter: {},
  /**
	 name: this.state.name,
   class: this.state.class,
   race: this.state.characterRace,
   level: 1,
   XP: 0,
   STR: this.state.characterStats.STR,
   DEX: this.state.characterStats.DEX,
   CON: this.state.characterStats.CON,
   INT: this.state.characterStats.INT,
   WIS: this.state.characterStats.WIS,
   CHA: this.state.characterStats.CHA,
   attributePointsToSpend: 0,
   items: {},
   abilities: {},
   traits: {},
   characterNotes: [],
   type: "Player",
   gender: this.state.gender,
   alignment: this.state.alignment,
   favouredClass: this.state.favouredClass,
   racialBonus: this.state.racialBonus,
   user: store.getState().userReducer.currentUserName
   */
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
			});
		case types.FETCHING_CHARACTER_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				editCharacter: action.editCharacter

			});

		case types.UPDATING_CHARACTER:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false,
				editCharacter: action.updatedCharacter
			});
		case types.UPDATING_CHARACTER_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				editCharacter:  action.updatedCharacter
			});
		case types.FETCHING_CHARACTERS_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				characters: action.characters,
				numberOfCharacters: action.characters.length
			});
		case types.FETCHING_CHARACTERS:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			});
		case types.CREATING_CHARACTER_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				characters: state.characters.concat(action.character),
				numberOfCharacters: state.numberOfCharacters + 1,
			});
		case types.CREATING_CHARACTER:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			});
		case types.DELETING_CHARACTERS_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				characters: state.characters.filter(e => e._id !== action.characterID)
			});
		case types.DELETING_CHARACTERS_START:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			});
		case types.CLEAR_CHARACTER_EDIT:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				editCharacter: {}
			});
		default:
			return {
				...state
			};
	}
};

export default characterReducer;