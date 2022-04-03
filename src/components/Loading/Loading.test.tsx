import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';
import Loading from './Loading.component';
import ProviderThemeJest from '../ProviderThemeJest/ProviderThemeJest.component';

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
