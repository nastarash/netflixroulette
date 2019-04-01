import React from 'react';
import renderer from 'react-test-renderer';
import SearchButton from './SearchButton';

it('render correctly', () => {
  const AppComponent = renderer.create(<SearchButton />).toJSON();
  expect(AppComponent).toMatchSnapshot();
});
