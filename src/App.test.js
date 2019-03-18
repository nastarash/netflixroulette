import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

it("render correctly", () => {
    const AppComponent = renderer.create(<App />).toJSON();
    expect(AppComponent).toMatchSnapshot();
});