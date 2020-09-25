import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './store/reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';
import App from "./components/App";
import { CookiesProvider } from 'react-cookie';

// const store = createStore(rootReducer, applyMiddleware(thunk, logger))
const store = createStore(rootReducer, applyMiddleware(thunk))


ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </CookiesProvider>,
  document.querySelector("#root")
);

serviceWorker.unregister();