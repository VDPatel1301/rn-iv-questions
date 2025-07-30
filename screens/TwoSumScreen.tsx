import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Pressable } from 'react-native';
import NumberInput from '../components/NumberInput';
import NumberList from '../components/NumberList';
import ResultDisplay from '../components/ResultDisplay';
import TwoSumTest from '../components/two-sum';

export default function TwoSumScreen() {
  const [numbers, setNumbers] = useState<number[]>([]);  //stores the list of numbers entered
  const [target, setTarget] = useState(''); //stores the number the user wants as the sum
  const [inputNumber, setInputNumber] = useState(''); //stores the temporary number being typed
  const [result, setResult] = useState<number[] | null>(null); //stores the answer like [index1, index2] if two numbers are found


  // Function to add a number to the list
  const addNumber = () => {
    if (inputNumber.trim() === '') return;
    setNumbers(prev => [...prev, Number(inputNumber)]);
    setInputNumber('');
  };

  // reset the input field
  const removeNumber = (indexToRemove: number) => {
    setNumbers(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleTwoSum = () => {
    const sortedNumbers = [...numbers].sort((a, b) => a - b); // sort list for two-pointer approach
    const tgt = parseInt(target);   // Convert the target input (string) to a number
    let left = 0, right = sortedNumbers.length - 1; // Set two pointers: start (left) and end (right)

    while (left < right) {
      const sum = sortedNumbers[left] + sortedNumbers[right]; // Calculate sum of current two numbers
      if (sum === tgt) {
        const index1 = numbers.indexOf(sortedNumbers[left]) + 1; // Get the 1-based index of the first number (from original array)
        const index2 = numbers.lastIndexOf(sortedNumbers[right]) + 1; // Get the 1-based index of the second number
        setResult([index1, index2]);
        return; // Stop the function since we found the solution
      } else if (sum < tgt) {
        // If the current sum is too small, move the left pointer to a bigger number
        left++;
      } else {
        // If the current sum is too big, move the right pointer to a smaller number

        right--;
      }
    }
    setResult([]); // If loop finishes and no pair is found, set result as "no solution"
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Two Sum (Dynamic)</Text>
      <NumberInput inputValue={inputNumber} onChange={setInputNumber} onAdd={addNumber} />
      <NumberList numbers={numbers} onRemove={removeNumber} />
      <TextInput
        placeholder="Target"
        style={styles.input}
        value={target}
        onChangeText={setTarget}
        keyboardType="numeric"
      />
      <Button title="Find Indices" onPress={handleTwoSum} />
      <ResultDisplay result={result} />
      <TwoSumTest />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    color: '#333'
  },
  numberItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 4,
    backgroundColor: '#eee',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  listItem: {
    fontSize: 18,
    color: '#333',
    marginRight: 4
  },
  removeButton: {
    backgroundColor: '#ff4444',
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  removeText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  },
  result: { marginTop: 15, fontSize: 18, fontWeight: 'bold', color: '#333' },
  addButton: {
    backgroundColor: '#f36911',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15
  },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});
