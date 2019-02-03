import { ORDER_HISTORY, DELETE_ORDER } from '../actions/types';

const initialState = {
  response: [],
  deleteResonse: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ORDER_HISTORY: {
      return {
        ...state,
        response: action.payload
      };
    }
    case DELETE_ORDER: {
      return {
        ...state,
        deleteResonse: action.payload
      };
    }
    default:
      return state;
  }
};
