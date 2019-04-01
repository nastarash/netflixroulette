import React from 'react';
import renderer from 'react-test-renderer';
import SearchFilter from './SearchFilter';

it('render correctly', () => {
  const AppComponent = renderer.create(<SearchFilter />).toJSON();
  expect(AppComponent).toMatchSnapshot();
});
