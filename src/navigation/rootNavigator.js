import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TabBar from './TabBar';
import LoginScreen from '../screens/Login/LoginScreen';
const Stack = createStackNavigator()
const RootNavigator = () => {
    return (
  <NavigationContainer>
 <Stack.Navigator
 screenOptions={{
  headerShown:false
 }}
 >
  <Stack.Screen
  name="Login"
  component={LoginScreen}
  />
  <Stack.Screen
  name='Tab'
  component={TabBar}
  />
 </Stack.Navigator>
  </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default RootNavigator;
