import React, { Component } from 'react';
import { View, Image } from 'react-native';

import TopBar from '../../TopBar';
import Button from '../../Button';
import { styles } from './styles';
import { testDescriptions } from '../Tests/testDescriptions';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
    this.test = this.props.route.params.test;
  }

  back() {
    this.props.navigation.pop();
  }

  render() {
    return (
      <TopBar title={this.test.title} back={this.back}>
        <View style={styles.bg}>
          <Image source={this.test.image} style={styles.image}/>
          <View style={styles.button}>
            <Button text={"Start"} />
          </View>
        </View>
      </TopBar>
    );
  }
}
