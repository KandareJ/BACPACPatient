import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export default class TopBar extends Component {
  render() {
    return (
      <View style={styles.bar}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}
