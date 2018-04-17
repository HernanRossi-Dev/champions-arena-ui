import * as types from "../constants/action-types";

const initialState = {
	editHero: {},
  heros: [],
  isFetching: false,
  didInvalidate: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
	  case types.FETCHING_HERO:
		  return Object.assign({}, state, {
			  isFetching: true,
			  didInvalidate: false
		  })
	  case types.FETCHING_HERO_SUCCESS:
		  return Object.assign({}, state, {
			  isFetching: false,
			  didInvalidate: false,
			  editHero: action.edithero
		  })

	  case types.UPDATING_HERO:
		  return Object.assign({}, state, {
			  isFetching: true,
			  didInvalidate: false,
			  editHero: action.updateHero
		  })
	  case types.UPDATING_HERO_SUCCESS:
	  	console.log('action.updateHero ');
	  	console.log(action.updatedHero );
		  return Object.assign({}, state, {
			  isFetching: false,
			  didInvalidate: false,
			  editHero:  action.updatedHero
		  })
	  case types.FETCHING_HEROS_SUCCESS:
      return Object.assign({}, state, {
	      isFetching: false,
	      didInvalidate: false,
	      heros: action.heros
      })
    case types.FETCHING_HEROS:
	    return Object.assign({}, state, {
		    isFetching: true,
		    didInvalidate: false
	    })

    case types.CREATING_HERO_SUCCESS:
      return Object.assign({}, state, {
	      isFetching: false,
	      didInvalidate: false,
	      heros: state.heros.concat(action.hero)
      })
    case types.CREATING_HERO:
      return Object.assign({}, state, {
	      isFetching: true,
	      didInvalidate: false
      })
	  case types.DELETING_HEROS_SUCCESS:
		  return Object.assign({}, state, {
			  isFetching: false,
			  didInvalidate: false,
        heros: state.heros.filter(e => e._id !== action.heroID)
		  })
	  case types.DELETING_HEROS_START:
		  return Object.assign({}, state, {
			  isFetching: true,
			  didInvalidate: false
		  })
	  case types.CLEAR_HERO_EDIT:
		  return Object.assign({}, state, {
			  isFetching: false,
			  didInvalidate: false,
			  editHero: {}
		  })
    default:
      return {
        ...state
      };
  }
};

export default rootReducer;
