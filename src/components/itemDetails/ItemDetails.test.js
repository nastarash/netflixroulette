import React from 'react';
import renderer from 'react-test-renderer';
import ItemDetails from './ItemDetails';

it('render correctly', () => {
  const AppComponent = renderer.create(<ItemDetails />).toJSON();
  expect(AppComponent).toMatchSnapshot();
});
