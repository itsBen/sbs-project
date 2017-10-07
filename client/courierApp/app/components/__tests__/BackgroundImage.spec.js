/* eslint-env node, jest */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import BackgroundImage from '../BackgroundImage';

it('renders correctly', () => {
  const tree = renderer.create(<BackgroundImage />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with different image', () => {
  const tree = renderer
    .create(
      <BackgroundImage imageSource="../../assets/forever-lost-test.jpg" />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
