import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import * as firebase from 'firebase';

import { firebaseConfig } from './config';
import BrowseScene from '@scenes/BrowseScene';
import OwnOrdersScene from '@scenes/OwnOrdersScene';
import ProfileScene from '@scenes/ProfileScene';
import OnBoardingScene from '@scenes/OnBoardingScene';

import LaunchScreenContainer from '@container/LaunchScreenContainer';
import SignInScreenContainer from '@container/SignInScreenContainer';
import SignUpScreenContainer from '@container/SignUpScreenContainer';

firebase.initializeApp(firebaseConfig);

const MainTabsScreen = TabNavigator(
  {
    Browse: {
      screen: BrowseScene,
    },
    MyOrders: {
      screen: OwnOrdersScene,
    },
    Profile: {
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

const PrimaryNav = StackNavigator(
  {
    LaunchScreen: { screen: LaunchScreenContainer },
    SignInScreen: { screen: SignInScreenContainer },
    SignUpScreen: { screen: SignUpScreenContainer },
    TabScreen: { screen: MainTabsScreen },
  },
  {
    headerMode: 'none',
    headerBackTitleStyle: {
      color: 'pink',
    },
  }
);

export default () => <PrimaryNav />;
