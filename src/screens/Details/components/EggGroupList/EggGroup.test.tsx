import React from 'react';

import { render } from '@testing-library/react-native';

import EggGroupList from './EggGroupList.component';

describe('Render EggGroup component', () => {
  it("should render a text error when it doesn't have data", () => {
    const dataMocked = [{}];
    const dataMocked2 = 'error';
    const dataMocked3 = null;
    const dataMocked4 = true;

    const { getByText, rerender } = render(
      <EggGroupList speciesData={dataMocked} />
    );

    const scenario2 = rerender(<EggGroupList speciesData={dataMocked2} />);
    getByText('Falha ao sincronizar :(');

    const scenario3 = rerender(<EggGroupList speciesData={dataMocked3} />);
    getByText('Falha ao sincronizar :(');

    const scenario4 = rerender(<EggGroupList speciesData={dataMocked4} />);
    getByText('Falha ao sincronizar :(');
  });
});
