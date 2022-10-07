import {
  USER_LOGIN,
  AUTH_LOADING,
  USER_LOGOUT,
  LOGGED,
  LOGGED_LOADING,
} from './types';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authLoadingAction =
  (loading = false) =>
  dispatch => {
    dispatch({
      type: AUTH_LOADING,
      payload: loading,
    });
  };

export const LoggedLoadingAction =
  (loading = false) =>
  dispatch => {
    dispatch({
      type: LOGGED_LOADING,
      payload: loading,
    });
  };

export const LoggedAction = () => async dispatch => {
  try {
    const value = await AsyncStorage.getItem('token');
    if (value) {
      dispatch({
        type: LOGGED,
        payload: value,
      });
    } else {
    }
  } catch (error) {
    Toast.show({
      text1: 'server response fail',
      visibilityTime: 3000,
      autoHide: true,
      position: 'top',
      type: 'error',
    });
  }
};

export const authLogOutAction = () => dispatch => {
  try {
    AsyncStorage.removeItem('token');
  } catch (e) {
    console.log(e);
  }

  dispatch({
    type: USER_LOGOUT,
  });
};

export const userLoginAction =
  (userName = '', userPassword = '') =>
  dispatch => {
    dispatch(authLoadingAction(true));
    var myHeaders = new Headers();
    myHeaders.append('If-Match', 'LOGIN');
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append(
      'Cookie',
      'ci_sessions=2ac4b3b853e36a428c2dfced1e9cfb744fa4d73c',
    );

    var raw = JSON.stringify({
      mobile: userName,
      password: userPassword,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
    fetch(
      'http://rd.ragingdevelopers.com/svira/svira1api/login',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        let serverResponse = result;
        dispatch(authLoadingAction());
        if (serverResponse.status == true) {
          let userToken = serverResponse.data.token;
          try {
            AsyncStorage.setItem('token', userToken);
          } catch (error) {
            console.log(error);
          }

          dispatch({
            type: USER_LOGIN,
            payload: userToken,
          });

          Toast.show({
            text1: 'User Login Successfully',
            visibilityTime: 2000,
            autoHide: true,
            position: 'top',
            type: 'success',
          });
        } else {
          Toast.show({
            text1: 'User Login failed.',
            visibilityTime: 3000,
            autoHide: true,
            position: 'top',
            type: 'error',
          });
        }
      })
      .catch(error => {
        dispatch(authLoadingAction());
        Toast.show({
          text1: 'Server response failed',
          visibilityTime: 3000,
          autoHide: true,
          position: 'top',
          type: 'error',
        });
      });
  };
