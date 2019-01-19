import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from '../components/homepage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={Homepage} exact />
      <Route path="/menu" />
    </div>
  </BrowserRouter>
);

export default AppRouter;
