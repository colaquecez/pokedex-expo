export interface PokemonResponse {
  results: PokemonResult[];
  count: number;
  next: string;
  previous: string;
}

export interface PokemonResult {
  name: string;
  url: string;
  image: string;
  id?: string | number;
}

export interface IAbilitiesPokemon {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface ISpecies {
  name: string;
  url: string;
}

export interface ITypes {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface GetPokemonByNameResult {
  abilities: IAbilitiesPokemon[];
  species: ISpecies;
  types: ITypes[];
}

export interface EggGroups {
  name: string;
  url: string;
}

export interface GetSpeciesPokemonResult {
  color: {
    name: string;
  };
  egg_groups: EggGroups[];
}

export interface IPokemonInitialState {
  favorites: PokemonResult[];
}
