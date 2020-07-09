import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import TopBar from '../../TopBar';
import TestSelector from './TestSelector';
import { styles } from './styles';
import { testDescriptions } from './testDescriptions';



export default class Tests extends Component {
  renderTestSelectors() {
    return testDescriptions.map((t) => <TestSelector key={t.title} test={t} navigation={this.props.navigation} />);
  }

  render() {
    return (
      <TopBar title="Tests">
      <View style={styles.bg}>
        <ScrollView style={styles.scroll}>
          {this.renderTestSelectors()}
        </ScrollView>
      </View>
      </TopBar>
    );
  }
}
