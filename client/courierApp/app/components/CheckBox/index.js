import React, { Component } from 'react';
import Icon from  'react-native-vector-icons/MaterialIcons';

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    };
  }

  render() {
    let iconName = this.state.completed ? 'check-box' : 'check-box-outline-blank';
    let color = this.props.color || '#000';

    return (
      <Icon.Button
        name={iconName}
        backgroundColor='rgba(0,0,0,0)'
        color={color}
        underlayColor='rgba(0,0,0,0)'
        size={20}
        iconStyle={{marginLeft: -10, marginRight: 0}}
        activeOpacity={1}
        borderRadius={5}
        onPress={() => this.setState({ completed: !this.state.completed })}
      >
      </Icon.Button>
    );
  }
}

export default CheckBox
