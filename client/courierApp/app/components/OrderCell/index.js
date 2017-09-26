import React from 'react'
import { View, Text, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import { Cell } from 'react-native-tableview-simple'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'

const getLogo = (storeName) => {
  switch (storeName.toLowerCase()) {
    case 'alepa':
      return require('@assets/logo_alepa.png')
    case 'k-market':
      return require('@assets/logo_kmarket.png')
    case 'lidl':
      return require('@assets/logo_lidl.png')
    default:
      return require('@assets/logo_alepa.png')
  }
}

export default ({ orderDetails, onPress }) => {
  const { location, time, numberOfItems, totalPrice, deliveryFee } = orderDetails
  const storeName = orderDetails.store[0].toUpperCase() + orderDetails.store.substr(1)

  return (
    <Cell
      cellContentView={
        <TouchableOpacity style={styles.container} onPress={onPress}>
          <View style={{ flex: 1 }}>
            <Image
              source={getLogo(storeName)}
              style={styles.image}
            />
          </View>

          <View
            style={{ flex: 4, paddingLeft: 12 }}
          >
            <Text style={styles.storeTitle}>{storeName}</Text>
            <Text style={styles.text}><Icon name="location-on" size={18}/>Near {location}</Text>
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
