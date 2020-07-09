import React, { Component } from 'react';
import { View, Text, Button as PlainButton } from 'react-native';
import Video from 'react-native-video';

import TopBar from '../../TopBar';
import Button from '../../Button';
import { styles } from './styles';

export default class TestPreview extends Component {
  constructor(props) {
    super(props);

    this.continue = this.continue.bind(this);
    this.past = this.past.bind(this);
    this.back = this.back.bind(this);
  }

  continue() {
    this.props.navigation.navigate('Test');
  }

  past() {
    this.props.navigation.navigate('PastResults');
  }

  back() {
    this.props.navigation.pop();
  }

  render() {
    return (
      <TopBar title={"Test Preview"} back={this.back}>
        <View style={styles.bg}>
          <View style={styles.video}>
            <Video
              ref={(ref: Video) => { this.video = ref }}
              source={require("../../../../assets/vid/bear.mp4")}
              style={{flex: 1}}
              controls={true}
            />
          </View>
          <Button text={"Continue"} onPress={this.continue}/>
          <PlainButton title="Past Results" onPress={this.past}/>
        </View>
      </TopBar>
    );
  }
}
