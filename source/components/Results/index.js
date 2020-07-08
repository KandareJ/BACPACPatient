import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export default class Results extends Component {
  render() {
    return(
      <View style={styles.bg}>
        <Text>Hello World</Text>
      </View>
    );
  }
}
