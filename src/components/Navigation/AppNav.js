import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import AuthStack from './AuthStack';
import DrawerNavigation from './DrawerNavigation';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {useSelector, useDispatch} from 'react-redux';
import {LoggedAction} from '../../../redux/actions/authActons';
import {ActivityIndicator} from 'react-native-paper';

const AppNav = () => {
  const dispatch = useDispatch();
  const {authLoading, Token} = useSelector(state => state.authState);

  useEffect(() => {
    dispatch(LoggedAction());
  }, []);

  return (
    <>
      {!Token ? (
        <View
          style={{
            marginTop: 'auto',
            marginBottom: 'auto',
            alignItems: 'center',
            paddingVertical: verticalScale(20),
          }}>
          <ActivityIndicator
            animating={authLoading}
            color={'#c79248'}
            size={scale(30)}
          />
        </View>
      ) : (
        <View style={{flex: 1}}>
          {Token !== null ? <DrawerNavigation /> : <AuthStack />}
        </View>
      )}
    </>
  );
};

export default AppNav;
