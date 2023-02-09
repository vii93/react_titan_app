import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmptyList from './Table';

describe('<EmptyList />', () => {
  test('it should mount', () => {
    render(<EmptyList />);
    
    const emptyList = screen.getByTestId('EmptyList');

    expect(emptyList).toBeInTheDocument();
  });
});