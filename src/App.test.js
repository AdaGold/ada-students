import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renders Ada Lovelace', () => {
  const { getByText } = render(<App />);
  const element = getByText(/Ada Lovelace/i);
  expect(element).toBeInTheDocument();
});
