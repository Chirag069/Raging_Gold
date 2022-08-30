import * as React from 'react';
import {Button, View, Image, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Spinner from 'react-native-loading-spinner-overlay';
import {useSelector} from 'react-redux';
import { DrawerActions, useNavigation } from '@react-navigation/native';

import BottomNavigation from './BottomNavigation';
import AuthStack from './AuthStack';
import DrawerNavigation from './DrawerNavigation';

const AppNav = () => {
  const {authLoading, userToken} = useSelector(state => state.authState);
  const navigation=useNavigation()
  return (
   
    <View style={{flex:1}}>
      <Spinner
        visible={authLoading}
        textContent={'Loading...'}
        textStyle={{color: '#fff'}}
        overlayColor="rgba(0,0,0, 0.5)"
      />
    {userToken !== null ? <DrawerNavigation /> : <AuthStack />}
  </View>

  )
}

export default AppNav