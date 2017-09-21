import React from 'react';
import { Cell } from 'react-native-tableview-simple';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default ({ iconName, ...props }) => (
  <Cell
    accessory="DisclosureIndicator"
    contentContainerStyle={{ paddingVertical: 10 }}
    cellImageView={
      <Icon
        name={iconName}
        size={22}
        color="rgb(153,153,153)"
        style={{ marginRight: 15 }}
      />
    }
    {...props}
  />
);
