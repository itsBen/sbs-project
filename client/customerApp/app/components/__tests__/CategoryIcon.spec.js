/* eslint-env node, jest */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import CategoryIcon from '../CategoryIcon';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <CategoryIcon
        label="Label"
        imageSource={{
          uri: 'https://facebook.github.io/react/img/logo_og.png',
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
