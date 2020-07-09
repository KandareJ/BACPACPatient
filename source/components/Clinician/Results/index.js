import React, { Component } from 'react';
import { View, Text } from 'react-native';

import TopBar from '../../TopBar';
import { styles } from './styles';

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
  }

  back() {
    this.props.navigation.pop();
  }

  render() {
    return(
      <TopBar title="Results" back={this.back}>
        <View style={styles.bg}>
          <Text>Hello World</Text>
        </View>
      </TopBar>
    );
  }
}
