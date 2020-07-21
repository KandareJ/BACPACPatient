import React, { Component } from 'react';
import { View, Text } from 'react-native';

import TopBar from '../../TopBar';
import { styles } from './styles';

export default class Profile extends Component {
  back = () => {
    this.props.navigation.popToTop();
  }

  render() {
    return (
      <TopBar title={'Profile'} back={this.back}>
        <View style={styles.bg}>
          <Text style={styles.text}><Text style={styles.label}>Name:</Text> John Smith</Text>
          <Text style={styles.text}><Text style={styles.label}>Age:</Text> 41</Text>
          <Text style={styles.text}><Text style={styles.label}>BACPAC UUID:</Text> John Smith</Text>
        </View>
      </TopBar>
    );
  }
}
