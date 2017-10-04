/* eslint-env node, jest */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import IconCell from '../IconCell';

it('renders correctly', () => {
  const tree = renderer.create(<IconCell iconName="location-on" />).toJSON();
  expect(tree).toMatchSnapshot();
});
