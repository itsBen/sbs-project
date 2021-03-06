import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { defaultPaddings } from '../../config';
import IconButton from '../IconButton';

export default ({
  productId,
  title,
  price,
  imageSource,
  stores = ['-'],
  onAddToCart,
  onOpenDetails,
  ...props
}) => (
  <View style={styles.container}>
    <TouchableWithoutFeedback onPress={onOpenDetails}>
      <View style={styles.imageContainer}>
        <Image style={styles.productImage} source={imageSource} />
      </View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={onOpenDetails}>
      <View style={styles.body}>
        <Text style={styles.descriptionTitle}>{title}</Text>
        <Text style={styles.descriptionSubtitle}>{stores.join(', ')}</Text>
      </View>
    </TouchableWithoutFeedback>
    <View style={styles.actionsContainer}>
      <IconButton
        iconName="add-shopping-cart"
        label={`${price} €`}
        onPress={onAddToCart}
      />
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
    width: 90 - 2 * defaultPaddings.paddingHorizontal,
    height: 70,
  },
  body: {
    flex: 1,
    paddingHorizontal: 5,
    justifyContent: 'center',
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
  actionsContainer: {
    width: 75,
    paddingRight: defaultPaddings.paddingHorizontal,
    justifyContent: 'center',
  },
});
