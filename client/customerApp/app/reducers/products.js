import { combineReducers } from 'redux';
import { RECEIVE_PRODUCTS, REQUEST_PRODUCTS } from '../constants/ActionTypes';

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.sys.id] = Object.assign({}, product.fields, {
            categories: undefined,
          });
          obj[product.sys.id]['categoryIds'] = product.fields.categories.map(
            category => category.sys.id
          );
          obj[product.sys.id]['id'] = product.sys.id;
          return obj;
        }, {}),
      };
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return true;
    case RECEIVE_PRODUCTS:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  isFetching,
});

export const getProduct = (state, id) => state.byId[id];

export const getProductsByCategoryId = (state, categoryId) =>
  Object.values(state.byId)
    .filter(value => value.categoryIds.includes(categoryId))
    .reduce((arr, product) => {
      return arr.concat([product]);
    }, []);
