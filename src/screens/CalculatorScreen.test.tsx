import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CalculatorScreen from './CalculatorScreen';

describe('CalculatorScreen', () => {
  it('adds two numbers correctly', () => {
    const { getByPlaceholderText, getByText } = render(<CalculatorScreen />);
    const num1Input = getByPlaceholderText('First number');
    const num2Input = getByPlaceholderText('Second number');
    const button = getByText('Calculate');

    fireEvent.changeText(num1Input, '5');
    fireEvent.changeText(num2Input, '10');
    fireEvent.press(button);

    expect(getByText('Total : 15')).toBeTruthy();
  });

  it('shows alert if inputs are empty', () => {
    const alertSpy = jest.spyOn(global, 'alert').mockImplementation(() => {});
    const { getByText } = render(<CalculatorScreen />);
    fireEvent.press(getByText('Calculate'));

    expect(alertSpy).toHaveBeenCalledWith('Please enter both numbers before calculating.');
    alertSpy.mockRestore();
  });
});
