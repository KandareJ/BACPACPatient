import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export default class TestSelector extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.props.navigation.navigate('TestPreview')
  }

  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.selector}>
          <Text style={styles.selectorText}>{this.props.test.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
