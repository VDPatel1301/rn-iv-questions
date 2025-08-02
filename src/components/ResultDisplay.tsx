import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors } from '../shared/colors';
import { NoSolution } from '../shared/constants';

type Props = {
  result: number[] | null;
};

export default function ResultDisplay({ result }: Props) {
  if (!result) return null;

  return (
    <Text style={styles.result}>
      Result : {result.length > 0 ? `[${result[0]}, ${result[1]}]` : NoSolution}
    </Text>
  );
}

const styles = StyleSheet.create({
  result: { marginTop: 15, fontSize: 18, fontWeight: 'bold', color: colors.black }
});
