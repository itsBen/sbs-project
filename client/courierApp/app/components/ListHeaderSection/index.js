import React from 'react'
import { View, Text } from 'react-native'

export default (title) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  )
}

const styles = {
  containerStyle: {
    backgroundColor: '#efefef',
    padding: 10,
    borderColor: '#3a3a3a'
  },
  textStyle: {
    fontSize: 17,
    fontWeight: '500'
  }
}
