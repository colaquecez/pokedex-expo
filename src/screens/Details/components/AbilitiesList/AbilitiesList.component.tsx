import React from 'react';
import { Text } from 'src/components';
import { IGetPokemonByNameResult } from 'src/redux/pokemon/pokemon.types';

interface IAbilitiesList {
  abilitieData: IGetPokemonByNameResult | undefined;
}

const AbilitiesList = ({ abilitieData }: IAbilitiesList) => {
  return (
    <>
      <Text fontSize={18} fontWeight="700" marginTop={16} marginBottom={8}>
        Habilidades
      </Text>
      {abilitieData && abilitieData?.abilities?.length > 0 ? (
        <>
          {abilitieData?.abilities.map((abilities) => (
            <Text key={abilities.ability.name}>{abilities.ability.name}</Text>
          ))}
        </>
      ) : (
        <Text>Falha ao sincronizar :(</Text>
      )}
    </>
  );
};

export default AbilitiesList;
