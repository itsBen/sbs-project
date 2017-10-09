import * as types from '../../constants/ActionTypes';
import cart, { getQuantity, getAddedIds } from '../cart';

describe('Cart reducers', () => {
  describe('cart', () => {
    it('should handle initial state', () => {
      expect(cart(undefined, {})).toEqual({
        addedIds: [],
        quantityById: {},
      });
    });
  });

  describe('getQuantity', () => {
    it('should handle initial state', () => {
      expect(getQuantity(undefined, 2)).toEqual(0);
    });
  });

  describe('getAddedIds', () => {
    it('should handle initial state', () => {
      expect(getAddedIds(undefined)).toEqual([]);
    });
  });
});
