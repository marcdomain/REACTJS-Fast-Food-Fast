import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from '../components/homepage';
import AvailableFood from '../components/AvailableFood';
import OrderHistory from '../components/OrderHistory';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/menu" component={AvailableFood} />
      <Route path="/orders" component={OrderHistory} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
