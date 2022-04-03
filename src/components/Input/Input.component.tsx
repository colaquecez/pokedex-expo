import React from 'react';
import { TextInputProps } from 'react-native';

import * as S from './Input.styles';

interface IInput extends TextInputProps {
  value?: string;
  onChangeText?: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({
  value,
  onChangeText,
  testID = 'InputTestID',
  placeholder = 'Pesquisar Pokemon',
  ...rest
}: IInput) => {
  return (
    <S.InputWrapper
      {...rest}
      value={value}
      testID={testID}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
};

export default Input;
