import {INCREMENT, DECREMENT, RESET} from '../actions/types';

const initialState = {
  counter: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case RESET:
      return {
        ...state,
        counter: (state.counter = 0),
      };

    default:
      return state;
  }
};
