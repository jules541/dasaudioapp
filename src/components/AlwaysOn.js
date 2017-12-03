import React, { Component } from 'react';
import { AppRegistry, TextInput, View } from 'react-native';

export default class AlwaysOn extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View>
      <TextInput
        style={{height: 50 , borderColor: 'gray', borderWidth: 4, margin: 15}}
        placeholder="Type here!"        
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    </View>
    );
  }
};

