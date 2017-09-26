import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { getCategories } from '../../reducers';
import { defaultPaddings } from '../../config';
import CategoryIcon from '../../components/CategoryIcon';

class Container extends PureComponent {
  static navigationOptions = {
    title: 'Grocery Categories',
  };
  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        alwaysBounceVertical={false}
      >
        {this.props.categories.map(category => (
          <CategoryIcon
            key={category.id}
            onPress={() =>
              this.props.navigation.navigate('BrowseCategory', {
                title: category.name,
                categoryId: category.id,
              })}
            label={category.name}
            imageSource={{
              uri:
                category.iconURL ||
                'https://facebook.github.io/react/img/logo_og.png',
            }}
          />
        ))}
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

const mapStateToProps = state => ({
  categories: getCategories(state),
});

export default connect(mapStateToProps)(Container);
