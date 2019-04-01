import React from 'react';
import renderer from 'react-test-renderer';
import SearchField from './SearchField';

it('render correctly', () => {
  const AppComponent = renderer.create(<SearchField />).toJSON();
  expect(AppComponent).toMatchSnapshot();
});
