import {
  GET_WISHLIST,
  ADD_WISHLIST,
  REMOVE_WISHLIST,
  WISHLIST_LOADING,
} from '../actions/types';

const initialState = {
  addwishlist: null,
  removewishlist: false,
  wishlistLoading: false,
  wishlist: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case WISHLIST_LOADING:
      return {
        ...state,
        wishlistLoading: true,
      };
    case GET_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
        wishlistLoading: false,
      };
    case ADD_WISHLIST:
      return {
        ...state,
        addwishlist: action.payload,
      };
    case REMOVE_WISHLIST:
      return {
        ...state,
        removewishlist: action.payload,
      };
    default:
      return state;
  }
};
