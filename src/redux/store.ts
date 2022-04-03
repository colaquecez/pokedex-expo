import AsyncStorage from '@react-native-async-storage/async-storage';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';

import { pokemonApi } from '../redux/pokemon/pokemon.api';
import pokemonReducer from './pokemon/pokemon.reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['pokemon']
};

const reducers = combineReducers({
  pokemon: pokemonReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

const middlewares = [pokemonApi.middleware];

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      },
      thunk: true
    }).concat(middlewares)
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };

setupListeners(store.dispatch);
