import React from 'react';
import renderer from 'react-test-renderer';
import MovieDetails from './MovieDetails';

it('render correctly', () => {
  const AppComponent = renderer.create(<MovieDetails />).toJSON();
  expect(AppComponent).toMatchSnapshot();
});
