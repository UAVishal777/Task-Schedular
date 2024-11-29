// DashboardScreen.tsx

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const DashboardScreen = () => {
  const handleLogout = async () => {
    // Perform logout logic
    // await AsyncStorage.setItem('isLoggedIn', 'false');
    // Navigate to Login screen
  };

  return (
    <View style={styles.container}>
      <Text>Dashboard Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DashboardScreen;
