import { View, Text, StatusBar } from 'react-native'
import React,{useEffect} from 'react'
import SplashScreen from 'react-native-splash-screen'
import StackNavigation from './src/components/Navigation/StackNavigation'
import {Provider} from 'react-redux';
import store from './redux/store.js';
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';


const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  
  return (
    <Provider store={store}>
      <StatusBar  backgroundColor={"#c79248"} />
    <NavigationContainer>
    <StackNavigation/>
    </NavigationContainer>
    <Toast/>
    </Provider>
    // <CustomCarousel/>
  )
}

export default App