import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
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
        <View style={{ flex: 1 }}>
          <View style={{ marginTop: 125 }}>
            <Image
              source={require('@assets/logo_shopbuddy.png')}
              style={{ alignSelf: 'center', width: 180, height: 180 }}
            />
            <Text
              style={{
                color: '#fff',
                backgroundColor: 'transparent',
                fontSize: 40,
                marginTop: 10,
                fontWeight: '200',
                textAlign: 'center',
              }}
            >
              Shop Buddy
            </Text>
            <Text
              style={{
                color: '#fff',
                backgroundColor: 'transparent',
                fontSize: 25,
                marginTop: 10,
                fontWeight: '200',
                textAlign: 'center',
              }}
            >
              Courier
            </Text>
          </View>
          <View
            style={{ position: 'absolute', alignSelf: 'center', bottom: 80 }}
          >
            <TouchableOpacity
              style={{
                borderRadius: 3,
                backgroundColor: '#db7774',
                paddingVertical: 15,
                paddingHorizontal: 150,
                alignItems: 'center',
              }}
              onPress={() => this.props.navigation.navigate('TabScreen')}
            >
              <Text style={{ color: '#fff' }}>Start</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BackgroundImage>
    );
  }
}

export default LaunchScreenContainer;
