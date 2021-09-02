import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Login from './pages/login';
import Produtos from './pages/Produtos';
import Registro from './pages/registro';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/login" />
    </Route>
    <Route exact path="/login" component={ Login } />
    <Route exact path="/register" component={ Registro } />
    <Route exact path="/customer/products" component={ Produtos } />
    <Route exact path="/customer/checkout" component={ Checkout } />
  </Switch>
);

export default Routes;
