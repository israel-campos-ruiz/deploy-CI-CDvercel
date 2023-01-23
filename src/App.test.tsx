import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  it('should have react native text', () => {
    render(<App />);
    const linkElement = screen.getByText(/should have react native text/i);
    expect(linkElement).toBeInTheDocument();
  });
});
