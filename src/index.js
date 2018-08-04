import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import {getShoppingListItems} from './actions/shoppingListItemActions'
import App from './App';
import './index.css';
import {combineReducers} from 'redux';
import shoppingListItems from './shoppingListItemReducer';

const store = configureStore();

const rootReducer = combineReducers({
  // short hand property names
  shoppingListItems
})

store.dispatch(getShoppingListItems())


ReactDOM.render(
  <Provider store={store}>
   <App />
  </Provider>,
  document.getElementById('root')
);

export default rootReducer;
