import React from 'react';

import { Text } from 'src/components';

import PokeballFavorite from '../../../assets/pokeball_favorite.svg';
import PokemonNotFound from '../PokemonNotFound/PokemonNotFound.component';
import * as S from './CardPokemon.styles';

interface ICardPokemon {
  name: string;
  image?: string;
  width?: number;
  isFavorite?: boolean;
  onPress?: () => void;
  textNotFound?: string;
}

const CardPokemon = ({
  width = 0,
  image,
  name,
  textNotFound = 'Quem é esse pokemon?',
  onPress,
  isFavorite = false
}: ICardPokemon) => {
  return (
    <S.Button testID="ButtonCardPokemonId" onPress={onPress}>
      <S.Container testID="ContainerCardPokemonId" width={width}>
        {image ? (
          <>
            <S.BackgroundImage
              width={width}
              blurRadius={100}
              source={{
                uri: image
              }}
            />
            <S.Image
              source={{
                uri: image
              }}
            />
          </>
        ) : (
          <PokemonNotFound testID="PokemonNotFoundId">
            {textNotFound}
          </PokemonNotFound>
        )}

        <Text fontSize={16} fontWeight="600" marginTop={8}>
          {name}
        </Text>

        {isFavorite && (
          <S.ContainerFavorite testID="FavoriteImageId">
            <PokeballFavorite width={20} height={20} />
          </S.ContainerFavorite>
        )}
      </S.Container>
    </S.Button>
  );
};
export default CardPokemon;
