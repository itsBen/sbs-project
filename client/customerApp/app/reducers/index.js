import { combineReducers } from 'redux';
import categories, * as fromCategories from './categories';
import products, * as fromProducts from './products';
import cart, * as fromCart from './cart';

export default combineReducers({
  categories,
  products,
  cart,
});

const getAddedIds = state => fromCart.getAddedIds(state.cart);
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id);
const getProduct = (state, id) => fromProducts.getProduct(state.products, id);

export const getCategories = state =>
  fromCategories.getCategories(state.categories);

export const getProductsByCategoryId = (state, categoryId) =>
  fromProducts.getProductsByCategoryId(state.products, categoryId);

export const getTotal = state =>
  getAddedIds(state)
    .reduce(
      (total, id) =>
        total + getProduct(state, id).price * getQuantity(state, id),
      0
    )
    .toFixed(2);

export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id),
  }));
