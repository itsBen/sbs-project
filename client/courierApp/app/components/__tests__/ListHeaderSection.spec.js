/* eslint-env node, jest */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ListHeaderSection from '../ListHeaderSection';

it('renders correctly', () => {
  const tree = renderer.create(<ListHeaderSection header="Header" />).toJSON();
  expect(tree).toMatchSnapshot();
});
