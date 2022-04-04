import React from 'react';

import { IGetSpeciesPokemonResult } from 'src/redux/pokemon/pokemon.types';
import { Text, Tag } from 'src/components';
import { groupEggsColor } from 'src/utils/specieTransformColor';

import * as S from './EggGroupList.styles';

interface IEggGroupList {
  speciesData: IGetSpeciesPokemonResult | undefined;
}

const EggGroupList = ({ speciesData }: IEggGroupList) => {
  return (
    <>
      <Text fontSize={18} fontWeight="700" marginTop={16} marginBottom={8}>
        Grupos de Ovos
      </Text>

      {speciesData && speciesData?.egg_groups?.length > 0 ? (
        <S.ContainerTypes>
          {speciesData?.egg_groups.map((egg) => (
            <Tag key={egg.name} color={groupEggsColor[egg.name]}>
              {egg.name}
            </Tag>
          ))}
        </S.ContainerTypes>
      ) : (
        <Text>Falha ao sincronizar :(</Text>
      )}
    </>
  );
};

export default EggGroupList;
