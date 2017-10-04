import React from 'react';
import { ImageBackground } from 'react-native';

export default ({ children }) => {
  return (
    <ImageBackground
      source={require('../../assets/Piglet.jpg')}
      style={backgroundImageStyle}
    >
      {children}
    </ImageBackground>
  );
};

const backgroundImageStyle = {
  flex: 1,
  width: null,
  height: null,
};
