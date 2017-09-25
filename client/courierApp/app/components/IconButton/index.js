import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default ({
  iconName,
  label = null,
  colorScheme = 'default',
  onPress,
}) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={
        styles[colorScheme]
          ? styles[colorScheme].container
          : styles.default.container
      }
    >
      <Icon
        name={iconName}
        size={20}
        style={
          styles[colorScheme] ? styles[colorScheme].icon : styles.default.icon
        }
      />
      {!label || (
        <Text
          style={
            styles[colorScheme]
              ? styles[colorScheme].label
              : styles.default.label
          }
        >
          {label}
        </Text>
      )}
    </View>
  </TouchableOpacity>
);

const defaultStyles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(230,37,101)',
    borderWidth: 1,
    borderColor: 'rgb(230,37,101)',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  icon: {
    color: '#fff',
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 13,
  },
};

const styles = {
  default: StyleSheet.create({ ...defaultStyles }),
  white: StyleSheet.create({
    container: {
      ...defaultStyles.container,
      backgroundColor: 'white',
      borderColor: '#808080',
    },
    icon: {
      ...defaultStyles.icon,
      color: '#808080',
    },
    label: {
      ...defaultStyles.label,
      color: '#808080',
    },
  }),
};
