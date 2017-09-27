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
    backgroundColor: '#efefef',
    padding: 10,
    borderWidth: 0
  },
  headerText: {
    fontSize: 17,
    fontWeight: '400'
  }
}
