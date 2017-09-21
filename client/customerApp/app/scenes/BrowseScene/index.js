import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BrowseCategoriesContainer from '../../container/BrowseCategoriesContainer';
import BrowseCategoryContainer from '../../container/BrowseCategoryContainer';

const ModalStack = StackNavigator({
  Browse: {
    screen: BrowseCategoriesContainer,
  },
  BrowseCategory: {
    screen: BrowseCategoryContainer,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params
        ? navigation.state.params.title
        : 'Product'}`,
    }),
  },
});

export default class extends Component {
  static navigationOptions = {
    tabBarLabel: 'Browse',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Icon name="shopping-basket" size={27} color={tintColor} />
    ),
  };
  render() {
    return <ModalStack />;
  }
}
