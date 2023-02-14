import React from 'react';
import { act, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';
import { render } from '../../testUtils';

describe('<Footer />', () => {
  test('it should mount', async () => {
    // render(<Footer />);
    
    // const footer = screen.getByTestId('Footer');

    // expect(footer).toBeInTheDocument();

    await act(async () => render(<Footer />))
    const linkElement = screen.getByTestId('Footer')
    expect(linkElement).toBeInTheDocument()
  });
});