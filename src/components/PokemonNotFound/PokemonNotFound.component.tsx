import React from 'react';
import { ViewProps } from 'react-native';

import { Text } from 'src/components';

import * as S from './PokemonNotFound.styles';
interface IPokemmonNotFound extends ViewProps {
  children: React.ReactNode;
}

const PokemonNotFound = ({ children, ...rest }: IPokemmonNotFound) => {
  return (
    <S.Container {...rest}>
      <Text fontSize={13} fontWeight="500" color="white">
        {children}
      </Text>
    </S.Container>
  );
};

export default PokemonNotFound;
