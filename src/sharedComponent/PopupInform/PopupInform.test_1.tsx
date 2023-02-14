import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PopupInform from './PopupInform';

describe('<PopupInform />', () => {
  test('it should mount', () => {
    render(<PopupInform />);
    
    const popupInform = screen.getByTestId('PopupInform');

    expect(popupInform).toBeInTheDocument();
  });
});