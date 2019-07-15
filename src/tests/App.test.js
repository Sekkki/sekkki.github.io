import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import renderer from 'react-test-renderer';

describe('<App />', () => {
it('renders without crashing', () => {
  const component = renderer
    .create(
      <App />
    )
    .toJSON();
  expect(component).toMatchSnapshot();
});
})