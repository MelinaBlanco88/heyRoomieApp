import React from 'react';
import { styles } from '../../assets/css/styles.js';
import { Text, View } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}>Encuentra Roomie de forma segura</Text>
    </View>
  )
}

export default Header;
