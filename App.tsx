import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import CalculatorScreen from './screens/CalculatorScreen';
import NavbarScreen from './screens/NavbarScreen';
import TwoSumScreen from './screens/TwoSumScreen';

type Screen = 'calculator' | 'navbar' | 'twosum';

export default function App() {
  const [screen, setScreen] = useState<Screen>('calculator');

  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <Pressable
          style={[
            styles.buttonStyle,
            screen === 'calculator' ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={() => setScreen('calculator')}
        >
          <Text style={styles.title}>Calculator</Text>
        </Pressable>

        <Pressable
          style={[
            styles.buttonStyle,
            screen === 'navbar' ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={() => setScreen('navbar')}
        >
          <Text style={styles.title}>NavBar</Text>
        </Pressable>

        <Pressable
          style={[
            styles.buttonStyle,
            screen === 'twosum' ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={() => setScreen('twosum')}
        >
          <Text style={styles.title}>Two Sum</Text>
        </Pressable>
      </View>

      {screen === 'calculator' && <CalculatorScreen />}
      {screen === 'navbar' && <NavbarScreen />}
      {screen === 'twosum' && <TwoSumScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50 },
  topNav: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 },
  buttonStyle: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 40,
  },
  activeButton: {
    backgroundColor: '#f36911',
  },
  inactiveButton: {
    backgroundColor: 'lightgray',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 0,
  },
});
