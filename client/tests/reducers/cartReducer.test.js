import { PLACE_ORDER } from '../../actions/types';
import cartReducers from '../../reducers/cartReducer';

describe('Test for place-order reducers', () => {
  const initialState = {
    response: []
  };

  it('signup user with the right action', () => {
    expect(cartReducers({ ...initialState }, { type: PLACE_ORDER, payload: 'Ordered' })).toEqual({
      response: 'Ordered'
    });
  });

  it('default', () => {
    expect(cartReducers({ ...initialState }, { type: null })).toEqual({
      response: []
    });
  });
});
