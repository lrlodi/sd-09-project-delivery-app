import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import Admin from './Admin/Admin';
import Products from './Products/Products';
import Seller from './Seller/Seller';
import Checkout from './Checkout/Checkout';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={ Register } />
        <Route exact path="/admin/manage" component={ Admin } />
        <Route exact path="/seller/orders" component={ Seller } />
        <Route path="/customer/orders/:id" component={ Checkout } />
        <Route path="/customer/checkout" component={ Checkout } />
        <Route path="/customer/products" component={ Products } />
        <Route path="/login" component={ Login } />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default Routes;