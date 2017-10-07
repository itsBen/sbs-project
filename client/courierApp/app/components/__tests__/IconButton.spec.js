/* eslint-env node, jest */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import IconButton from '../IconButton';

it('renders correctly', () => {
  const tree = renderer
    .create(<IconButton iconName="location-on" onPress={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
