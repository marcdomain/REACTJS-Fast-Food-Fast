import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { ORDER_HISTORY } from '../../actions/types';
import { baseURL } from '../../utils';
import getOrderHistory from '../../actions/orderHistory';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store;

describe('get order history', () => {
  beforeEach(() => {
    fetchMock.restore();
    store = mockStore({});
  });

  it('Fetch order history', () => {
    fetchMock.get(`${baseURL}/users/1/orders`, {
      response: []
    });

    const actions = [{
      type: ORDER_HISTORY,
      payload: undefined
    }];

    return store.dispatch(getOrderHistory(1))
      .then(() => {
        expect(store.getActions()).toEqual(actions);
      });
  });
});
