import styled from 'styled-components/native';

interface IContainer {
  width: number;
}

export const Container = styled.View<IContainer>`
  background-color: ${({ theme }) => theme.WHITE};
  padding: 32px;
  width: ${({ width }) => (width === 0 ? 'auto' : `${width}px`)};
  border-radius: 8px;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.HINT};
  justify-content: center;
`;

export const BackgroundImage = styled.Image<IContainer>`
  width: ${({ width }) => (width === 0 ? 'auto' : `${width}px`)};
  height: 170px;
  position: absolute;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
`;

export const Button = styled.TouchableOpacity``;

export const ContainerFavorite = styled.View`
  position: absolute;
  top: 10px;
`;
