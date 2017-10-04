import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { capitalize } from '@utilities';

export default ({ label, info, iconName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>
        <Icon name={iconName} color="#353535" size={14} /> {label}
      </Text>
      <Text style={styles.infoText}>{info && capitalize(info)}</Text>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'column',
    paddingVertical: 8,
  },
  labelText: {
    fontSize: 15,
    lineHeight: 25,
    color: '#353535',
  },
  infoText: {
    fontSize: 17,
  },
};
