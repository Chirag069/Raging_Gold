import {
  GET_CART,
  UPDATE_CART,
  REMOVE_CART,
  CART_LOADING,
} from '../actions/types';

const initialState = {
  addcart: null,
  removecart: false,
  cartLoading: false,
  cart: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CART_LOADING:
      return {
        ...state,
        cartLoading: true,
      };
    case GET_CART:
      return {
        ...state,
        cart: action.payload,
        cartLoading: false,
      };
    case UPDATE_CART:
      return {
        ...state,
        updatecart: action.payload,
        cartLoading: false,
      };
    case REMOVE_CART:
      return {
        ...state,
        removecart: action.payload,
        cartLoading: false,
      };
    default:
      return state;
  }
};
