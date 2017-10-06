import React, { Component } from 'react';
import * as firebase from 'firebase';

import { TableView, Section } from 'react-native-tableview-simple';

import ProfileHeaderCell from '@components/ProfileHeaderCell';
import IconCell from '@components/IconCell';

class Screen extends Component {
  handleSignOut() {
    firebase
      .auth()
      .signOut()
      .then(
        () => {
          this.props.navigation.navigate('LaunchScreen');
        },
        error => {
          console.error('Sign Out Error', error);
        }
      );
  }

  render() {
    return (
      <TableView>
        <Section sectionTintColor="#E9E9EF">
          <ProfileHeaderCell />
        </Section>
        <Section sectionTintColor="#E9E9EF" footer="Made with ❤ in Finland.">
          <IconCell
            onPress={() => console.log('Hey')}
            title="Payment details"
            iconName="credit-card"
          />
          <IconCell
            onPress={() => console.log('Hey')}
            title="Settings"
            iconName="settings"
          />
          <IconCell
            onPress={() => console.log('Hey')}
            title="Invite friends"
            iconName="card-giftcard"
          />
          <IconCell
            onPress={() => console.log('Hey')}
            title="Get help"
            iconName="help-outline"
          />
          <IconCell
            onPress={() => console.log('Hey')}
            title="Give us feedback"
            iconName="feedback"
          />
          <IconCell
            onPress={() => this.handleSignOut()}
            title="Log out"
            iconName="feedback"
          />
        </Section>
      </TableView>
    );
  }
}

Screen.navigationOptions = {
  title: 'Profile',
};

export default Screen;
