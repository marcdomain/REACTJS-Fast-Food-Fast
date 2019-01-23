import PLACE_ORDER from '../actions/types';

const initialState = {
  response: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PLACE_ORDER:
      return {
        response: action.payload,
      };
    default:
      return state;
  }
};
