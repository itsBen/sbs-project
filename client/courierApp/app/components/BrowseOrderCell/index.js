import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import { Cell } from 'react-native-tableview-simple';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import styles from './styles';
import { getTotalPrice, capitalize } from '@utilities';

const getLogo = storeName => {
  try {
    switch (storeName.toLowerCase()) {
      case 'alepa':
        return require('@assets/logo_alepa.png');
      case 'k-market':
        return require('@assets/logo_kmarket.png');
      case 'lidl':
        return require('@assets/logo_lidl.png');
      default:
        return require('@assets/logo_alepa.png');
    }
  } catch (error) {
    console.log(error);
  }
};

const getTime = timeLimit => {
  return moment(timeLimit).fromNow();
};

export default props => {
  const {
    location,
    timeLimit,
    numberOfItems,
    totalPrice,
    deliveryFee,
    products,
    onPress,
    store,
  } = props;
  const storeName = capitalize(store);

  return (
    <Cell
      cellContentView={
        <TouchableOpacity style={styles.container} onPress={onPress}>
          <View style={{ flex: 1 }}>
            <Image source={getLogo(storeName)} style={styles.image} />
          </View>

          <View style={{ flex: 4, paddingLeft: 12 }}>
            <Text style={styles.storeTitle}>{storeName}</Text>
            <Text style={styles.text}>
              <Icon name="location-on" size={18} />Near {location}
            </Text>
            <Text style={[styles.text, styles.timeText]}>
              <Icon name="access-time" size={18} /> Deliver {getTime(timeLimit)}
            </Text>
            <Text style={styles.text}>
              <Icon name="shopping-cart" size={18} /> {numberOfItems} items
              worth {products && getTotalPrice(products)} €
            </Text>
          </View>
          <View style={{ flex: 2 }}>
            <Text style={styles.deliveryFee}>+ {deliveryFee} €</Text>
          </View>
        </TouchableOpacity>
      }
    />
  );
};
