import {FILTER, FILTER_LOADING} from '../actions/types';

const initialState = {
  filterLoading: true,
  Filter: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_LOADING:
      return {
        ...state,
        filterLoading: true,
      };
    case FILTER:
      return {
        ...state,
        Filter: action.payload,
        filterLoading: false,
      };

    default:
      return state;
  }
};
