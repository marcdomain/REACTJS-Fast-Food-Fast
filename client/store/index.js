import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducers from '../reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  authReducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
  )
);

export default store;
