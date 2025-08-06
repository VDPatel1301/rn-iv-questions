
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
  const isDesktop = width >= 768;

  const handleLinkPress = (url: string) => {
    if (Platform.OS === 'web') {
      window.location.href = url;
    } else {
      Linking.openURL(url);
    }
    if (!isDesktop) setMenuOpen(false);
  };

  return (
    <View style={styles.container}>
      {/* App Title */}
      <Text style={styles.headerTitle}>{Collabera}</Text>

      {isDesktop ? (
        // 🖥️ Desktop View: Logo + MenuItems left, Search right
        <View style={styles.navbarDesktop}>
          <View style={styles.leftSection}>
            {/* Logo */}
            <Pressable onPress={() => handleLinkPress('/')} accessibilityRole="link" accessibilityLabel="Home link">
              <Image style={styles.logo} source={IMAGE['company_logo']} resizeMode="contain" />
            </Pressable>

            {/* Menu Items */}
            <View style={styles.menuItemsRow}>
              {menuItems.map((item, index) => (
                <Pressable key={index} onPress={() => handleLinkPress('/')}>
                  <Text style={styles.menuItemDesktop}>{item}</Text>
                </Pressable>
              ))}
            </View>
          </View>

          {/* Search Input aligned right */}
          <TextInput placeholder="Search documentation..." style={styles.searchInput} />
        </View>
      ) : (
        // 📱 Mobile View remains unchanged
        <>
          <View style={styles.navbar}>
            <Pressable onPress={() => handleLinkPress('/')} accessibilityRole="link" accessibilityLabel="Home link">
              <Image style={styles.logo} source={IMAGE['company_logo']} resizeMode="contain" />
            </Pressable>

            <TextInput placeholder="Search documentation..." style={styles.searchInput} />

            <Pressable onPress={() => setMenuOpen(prev => !prev)}>
              <Text style={styles.menuIcon}>{menuOpen ? '✕' : '☰'}</Text>
            </Pressable>
          </View>

          {menuOpen && (
            <View style={styles.menuMobile}>
              {menuItems.map((item, index) => (
                <Pressable key={index} onPress={() => handleLinkPress('/')}>
                  <Text style={styles.menuItemMobile}>{item}</Text>
                </Pressable>
              ))}
            </View>
          )}
        </>
      )}

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: textFontSize.large,
    fontWeight: 'bold',
    color: colors.orange,
    textAlign: 'center',
    paddingBottom: 24,
  },
  logo: {
    width: 50,
    height: 50,
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 10,
  },
  searchInput: {
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.lightgray,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'web' ? 6 : 10,
    fontSize: 14,
    minWidth: 250,
    backgroundColor: '#f1f1f1',
  },
  menuIcon: {
    fontSize: textFontSize.extraLarge,
    fontWeight: 'bold',
    color: '#333',
  },
  // Desktop menu style
  menuDesktop: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
    marginTop: 10,
  },
  menuItemDesktop: {
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight: '500',
    color: colors.black,
  },
  // Mobile menu style
  menuMobile: {
    backgroundColor: '#f9f9f9',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  menuItemMobile: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    color: colors.black,
  },
  navbarDesktop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    gap: 16,
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },

  menuItemsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },


});
