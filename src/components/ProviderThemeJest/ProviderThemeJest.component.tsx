import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { colors } from 'src/styles/theme';

interface IProviderThemeJest {
  children: React.ReactNode;
}

const ProviderThemeJest = ({ children }: IProviderThemeJest) => {
  return <ThemeProvider theme={colors}>{children}</ThemeProvider>;
};

export default ProviderThemeJest;
