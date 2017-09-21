import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default ({ title }) => (
  <TouchableOpacity>
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgb(230,37,101)',
    paddingVertical: 15,
    borderRadius: 5,
  },
  title: {
    color: '#FFF',
    fontSize: 18,
  },
});
