import {GET_WISHLIST, ADD_WISHLIST, REMOVE_WISHLIST} from './types';
import Toast from 'react-native-toast-message';

export const GetWishlistAction =
  (userToken = '') =>
  dispatch => {
    var myHeaders = new Headers();
    myHeaders.append('If-Range', userToken);
    myHeaders.append('Content-Type', 'application/json');
    var raw = JSON.stringify({});
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
    fetch(
      'http://rd.ragingdevelopers.com/svira/svira1api/home/wishlist',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        let serverResponse = result;
        console.log(serverResponse.message);

        if (serverResponse.status == true) {
          dispatch({
            type: GET_WISHLIST,
            payload: serverResponse,
          });

          Toast.show({
            text1: serverResponse.message,
            visibilityTime: 2000,
            autoHide: true,
            position: 'top',
            type: 'success',
          });
        } else {
          Toast.show({
            text1: serverResponse.msg,
            visibilityTime: 2000,
            autoHide: true,
            position: 'top',
            type: 'error',
          });
        }
      })
      .catch(error => {
        Toast.show({
          text1: 'Server response failed',
          visibilityTime: 2000,
          autoHide: true,
          position: 'top',
          type: 'error',
        });
      });
  };
