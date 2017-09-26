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

export const getAllCategories = () => dispatch => {
  dispatch(requestCategories());
  shop.getCategories(categories => {
    dispatch(receiveCategories(categories));
  });
};

// PRODUCTS
const requestProducts = () => ({
  type: types.REQUEST_PRODUCTS,
});
const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products,
});

export const getAllProducts = () => dispatch => {
  dispatch(requestProducts());
  shop.getProducts(products => {
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
