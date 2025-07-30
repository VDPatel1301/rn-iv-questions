import React from 'react';
import { FlatList, Text, View, Pressable, StyleSheet } from 'react-native';

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
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  number: {
    fontSize: 18,
    color: '#333',
    marginRight: 4
  },
  removeButton: {
    backgroundColor: '#ff4444',
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2
  },
  removeText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  }
});
