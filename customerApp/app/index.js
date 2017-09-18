import React, { Component } from 'react';
import { Text } from 'react-native';
import OnBoardingScene from './scenes/OnBoarding';

const steps = [<OnBoardingScene />];

export default class extends Component {
  state = {
    currentStep: 0,
  };

  render() {
    return steps[0];
  }
}
