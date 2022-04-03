import React from 'react';

import * as S from './Tag.styles';
interface ITag {
  children: React.ReactNode;
  color?: string;
}

const Tag = ({ children, color = 'grey' }: ITag) => {
  return (
    <S.Container testID="ComponentTagId" color={color}>
      <S.Text>{children}</S.Text>
    </S.Container>
  );
};

export default Tag;
