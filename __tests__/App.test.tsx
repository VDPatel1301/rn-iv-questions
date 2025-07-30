import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

test('renders navigation buttons', () => {
  const { getByText } = render(<App />);
  expect(getByText('Calculator')).toBeTruthy();
  expect(getByText('NavBar')).toBeTruthy();
  expect(getByText('Two Sum')).toBeTruthy();
});
