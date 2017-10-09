/* eslint-env node, jest */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import InputCell from '../InputCell';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <InputCell placeholder="Enter your password" secureTextEntry value="" />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
