import { View, Text, StatusBar } from 'react-native'
import React,{useEffect} from 'react'
import SplashScreen from 'react-native-splash-screen'
import StackNavigation from './src/components/Navigation/StackNavigation'
import {Provider} from 'react-redux';
import store from './redux/store.js';
import Toast from 'react-native-toast-message';
import 'react-native-gesture-handler';
import BottomNavigation from './src/components/Navigation/BottomNavigation';
import AuthStack from './src/components/Navigation/AuthStack';
import AppNav from './src/components/Navigation/AppNav';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  
  return (
    <Provider store={store}>
      <StatusBar  backgroundColor={"#c79248"} />
      <NavigationContainer>
    <AppNav/>
    </NavigationContainer>
    <Toast/>
   
    </Provider>
  )
}

export default App