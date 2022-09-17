import {
  USER_LOGOUT,
  USER_LOGIN,
  AUTH_LOADING,
  USER_DATA,
  LOGGED,
} from '../actions/types';

const initialState = {
  userToken: null,
  authLoading: false,
  userdata: null,
  Token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGGED:
      return {
        ...state,
        Token: action.payload,
      };
    case USER_LOGIN:
      return {
        ...state,
        userToken: action.payload,
      };
    case USER_DATA:
      return {
        ...state,
        userdata: action.payload,
      };
    case AUTH_LOADING:
      return {
        ...state,
        authLoading: action.payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        userToken: null,
      };
    default:
      return state;
  }
};
