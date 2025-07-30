import React from 'react';
import { FlatList, Text, View, Pressable, StyleSheet } from 'react-native';
import { textFontSize } from '../shared/constants';
import { colors } from '../shared/colors';

type Props = {
  numbers: number[];
  onRemove: (index: number) => void;
};

export default function NumberList({ numbers, onRemove }: Props) {
  return (
    <FlatList
      data={numbers}
      keyExtractor={(_, index) => index.toString()}
      horizontal
      renderItem={({ item, index }) => (
        <View style={styles.item}>
          <Text style={styles.number}>{item}</Text>
          <Pressable onPress={() => onRemove(index)} style={styles.removeButton}>
            <Text style={styles.removeText}>✕</Text>
          </Pressable>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 4,
    backgroundColor: '#eee',
    borderRadius: 8,
   padding:8
  },
  number: {
    fontSize: textFontSize.medium,
    color: '#333',
    marginRight: 4
  },
  removeButton: {
    backgroundColor:colors.red,
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2
  },
  removeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold'
  }
});
