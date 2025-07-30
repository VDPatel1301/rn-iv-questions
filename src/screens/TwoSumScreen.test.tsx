import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TwoSumScreen from './TwoSumScreen';

describe('TwoSumScreen', () => {
  it('adds numbers and finds correct indices', () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<TwoSumScreen />);

    const input = getByPlaceholderText('Enter number');
    const target = getByPlaceholderText('Target');

    fireEvent.changeText(input, '4');
    fireEvent.press(getByText('Add Number'));

    fireEvent.changeText(input, '17');
    fireEvent.press(getByText('Add Number'));

    fireEvent.changeText(target, '21');
    fireEvent.press(getByText('Find Indices'));

    expect(queryByText('Result : [1, 2]')).toBeTruthy();
  });

  it('shows "No solution" when there is no valid pair', () => {
    const { getByPlaceholderText, getByText } = render(<TwoSumScreen />);

    const input = getByPlaceholderText('Enter number');
    const target = getByPlaceholderText('Target');

    fireEvent.changeText(input, '1');
    fireEvent.press(getByText('Add Number'));

    fireEvent.changeText(input, '2');
    fireEvent.press(getByText('Add Number'));

    fireEvent.changeText(target, '10');
    fireEvent.press(getByText('Find Indices'));

    expect(getByText('Result : No solution')).toBeTruthy();
  });
});
