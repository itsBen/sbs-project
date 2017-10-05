import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY_ON_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
} from '../constants/ActionTypes';

const initialState = {
  addedIds: [],
  quantityById: {},
};

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state;
      }
      return [...state, action.productId];
    case REMOVE_FROM_CART:
      if (state.indexOf(action.productId) !== -1) {
        return [
          ...state.slice(0, state.indexOf(action.productId)),
          ...state.slice(state.indexOf(action.productId) + 1),
        ];
      }
      return state;
    default:
      return state;
  }
};

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action;
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        [action.productId]: 0,
      };
    case UPDATE_QUANTITY_ON_CART:
      return {
        ...state,
        [action.productId]: action.quantity,
      };
    default:
      return state;
  }
};

export const getQuantity = (state = initialState, productId) =>
  state.quantityById[productId] || 0;

export const getAddedIds = (state = initialState) => state.addedIds;

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState;
    case CHECKOUT_FAILURE:
      return action.cart;
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
      };
  }
};

export default cart;
