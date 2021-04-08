import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { imageList } from '../../../../utils/config';
import { styles } from './styles';

export default class TestSelector extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);

    this.lastTime = (this.props.test.time !== null) ? new Date(this.props.test.time) : null;
    this.now = new Date();
    if (this.props.test.time !== null) {
      this.lastCompleted = `Last done ${this.lastTime.toDateString()} at ${this.lastTime.toLocaleTimeString()}`;
    }
    else {
      this.lastCompleted = 'No exercise record available';
    }
  }

  onPress() {
    this.props.navigation.push('TestPreview', { test: this.props.test });
  }

  generateItem() {
    if(this.lastTime !== null && this.lastTime.getTime() < this.now.getTime() - 600000) {
      return (
        <View style={{...styles.selector, shadowOpacity: .2}}>
          <View style={styles.selectorTextWrapper}>
            <Text style={{...styles.selectorText, color: 'gray'}}>{this.props.test.title}</Text>
            <Text style={styles.selectorSubtext}>{this.lastCompleted}</Text>
          </View>
          <View>
            <Image source={require('../../../../../assets/icons/done.png')} style={styles.icon}/>
          </View>
        </View>
      );
    }
    else {
      return (
        <View style={styles.selector}>
          <View style={styles.selectorTextWrapper}>
            <Text style={styles.selectorText}>{this.props.test.title}</Text>
            <Text style={styles.selectorSubtext}>{this.lastCompleted}</Text>
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
