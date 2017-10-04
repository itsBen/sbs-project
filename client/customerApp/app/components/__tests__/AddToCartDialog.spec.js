/* eslint-env node, jest */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AddToCartDialog from '../AddToCartDialog';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <AddToCartDialog
        productTitle="Product Details"
        productPrice="No Information"
        size="small"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
