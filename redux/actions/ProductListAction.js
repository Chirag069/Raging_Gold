import {PRODUCT_LIST, PRODUCTLIST_LOADING} from './types';
import Toast from 'react-native-toast-message';

export const ProductListLoadingAction =
  (loading = false) =>
  dispatch => {
    dispatch({
      type: PRODUCTLIST_LOADING,
      payload: loading,
    });
  };

export const ProductListAction =
  (userToken = '', limit = '10', category = '') =>
  dispatch => {
    dispatch(ProductListLoadingAction(true));
    var myHeaders = new Headers();
    myHeaders.append('If-Range', userToken);
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      offset: 5,
      limit: limit,
      gender: 'MALE,FEMALE,ALL',
      item_group: '1,2,3,4',
      category: category,
      search_text: '',
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
    fetch(
      'http://rd.ragingdevelopers.com/svira/svira1api/items',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        let serverResponse = result;
        dispatch(ProductListLoadingAction());
        if (serverResponse.status == true) {
          dispatch({
            type: PRODUCT_LIST,
            payload: {serverResponse, category},
          });
        } else {
          dispatch(ProductListLoadingAction());
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
        console.log(error);
        dispatch(ProductListLoadingAction());
        Toast.show({
          text1: 'Server response failed',
          visibilityTime: 2000,
          autoHide: true,
          position: 'top',
          type: 'error',
        });
      });
  };
