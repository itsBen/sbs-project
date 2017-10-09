/* eslint-env node, jest */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import CheckBox from '../CheckBox';

it('renders correctly', () => {
  const tree = renderer.create(<CheckBox />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with different color', () => {
  const tree = renderer.create(<CheckBox color="red" />).toJSON();
  expect(tree).toMatchSnapshot();
});
