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

const getProductById = productId => {
  return contentful.createClient(contentfulCredentials).getEntries({
    content_type: 'product',
    'sys.id': productId,
  });
};

const TIMEOUT = 100;

const API = {
  getProductById,
};

export default API;
