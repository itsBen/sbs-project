import React from 'react';
import { Cell } from 'react-native-tableview-simple';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default ({ iconName, ...props }) => (
  <Cell
    contentContainerStyle={{ paddingVertical: 10 }}
    cellAccessoryView={
      <Icon name={iconName} size={22} color="rgb(153,153,153)" />
    }
    {...props}
  />
);
