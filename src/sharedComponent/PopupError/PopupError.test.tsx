import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PopupError from './PopupError';

describe('<PopupError />', () => {
  test('it should mount', () => {
    render(<PopupError />);
    
    const popupError = screen.getByTestId('PopupError');

    expect(popupError).toBeInTheDocument();
  });
});