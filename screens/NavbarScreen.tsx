import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Linking,
  Platform,
} from 'react-native';

export default function NavbarScreen() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkPress = (url: string) => {
    if (Platform.OS === 'web') {
      window.location.href = url;
    } else {
      Linking.openURL(url);
    }
  };

  return (
    <View style={styles.container}>
      {/* Navbar Header */}
      <View style={styles.navbar}>
        <Pressable onPress={() => handleLinkPress('/')}>
          <Text style={styles.title}>Collabera</Text>
        </Pressable>

        <TextInput
          placeholder="Search documentation..."
          placeholderTextColor="#999"
          style={styles.searchInput}
        />

        <Pressable onPress={() => setMenuOpen(prev => !prev)}>
          <Text style={styles.menuIcon}>{menuOpen ? '✕' : '☰'}</Text>
        </Pressable>
      </View>

      {/* Menu Items */}
      {menuOpen && (
        <View style={styles.menu}>
          {['Showcase', 'Docs', 'Blog', 'Analytics', 'Commerce', 'Templates', 'Enterprise'].map(
            (item, index) => (
              <Pressable key={index} onPress={() => handleLinkPress('/')}>
                <Text style={styles.menuItem}>{item}</Text>
              </Pressable>
            )
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111',
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontSize: 14,
    minWidth: 120,
  },
  menuIcon: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menu: {
    backgroundColor: '#f9f9f9',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 4,
  },
  menuItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
