import React, { Component } from 'react';
import { View, Text } from 'react-native'

import { TabNavigator } from 'react-navigation';

import BrowseScene from './scenes/BrowseScene';
import CartScene from './scenes/CartScene';
import OnBoardingScene from './scenes/OnBoardingScene';

export default TabNavigator(
  {
    Browse: {
      screen: BrowseScene,
    },
    Cart: {
      screen: CartScene,
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 12,
      },
    },
  }
);
