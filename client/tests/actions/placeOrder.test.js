import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { PLACE_ORDER } from '../../actions/types';
import { baseURL } from '../../utils';
import placeOrder, { orderUpdate } from '../../actions/placeOrder';
import { mapStateToProps } from '../../components/PlaceOrder';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store;

describe('Place order', () => {
  beforeEach(() => {
    fetchMock.restore();
    store = mockStore({});
  });

  it('Place order', () => {
    fetchMock.post(`${baseURL}/orders`, {
      response: []
    });

    const actions = [{
      type: PLACE_ORDER,
      payload: { response: [] }
    }];

    return store.dispatch(placeOrder(1))
      .then(() => {
        expect(store.getActions()).toEqual(actions);
      });
  });

  it('test mapStateToProps', () => {
    const state = {
      placeOrder: {
        updatedOrder: ['my order']
      }
    };
    expect(mapStateToProps(state)).toEqual({ cartItems: ['my order'] });
  });
});

describe('Reset authMessage', () => {
  it('Reset authMessage', () => {
    store = mockStore({});

    const data = { id: 1, menu: 'beans' };
    orderUpdate(data);

    expect(store.getActions()).toEqual([]);
  });
});
