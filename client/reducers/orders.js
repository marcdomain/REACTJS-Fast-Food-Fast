import { ORDER_HISTORY } from '../actions/types';

const initialState = {
  response: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ORDER_HISTORY: {
      return {
        ...state,
        response: action.payload
      };
    }
    default:
      return state;
  }
};
