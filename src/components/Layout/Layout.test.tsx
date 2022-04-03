import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';
import Layout from './Layout.component';
import ProviderThemeJest from '../ProviderThemeJest/ProviderThemeJest.component';
import { Text } from 'react-native';

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
