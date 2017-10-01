/* eslint-env node, jest */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ProductCell from '../ProductCell';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <ProductCell
        productId={1}
        price="2.50"
        title="Title"
        stores={['Lidl']}
        imageSource={{
          uri: 'https://facebook.github.io/react/img/logo_og.png',
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
