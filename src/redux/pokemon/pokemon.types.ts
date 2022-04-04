export interface IPokemonResponse {
  results: IPokemonResult[];
  count: number;
  next: string;
  previous: string;
}

export interface IPokemonResult {
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

export interface IGetPokemonByNameResult {
  abilities: IAbilitiesPokemon[];
  species: ISpecies;
  types: ITypes[];
}

export interface IEggGroups {
  name: string;
  url: string;
}

export interface IGetSpeciesPokemonResult {
  color: {
    name: string;
  };
  egg_groups: IEggGroups[];
}

export interface IPokemonInitialState {
  favorites: IPokemonResult[];
}
