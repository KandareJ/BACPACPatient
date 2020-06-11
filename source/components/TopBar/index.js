import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default class TopBar extends Component {
  render() {
    if(this.props.onMenuPress) {
      return (
        <View style={styles.bar}>
          <TouchableOpacity style={styles.imageContainer} onPress={this.props.onMenuPress}>
            <Image style={styles.image} source={require('../../../assets/img/menuButton.png')} />
          </TouchableOpacity>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
      );
    }
    else {
      return (
        <View style={styles.bar}>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
      );
    }
  }
}