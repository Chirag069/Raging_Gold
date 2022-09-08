import {GET_WISHLIST, ADD_WISHLIST, REMOVE_WISHLIST} from '../actions/types';

const initialState = {
  addwishlist: null,
  removewishlist: false,
  wishlist: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
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
