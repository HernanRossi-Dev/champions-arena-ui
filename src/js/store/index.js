import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from "../reducers/index";
import thunkMiddleWare from "redux-thunk";
import {createLogger} from "redux-logger";
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

const persistConfig = {
	key: 'root',
	storage,
	stateReconciler: hardSet
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const loggerMiddleWare = createLogger();

const store = createStore(
	persistedReducer,
  applyMiddleware(thunkMiddleWare, loggerMiddleWare)
);

// export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export default store;

