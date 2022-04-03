import React from 'react';

import { render } from '@testing-library/react-native';

import TypeList from './TypeList.component';

describe('Render TypeList component', () => {
  it("should render a text error when it doesn't have data", () => {
    const dataMocked = [{}];
    const dataMocked2 = 'error';
    const dataMocked3 = null;
    const dataMocked4 = true;

    const { getByText, rerender } = render(<TypeList typesData={dataMocked} />);

    const scenario2 = rerender(<TypeList typesData={dataMocked2} />);
    getByText('Falha ao sincronizar :(');

    const scenario3 = rerender(<TypeList typesData={dataMocked3} />);
    getByText('Falha ao sincronizar :(');

    const scenario4 = rerender(<TypeList typesData={dataMocked4} />);
    getByText('Falha ao sincronizar :(');
  });
});
