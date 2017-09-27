import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BrowseOrdersScreen from '@container/BrowseOrdersContainer';
import BrowseOrderInfoScreen from '@container/BrowseOrderInfoContainer';

const ModalStack = StackNavigator({
  Browse: {
    screen: BrowseOrdersScreen,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: 'white'
      }
    })
  },
  OrderInfo: {
    screen: BrowseOrderInfoScreen,
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
    tabBarLabel: 'Browse',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Icon name="search" size={27} color={tintColor} />
    ),
  }
  render() {
    return <ModalStack />;
  }
}
