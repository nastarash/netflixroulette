import React from 'react';
import renderer from 'react-test-renderer';
import ResultBar from './ResultBar';

it('render correctly', () => {
  const AppComponent = renderer.create(<ResultBar />).toJSON();
  expect(AppComponent).toMatchSnapshot();
});
