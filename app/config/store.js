import Reactotron from 'reactotron-react-native';

import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['mealReducer', 'ingredientReducer'],
};

const pReducer = persistReducer(persistConfig, reducers);

export const store = Reactotron.createStore(pReducer, {}, applyMiddleware(ReduxThunk));
export const persistor = persistStore(store);
