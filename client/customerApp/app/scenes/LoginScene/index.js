import React, { Component } from 'react';
import {
  Animated,
  Easing,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import firebase from '../../api/firebase';

import InputCell from '../../components/InputCell';
import Button from '../../components/Button';

export default class LoginScreen extends Component {
  state = {
    mail: 'test@test.com',
    password: 'test123',
    isProcessing: false,
    isError: false,
    animatedLeft: new Animated.Value(0),
  };

  handleLogin = () => {
    this.setState({ isProcessing: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.mail, this.state.password)
      .then(user => {
        this.setState({ isProcessing: false, isError: false });
        if (__DEV__) {
          console.log('User successfully logged in', user);
        }
      })
      .catch(err => {
        this.shakeStage();
        this.setState({ isProcessing: false, isError: true, password: '' });
        if (__DEV__) {
          console.log('Login Error', err);
        }
      });
  };

  shakeStage = () => {
    this.state.animatedLeft.setValue(0);
    Animated.timing(
      // Animate over time
      this.state.animatedLeft, // The animated value to drive
      {
        toValue: 1,
        duration: 800,
        easing: Easing.linear,
      }
    ).start();
  };

  render() {
    const animatedLeft = this.state.animatedLeft.interpolate({
      inputRange: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      outputRange: [0, -10, 10, -10, 10, -10, 10, -10, 10, -10, 0],
    });

    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={-73}
        behavior="position"
        style={styles.container}
      >
        <View style={styles.aboutappIcon}>
          <Image
            style={styles.aboutappIcon_Image}
            source={require('../../assets/icon.png')}
            defaultSource={require('../../assets/icon.png')}
          />
          <Text style={styles.aboutappLabel}>ShopBuddy</Text>
        </View>

        <Animated.View style={[styles.stage, { left: animatedLeft }]}>
          <View style={styles.stageBody}>
            <InputCell
              placeholder="Enter your email address"
              keyboardType="email-address"
              value={this.state.mail}
              onChangeText={value => this.setState({ mail: value })}
            />

            <View style={styles.separator}>
              <View style={styles.separator_inner} />
            </View>

            <InputCell
              placeholder="Enter your password"
              secureTextEntry
              value={this.state.password}
              onChangeText={value => this.setState({ password: value })}
            />
          </View>
          <View style={styles.stageFooter}>
            <Button
              title={this.state.isProcessing ? 'Please wait..' : 'Login'}
              onPress={() => this.handleLogin()}
            />
            {this.state.isError && (
              <Text style={styles.descriptionText}>
                Error logging in. Please try again.
              </Text>
            )}
          </View>
        </Animated.View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
  },
  stage: {
    marginHorizontal: 20,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#c8c7cc',
    shadowColor: '#c8c7cc',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  stageBody: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  descriptionText: {
    fontSize: 14,
    marginTop: 12,
  },
  stageFooter: {
    marginTop: 5,
    paddingVertical: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    backgroundColor: '#F1F1F1',
    paddingHorizontal: 10,
  },
  separator: {
    backgroundColor: '#EFEFF4',
  },
  separator_inner: {
    height: StyleSheet.hairlineWidth,
  },
  aboutappIcon: {
    alignItems: 'center',
    marginBottom: 50,
  },
  aboutappLabel: {
    fontSize: 23,
    marginTop: 20,
    color: 'rgb(230,37,101)',
  },
  aboutappIcon_Image: {
    borderRadius: 5,
    height: 100,
    width: 100,
    tintColor: 'rgb(230,37,101)',
  },
});
