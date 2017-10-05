/* eslint-env node, jest */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import OrderInfoComponent from '../OrderInfoComponent';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <OrderInfoComponent
        key="34"
        order={{
          orderId: '23324',
          products: [{ name: 'Meat', price: 3.4, productId: '2342343' }],
          deliveryFee: 12,
          timeLimit: '2017-10-05T00:15:08+03:00',
          status: 'pending',
          purchasedAt: '2017-10-05T00:15:08+03:00',
        }}
        buttonDisabled={true}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
