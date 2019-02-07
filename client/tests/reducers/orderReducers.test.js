import { ORDER_HISTORY, DELETE_ORDER } from '../../actions/types';
import orderReducers from '../../reducers/orders';

describe('Test for available-food reducers', () => {
  const initialOrder = {
    response: []
  };
  const deleteRes = {
    deleteResonse: []
  };

  it('signup user with the right action', () => {
    expect(orderReducers({ ...initialOrder }, { type: ORDER_HISTORY, payload: 'history' })).toEqual({
      response: 'history'
    });
  });

  it('signup user with the right action', () => {
    expect(orderReducers({ ...deleteRes }, { type: DELETE_ORDER, payload: 'history' })).toEqual({
      deleteResonse: 'history'
    });
  });

  it('default', () => {
    expect(orderReducers({ ...initialOrder }, { type: null })).toEqual({
      response: []
    });
  });
});
