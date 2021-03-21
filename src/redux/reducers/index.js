import { combineReducers } from 'redux'
import groceryReducer from './groceryReducer';
import shoppingReducer from './shoppingReducer';

const rootReducer = combineReducers({ groceryReducer, shoppingReducer });


export default rootReducer;