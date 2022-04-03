import styled from 'styled-components/native';

interface IContainer {
  color: string;
}

export const Container = styled.View<IContainer>`
  background-color: ${({ color }) => color};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  padding: 3px;
`;

export const Text = styled.Text`
  min-width: 80px;
  text-align: center;
  color: ${({ theme }) => theme.WHITE};
  font-weight: 500;
`;
