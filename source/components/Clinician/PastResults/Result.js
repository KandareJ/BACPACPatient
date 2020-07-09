import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export default class Result extends Component {
  render() {
    return(
      <View style={styles.result}>
        <Text style={styles.resultText}>{this.props.timestamp}</Text>
        <Text style={styles.open}>></Text>
      </View>
    );
  }
}
