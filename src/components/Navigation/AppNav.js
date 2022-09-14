import React, {useEffect} from 'react';
import {View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import AuthStack from './AuthStack';
import DrawerNavigation from './DrawerNavigation';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {HomeAction} from '../../../redux/actions/HomeAction';

const AppNav = () => {
  const dispatch = useDispatch();
  const {authLoading, userToken} = useSelector(state => state.authState);

  useEffect(() => {
    dispatch(HomeAction(userToken));
  }, []);

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
