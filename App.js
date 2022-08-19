import { View, Text } from 'react-native'
import React,{useEffect} from 'react'
import SplashScreen from 'react-native-splash-screen'
import StackNavigation from './src/components/Navigation/StackNavigation'
import {Provider} from 'react-redux';
import store from './redux/store.js';
import Toast from 'react-native-toast-message';

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  
  return (
    <Provider store={store}>
    <StackNavigation/>
    {/* <Toast ref={ref => Toast.setRef(ref)} /> */}
    </Provider>
  )
}

export default App