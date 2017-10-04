/* eslint-env node, jest */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Button, { SmallButton } from '../Button';

it('renders correctly', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with different buttonstyle', () => {
  const tree = renderer.create(<Button buttonStyle="white" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders small button correctly', () => {
  const tree = renderer.create(<SmallButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
