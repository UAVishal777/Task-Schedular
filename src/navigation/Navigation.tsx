// Navigation.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Dashboard: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    // Check if user is logged in
    // AsyncStorage.getItem('isLoggedIn').then(value => {
    //   setIsLoggedIn(value === 'true');
    //   setIsLoading(false);
    // });
    setIsLoggedIn(true);
    setIsLoading(false)
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
