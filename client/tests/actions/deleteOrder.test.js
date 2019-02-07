import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { DELETE_ORDER } from '../../actions/types';
import { baseURL } from '../../utils';
import deleteOrder from '../../actions/deleteOrder';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store;

describe('delete order actions', () => {
  beforeEach(() => {
    fetchMock.restore();
    store = mockStore({});
  });

  it('Delete order', () => {
    fetchMock.delete(`${baseURL}/orders/1`, {
      response: {}
    });

    const actions = [{
      type: DELETE_ORDER,
      payload: { response: {} }
    }];

    return store.dispatch(deleteOrder(1))
      .then(() => {
        expect(store.getActions()).toEqual(actions);
      });
  });
});
