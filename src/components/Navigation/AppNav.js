import * as React from 'react';
import {View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {useSelector} from 'react-redux';
import AuthStack from './AuthStack';
import DrawerNavigation from './DrawerNavigation';

const AppNav = () => {
  const {authLoading, userToken} = useSelector(state => state.authState);

console.log(userToken)
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