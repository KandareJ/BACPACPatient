import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';

export default class Loading extends Component {
  render() {
    return(
      <View style={styles.bgView}>
        <Image source={require('../../../assets/img/loading.gif')} />
      </View>
    )
  }
}
