import { AVAILABLE_FOOD } from '../../actions/types';
import foodReducers from '../../reducers/foodReducers';

describe('Test for available-food reducers', () => {
  const initialState = {
    response: []
  };

  it('signup user with the right action', () => {
    expect(foodReducers({ ...initialState }, { type: AVAILABLE_FOOD, payload: 'ready' })).toEqual({
      response: 'ready'
    });
  });

  it('default', () => {
    expect(foodReducers({ ...initialState }, { type: null })).toEqual({
      response: []
    });
  });
});
