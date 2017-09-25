import { combineReducers } from 'redux';
import categories, * as fromCategories from './categories';
import products, * as fromProducts from './products';

export default combineReducers({
  categories,
  products,
});

export const getCategories = state =>
  fromCategories.getCategories(state.categories);

export const getProductsByCategoryId = (state, categoryId) =>
  fromProducts.getProductsByCategoryId(state.products, categoryId);
