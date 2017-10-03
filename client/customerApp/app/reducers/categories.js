import { combineReducers } from 'redux';
import {
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES,
} from '../constants/ActionTypes';

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        ...action.categories.reduce((obj, category) => {
          obj[category.id] = category;
          return obj;
        }, {}),
      };
    default:
      const { categoryId } = action;
      if (categoryId) {
        return {
          ...state,
          [categoryId]: categories(state[categoryId], action),
        };
      }
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case REQUEST_CATEGORIES:
      return true;
    case RECEIVE_CATEGORIES:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  isFetching,
});

export const getCategory = (state, id) => state.byId[id];

export const getCategories = state => Object.values(state.byId);
