import {combineReducers} from 'redux';
import themeReducer from './themeReducer.js';
import authReducer from './authReducer.js';
import productReducer from './productReducer.js';
import counterReducer from './counterReducer'

export default combineReducers({
  themeState: themeReducer,
  authState: authReducer,
  productState: productReducer,
  counterState: counterReducer
});
