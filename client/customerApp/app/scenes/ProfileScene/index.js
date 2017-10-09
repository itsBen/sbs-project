import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ProfileOverviewContainer from '../../containers/ProfileOverviewContainer';
import AcknowledgmentsContainer from '../../containers/AcknowledgmentsContainer';

const ModalStack = StackNavigator({
  Profile: {
    screen: ProfileOverviewContainer,
  },
  Acknowledgments: {
    screen: AcknowledgmentsContainer,
    navigationOptions: ({ navigation }) => ({
      title: 'Acknowledgments',
    }),
  },
});

export default class extends Component {
  static navigationOptions = {
    tabBarLabel: 'Profile',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Icon name="person" size={27} color={tintColor} />
    ),
  };
  render() {
    return <ModalStack />;
  }
}
