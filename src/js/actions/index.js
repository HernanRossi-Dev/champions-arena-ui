import * as types from "../constants/action-types";
import "whatwg-fetch";

export const createHero = hero => ({
  type: types.CREATE_HERO,
  payload: hero
});

export const fetchingHeros = bool => {
	return {
		type: types.FETCHING_HEROS,
		isLoading: bool
	};
}

export const fetchHerosFail = bool => {
	return {
		type: types.FETCHING_HEROS_FAIL,
		hasErrored: bool
	};
}

export const fetchHerosSuccess = location => ({
  type: types.FETCHING_HEROS_SUCCESS,
	payload: location
});