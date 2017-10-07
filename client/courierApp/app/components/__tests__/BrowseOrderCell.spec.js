/* eslint-env node, jest */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import moment from 'moment';
import BrowseOrderCell from '../BrowseOrderCell';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <BrowseOrderCell
        location="Patrick\'s house"
        timeLimit={moment().format()}
        numberOfItems="23"
        totalPrice="34.33"
        deliveryFee="12"
        products={[{ name: 'Milk', price: 2, id: '3443234' }]}
        store="alepa"
        onPress={() => {}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
