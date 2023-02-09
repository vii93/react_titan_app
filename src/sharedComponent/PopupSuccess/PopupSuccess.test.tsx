import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PopupSuccess from './PopupSuccess';

describe('<PopupSuccess />', () => {
  test('it should mount', () => {
    render(<PopupSuccess />);
    
    const popupSuccess = screen.getByTestId('PopupSuccess');

    expect(popupSuccess).toBeInTheDocument();
  });
});