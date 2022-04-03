import React from 'react';
import { TextProps } from 'react-native';

import * as S from './Text.styles';

interface IText extends TextProps {
  color?: string;
  marginBottom?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  fontSize?: number;
  textAlign?: React.CSSProperties['textAlign'];
  fontWeight?: string;
  textTransform?: React.CSSProperties['textTransform'];
  children: React.ReactNode;
}

const Text = ({
  color = '#000000',
  marginBottom = 0,
  marginLeft = 0,
  textAlign = 'left',
  marginRight = 0,
  fontWeight = '400',
  marginTop = 0,
  fontSize = 14,
  textTransform = 'capitalize',
  children,
  ...rest
}: IText) => {
  return (
    <S.TextStyle
      textAlign={textAlign}
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
      textTransform={textTransform}
      marginBottom={marginBottom}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
      {...rest}
    >
      {children}
    </S.TextStyle>
  );
};

export default Text;
