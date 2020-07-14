import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { imageList } from '../../../utils/config';
import { styles } from './styles';

export default class TestSelector extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.props.navigation.push('TestPreview', { test: this.props.test });
  }

  generateItem() {
    if (imageList) {
      return (
        <View style={styles.selector}>
          <Image source={this.props.test.image} style={styles.image}/>
          <View style={styles.selectorTextWrapper}>
            <Text style={styles.selectorText}>{this.props.test.title}</Text>
          </View>
        </View>
      );
    }
    else {
      return (
        <View style={{...styles.selector, ...styles.selectorNoImage}}>
          <View style={styles.selectorTextWrapper}>
            <Text style={styles.selectorText}>{this.props.test.title}</Text>
          </View>
        </View>
      );
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
        {this.generateItem()}
      </TouchableOpacity>
    );
  }
}
