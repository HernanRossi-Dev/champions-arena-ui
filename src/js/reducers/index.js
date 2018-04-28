import characterReducer from './CharacterReducers';
import userReducer from './UserReducers';
import { combineReducers } from 'redux'



const rootReducer = combineReducers({
	characterReducer,
	userReducer
})

export default rootReducer;
