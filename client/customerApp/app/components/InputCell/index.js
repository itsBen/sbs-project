import React, { Component } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

export default (InputCell = ({
  placeholder,
  maxLength,
  multiline,
  inputStyle,
  ...props
}) => (
  <View style={styles.container}>
    <TextInput
      style={[styles.inputField, inputStyle]}
      placeholder={placeholder}
      maxLength={maxLength}
      multiline={multiline}
      {...props}
    />
  </View>
));

const styles = StyleSheet.create({
  container: {
    paddingVertical: 18,
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  inputField: {
    fontSize: 16,
    flex: 1,
  },
});
