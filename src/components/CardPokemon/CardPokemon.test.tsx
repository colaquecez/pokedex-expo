import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';
import Card from './CardPokemon.component';
import ProviderThemeJest from '../ProviderThemeJest/ProviderThemeJest.component';

const image =
  'https://www.pngkey.com/png/full/352-3529539_discover-ideas-about-pokemon-games-png-pokemon-lucario.png';

describe('Render the Card component', () => {
  it('should render a text', () => {
    const { getByText } = render(
      <ProviderThemeJest>
        <Card image="" name="Pikachu" />
      </ProviderThemeJest>
    );
    getByText('Pikachu');
  });
  it("should be able to see an overlay when we don't have an image", () => {
    const { queryByTestId } = render(
      <ProviderThemeJest>
        <Card name="Pokemon" image="" />
      </ProviderThemeJest>
    );

    const containerComponent = queryByTestId('ContainerCardPokemonId');
    const notFoundComponent = queryByTestId('PokemonNotFoundId');
    expect(containerComponent).toContainElement(notFoundComponent);
  });
  it('should be able to show up an image and not show an overlay', () => {
    const { queryByTestId } = render(
      <ProviderThemeJest>
        <Card name="Pokemon" image={image} />
      </ProviderThemeJest>
    );

    const notFoundComponent = queryByTestId('PokemonNotFoundId');
    expect(notFoundComponent).toBeFalsy();
  });
  it('should be able to change the not found text', () => {
    const { getByText, debug } = render(
      <ProviderThemeJest>
        <Card name="Pokemon" image={''} textNotFound="Not Found Test" />
      </ProviderThemeJest>
    );

    expect(getByText('Not Found Test'));
  });
  it('should be able change the width', () => {
    const { getByTestId, debug } = render(
      <ProviderThemeJest>
        <Card width={100} name="Pikachu" />
      </ProviderThemeJest>
    );
    const component = getByTestId('ContainerCardPokemonId');

    expect(component).toHaveStyle({
      width: 100
    });
  });
  it('should be able to receive an onPress and use it', () => {
    const mockFn = jest.fn();

    const { getByTestId, debug } = render(
      <ProviderThemeJest>
        <Card onPress={mockFn} name="Pikachu" />
      </ProviderThemeJest>
    );

    fireEvent.press(getByTestId('ButtonCardPokemonId'));

    expect(mockFn).toBeCalled();
  });
});
