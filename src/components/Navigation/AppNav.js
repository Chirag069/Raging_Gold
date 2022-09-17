import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import AuthStack from './AuthStack';
import DrawerNavigation from './DrawerNavigation';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoggedAction} from '../../../redux/actions/authActons';

const AppNav = () => {
  const dispatch = useDispatch();
  const {authLoading, Token} = useSelector(state => state.authState);

  useEffect(() => {
    dispatch(LoggedAction());
  }, []);

  // console.log(Token);

  return (
    <View style={{flex: 1}}>
      <Spinner
        visible={authLoading}
        textContent={'Loading...'}
        textStyle={{color: '#fff'}}
        overlayColor="rgba(0,0,0, 0.5)"
        size={scale(30)}
      />
      {Token !== null ? <DrawerNavigation /> : <AuthStack />}
      {/* <DrawerNavigation /> */}
    </View>
  );
};

export default AppNav;
