/* eslint-env node, jest */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ProductInfoDialog from '../ProductInfoDialog';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <ProductInfoDialog
        product={{
          name: 'Meat',
          size: {
            unit: 'l',
            value: 2.6,
          },
          dimensions: 'small',
          price: 23.4,
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
