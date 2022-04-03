import React, { useEffect, useState } from 'react';
import { FlatList, Dimensions } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { CardPokemon, Input, Text, Layout } from 'src/components';
import { RootStackParamList } from 'src/shared/routes/Main.routes';
import columnWrapperStyle from 'src/styles/columWrapperListPokemon';
import useAppSelector from 'src/hook/useSelector';

import Pokeball from '../../../assets/pokebolaoverlay.svg';
import * as S from './Favorites.styles';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'ListHome'>;

const Favorites = ({ navigation }: NavigationProps) => {
  const [search, setSearch] = useState('');
  const { favorites } = useAppSelector((state) => state.pokemon);
  const [filteredData, setFilteredData] = useState(favorites);

  useEffect(() => {
    if (!search) {
      setFilteredData(favorites);
      return;
    }

    setFilteredData(
      favorites.filter((item) =>
        item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    );
  }, [search]);

  const { width: widthScreen } = Dimensions.get('window');

  return (
    <Layout>
      <S.ContainerSvg>
        <Pokeball width={250} height={250} />
      </S.ContainerSvg>
      <FlatList
        ListEmptyComponent={() => (
          <Text
            marginLeft={16}
            marginRight={16}
            fontSize={16}
            textTransform="none"
            fontWeight="500"
            textAlign="center"
          >
            {search &&
              filteredData.length === 0 &&
              'Pokemon não encontrado, você pode capturar indo na tela principal :)'}

            {favorites.length === 0 &&
              !search &&
              'Você não capturou nenhum pokemon ainda :('}
          </Text>
        )}
        ListHeaderComponent={
          <S.ContainerHeader>
            <Text
              fontWeight="700"
              fontSize={32}
              marginBottom={16}
              marginTop={32}
            >
              Favoritos
            </Text>
            <Input value={search} onChangeText={(text) => setSearch(text)} />
          </S.ContainerHeader>
        }
        data={search ? filteredData : favorites}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={columnWrapperStyle}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <CardPokemon
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

export default Favorites;
