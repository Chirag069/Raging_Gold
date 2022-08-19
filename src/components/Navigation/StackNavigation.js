import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens
import CustomerOption from '../CustomerOption'
import SignIn from '../../screens/SignIn';
import SignUp from '../../screens/SignUp';
import Home from '../../screens/Home';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

function MyStack() {
  const {authLoading, userToken} = useSelector(state => state.authState);
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }}>
        {userToken ? (
       <Stack.Screen name="Home" component={Home} />
       ) : (
        <>
      <Stack.Screen name="CustomerOption" component={CustomerOption} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      </>
      )}
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
