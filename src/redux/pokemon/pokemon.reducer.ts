import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IPokemonInitialState,
  PokemonResponse,
  PokemonResult
} from './pokemon.types';

const initialState: IPokemonInitialState = {
  favorites: []
};

export const PokemonReducer = createSlice({
  initialState,
  name: 'pokemon',
  reducers: {
    managePokemonAction: (state, action: PayloadAction<PokemonResult>) => {
      const alreadyAdded = state.favorites?.findIndex?.(
        (item) => item.id === action.payload.id
      );

      if (alreadyAdded >= 0) {
        const myPokemons = state.favorites;
        myPokemons.splice(alreadyAdded, 1);
        state.favorites = myPokemons;
        return;
      }

      state.favorites = [...state.favorites, action.payload];
    }
  }
});

export const { managePokemonAction } = PokemonReducer.actions;

export default PokemonReducer.reducer;
