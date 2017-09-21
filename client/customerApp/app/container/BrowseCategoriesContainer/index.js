import React, { PureComponent } from 'react';
import { Button, ScrollView, StyleSheet, Text } from 'react-native';

import { defaultPaddings } from '../../config';

import SearchField from '../../components/Searchfield';

export default class extends PureComponent {
  static navigationOptions = {
    title: 'Grocery Categories',
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <SearchField placeholder="Search for products" />
        <Text style={styles.heroText}>
          OR{`\n`}select the type of grocery you want
        </Text>
        <Button
          onPress={() =>
            this.props.navigation.navigate('BrowseCategory', { title: 'Milk' })}
          title="Milk"
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: defaultPaddings.paddingHorizontal,
  },
  heroText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
});
