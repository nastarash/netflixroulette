import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';

it('render correctly', () => {
  const AppComponent = renderer.create(<Footer />).toJSON();
  expect(AppComponent).toMatchSnapshot();
});
