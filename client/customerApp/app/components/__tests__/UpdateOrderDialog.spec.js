/* eslint-env node, jest */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import UpdateOrderDialog from '../UpdateOrderDialog';

it('renders correctly', () => {
  const tree = renderer
    .create(<UpdateOrderDialog productId={0} size="small" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
