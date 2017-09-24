import React from 'react'
import { View, Text, Image } from 'react-native'
import { Cell } from 'react-native-tableview-simple'

export default ({ orderDetails }) => {
  const { store, location, time, numberOfItems, totalPrice, deliveryFee } = orderDetails
  return (
    <Cell
      cellContentView={
        <View
          style={{ flexDirection: 'row', flex: 1, paddingVertical: 10 }}
        >
          <View style={{ flex: 1 }}>
            <Image
              source={{ uri: 'https://facebook.github.io/react/img/logo_og.png'}}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
          </View>

          <View
            style={{ flex: 4, paddingVertical: 5 }}
          >
            <Text>{store}</Text>
            <Text>{location}</Text>
            <Text>Time left: {time} min</Text>
            <Text>{numberOfItems} items worth {totalPrice}</Text>
          </View>
          <View
            style={{ flex: 1 }}
          >
            <Text style={{ textAlign: 'right' }}>+ {deliveryFee} e</Text>
          </View>
        </View>
      }
    />
  )
}
