import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default ({ title, onPress, buttonStyle }) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={
        buttonStyle === 'white'
          ? [styles.container, styles.style_white__container]
          : styles.container
      }
    >
      <Text
        style={
          buttonStyle === 'white'
            ? [styles.title, styles.style_white__title]
            : styles.title
        }
      >
        {title}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgb(230,37,101)',
    borderColor: 'rgb(230,37,101)',
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  title: {
    color: '#FFF',
    fontSize: 17,
  },
  style_white__container: {
    backgroundColor: '#fff',
    borderColor: 'transparent',
  },
  style_white__title: {
    color: '#808080',
  },
});
