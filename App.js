import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './screens/Signup';

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: '#005493'},
  headerTitleStyle: { color: 'white'},
  headerTintColor: 'white', //icon color
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen options={{ title: "Sign Up", }} name='Signup' component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});