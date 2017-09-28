/**
 * Mocking client-server processing
 */
const contentful = require('contentful');

const contentfulCredentials = {
  space: '5gkk07ad6602',
  accessToken:
    '7b3308250f7c86d60ba62e479085b21285ac01afa0dbf431f84c42ce94c97761',
  resolveLinks: false,
};

const getProductCategories = cb => {
  contentful
    .createClient(contentfulCredentials)
    .getEntries({
      content_type: 'productCategory',
    })
    .then(entries => {
      cb(entries.items);
    });
};

const getProductsByCategory = (cb, categoryId) => {
  contentful
    .createClient(contentfulCredentials)
    .getEntries({
      content_type: 'product',
      'fields.categories.sys.id[in]': categoryId,
    })
    .then(entries => {
      cb(entries.items);
    });
};

const TIMEOUT = 100;

export default {
  getProductCategories,
  getProductsByCategory,
};
