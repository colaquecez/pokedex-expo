interface ITreatColors {
  [color: string]: string;
}

export const colors = {
  black: 'black',
  blue: '#85CAFE',
  softBlue: '#94d1ff',
  lightBlue: '#5ebaff',
  brown: '#FD6C6D',
  lightBrown: '#FD6C6D',
  gray: 'black',
  green: '#4BD0B0',
  darkGreen: '#4BD0B0',
  lightGreen: '#4BD0B0',
  pink: '#ff6e97',
  purple: '#aa6eff',
  red: '#FD6C6D',
  white: 'black',
  yellow: '#FFD76E',
  orange: '#ffaa6e',
  normal: '#6D6D4E',
  fire: '#F08030',
  fighting: '#C03028',
  water: '#6890F0',
  flying: '#A890F0',
  grass: '#78C850',
  poison: '#A040A0',
  electric: '#F8D030',
  ground: '#E0C068',
  psychic: '#F85888',
  rock: '#B8A038',
  ice: '#98D8D8',
  bug: '#A8B820',
  dragon: '#7038F8',
  ghost: '#705898',
  dark: '#705848',
  steel: '#B8B8D0',
  fairy: '#EE99AC'
};

export const treatColors: ITreatColors = {
  black: colors.black,
  blue: colors.blue,
  brown: colors.brown,
  gray: colors.gray,
  green: colors.green,
  pink: colors.pink,
  purple: colors.purple,
  red: colors.red,
  white: colors.white,
  yellow: colors.yellow
};

export const groupEggsColor: ITreatColors = {
  bug: colors.darkGreen,
  monster: colors.purple,
  ground: colors.lightBrown,
  flying: colors.softBlue,
  plant: colors.lightGreen,
  humanshape: colors.purple,
  fairy: colors.purple,
  water3: colors.lightBlue,
  water1: colors.lightBlue,
  water2: colors.lightBlue,
  'no-eggs': colors.purple,
  indeterminate: colors.purple,
  dragon: colors.orange,
  mineral: colors.purple,
  ditto: colors.purple
};

export const typesPokemonColor: ITreatColors = {
  normal: colors.normal,
  fire: colors.fire,
  fighting: colors.fighting,
  water: colors.water,
  flying: colors.flying,
  grass: colors.grass,
  poison: colors.poison,
  electric: colors.electric,
  ground: colors.ground,
  psychic: colors.psychic,
  rock: colors.rock,
  ice: colors.ice,
  bug: colors.bug,
  dragon: colors.dragon,
  ghost: colors.ghost,
  dark: colors.dark,
  steel: colors.steel,
  fairy: colors.fairy
};
