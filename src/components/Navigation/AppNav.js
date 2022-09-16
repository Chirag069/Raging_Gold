import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import AuthStack from './AuthStack';
import DrawerNavigation from './DrawerNavigation';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userLoginAction} from '../../../redux/actions/authActons';

const AppNav = () => {
  const dispatch = useDispatch();
  const {authLoading, userToken} = useSelector(state => state.authState);
  const [usertoken, setuserToken] = useState(null);

  // console.log(userToken);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');

      setuserToken(value);
      console.log(value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <Spinner
        visible={authLoading}
        textContent={'Loading...'}
        textStyle={{color: '#fff'}}
        overlayColor="rgba(0,0,0, 0.5)"
        size={scale(30)}
      />
      {userToken !== null ? <DrawerNavigation /> : <AuthStack />}
    </View>
  );
};

export default AppNav;
