import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css';
import 'toastr/toastr.scss';
import store from './store';
import AppRouter from './routers/AppRouter';

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

render(app, document.getElementById('app'));

export default app;
