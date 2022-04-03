import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.BACKGROUND};
  align-items: center;
  justify-content: center;
`;

export const Pressable = styled.TouchableOpacity``;
