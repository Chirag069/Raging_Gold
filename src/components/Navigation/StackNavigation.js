import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens
import CustomerOption from '../CustomerOption'
import SignIn from '../../screens/SignIn';



const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }}>
      <Stack.Screen name="CustomerOption" component={CustomerOption} />
      <Stack.Screen name="SignIn" component={SignIn} />
      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
