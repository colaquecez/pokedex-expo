import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { pokemonApi } from '../redux/pokemon/pokemon.api';

const reducers = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer
});

const middlewares = [pokemonApi.middleware];

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true
    }).concat(middlewares)
});

export default store;

setupListeners(store.dispatch);
