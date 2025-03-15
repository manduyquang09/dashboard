import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AppStack from './tabBar';
import { LoginScreen, UserListScreen } from '../screens';
import router from '../utils/router';
const Stack = createStackNavigator()
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={router.LOGIN}
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name={router.LOGIN}
          component={LoginScreen}
          
        />
        <Stack.Screen
          name={router.APP_STACK}
          component={AppStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({})

export default RootNavigator;
