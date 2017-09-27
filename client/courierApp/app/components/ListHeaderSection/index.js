import React from 'react'
import { View, Text } from 'react-native'
import { Section } from 'react-native-tableview-simple'

export default ({ header, children, ...props }) => {
  return (
    <View style={styles.container}>
      <Section
        headerComponent={
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{header}</Text>
          </View>
        }
        sectionPaddingTop={0}
        sectionTintColor='#F624591A'
        footerTextColor='#fff'
        {... props}
      >
        {children}
      </Section>
    </View>
  )
}

const styles = {
  container: {
    marginBottom: 10
  },
  headerContainer: {
    backgroundColor: '#F624598C',
    padding: 10,
    borderWidth: 0
  },
  headerText: {
    fontSize: 17,
    color: '#fff',
    fontWeight: '400'
  }
}
