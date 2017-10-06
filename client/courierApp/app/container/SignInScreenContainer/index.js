import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import * as firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BackgroundImage from '@components/BackgroundImage';

class AuthScreenContainer extends Component {
  state = {
    email: 'test@test.com',
    password: 'test123',
    error: null,
  };

  handleSignIn() {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'TabScreen' })],
        });
        this.props.navigation.dispatch(resetAction);
      })
      .catch(error => {
        const errorMessage = error.message;
        this.setState({ error: errorMessage, password: '' });
      });
  }

  render() {
    return (
      <BackgroundImage>
        <View style={styles.container}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Sign In</Text>
          </View>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logoImage}
              source={require('@assets/logo_shopbuddy.png')}
            />
            <Text style={styles.logoTitle}>Shop Buddy</Text>
            <Text style={[styles.logoTitle, styles.logoSubtitle]}>Courier</Text>
          </View>

          <View style={styles.inputsContainer}>
            <TextInput
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              placeholder="Email"
              placeholderTextColor="rgba(255,255,255,0.6)"
              selectionColor={'red'}
              style={styles.input}
              autoCorrect={false}
            />

            <TextInput
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              placeholder="Password"
              placeholderTextColor="rgba(255,255,255,0.6)"
              selectionColor={'red'}
              style={styles.input}
              autoCorrect={false}
              secureTextEntry
            />
            {this.state.error && (
              <Text style={styles.error}>Oops! Wrong email or password</Text>
            )}
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleSignIn()}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <Text style={styles.footerText}>
              Don't have an account?
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SignUpScreen')}
                style={{ height: 14, width: 100 }}
              >
                <Text
                  style={{ color: '#fff', textDecorationLine: 'underline' }}
                >
                  {' '}
                  Sign up
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </BackgroundImage>
    );
  }
}

export default AuthScreenContainer;
