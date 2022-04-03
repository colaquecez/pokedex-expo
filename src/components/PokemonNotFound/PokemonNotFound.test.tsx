import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';
import PokemonNoutFound from './PokemonNotFound.component';
import ProviderThemeJest from '../ProviderThemeJest/ProviderThemeJest.component';

describe('Render the PokemonNotFound component', () => {
  it('should render a text', () => {
    const { getByText } = render(
      <ProviderThemeJest>
        <PokemonNoutFound>Pokemon teste</PokemonNoutFound>
      </ProviderThemeJest>
    );
    getByText('Pokemon teste');
  });
});
