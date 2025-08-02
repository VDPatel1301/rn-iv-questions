import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Linking,
  Platform,
  useWindowDimensions,
  Image,
} from 'react-native';
import { Collabera, menuItems, textFontSize } from '../shared/constants';
import { colors } from '../shared/colors';
import { IMAGE } from '../shared/allIcons/Icon';

export default function NavbarScreen() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { width } = useWindowDimensions();

  const handleLinkPress = (url: string) => {
    if (Platform.OS === 'web') {
      window.location.href = url;
    } else {
      Linking.openURL(url);
    }

    // Close menu on mobile after click
    if (width < 768) {
      setMenuOpen(false);
    }
  };

  return (
    <View style={styles.container}>

            <Text style={styles.headerTitle}>{Collabera}</Text>
      
      {/* Navbar Top */}
      <View style={styles.navbar}>
        <Pressable
          onPress={() => handleLinkPress('/')}
          accessibilityRole="link"
          accessibilityLabel="Home link"
        >
          <Image style={{ width: 50, height: 50 }}
            source={IMAGE["company_logo"]}
            resizeMode="contain"
          />
        </Pressable>

        <TextInput
          placeholder="Search documentation..."
          style={styles.searchInput}
        />

        <Pressable onPress={() => setMenuOpen(prev => !prev)}>
          <Text style={styles.menuIcon}>{menuOpen ? '✕' : '☰'}</Text>
        </Pressable>
      </View>

      {/* Navbar Menu Items */}
      {menuOpen && (
        <View style={styles.menu}>
          {menuItems.map((item, index) => (
            <Pressable key={index} onPress={() => handleLinkPress('/')}>
              <Text style={styles.menuItem}>{item}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerTitle: { fontSize: textFontSize.large, fontWeight: 'bold', color: colors.orange, textAlign: 'center',paddingBottom:24 },
  container: {
    paddingTop: 24,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.lightgray,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'web' ? 6 : 10,
    fontSize: 14,
    minWidth: 120,
    backgroundColor: '#f1f1f1',
  },
  menuIcon: {
    fontSize: textFontSize.extraLarge,
    fontWeight: 'bold',
    color: '#333',
  },
  menu: {
    backgroundColor: '#f9f9f9',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    color: colors.black,
  },
});
