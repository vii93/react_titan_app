import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn()
}));

describe('<Home />', () => {
  
  test('it should mount', () => {
    const { getByTestId } = render(<Home />);
    
    const home = getByTestId('Home');
    expect(home).not.toBeNull()
  });
});

// describe('Test counting', () => {
//   test('count correct', () => {
//     expect(2 + 2).toBe(4);
//   })
// })