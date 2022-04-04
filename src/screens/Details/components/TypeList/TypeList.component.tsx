import React from 'react';

import { Text, Tag } from 'src/components';
import { IGetPokemonByNameResult } from 'src/redux/pokemon/pokemon.types';
import { typesPokemonColor } from 'src/utils/specieTransformColor';

import * as S from './Types.styles';

interface ITypes {
  typesData: IGetPokemonByNameResult | undefined;
}

const TypesList = ({ typesData }: ITypes) => {
  return (
    <>
      <Text fontSize={18} fontWeight="700" marginTop={16} marginBottom={8}>
        Tipos
      </Text>

      {typesData && typesData?.types?.length > 0 ? (
        <S.ContainerTypes>
          {typesData?.types.map((types) => (
            <Tag
              key={types.type.name}
              color={typesPokemonColor[types.type.name]}
            >
              {types.type.name}
            </Tag>
          ))}
        </S.ContainerTypes>
      ) : (
        <Text>Falha ao sincronizar :(</Text>
      )}
    </>
  );
};
export default TypesList;
