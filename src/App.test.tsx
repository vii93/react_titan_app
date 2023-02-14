import React from 'react';
import { act, screen } from '@testing-library/react'
import App from './App';
import { render } from './testUtils';

describe('<App />', () => {
  test('renders learn react link', async () => {
    // render(<App />);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();

    // const { getByText } = render( <App /> );
    // const app = getByText(/learn react/i);
    // expect(app).not.toBeNull()

    await act(async () => render(<App />))
    const linkElement = screen.getByText(/learn react/)
    expect(linkElement).toBeInTheDocument()

  });
  
})
