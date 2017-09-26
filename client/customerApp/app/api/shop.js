/**
 * Mocking client-server processing
 */
import _products from './products.json';
import _categories from './categories.json';

const TIMEOUT = 100;

export default {
  getCategories: (cb, timeout) =>
    setTimeout(() => cb(_categories), timeout || TIMEOUT),
  getProducts: (cb, timeout) =>
    setTimeout(() => cb(_products), timeout || TIMEOUT),
  getProductsByCategoryId: (cb, timeout) =>
    setTimeout(() => cb(_products), timeout || TIMEOUT),
};
