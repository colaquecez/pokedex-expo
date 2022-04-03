import React from 'react';

import { render } from '@testing-library/react-native';

import { PokemonNotFound, ProviderThemeJest } from 'src/components';

describe('Render the PokemonNotFound component', () => {
  it('should render a text', () => {
    const { getByText } = render(
      <ProviderThemeJest>
        <PokemonNotFound>Pokemon teste</PokemonNotFound>
      </ProviderThemeJest>
    );
    getByText('Pokemon teste');
  });
});
