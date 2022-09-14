import {HOME} from '../actions/types';

const initialState = {
  home: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HOME:
      return {
        ...state,
        home: action.payload,
      };
    default:
      return state;
  }
};
