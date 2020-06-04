import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export default class Device extends Component {
  render() {
    return(
      <View style={styles.device}>
        <Text style={styles.deviceName}>{this.props.device.name}</Text>
        <Text style={styles.deviceID}>{this.props.device.id}</Text>
      </View>
    );
  }
}
