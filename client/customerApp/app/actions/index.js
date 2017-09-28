import shop from '../api/shop';
import * as types from '../constants/ActionTypes';

// CATEGORIES
const requestCategories = () => ({
  type: types.REQUEST_CATEGORIES,
});
const receiveCategories = categories => ({
  type: types.RECEIVE_CATEGORIES,
  categories,
});

export const fetchAllCategories = () => dispatch => {
  dispatch(requestCategories());

  shop.getProductCategories(categories => {
    dispatch(receiveCategories(categories));
  });
};

// PRODUCTS
const requestProducts = categoryId => ({
  type: types.REQUEST_PRODUCTS,
});
const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products,
});

export const fetchProductsByCategoryId = categoryId => dispatch => {
  dispatch(requestProducts());

  shop.getProductsByCategory((products, categoryId) => {
    dispatch(receiveProducts(products));
  });
};

// CART
const addToCartAction = productId => ({
  type: types.ADD_TO_CART,
  productId,
});

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId]) {
    dispatch(addToCartAction(productId));
  }
};
