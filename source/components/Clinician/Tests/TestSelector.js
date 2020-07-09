import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';

export default class TestSelector extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.props.navigation.push('TestPreview', { test: this.props.test });
  }

  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.selector}>
          <Image source={this.props.test.image} style={styles.image}/>
          <View style={styles.selectorTextWrapper}>
            <Text style={styles.selectorText}>{this.props.test.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
