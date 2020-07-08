import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import TestSelector from './TestSelector';
import { styles } from './styles';

const TESTS = [
  {
    title: "Box Test",
    video: require("../../../assets/vid/bear.mp4"),
    image: require("../../../assets/img/BackExtension.jpg")
  },
  {
    title: "Box Test 2",
    video: require("../../../assets/vid/bear.mp4"),
    image: require("../../../assets/img/BackExtension.jpg")
  },
  {
    title: "Box Test 3",
    video: require("../../../assets/vid/bear.mp4"),
    image: require("../../../assets/img/BackExtension.jpg")
  }
];

export default class Tests extends Component {
  renderTestSelectors() {
    return TESTS.map((t) => <TestSelector key={t.title} test={t} />);
  }

  render() {
    return (
      <View style={styles.bg}>
        <ScrollView style={styles.scroll}>
          {this.renderTestSelectors()}
        </ScrollView>
      </View>
    );
  }
}
