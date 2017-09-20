import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BrowseCategoriesScreen from '../../screens/BrowseCategoriesScreen';
import BrowseCategoryScreen from '../../screens/BrowseCategoryScreen';

const ModalStack = StackNavigator({
  Browse: {
    screen: BrowseCategoriesScreen,
  },
  BrowseCategory: {
    screen: BrowseCategoryScreen,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.param
        ? navigation.state.param.title
        : 'Products'}`,
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
