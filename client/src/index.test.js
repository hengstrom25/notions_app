import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders welcome message', () => {
  const { getByText } = render(<App />);
  expect(getByText('Welcome to Notions App')).toBeInTheDocument();
});

it('has login button', () => {
  const { getByText } = render(<App />);
  expect(getByText('Log in with Ravelry')).toBeInTheDocument();
});