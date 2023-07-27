// MainStackNavigator.tsx

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ScreenNames from './ScreenNames';
import {LoginScreen, SplashScreen} from 'screens';

const Stack = createStackNavigator();

const MainStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.Splash}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={ScreenNames.Splash} component={SplashScreen} />
      <Stack.Screen name={ScreenNames.Login} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
