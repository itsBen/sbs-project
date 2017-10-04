import * as types from '../../constants/ActionTypes';
import categories, { getCategory, getCategories } from '../categories';

describe('Categories reducers', () => {
  describe('category', () => {
    it('should handle initial state', () => {
      expect(categories(undefined, {})).toEqual({
        byId: {},
        isFetching: false,
      });
    });
  });

  describe('getCategory by Id', () => {
    it('should handle initial state', () => {
      expect(getCategory(undefined, 2)).toEqual(undefined);
    });
  });

  describe('getCategories', () => {
    it('should handle initial state', () => {
      expect(getCategories(undefined)).toEqual([]);
    });
  });
});
