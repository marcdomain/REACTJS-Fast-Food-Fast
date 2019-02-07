import { PLACE_ORDER, ORDER_UPDATE } from '../actions/types';

const initialState = {
  response: [],
  updatedOrder: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PLACE_ORDER:
      return {
        ...state,
        response: action.payload,
      };
    case ORDER_UPDATE:
      return {
        ...state,
        updatedOrder: action.payload,
      };
    default:
      return state;
  }
};
