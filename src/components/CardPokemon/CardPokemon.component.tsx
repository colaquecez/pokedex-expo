import React from 'react';
import { Text } from '../../components';
import PokemonNotFound from '../PokemonNotFound/PokemonNotFound.component';
import * as S from './CardPokemon.styles';

interface ICardPokemon {
  name: string;
  image?: string;
  width?: number;
  onPress?: () => void;
}

const CardPokemon = ({ width = 0, image, name, onPress }: ICardPokemon) => {
  return (
    <S.Button onPress={onPress}>
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
            Quem é esse pokemon?
          </PokemonNotFound>
        )}

        <Text fontSize={16} fontWeight="600" marginTop={8}>
          {name}
        </Text>
      </S.Container>
    </S.Button>
  );
};
export default CardPokemon;
