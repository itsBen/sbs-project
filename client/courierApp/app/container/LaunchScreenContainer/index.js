import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import * as firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import BackgroundImage from '@components/BackgroundImage';

class LaunchScreenContainer extends Component {
  handleOnStart() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        this.props.navigation.navigate('TabScreen');
      } else {
        // User is signed out.
        this.props.navigation.navigate('SignInScreen');
      }
    });
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
              onPress={() => this.handleOnStart()}
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
