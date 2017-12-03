import React, { Component } from 'react';
import { AppRegistry, TextInput, View } from 'react-native';

export default class KeyWord extends Component {
  constructor(props) {
    super(props);
    this.state = { keyword: false };
  }
  render() {
    const magicWord= "hello"
    if( magicWord = "hello"){
      this.setState({
        keyword:true
      })
    }
    return (
      <View>
        <Text>"Lower the Volume</Text>
    </View>
    );
  }
};
