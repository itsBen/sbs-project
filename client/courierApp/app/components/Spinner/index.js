import React from 'react';
import { ActivityIndicator } from 'react-native';

export default () => <ActivityIndicator size="large" style={styles.spinner} />;

const styles = {
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
