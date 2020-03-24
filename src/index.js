import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import Reducer from './redux/reducers'
import Router from './Routes'
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

const store = createStore(Reducer, applyMiddleware(thunkMiddleware));
ReactDOM.render(
    <Provider store={store}>
      <Router />
    </Provider>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
