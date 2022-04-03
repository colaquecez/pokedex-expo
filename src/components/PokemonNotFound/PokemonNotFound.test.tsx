import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';
import PokemonNoutFound from './PokemonNotFound.component';
import { ThemeProvider } from 'styled-components/native';
import { colors } from '../../styles/theme';

describe('Render the PokemonNotFound component', () => {
  it('should render a text', () => {
    const { getByText } = render(
      <ThemeProvider theme={colors}>
        <PokemonNoutFound>Pokemon teste</PokemonNoutFound>
      </ThemeProvider>
    );
    getByText('Pokemon teste');
  });
});
