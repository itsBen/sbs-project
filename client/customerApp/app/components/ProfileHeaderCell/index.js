import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { defaultPaddings } from '../../config';

export default () => (
  <View style={styles.container}>
    <View style={styles.titleDescription}>
      <Text style={styles.titleText}>Mary</Text>
      <Text style={styles.descriptionText}>View and edit profile</Text>
    </View>
    <Image
      style={styles.profileImage}
      source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: defaultPaddings.paddingHorizontal,
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titleDescription: {
    flex: 1,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {},
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});
