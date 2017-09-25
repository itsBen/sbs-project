import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { defaultPaddings } from '../../config';
import IconButton from '../IconButton';

export default ({
  title,
  subtitle,
  price,
  imageSource,
  stores = ['-'],
  ...props
}) => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image style={styles.productImage} source={imageSource} />
    </View>
    <View style={styles.bodyContainer}>
      <View style={styles.bodyContent}>
        <Text style={styles.descriptionTitle}>{title}</Text>
        <Text style={styles.descriptionSubtitle}>{subtitle}</Text>
      </View>
      <Text style={styles.bodyFooterText}>Stores: {stores.join(', ')}</Text>
    </View>
    <View style={styles.actionsContainer}>
      <IconButton iconName="add-shopping-cart" label={price} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: 100,
    justifyContent: 'center',
    paddingHorizontal: defaultPaddings.paddingHorizontal,
  },
  productImage: {
    width: 100 - 2 * defaultPaddings.paddingHorizontal,
    height: 80,
  },
  bodyContainer: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 5,
  },
  bodyContent: {
    flex: 1,
  },
  descriptionTitle: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 5,
  },
  descriptionSubtitle: {
    color: '#808080',
    fontSize: 14,
  },
  bodyFooterText: {
    color: '#808080',
    fontSize: 14,
  },
  actionsContainer: {
    width: 75,
    paddingRight: defaultPaddings.paddingHorizontal,
    justifyContent: 'center',
  },
});