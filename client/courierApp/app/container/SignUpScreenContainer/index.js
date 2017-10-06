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
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BackgroundImage from '@components/BackgroundImage';

class SignUpScreenContainer extends Component {
  state = {
    email: '',
    password: '',
    error: null,
  };

  handleSignIn() {
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate('TabScreen');
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(error);
        this.setState({ error: errorMessage, password: '' });
      });
  }

  render() {
    return (
      <BackgroundImage>
        <View style={styles.container}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Sign Up</Text>
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
              <Text style={styles.error}>
                Oops! Something went wrong. Try again
              </Text>
            )}
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleSignIn()}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={styles.footerText}>
              Already have an account?
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SignInScreen')}
                style={{ height: 14, width: 100 }}
              >
                <Text
                  style={{ color: '#fff', textDecorationLine: 'underline' }}
                >
                  {' '}
                  Sign In
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </BackgroundImage>
    );
  }
}

export default SignUpScreenContainer;
