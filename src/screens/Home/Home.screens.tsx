import React, { useEffect, useState } from 'react';
import { FlatList, Dimensions } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useLazyGetPokemonsQuery } from 'src/redux/pokemon/pokemon.api';
import { IPokemonResult } from 'src/redux/pokemon/pokemon.types';
import { CardPokemon, Text, Error, Loading, Layout } from 'src/components';
import { RootStackParamList } from 'src/shared/routes/Main.routes';
import columnWrapperStyle from 'src/styles/columWrapperListPokemon';
import useAppSelector from 'src/hook/useSelector';

import Pokeball from '../../../assets/pokebolaoverlay.svg';
import * as S from './Home.styles';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'ListHome'>;

const Home = ({ navigation }: NavigationProps) => {
  const [page, setPage] = useState(0);
  const [results, setResults] = useState<IPokemonResult[]>([]);
  const { favorites } = useAppSelector((state) => state.pokemon);

  const [
    triggerGetPokemon,
    {
      data: getPokemon,
      isError: getPokemonIsError,
      isFetching: getPokemonIsLoading
    }
  ] = useLazyGetPokemonsQuery();

  useEffect(() => {
    triggerGetPokemon(page);
  }, [page]);

  useEffect(() => {
    setResults(getPokemon ? [...results, ...getPokemon?.results] : []);
  }, [getPokemon]);

  const { width: widthScreen } = Dimensions.get('window');

  if (getPokemonIsError) {
    return <Error refetch={() => triggerGetPokemon(page)} />;
  }

  return (
    <Layout>
      <S.ContainerSvg>
        <Pokeball width={250} height={250} />
      </S.ContainerSvg>
      <FlatList
        ListFooterComponent={getPokemonIsLoading ? <Loading /> : null}
        ListHeaderComponent={
          <Text
            fontWeight="700"
            fontSize={32}
            marginLeft={16}
            marginBottom={24}
            marginTop={32}
          >
            Pokedex
          </Text>
        }
        data={results}
        numColumns={2}
        onEndReached={() => {
          setPage((state) => state + 20);
        }}
        onEndReachedThreshold={0.01}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={columnWrapperStyle}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <CardPokemon
              isFavorite={favorites.some((favorite) => favorite.id === item.id)}
              onPress={() => navigation.navigate('Details', item)}
              image={item.image}
              width={widthScreen / 2 - 16}
              name={item.name}
            />
          );
        }}
      />
    </Layout>
  );
};

export default Home;
