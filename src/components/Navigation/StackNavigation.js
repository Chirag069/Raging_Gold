import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Spinner from 'react-native-loading-spinner-overlay';
//screens
import CustomerOption from '../CustomerOption'
import SignIn from '../../screens/SignIn';
import SignUp from '../../screens/SignUp';
import Home from '../../screens/Home';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

function MyStack() {
  const {authLoading, userToken} = useSelector(state => state.authState);
  console.log(userToken)
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
    <Spinner
      visible={authLoading}
      textContent={'Loading...'}
      textStyle={{color: '#fff'}}
      overlayColor="rgba(0,0,0, 0.5)"
    />



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
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
