import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.TEXT};
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
