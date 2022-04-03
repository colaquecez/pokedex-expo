import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

import { Layout, ProviderThemeJest } from 'src/components';

describe('Render the Layout component', () => {
  it('should render a children', () => {
    const { getByText } = render(
      <ProviderThemeJest>
        <Layout>
          <Text>Layout Test</Text>
        </Layout>
      </ProviderThemeJest>
    );
    getByText('Layout Test');
  });
});
