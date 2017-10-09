import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default (LoadingScreen = ({ title }) => (
  <View style={styles.descriptionView}>
    <StatusBar networkActivityIndicatorVisible />
    <ActivityIndicator
      color="#636268"
      style={styles.descriptionViewActivityIndicator}
    />
    <Text style={styles.descriptionViewText}>{title}</Text>
  </View>
));

const styles = StyleSheet.create({
  descriptionView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F4F4F4',
  },
  descriptionViewText: {
    fontSize: 23,
    textAlign: 'center',
    color: '#636268',
    marginTop: 30,
  },
});
