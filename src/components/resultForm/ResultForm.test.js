import React from 'react';
import renderer from 'react-test-renderer';
import ResultForm from './ResultForm';

it('render correctly', () => {
  const AppComponent = renderer.create(<ResultForm />).toJSON();
  expect(AppComponent).toMatchSnapshot();
});
