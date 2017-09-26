import { combineReducers } from 'redux';
import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../constants/ActionTypes';

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product;
          return obj;
        }, {}),
      };
    default:
      return state;
  }
};

export default combineReducers({
  byId,
});

export const getProduct = (state, id) => state.byId[id];

export const getProductsByCategoryId = (state, categoryId) =>
  Object.values(state.byId)
    .filter(value => value.categoriesIds.includes(categoryId))
    .reduce((arr, product) => {
      return arr.concat([product]);
    }, []);
