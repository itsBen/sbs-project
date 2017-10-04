/* eslint-env node, jest */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import OrderDetailsCell from '../OrderDetailsCell';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <OrderDetailsCell
        label="test label"
        info="some info"
        iconName="location-on"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
