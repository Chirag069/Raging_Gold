import {PRODUCTLIST_LOADING, PRODUCT_LIST} from '../actions/types';

const initialState = {
  userToken: null,
  authLoading: false,
  userdata: null,
  ProductList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTLIST_LOADING:
      return {
        ...state,
        productlistloading: true,
      };
    case PRODUCT_LIST:
      return {
        ...state,
        ProductList: action.payload,
        productlistloading: false,
      };
    default:
      return state;
  }
};
