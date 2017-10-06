import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BackgroundImage from '@components/BackgroundImage';

class AuthScreenContainer extends Component {
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
              placeholder="User Name"
              placeholderTextColor="rgba(255,255,255,0.6)"
              selectionColor={'red'}
              style={styles.input}
            />

            <TextInput
              placeholder="Password"
              placeholderTextColor="rgba(255,255,255,0.6)"
              selectionColor={'red'}
              secureTextEntry
              style={styles.input}
            />
            {this.props.error && (
              <Text style={styles.error}>
                Oops! Wrong user name or password
              </Text>
            )}
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('TabScreen')}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <Text style={styles.footerText}>
              Don't have an account? Sign up
            </Text>
          </View>
        </View>
      </BackgroundImage>
    );
  }
}

export default AuthScreenContainer;
