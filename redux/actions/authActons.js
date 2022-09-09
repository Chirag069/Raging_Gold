import {USER_LOGIN, AUTH_LOADING, USER_LOGOUT, PRODUCT_LIST} from './types';
import Toast from 'react-native-toast-message';

export const authLoadingAction =
  (loading = false) =>
  dispatch => {
    dispatch({
      type: AUTH_LOADING,
      payload: loading,
    });
  };

export const authLogOutAction = () => dispatch => {
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
