/* eslint-env jest */

import shop from '../shop';

describe('Shop API via Contentful', () => {
  it('should load productcategories', () => {
    return shop.getProductCategories(data => {
      expect(data).toBeDefined();
    });
  });

  it('should load products by categoryId', () => {
    return shop.getProductsByCategory((products, categoryId) => {
      expect(products).toBeDefined();
      expect(categoryId).toBeDefined();
    });
  });
});
