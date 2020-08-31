import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import TopBar from '../TopBar';
import Button from './Button';
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
      lastSync: -1,
      lastPush: -1
    }

    this.readStorage = this.readStorage.bind(this);
    this.push = this.push.bind(this);
    this.sync = this.sync.bind(this);

    this.readStorage();
  }

  componentDidMount() {
    this.interval = setInterval(() => {this.setState({battery: this.state.battery})}, 60000);
  }

  readStorage() {
    AsyncStorage.getItem(`lastPush`).then((value) => {
      if (value !== null) this.setState({lastPush: JSON.parse(value)});
    });
    AsyncStorage.getItem(`lastSync`).then((value) => {
      if (value !== null) this.setState({lastSync: JSON.parse(value)});
    })
  }

  push(callback) {
    read((resp) => {
      console.log(resp);
      deleteFile((resp) => {
        let time = Date.now();
        AsyncStorage.setItem(`lastPush`, JSON.stringify(time));
        this.setState({lastPush: time});
        setTimeout(callback, 1000);
      });
    });

  }

  sync(callback) {
    receiveData( (resp) => {
      console.log("got data");
      write(resp.data, () => {
        let time = Date.now();
        AsyncStorage.setItem(`lastSync`, JSON.stringify(time));
        this.setState({lastSync: time});
        callback();
      });
    });
  }

  render() {
    return (
      <TopBar title={"BACPAC"} onMenuPress={this.props.navigation.toggleDrawer}>
        <View style={styles.bgView}>
          <Image style={styles.image} source={require('../../../assets/img/BackHarnessWoman.png')} />
          <View style={styles.textView}>
            <Text style={styles.text}>{this.props.device.name}</Text>
            <Text style={styles.text}>Battery:<Text style={styles.textNotBold}> {this.state.battery}%</Text></Text>
            <Text style={styles.text}>Storage:<Text style={styles.textNotBold}> {this.state.storage}%</Text></Text>
            <Text style={styles.text}>Last Sync:<Text style={styles.textNotBold}> {toRelativeTime(this.state.lastSync, Date.now())}</Text></Text>
            <Text style={styles.text}>Last Push:<Text style={styles.textNotBold}> {toRelativeTime(this.state.lastPush, Date.now())}</Text></Text>
          </View>
          <Button push={this.push} sync={this.sync} pos={this.state.lastPush >= this.state.lastSync} />
        </View>
      </TopBar>
	  );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

const mapStateToProps = (state) => {
  return {
    device: state.addedDevice
  };
}

export default connect(mapStateToProps)(ConnectedState);
