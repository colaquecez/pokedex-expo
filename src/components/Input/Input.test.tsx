import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { ProviderThemeJest } from 'src/components';

import Input from './Input.component';

describe('Render the Input Component', () => {
  it('should be able to change the text on component', async () => {
    const mock = jest.fn();

    const { findByTestId } = render(
      <ProviderThemeJest>
        <Input onChangeText={mock} />
      </ProviderThemeJest>
    );

    fireEvent.changeText(
      await findByTestId('InputTestID'),
      'testing input text'
    );

    expect(mock).toHaveBeenCalledWith('testing input text');
  });

  it('should be able to pass the value to input', () => {
    const { getByTestId, debug } = render(
      <ProviderThemeJest>
        <Input value="Teste Value" />
      </ProviderThemeJest>
    );

    const component = getByTestId('InputTestID');
    expect(component.props.value).toBe('Teste Value');
  });

  it('should be able to change the placeholder', () => {
    const { getByTestId, debug } = render(
      <ProviderThemeJest>
        <Input placeholder="new placeholder" />
      </ProviderThemeJest>
    );

    const component = getByTestId('InputTestID');
    expect(component.props.placeholder).toBe('new placeholder');
  });
});
