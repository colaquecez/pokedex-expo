import React from 'react';

import { render } from '@testing-library/react-native';

import { Text } from 'src/components';

describe('Render the Text component', () => {
  it('should render a text', () => {
    const { getByText } = render(<Text>Pikachu</Text>);
    getByText('Pikachu');
  });

  it('should be able to use the default props', () => {
    const { getByTestId } = render(<Text testID="TextComponent">Pikachu</Text>);

    const foundComponent = getByTestId('TextComponent');
    expect(foundComponent).toHaveStyle({
      fontSize: 14,
      color: '#000000',
      marginBottom: 0,
      fontWeight: '400',
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      textTransform: 'capitalize'
    });
  });

  it('sould be able to change the color', () => {
    const { getByTestId } = render(
      <Text color="#b3b3" testID="TextComponent">
        Pikachu
      </Text>
    );

    const foundComponent = getByTestId('TextComponent');
    expect(foundComponent).toHaveStyle({
      color: '#b3b3'
    });
  });
  it('sould be able to change the fontSize', () => {
    const { getByTestId } = render(
      <Text fontSize={20} testID="TextComponent">
        Pikachu
      </Text>
    );

    const foundComponent = getByTestId('TextComponent');
    expect(foundComponent).toHaveStyle({
      fontSize: 20
    });
  });
  it('should be able to change the font weight', () => {
    const { getByTestId } = render(
      <Text testID="TextComponent" fontWeight="600">
        Pikachu
      </Text>
    );

    const foundComponent = getByTestId('TextComponent');
    expect(foundComponent).toHaveStyle({
      fontWeight: '600'
    });
  });
  it('sould be able to change the textTransform', () => {
    const { getByTestId } = render(
      <Text testID="TextComponent" textTransform="lowercase">
        Pikachu
      </Text>
    );

    const foundComponent = getByTestId('TextComponent');
    expect(foundComponent).toHaveStyle({
      textTransform: 'lowercase'
    });
  });
  it('should be able to set new margins on text', () => {
    const { getByTestId } = render(
      <Text
        marginBottom={10}
        marginLeft={10}
        marginRight={10}
        marginTop={10}
        testID="TextComponent"
      >
        Pikachu
      </Text>
    );

    const foundComponent = getByTestId('TextComponent');
    expect(foundComponent).toHaveStyle({
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10
    });
  });
});
