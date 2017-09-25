import React from 'react'
import { Image } from 'react-native'

export default ({ children }) => {
  return (
    <Image source={require('../../assets/Piglet.jpg')} style={backgroundImageStyle}>
      {children}
    </Image>
  )

}

const backgroundImageStyle =  {
  flex: 1,
  resizeMode: 'cover',
  width: null,
  height: null
}
