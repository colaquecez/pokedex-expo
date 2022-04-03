import React from 'react';
import { render } from '@testing-library/react-native';

import { Loading, ProviderThemeJest } from 'src/components';

describe('Render the PokemonNotFound component', () => {
  it('should be able to render the component', () => {
    const { getByTestId } = render(
      <ProviderThemeJest>
        <Loading />
      </ProviderThemeJest>
    );

    const component = getByTestId('LoadingComponentId');

    expect(component).toBeTruthy();
  });
});
