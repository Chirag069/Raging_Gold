import React,{useEffect} from 'react'
import {View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {useSelector} from 'react-redux';
import AuthStack from './AuthStack';
import DrawerNavigation from './DrawerNavigation';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';




const AppNav = () => {
  const {authLoading, userToken ,usertoken} = useSelector(state => state.authState);




console.log(userToken)
  return (
   
    <View style={{flex:1}}>
      <Spinner
        visible={authLoading}
        textContent={'Loading...'}
        textStyle={{color: '#fff'}}
        overlayColor="rgba(0,0,0, 0.5)"
        size={scale(30)}
      />
    {userToken !== null ? <DrawerNavigation /> : <AuthStack />}
  </View>

  )
}

export default AppNav