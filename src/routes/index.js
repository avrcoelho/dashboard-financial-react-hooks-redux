import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages
import Login from '~/pages/Login';
import Orders from '~/pages/Orders';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/orders" component={Orders} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
