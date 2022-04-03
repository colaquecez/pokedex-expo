import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  GetPokemonByNameResult,
  GetSpeciesPokemonResult,
  PokemonResponse
} from './pokemon.types';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemons: builder.query<PokemonResponse, number>({
      query: (page = 0) => `pokemon?offset=${page}&limit=20`,
      transformResponse: (response: PokemonResponse) => {
        const results = response.results.map((pokemon) => {
          const idPokemon = pokemon?.url
            ?.split('pokemon')?.[1]
            .replace?.(/\//g, '');

          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${idPokemon}.png`;

          return {
            ...pokemon,
            id: idPokemon,
            image
          };
        });
        return { ...response, results: results };
      }
    }),
    getPokemonByName: builder.query<GetPokemonByNameResult, string>({
      query: (name) => `pokemon/${name}`
    }),
    getPokemonSpecies: builder.query<GetSpeciesPokemonResult, string>({
      query: (name) => `pokemon-species/${name}`
    })
  })
});

export const {
  useGetPokemonByNameQuery,
  useGetPokemonSpeciesQuery,
  useLazyGetPokemonByNameQuery,
  useGetPokemonsQuery,
  useLazyGetPokemonsQuery
} = pokemonApi;
