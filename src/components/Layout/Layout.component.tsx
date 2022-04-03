import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

import * as S from './Layout.styles';

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>{children}</S.Container>
    </TouchableWithoutFeedback>
  );
};

export default Layout;
