import React from 'react';
import { act, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import * as reactRedux from 'react-redux';
import { render } from '../../testUtils';

describe('<Header />', () => {
  // beforeEach(() => {
  //   useSelectorMock.mockImplementation(callback => {
  //     return callback(mockAppState);
  //   });
  // });

  // afterEach(() => {
  //   useSelectorMock.mockClear();
  // });


  test('it should mount', async () => {
    // render(<Header />);
    
    // const header = screen.getByTestId('Header');

    // expect(header).toBeInTheDocument();
    await act(async () => render(<Header />))
    const linkElement = screen.getByTestId('Header')
    expect(linkElement).toBeInTheDocument()
  });
});