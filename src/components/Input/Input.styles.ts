import styled from 'styled-components/native';

export const InputWrapper = styled.TextInput`
  background-color: ${({ theme }) => theme.WHITE};
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.HINT};
  color: black;
  font-weight: 500;
  border-radius: 8px;
`;
