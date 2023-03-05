import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client';

import './index.css';

import store from './redux/store/store'
import Router from './components/router/Router'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);

