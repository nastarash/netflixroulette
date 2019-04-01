import React from 'react';
import renderer from 'react-test-renderer';
import OrderingFilter from './OrderingFilter';

it('render correctly', () => {
  const AppComponent = renderer.create(<OrderingFilter />).toJSON();
  expect(AppComponent).toMatchSnapshot();
});
