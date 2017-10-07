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

// Returns Promise
export const getLicenses = () =>
  contentful
    .createClient(contentfulCredentials)
    .getEntries({ content_type: 'licenses' });

const getProductCategories = cb => {
  contentful
    .createClient(contentfulCredentials)
    .getEntries({
      content_type: 'productCategory',
      include: 1,
    })
    .then(response =>
      response.items.map(item => {
        const nextItem = { ...item.fields };
        nextItem.id = item.sys.id;
        if (nextItem.icon) {
          const icon = response.includes.Asset.find(
            assetItem => assetItem.sys.id === item.fields.icon.sys.id
          );
          nextItem.icon =
            icon && icon.hasOwnProperty('fields') ? icon.fields : null;
        }
        return nextItem;
      })
    )
    .then(items => cb(items));
};

const getProductsByCategory = (cb, categoryId) => {
  contentful
    .createClient(contentfulCredentials)
    .getEntries({
      content_type: 'product',
      'fields.categories.sys.id[in]': categoryId,
    })
    .then(response =>
      response.items.map(item => {
        const nextItem = { ...item.fields };
        nextItem.id = item.sys.id;
        nextItem.categoryIds = nextItem.categories.map(
          category => category.sys.id
        );
        if (nextItem.photoUrl) {
          const image = response.includes.Asset.find(
            assetItem => assetItem.sys.id === item.fields.photoUrl.sys.id
          );
          nextItem.photoUrl =
            image && image.hasOwnProperty('fields') ? image.fields : null;
        }
        return nextItem;
      })
    )
    .then(items => cb(items));
};

const TIMEOUT = 100;

export default {
  getProductCategories,
  getProductsByCategory,
};
