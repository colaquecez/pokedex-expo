import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';
import Error from './Error.component';
import { ThemeProvider } from 'styled-components/native';
import { colors } from '../../styles/theme';

describe('Render the Error component', () => {
  it('should render an error text', () => {
    const { getByText } = render(
      <ThemeProvider theme={colors}>
        <Error title="Error title" />
      </ThemeProvider>
    );
    getByText('Error title');
  });
  it('should be able to see the button try again when the refetech prop is passed', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={colors}>
        <Error refetch={() => {}} title="Error title" />
      </ThemeProvider>
    );

    const container = getByTestId('ContainerError');
    const tryAgainButton = getByTestId('ButtonErrorId');

    expect(container).toContainElement(tryAgainButton);
  });
  it('should be able to change the try again message', () => {
    const { getByText } = render(
      <ThemeProvider theme={colors}>
        <Error
          tryAgainMessage="Try Again Pikachu"
          refetch={() => {}}
          title="Error title"
        />
      </ThemeProvider>
    );

    expect(getByText('Try Again Pikachu'));
  });
  it('should be able to receive an onPress and use it', () => {
    const mockFn = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={colors}>
        <Error
          tryAgainMessage="Try Again Pikachu"
          refetch={mockFn}
          title="Error title"
        />
      </ThemeProvider>
    );

    fireEvent.press(getByTestId('ButtonErrorId'));

    expect(mockFn).toBeCalled();
  });
});
