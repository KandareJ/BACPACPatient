import React, { Component } from 'react';
import { View, Text, Button as PlainButton } from 'react-native';
import Video from 'react-native-video';

import Button from '../Button';
import { styles } from './styles';

export default class TestPreview extends Component {

  render() {
    return (
      <View style={styles.bg}>
        <View style={styles.video}>
          <Video
            ref={(ref: Video) => { this.video = ref }}
            source={require("../../../assets/bear.mp4")}
            style={{flex: 1}}
            controls={true}
          />
        </View>
        <Button text={"Continue"}/>
        <PlainButton title="Past Results"/>
      </View>
    );
  }
}
