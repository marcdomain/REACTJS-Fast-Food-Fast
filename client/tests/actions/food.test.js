import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { AVAILABLE_FOOD } from '../../actions/types';
import { baseURL } from '../../utils';
import getAvailableFood from '../../actions/availableFood';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store;

describe('get available food actions', () => {
  beforeEach(() => {
    fetchMock.restore();
    store = mockStore({});
  });

  it('Fetch available food', () => {
    fetchMock.get(`${baseURL}/menu`, {
      response: {}
    });

    const actions = [{
      type: AVAILABLE_FOOD,
      payload: undefined
    }];

    return store.dispatch(getAvailableFood())
      .then(() => {
        expect(store.getActions()).toEqual(actions);
      });
  });
});
