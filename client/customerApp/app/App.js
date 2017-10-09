import React, { Component } from 'react';

import { TabNavigator } from 'react-navigation';

import BrowseScene from './scenes/BrowseScene';
import CartScene from './scenes/CartScene';
import OrdersScene from './scenes/OrdersScene';
import ProfileScene from './scenes/ProfileScene';
import OnBoardingScene from './scenes/OnBoardingScene';

export default TabNavigator(
  {
    BrowseScene: {
      screen: BrowseScene,
    },
    CartScene: {
      screen: CartScene,
    },
    OrdersScene: {
      screen: OrdersScene,
    },
    ProfileScene: {
      screen: ProfileScene,
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
