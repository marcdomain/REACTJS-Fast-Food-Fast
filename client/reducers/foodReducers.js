import { AVAILABLE_FOOD } from '../actions/types';

const initialState = {
  response: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AVAILABLE_FOOD:
      return {
        ...state,
        response: action.payload,
      };
    default:
      return state;
  }
};
