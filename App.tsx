/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HomeScreen from './src/screens/home/styles/homeScreen';
import RootNavigator from './src/navigation/rootNavigator';

const App=()=>{


  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar
        barStyle="dark-content"
        
      />
     <RootNavigator/>
    </SafeAreaView>
  );

}

export default App;
