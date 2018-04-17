import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunkMiddleWare from "redux-thunk";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const loggerMiddleWare = createLogger();

const store = createStore(
	rootReducer,
  applyMiddleware(thunkMiddleWare, loggerMiddleWare)
);

// export default () => {
// 	let store = storeN
// 	let persistor = persistStore(store)
// 	return { store, persistor}
// }

export default store;
