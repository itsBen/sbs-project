import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default ({ iconName, label, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <Icon name={iconName} size={20} color="#fff" />
      <Text style={styles.label}>{label}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(230,37,101)',
    paddingVertical: 5,
    borderRadius: 5,
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 13,
  },
});
