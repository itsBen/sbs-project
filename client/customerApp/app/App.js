import React, { Component } from 'react';

import { TabNavigator } from 'react-navigation';
import firebase from './api/firebase';

import BrowseScene from './scenes/BrowseScene';
import CartScene from './scenes/CartScene';
import OrdersScene from './scenes/OrdersScene';
import ProfileScene from './scenes/ProfileScene';

import LoadingScene from './scenes/LoadingScene';
import LoginScene from './scenes/LoginScene';

const App = TabNavigator(
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

export default class extends Component {
  state = {
    user: null,
    isAuthenticating: true,
  };
  componentDidMount() {
    this.setState({
      user: firebase.auth().currentUser,
    });

    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: user, isAuthenticating: false });
      } else {
        this.setState({ user: null, isAuthenticating: false });
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  render() {
    if (this.state.isAuthenticating) {
      return <LoadingScene title="Logging in..." />;
    }
    if (!this.state.user) {
      return <LoginScene />;
    }
    return <App />;
  }
}
