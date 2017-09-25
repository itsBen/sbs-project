import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import OrdersOverviewContainer from '../../container/OrdersOverviewContainer';

const ModalStack = StackNavigator({
  Orders: {
    screen: OrdersOverviewContainer,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: 'white'
      }
    })
  },
});

export default class extends Component {
  static navigationOptions = {
    tabBarLabel: 'Orders',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Icon name="reorder" size={27} color={tintColor} />
    ),
  };
  render() {
    return <ModalStack />;
  }
}
