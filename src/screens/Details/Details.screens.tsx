import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons/';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'styled-components';

import { RootStackParamList } from 'src/shared/routes/Main.routes';
import {
  useGetPokemonByNameQuery,
  useGetPokemonSpeciesQuery
} from 'src/redux/pokemon/pokemon.api';
import { Text, Error, Loading } from 'src/components';
import { treatColors } from 'src/utils/specieTransformColor';
import useAppDispatch from 'src/hook/useDispatch';
import useAppSelector from 'src/hook/useSelector';
import { managePokemonAction } from 'src/redux/pokemon/pokemon.reducer';

import Pokeball from '../../../assets/pokebolaoverlaytransparent.svg';
import Dots from '../../../assets/dots.svg';
import * as S from './Details.styles';
import TypesList from './components/TypeList/TypeList.component';
import AbilitiesList from './components/AbilitiesList/AbilitiesList.component';
import EggGroupList from './components/EggGroupList/EggGroupList.component';
import FavoritePokemon from './components/FavoritePokemon/FavoritePokemon.component';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({ navigation, route }: NavigationProps) => {
  const { image, name, url, id } = route.params;

  const {
    data: generalData,
    isError: generalDataIsError,
    isFetching: generalDataLoading,
    refetch: generalDataRefetch
  } = useGetPokemonByNameQuery(name);

  const {
    data: speciesData,
    isFetching: speciesLoading,
    isError: speciesIsError,
    refetch: speciesRefetch
  } = useGetPokemonSpeciesQuery(name);

  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state.pokemon);
  const { WHITE } = useTheme();

  const colorPokemon = speciesData?.color.name as string;
  const { canGoBack, goBack } = navigation;

  const isMyFavoritePokemon = favorites.some((pokemon) => pokemon.id === id);

  const loading = generalDataLoading || speciesLoading;
  const isError = speciesIsError || generalDataIsError;

  const refetchApiError = () => {
    if (speciesIsError) {
      return speciesRefetch();
    }
    if (generalDataIsError) {
      return generalDataRefetch();
    }
    return null;
  };

  return (
    <S.SafeAreaView backgroundColor={treatColors[colorPokemon]}>
      <StatusBar style={'light'} />
      <S.Wrapper>
        {canGoBack() && (
          <MaterialCommunityIcons
            onPress={goBack}
            color="white"
            name="arrow-left"
            size={24}
          />
        )}
        <Text
          fontSize={32}
          textAlign="center"
          color={WHITE}
          marginTop={16}
          fontWeight="700"
          textTransform="capitalize"
        >
          {name}
        </Text>
        <S.Image resizeMode="contain" source={{ uri: image }} />
        <S.ContainerPokeball>
          <Pokeball width={200} height={200} />
        </S.ContainerPokeball>

        <S.ContainerDot>
          <Dots width={100} height={100} />
        </S.ContainerDot>
        <S.WhiteContainer>
          {isError && (
            <Error
              tryAgainMessage="Vamos tentar novamente?"
              refetch={refetchApiError}
              title=" Houve um erro ao tentar acessar os dados da Pokédex :("
            />
          )}
          {loading ? (
            <Loading />
          ) : (
            <>
              <TypesList typesData={generalData} />

              <AbilitiesList abilitieData={generalData} />

              <EggGroupList speciesData={speciesData} />

              <FavoritePokemon
                isFavorite={isMyFavoritePokemon}
                onPress={() => {
                  dispatch(
                    managePokemonAction({
                      image,
                      name,
                      url,
                      id
                    })
                  );
                }}
              />
            </>
          )}
        </S.WhiteContainer>
      </S.Wrapper>
    </S.SafeAreaView>
  );
};

export default Details;
