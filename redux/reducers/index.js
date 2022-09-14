import {combineReducers} from 'redux';
import themeReducer from './themeReducer.js';
import authReducer from './authReducer.js';
import productReducer from './productReducer.js';
import counterReducer from './counterReducer';
import WishListReducer from './WishListReducer.js';
import ProductListReducer from './ProductListReducer.js';
import CartReducer from './CartReducer.js';
import HomeReducer from './HomeReducer.js';

export default combineReducers({
  themeState: themeReducer,
  authState: authReducer,
  productState: productReducer,
  counterState: counterReducer,
  wishlistState: WishListReducer,
  productlistState: ProductListReducer,
  cartState: CartReducer,
  homeState: HomeReducer,
});
