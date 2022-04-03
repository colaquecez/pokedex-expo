import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { ProviderThemeJest } from 'src/components';

import Error from './Error.component';

describe('Render the Error component', () => {
  it('should render an error text', () => {
    const { getByText } = render(
      <ProviderThemeJest>
        <Error title="Error title" />
      </ProviderThemeJest>
    );
    getByText('Error title');
  });
  it('should be able to see the button try again when the refetech prop is passed', () => {
    const { getByTestId } = render(
      <ProviderThemeJest>
        <Error refetch={() => {}} title="Error title" />
      </ProviderThemeJest>
    );

    const container = getByTestId('ContainerError');
    const tryAgainButton = getByTestId('ButtonErrorId');

    expect(container).toContainElement(tryAgainButton);
  });
  it('should be able to change the try again message', () => {
    const { getByText } = render(
      <ProviderThemeJest>
        <Error
          tryAgainMessage="Try Again Pikachu"
          refetch={() => {}}
          title="Error title"
        />
      </ProviderThemeJest>
    );

    expect(getByText('Try Again Pikachu'));
  });
  it('should be able to receive an onPress and use it', () => {
    const mockFn = jest.fn();

    const { getByTestId } = render(
      <ProviderThemeJest>
        <Error
          tryAgainMessage="Try Again Pikachu"
          refetch={mockFn}
          title="Error title"
        />
      </ProviderThemeJest>
    );

    fireEvent.press(getByTestId('ButtonErrorId'));

    expect(mockFn).toBeCalled();
  });
});
