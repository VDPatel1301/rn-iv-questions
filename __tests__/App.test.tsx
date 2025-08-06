import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import App from '../App';

jest.useFakeTimers();

test('shows navigation buttons after splash screen', async () => {
  const { getByTestId } = render(<App />);

  // fast-forward splash screen timeout
  jest.runAllTimers();

  // wait for navigation buttons to appear
  await waitFor(() => {
    expect(getByTestId('nav-button-calculator')).toBeTruthy();
    expect(getByTestId('nav-button-navbar')).toBeTruthy();
    expect(getByTestId('nav-button-twosum')).toBeTruthy();
  });
});
