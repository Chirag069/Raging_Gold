import {USER_UPDATE} from '../actions/types';

const initialState = {
  userupdateid: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_UPDATE:
      return {
        ...state,
        userupdateid: action.payload,
      };

    default:
      return state;
  }
};
