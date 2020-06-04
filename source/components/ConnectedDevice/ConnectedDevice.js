import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { TapGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { styles } from './styles';
import { connect } from 'react-redux';
import { toRelativeTime } from './time';

class ConnectedDevice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      battery: 82,
      storage: 43,
      lastSync: Date.now(),
      lastPush: Date.now()
    }
  }

  onButtonStateChange() {
    console.log("pushy pushy")
  }

  render() {
    return (
      <View style={styles.bgView}>
        <Image style={styles.image} source={require('../../../assets/img/BackHarnessWoman.png')} />
        <View style={styles.textView}>
          <Text style={styles.title}>{this.props.device.name}</Text>
          <Text style={styles.text}>Battery:<Text style={styles.textNotBold}> {this.state.battery}%</Text></Text>
          <Text style={styles.text}>Storage:<Text style={styles.textNotBold}> {this.state.storage}%</Text></Text>
          <Text style={styles.text}>Last Sync:<Text style={styles.textNotBold}> {toRelativeTime(this.state.lastSync)}</Text></Text>
          <Text style={styles.text}>Last Push:<Text style={styles.textNotBold}> {toRelativeTime(this.state.lastPush)}</Text></Text>
        </View>

        <TapGestureHandler onHandlerStateChange={this.onButtonStateChange}>
          <Animated.View style={styles.button}>
              <Text style={styles.buttonText}>Sync</Text>
          </Animated.View>
        </TapGestureHandler>

	    </View>
	  );
  }
}

const mapStateToProps = (state) => {
  return {
    device: state.addedDevice
  };
}

export default connect(mapStateToProps)(ConnectedDevice);
