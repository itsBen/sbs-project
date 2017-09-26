import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { getAllCategories } from './actions';
import App from './App';

const middleware = [thunk];
if (__DEV__) {
  middleware.push(createLogger());
}

const store = createStore(reducer, applyMiddleware(...middleware));

store.dispatch(getAllCategories());

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
