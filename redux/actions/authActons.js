import {USER_LOGIN, AUTH_LOADING, USER_LOGOUT ,RETRIEVE_TOKEN} from './types';
import Toast from 'react-native-toast-message';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{useEffect} from 'react'

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

export const getusertoken = () => dispatch => {
 
    let usertoken;
    usertoken = null;
    try {
      usertoken =  AsyncStorage.getItem('usertoken');
    } catch(e) {
      console.log(e);
    }
    // console.log('user token: ', userToken);
    dispatch({ type: 'RETRIEVE_TOKEN', token: usertoken });

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
        if (serverResponse.success == 1 )  {
          let userToken=serverResponse.token
          try {
             AsyncStorage.setItem('userToken', userToken)
          } catch (error) {
            console.log(error);
          }
          dispatch({  
            type: USER_LOGIN,
            payload:userToken
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
