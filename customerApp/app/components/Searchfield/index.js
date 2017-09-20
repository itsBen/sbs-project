import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default ({
  placeholder = '',
  maxLength = 100,
  multiline = false,
  ...props
}) => (
  <View style={styles.container}>
    <TextInput
      style={styles.inputField}
      placeholder={placeholder}
      maxLength={maxLength}
      multiline={multiline}
      {...props}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 18,
    paddingHorizontal: 15,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  inputField: {
    fontSize: 16,
    flex: 1,
  },
});
