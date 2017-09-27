import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import OwnOrdersOverviewContainer from '@container/OwnOrdersOverviewContainer';
import OwnOrderInfoContainer from '@container/OwnOrderInfoContainer';

const ModalStack = StackNavigator({
  OwnOrders: {
    screen: OwnOrdersOverviewContainer,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: 'white'
      }
    })
  },
  OrderInfo: {
    screen: OwnOrderInfoContainer,
    navigationOptions: ({ navigation }) => {
      const params = navigation.state.params
      return ({
        title: `${params
          ? params.order.store[0].toUpperCase() + params.order.store.substr(1)
          : 'Product'}`,
        headerStyle: {
          backgroundColor: 'white'
        }
      })
    }
  }
});

export default class extends Component {
  static navigationOptions = {
    tabBarLabel: 'My Orders',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Icon name="reorder" size={27} color={tintColor} />
    ),
  };
  render() {
    return <ModalStack />;
  }
}
