
import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
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

  const fadeAnim = useRef(new Animated.Value(1)).current;

  // Handle fade animation when screen changes
  useEffect(() => {
    fadeAnim.setValue(0); // Reset to invisible
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, [screen]);


  if (isSplashVisible) {
    return <SplashScreen onFinish={() => setSplashVisible(false)} />;
  }

  const renderScreen = () => {
    switch (screen) {
      case 'calculator':
        return <CalculatorScreen />;
      case 'navbar':
        return <NavbarScreen />;
      case 'twosum':
        return <TwoSumScreen />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <NavButton
          testID="nav-button-calculator"
          isActive={screen === 'calculator'}
          onPress={() => setScreen('calculator')}
          icon={IMAGE.calculator_icon}
        />
        <NavButton
          testID="nav-button-navbar"

          isActive={screen === 'navbar'}
          onPress={() => setScreen('navbar')}
          icon={IMAGE.navbar_icon}

        />
        <NavButton
          testID="nav-button-twosum"

          isActive={screen === 'twosum'}
          onPress={() => setScreen('twosum')}
          icon={IMAGE.twosum_icon}

        />
      </View>

      <Animated.View style={[styles.screenWrapper, { opacity: fadeAnim }]}>
        {renderScreen()}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50 },
  topNav: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 },
   screenWrapper: {
    flex: 1,
  },
});
