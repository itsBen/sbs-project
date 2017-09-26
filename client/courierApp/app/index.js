import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { TabNavigator } from 'react-navigation';
import * as firebase from 'firebase'

import { firebaseConfig } from './config'
import BrowseScene from '@scenes/BrowseScene';
import OrdersScene from '@scenes/OrdersScene';
import ProfileScene from '@scenes/ProfileScene';
import OnBoardingScene from '@scenes/OnBoardingScene';

firebase.initializeApp(firebaseConfig);

export default TabNavigator(
  {
    Browse: {
      screen: BrowseScene,
    },
    Orders: {
      screen: OrdersScene,
    },
    Profile: {
      screen: ProfileScene,
    }
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
