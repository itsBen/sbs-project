import React from 'react';
import { ImageBackground } from 'react-native';

export default ({ children, imageSource }) => {
  return (
    <ImageBackground
      source={
        imageSource ? require(imageSource) : require('../../assets/Piglet.jpg')
      }
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
