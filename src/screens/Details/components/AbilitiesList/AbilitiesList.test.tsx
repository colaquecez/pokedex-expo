import React from 'react';

import { render } from '@testing-library/react-native';

import AbilitiesList from './AbilitiesList.component';

describe('Render AbilitiesList component', () => {
  it("should render a text error when it doesn't have data", () => {
    const dataMocked = [{}];
    const dataMocked2 = 'error';
    const dataMocked3 = null;
    const dataMocked4 = true;

    const { getByText, rerender } = render(
      <AbilitiesList abilitieData={dataMocked} />
    );

    const scenario2 = rerender(<AbilitiesList abilitieData={dataMocked2} />);
    getByText('Falha ao sincronizar :(');

    const scenario3 = rerender(<AbilitiesList abilitieData={dataMocked3} />);
    getByText('Falha ao sincronizar :(');

    const scenario4 = rerender(<AbilitiesList abilitieData={dataMocked4} />);
    getByText('Falha ao sincronizar :(');
  });
});
