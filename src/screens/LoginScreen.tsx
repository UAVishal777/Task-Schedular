// LoginScreen.tsx

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const handleLogin = async () => {
    // Perform login logic
    // For simplicity, let's just set isLoggedIn to true
    // await AsyncStorage.setItem('isLoggedIn', 'true');
    // Navigate to Dashboard
  };

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={handleLogin} />
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

export default LoginScreen;
