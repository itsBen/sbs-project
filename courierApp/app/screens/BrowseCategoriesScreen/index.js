import React, { PureComponent } from 'react';
import { Button } from 'react-native';

export default class extends PureComponent {
  static navigationOptions = {
    title: 'Grocery Categories',
  };
  render() {
    return (
      <Button
        onPress={() =>
          this.props.navigation.navigate('BrowseCategory', { title: 'Milk' })}
        title="Milk"
      />
    );
  }
}
