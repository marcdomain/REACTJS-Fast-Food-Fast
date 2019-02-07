import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import toggleMessage from '../../actions/toggleMessage';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store;

describe('Reset authMessage', () => {
  it('Reset authMessage', () => {
    store = mockStore({});

    toggleMessage();
    expect(store.getActions()).toEqual([]);
  });
});
