import React from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import { AddNumber } from '../shared/constants';
import { colors } from '../shared/colors';

type Props = {
  inputValue: string;
  onChange: (text: string) => void;
  onAdd: () => void;
};

export default function NumberInput({ inputValue, onChange, onAdd }: Props) {
  return (
    <>
      <TextInput
        placeholder="Enter number"
        value={inputValue}
        onChangeText={onChange}
        keyboardType="numeric"
        style={styles.input}
      />
      <Pressable onPress={onAdd} style={styles.button}>
        <Text style={styles.buttonText}>{AddNumber}</Text>
      </Pressable>

    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.lightgray,
    borderRadius: 8,
    padding: 14,
    marginBottom: 16,
    color: colors.black
  },
  button: {
    backgroundColor: colors.orange,
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15
  },
  buttonText: { color: colors.white, fontWeight: 'bold' }
});
