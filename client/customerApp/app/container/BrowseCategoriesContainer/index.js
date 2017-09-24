import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { defaultPaddings } from '../../config';

import CategoryIcon from '../../components/CategoryIcon';

export default class extends PureComponent {
  static navigationOptions = {
    title: 'Grocery Categories',
  };
  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        alwaysBounceVertical={false}
      >
        <CategoryIcon
          onPress={() =>
            this.props.navigation.navigate('BrowseCategory', { title: 'Milk' })}
          label="Milk"
          imageSource={{
            uri: 'https://facebook.github.io/react/img/logo_og.png',
          }}
        />
        <CategoryIcon
          onPress={() =>
            this.props.navigation.navigate('BrowseCategory', { title: 'Milk' })}
          label="Milk"
          imageSource={{
            uri: 'https://facebook.github.io/react/img/logo_og.png',
          }}
        />
        <CategoryIcon
          onPress={() =>
            this.props.navigation.navigate('BrowseCategory', { title: 'Milk' })}
          label="Milk"
          imageSource={{
            uri: 'https://facebook.github.io/react/img/logo_og.png',
          }}
        />
        <CategoryIcon
          onPress={() =>
            this.props.navigation.navigate('BrowseCategory', { title: 'Milk' })}
          label="Milk"
          imageSource={{
            uri: 'https://facebook.github.io/react/img/logo_og.png',
          }}
        />
        <CategoryIcon
          onPress={() =>
            this.props.navigation.navigate('BrowseCategory', { title: 'Milk' })}
          label="Milk"
          imageSource={{
            uri: 'https://facebook.github.io/react/img/logo_og.png',
          }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: defaultPaddings.paddingHorizontal,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
});
