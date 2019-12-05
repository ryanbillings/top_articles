import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the app', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Header/i);
  expect(linkElement).toBeInTheDocument();
});
