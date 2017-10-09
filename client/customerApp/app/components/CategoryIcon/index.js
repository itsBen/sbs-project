import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default ({ imageSource, label, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.label}>{label}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  image: {
    width: 95,
    height: 95,
    borderRadius: 50,
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
  },
});
