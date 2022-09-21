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
        gender: action.payload.gender,
        subcategory: action.payload.sub_category,
        itemgroup: action.payload.item_group,
        category: action.payload.category,
        filterLoading: false,
      };

    default:
      return state;
  }
};
