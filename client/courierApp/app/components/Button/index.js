import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export { default as SmallButton } from './SmallButton';

export default ({ title, onPress, buttonStyle, disabled }) => (
  <TouchableOpacity onPress={onPress} disabled={disabled}>
    <View
      style={
        [
          styles[buttonStyle]
            ? styles[buttonStyle].container
            : styles.default.container ,
          disabled && styles.default.disabledButton
        ]
      }
    >
      <Text
        style={
          styles[buttonStyle] ? styles[buttonStyle].title : styles.default.title
        }
      >
        {title}
      </Text>
    </View>
  </TouchableOpacity>
);

const defaultStyles = {
  container: {
    alignItems: 'center',
    backgroundColor: 'rgb(230,37,101)',
    borderColor: 'rgb(230,37,101)',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  title: {
    color: '#FFF',
    fontSize: 18,
  },
  disabledButton: {
    backgroundColor: '#c1c1c1',
    borderColor: 'transparent'
  }
};

const styles = {
  default: StyleSheet.create({ ...defaultStyles }),
  white: StyleSheet.create({
    container: {
      ...defaultStyles.container,
      backgroundColor: 'white',
      borderColor: '#808080',
    },
    title: {
      ...defaultStyles.title,
      color: '#808080',
    },
  }),
};
