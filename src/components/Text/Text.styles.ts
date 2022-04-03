import styled from 'styled-components/native';

interface IText {
  marginTop: number;
  marginBottom: number;
  marginLeft: number;
  marginRight: number;
  fontSize: number;
  color: string;
  textAlign: string;
  textTransform: string;
  fontWeight: string;
}

export const TextStyle = styled.Text<IText>`
  margin-top: ${({ marginTop }) => marginTop}px;
  text-align: ${({ textAlign }) => textAlign};
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
  margin-left: ${({ marginLeft }) => marginLeft}px;
  margin-right: ${({ marginRight }) => marginRight}px;
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-transform: ${({ textTransform }) => textTransform};
  font-size: ${({ fontSize }) => fontSize}px;
`;
