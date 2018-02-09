
import { combineReducers } from 'redux';
import shoppingListItems from './shoppingListItemReducer';

const rootReducer = combineReducers({
  shoppingListItems: shoppingListItems,
});

export default rootReducer;
