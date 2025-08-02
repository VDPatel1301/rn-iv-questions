
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CalculatorScreen from './src/screens/CalculatorScreen';
import NavbarScreen from './src/screens/NavbarScreen';
import TwoSumScreen from './src/screens/TwoSumScreen';
import NavButton from './src/components/NavButton';
import SplashScreen from './src/screens/SplashScreen';
import { IMAGE } from './src/shared/allIcons/Icon';

type Screen = 'calculator' | 'navbar' | 'twosum';

export default function App() {
  const [isSplashVisible, setSplashVisible] = useState(true);
  const [screen, setScreen] = useState<Screen>('calculator');

  if (isSplashVisible) {
    return <SplashScreen onFinish={() => setSplashVisible(false)} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <NavButton
          // label="Calculator"
          isActive={screen === 'calculator'}
          onPress={() => setScreen('calculator')}
          icon={IMAGE.calculator_icon}
        />
        <NavButton
          // label="NavBar"
          isActive={screen === 'navbar'}
          onPress={() => setScreen('navbar')}
          icon={IMAGE.navbar_icon}

        />
        <NavButton
          // label="Two Sum"
          isActive={screen === 'twosum'}
          onPress={() => setScreen('twosum')}
          icon={IMAGE.twosum_icon}

        />
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
});
