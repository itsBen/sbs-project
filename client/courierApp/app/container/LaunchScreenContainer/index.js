import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import BackgroundImage from '@components/BackgroundImage';

class LaunchScreenContainer extends Component {
  navigateToTabs() {
    console.log('pressed');
    const resetAction = NavigationActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: 'TabScreen' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <BackgroundImage>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              source={require('@assets/logo_shopbuddy.png')}
              style={styles.logoImage}
            />
            <Text style={styles.logoTitle}>Shop Buddy</Text>
            <Text style={[styles.logoTitle, styles.logoSubtitle]}>Courier</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('TabScreen')}
            >
              <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BackgroundImage>
    );
  }
}

export default LaunchScreenContainer;
