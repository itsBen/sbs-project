import React from 'react'
import { View, Text, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import { Cell } from 'react-native-tableview-simple'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default ({ orderDetails, onReserveOrder, onOpenDetails, orderId }) => {
  const { store, logo, location, time, numberOfItems, totalPrice, deliveryFee } = orderDetails
  return (
    <Cell
      cellContentView={
        <TouchableOpacity style={styles.container} onPress={() => onOpenDetails(orderId)}>
          <View style={{ flex: 1 }}>
            <Image
              source={logo}
              style={styles.image}
            />
          </View>

          <View
            style={{ flex: 4, paddingLeft: 12 }}
          >
            <Text style={styles.storeTitle}>{store}</Text>
            <Text style={styles.text}><Icon name="location-on" size={18}/> {location}</Text>
            <Text style={[ styles.text, styles.timeText ]}><Icon name="access-time" size={18}/> Time left: {time} min</Text>
            <Text style={styles.text}><Icon name="shopping-cart" size={18}/> {numberOfItems} items worth {totalPrice}</Text>
          </View>
          <View
            style={{ flex: 1 }}
          >
            <Text style={styles.deliveryFee}>+ {deliveryFee} €</Text>
          </View>
        </TouchableOpacity>
      }
    />
  )
}

const styles = {
  container: {
    flexDirection: 'row',
    paddingVertical: 10
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'contain'
  },
  storeTitle: {
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 28
  },
  text: {
    lineHeight: 28
  },
  timeText: {
    color: 'red'
  },
  deliveryFee: {
    fontSize: 18,
    textAlign: 'right',
    color: 'green'
  },
}
