/* eslint-env node, jest */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ProfileHeaderCell from '../ProfileHeaderCell';

it('renders correctly', () => {
  const tree = renderer.create(<ProfileHeaderCell />).toJSON();
  expect(tree).toMatchSnapshot();
});
