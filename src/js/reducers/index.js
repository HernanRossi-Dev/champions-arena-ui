import { CREATE_HERO, LOAD_HEROS } from '../constants/action-types'

const initialState = {
  heros: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_HEROS:
      return {
        ...state,
        heros: action.heros
      };
    case CREATE_HERO:
      return { ...state, heros: [...state.heros, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
