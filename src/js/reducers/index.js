import { CREATE_HERO } from "../constants/action-types";

const initialState = {
  heros: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_HERO:
      return { ...state, heros: [...state.heros, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
