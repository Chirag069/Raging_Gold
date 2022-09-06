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

export const ProductListAction = () => dispatch => {
  var myHeaders = new Headers();
  myHeaders.append(
    'If-Range',
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjUiLCJuYW1lIjoiUmF2aSBSYW1hbmkiLCJtb2JpbGVfbm8iOiI4MTI4NDIxNjYzIiwicGFzc3dvcmQiOiI3MTEwZWRhNGQwOWUwNjJhYTVlNGEzOTBiMGE1NzJhYzBkMmMwMjIwIiwiZW1haWwiOiIiLCJjaXR5IjoiQWhtZWRhYmFkIiwiYWRkcmVzcyI6IiIsInN0YXR1cyI6IiIsImNvb2tpZV9zdGF0dXMiOiJQZW5kaW5nIiwiY29va2llIjpudWxsLCJpcF9hZGRyZXNzIjpudWxsLCJ1c2VybmFtZSI6InJhdmlwYXRlbCIsInRva2VuIjpudWxsLCJjcmVhdGVkX2F0IjoiMjAyMi0wOC0xNiAxMDowOTo0NCIsInVwZGF0ZWRfYXQiOiIyMDIyLTA4LTMwIDAwOjE1OjExIiwiYWRtaW5faWQiOiIxIn0.AfoOnZRh2UuulBksObJz_b9tIyAVCUnVeIZZozRykfo',
  );
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append(
    'Cookie',
    'ci_sessions=2ac4b3b853e36a428c2dfced1e9cfb744fa4d73c',
  );

  var raw = JSON.stringify({
    offset: 0,
    limit: 20,
    gender: 'MALE,FEMALE,ALL',
    item_group: '1,2,3,4',
    category: '',
    search_text: '',
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch('http://rd.ragingdevelopers.com/svira/svira1api/items', requestOptions)
    .then(response => response.text())
    .then(result => {
      // let response = result;
      console.log(result);
      dispatch({
        type: PRODUCT_LIST,
        payload: result,
      });
    })
    .catch(error => console.log('error', error));
};
