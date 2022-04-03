import React from 'react';

import { render } from '@testing-library/react-native';

import { Tag, ProviderThemeJest } from 'src/components';

describe('Render the Tag component', () => {
  it('should render a text', () => {
    const { getByText } = render(
      <ProviderThemeJest>
        <Tag>Pokemon teste</Tag>
      </ProviderThemeJest>
    );
    getByText('Pokemon teste');
  });
  it('sould change the color', () => {
    const { getByTestId } = render(
      <ProviderThemeJest>
        <Tag color="#b3b3b3">Pokemon teste</Tag>
      </ProviderThemeJest>
    );

    expect(getByTestId('ComponentTagId')).toHaveStyle({
      backgroundColor: '#b3b3b3'
    });
  });
  it('should be able to use the default color', () => {
    const { getByTestId } = render(
      <ProviderThemeJest>
        <Tag>Pokemon teste</Tag>
      </ProviderThemeJest>
    );

    expect(getByTestId('ComponentTagId')).toHaveStyle({
      backgroundColor: 'grey'
    });
  });
});
