import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';
import Card from './CardPokemon.component';
import { ThemeProvider } from 'styled-components/native';
import { colors } from '../../styles/theme';

describe('Render the Card component', () => {
  it('should render a text', () => {
    const { getByText } = render(
      <ThemeProvider theme={colors}>
        <Card image="" name="Pikachu" />
      </ThemeProvider>
    );
    getByText('Pikachu');
  });
  it("should be able to see an overlay when we don't have an image", () => {
    const { queryByTestId } = render(
      <ThemeProvider theme={colors}>
        <Card name="Pokemon" image="" />
      </ThemeProvider>
    );

    const containerComponent = queryByTestId('ContainerCardPokemonId');
    const notFoundComponent = queryByTestId('PokemonNotFoundId');
    expect(containerComponent).toContainElement(notFoundComponent);
  });
  it('should be able to show up an image and not show an overlay', () => {
    const { queryByTestId } = render(
      <ThemeProvider theme={colors}>
        <Card
          name="Pokemon"
          image="https://www.pngkey.com/png/full/352-3529539_discover-ideas-about-pokemon-games-png-pokemon-lucario.png"
        />
      </ThemeProvider>
    );

    const notFoundComponent = queryByTestId('PokemonNotFoundId');
    expect(notFoundComponent).toBeFalsy();
  });
  it('should be able change the width', () => {
    const { getByTestId, debug } = render(
      <ThemeProvider theme={colors}>
        <Card width={100} name="Pikachu" />
      </ThemeProvider>
    );
    const component = getByTestId('ContainerCardPokemonId');

    expect(component).toHaveStyle({
      width: 100
    });
  });
});
