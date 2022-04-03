import React from 'react';

import { Text } from 'src/components';

import PokeballFavorite from '../../../../../assets/pokeball_favorite.svg';
import PokeballUnFavorite from '../../../../../assets/pokeball_unfavorite.svg';

import * as S from './FavoritePokemon.styles';

interface IFavoritePokemon {
  isFavorite?: boolean;
  onPress?: () => void;
}

const FavoritePokemon = ({ isFavorite, onPress }: IFavoritePokemon) => {
  return (
    <S.PokeBallContainer testID="FavoritePokemonTestId" onPress={onPress}>
      {isFavorite ? (
        <PokeballFavorite width={90} height={90} />
      ) : (
        <PokeballUnFavorite width={90} height={90} />
      )}

      <Text marginTop={10} fontWeight="500" textAlign="center">
        {isFavorite ? 'Soltar Pokemon' : 'Capturar Pokemon'}
      </Text>
    </S.PokeBallContainer>
  );
};

export default FavoritePokemon;
