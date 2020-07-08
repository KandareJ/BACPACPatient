import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export default class TestSelector extends Component {
  render() {
    return (
      <View style={styles.selector}>
        <Text style={styles.selectorText}>{this.props.test.title}</Text>
      </View>
    );
  }
}
