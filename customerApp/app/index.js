import React, { Component } from 'react';
import OnBoardingScene from './scenes/OnBoarding';

export default class extends Component {
  static steps = [<OnBoardingScene />];
  state = {
    currentStep: 0,
  };

  render() {
    console.log(this.steps);
    return <OnBoardingScene />;
  }
}
