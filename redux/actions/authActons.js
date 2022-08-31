import {USER_LOGIN, AUTH_LOADING, USER_LOGOUT} from './types';
import Toast from 'react-native-toast-message';
import { Alert } from 'react-native';

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
    var formdata = new FormData();
    formdata.append('mobile_no', userName);
    formdata.append('password', userPassword);
    formdata.append('auth_token', 'sJ4[pR3=bM5^gJ0]pS6.gI2$hV5*uS');

    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    fetch('https://demo.paypocket.in/api/login', requestOptions)
      .then(response => response.text())
      .then(result => {
        let serverResponse = JSON.parse(result);
        dispatch(authLoadingAction());
        if (serverResponse.success == 1 ) {
          dispatch({
            type: USER_LOGIN,
            payload:serverResponse.token
          });
         
          Toast.show({
            text1: 'User Login Successfully',
            visibilityTime: 3000,
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
