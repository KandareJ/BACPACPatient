import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { State, TapGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { connect } from 'react-redux';

import TopBar from '../TopBar';
import { styles } from './styles';
import { toRelativeTime } from './time';
import { receiveData } from '../../logic/HttpProxy';
import { read, write, deleteFile } from '../../logic/FileSystemProxy';

class ConnectedState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      battery: 82,
      storage: 43,
      lastSync: Date.now(),
      lastPush: Date.now()
    }
  }

  onButtonStateChange({nativeEvent}) {
    if (nativeEvent.state === State.ACTIVE) {
      console.log("pushy pushy");
      write("Testy testy", () => {
        console.log("Successfully Written");
        read((fromFile) => {
          console.log("Successfully Read:", fromFile);
          deleteFile(()=>{console.log("Deleted file")});
      });
      } );
    }
  }

  render() {
    return (
      <View style={styles.bgView}>
        <TopBar title={this.props.device.name}/>
        <Image style={styles.image} source={require('../../../assets/img/BackHarnessWoman.png')} />
        <View style={styles.textView}>
          <Text style={styles.text}>{this.props.device.name}</Text>
          <Text style={styles.text}>Battery:<Text style={styles.textNotBold}> {this.state.battery}%</Text></Text>
          <Text style={styles.text}>Storage:<Text style={styles.textNotBold}> {this.state.storage}%</Text></Text>
          <Text style={styles.text}>Last Sync:<Text style={styles.textNotBold}> {toRelativeTime(this.state.lastSync, Date.now())}</Text></Text>
          <Text style={styles.text}>Last Push:<Text style={styles.textNotBold}> {toRelativeTime(this.state.lastPush, Date.now())}</Text></Text>
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

export default connect(mapStateToProps)(ConnectedState);
