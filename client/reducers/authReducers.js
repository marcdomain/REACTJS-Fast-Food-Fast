import { SIGN_UP, LOG_IN, RESET_AUTH_MESSAGE } from '../actions/types';

const initialState = {
  response: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        response: action.payload,
      };
    case LOG_IN:
      return {
        ...state,
        response: action.payload,
      };
    case RESET_AUTH_MESSAGE:
      return {
        ...state,
        response: {},
      };
    default:
      return state;
  }
};
