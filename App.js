import { View, Text } from 'react-native'
import React,{useEffect} from 'react'
import SplashScreen from 'react-native-splash-screen'
import StackNavigation from './src/components/Navigation/StackNavigation'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  
  return (
    <StackNavigation/>
  )
}

export default App