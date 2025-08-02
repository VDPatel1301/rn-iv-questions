import React from 'react';
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../shared/colors';
import { textFontSize } from '../shared/constants';

type NavButtonProps = {
  label?: string;
  isActive: boolean;
  onPress: () => void;
  icon: ImageSourcePropType;

};

export default function NavButton({ label, isActive, onPress, icon }: NavButtonProps) {
  return (
    <Pressable
      style={[styles.buttonStyle, isActive ? styles.activeButton : styles.inactiveButton]}
      onPress={onPress}
    >
      <Image source={icon} style={styles.icon} resizeMode="contain" />
      <Text style={styles.title}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 50,
    flexDirection: 'row',
    // Android Shadow
    elevation: 12,
    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  activeButton: {
    backgroundColor: colors.orange,
  },
  inactiveButton: {
    backgroundColor: colors.gray,
  },
  title: {
    fontWeight: 'bold',
    fontSize: textFontSize.medium,
    color: colors.white,
    textAlign: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: colors.white,
  },
});
