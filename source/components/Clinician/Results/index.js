import React, { Component } from 'react';
import { View, Text } from 'react-native';

import TopBar from '../../TopBar';
import Button from '../../Button';
import { styles } from './styles';

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
    this.done = this.done.bind(this);
  }

  back() {
    this.props.navigation.pop();
  }

  done() {
    this.props.navigation.popToTop();
  }

  render() {
    return(
      <TopBar title="Results" back={this.back}>
        <View style={styles.bg}>
          <Button text={"Done"} onPress={this.done} />
        </View>
      </TopBar>
    );
  }
}
