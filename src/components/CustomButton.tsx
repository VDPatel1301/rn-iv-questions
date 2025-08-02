// components/CustomButton.tsx
import React from 'react';
import { Pressable, StyleSheet, Text, ViewStyle, TextStyle } from 'react-native';
import { colors } from '../shared/colors';
import { textFontSize } from '../shared/constants';

type Props = {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export default function CustomButton({ title, onPress, style, textStyle }: Props) {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.orange,
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: colors.white,
    fontSize: textFontSize.medium,
    fontWeight: 'bold',
  },
});
