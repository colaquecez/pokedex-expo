import styled from 'styled-components/native';
import { Dimensions, Platform } from 'react-native';

interface ISafeAreaView {
  backgroundColor: string;
}

const { width, height } = Dimensions.get('window');

export const Image = styled.Image`
  width: ${width * 0.7}px;
  height: ${height * 0.3}px;
  align-self: center;
`;

export const ContainerTypes = styled.View`
  flex-direction: row;
`;

export const SafeAreaView = styled.SafeAreaView<ISafeAreaView>`
  flex: 1;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : '#fff'};
`;

export const Wrapper = styled.View`
  flex: 1;
  padding-top: ${Platform.select({ android: 32, ios: 8 })}px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const WhiteContainer = styled.View`
  padding: 32px;
  z-index: -1;
  flex: 1;
  background-color: ${({ theme }) => theme.WHITE};
  margin: -16px -16px -34px -16px;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
`;

export const ContainerPokeball = styled.View`
  position: absolute;
  right: 0;
  top: 10%;
  z-index: -1;
`;

export const ContainerDot = styled.View`
  z-index: -1;
  top: 30%;
  position: absolute;
  left: 10%;
`;
