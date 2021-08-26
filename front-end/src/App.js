import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import rockGlass from './images/rockGlass.svg';
import DeliveryProvider from './context/deliveryProvider';

function App() {
  return (
    <DeliveryProvider>
      <div className="App">
        <span className="logo">TRYBE</span>
        <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
          Glass
        </object>
      </div>
    </DeliveryProvider>
  );
}

export default App;
