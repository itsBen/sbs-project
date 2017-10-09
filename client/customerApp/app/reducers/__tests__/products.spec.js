import * as types from '../../constants/ActionTypes';
import products, { getProduct, getProductsByCategoryId } from '../products';

describe('Products reducers', () => {
  describe('category', () => {
    it('should handle initial state', () => {
      expect(products(undefined, {})).toEqual({
        byId: {},
        isFetching: false,
      });
    });
  });

  describe('getProduct by Id', () => {
    it('should handle initial state', () => {
      expect(getProduct(undefined, 2)).toEqual(undefined);
    });
  });

  describe('getProductsByCategoryId', () => {
    it('should handle initial state', () => {
      expect(getProductsByCategoryId(undefined, 2)).toEqual([]);
    });
  });
});
