import React, { Component } from 'react';
import { View, Image } from 'react-native';

import Button from '../Button';
import { styles } from './styles';
import { testDescriptions } from '../Tests/testDescriptions';

export default class Test extends Component {
  render() {
    return (
      <View style={styles.bg}>
        <Image source={testDescriptions[0].image} style={styles.image}/>
        <View style={styles.button}>
          <Button text={"Start"} />
        </View>
      </View>
    );
  }
}
