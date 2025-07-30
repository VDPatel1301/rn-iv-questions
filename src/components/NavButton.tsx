import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../shared/colors';
import { textFontSize } from '../shared/constants';

type NavButtonProps = {
  label: string;
  isActive: boolean;
  onPress: () => void;
};

export default function NavButton({ label, isActive, onPress }: NavButtonProps) {
  return (
    <Pressable
      style={[styles.buttonStyle, isActive ? styles.activeButton : styles.inactiveButton]}
      onPress={onPress}
    >
      <Text style={styles.title}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 40,
  },
  activeButton: {
    backgroundColor: colors.orange,
  },
  inactiveButton: {
    backgroundColor: colors.lightgray,
  },
  title: {
    fontWeight: 'bold',
    fontSize: textFontSize.medium,
    color: colors.white,
    textAlign: 'center',
  },
});
