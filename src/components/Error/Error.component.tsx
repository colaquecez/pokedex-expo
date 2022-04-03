import React from 'react';

import { Text } from 'src/components';

import * as S from './Error.styles';
interface IError {
  refetch?: () => void;
  title?: string;
  tryAgainMessage?: string;
}

const Error = ({
  title = 'Houve um erro :(',
  refetch,
  tryAgainMessage = 'Tentar novamente'
}: IError) => {
  return (
    <S.Container testID="ContainerError">
      <Text fontSize={16} fontWeight="700">
        {title}
      </Text>
      {refetch && (
        <S.Pressable testID="ButtonErrorId" onPress={refetch}>
          <Text fontWeight="500" marginTop={8}>
            {tryAgainMessage}
          </Text>
        </S.Pressable>
      )}
    </S.Container>
  );
};

export default Error;
