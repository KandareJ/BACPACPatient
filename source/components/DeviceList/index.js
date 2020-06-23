import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { BleManager } from 'react-native-ble-plx';
import { connect } from 'react-redux';

import Device from './Device';
import { styles } from './styles';

const simulate = false;

class DeviceList extends Component {
  constructor(props) {
    super(props);
    this.manager = new BleManager();
    this.state = (simulate)? { devices: [
      { name: "BacPac Device 1", id: "1234-5678-90ab" },
      { name: "BacPac Device 2", id: "1234-5678-90ac" },
      { name: "BacPac Device 3", id: "1234-5678-90ad" },
      { name: "BacPac Device 4", id: "1234-5678-90ae" },
      { name: "BacPac Device 5", id: "1234-5678-90af" },
    ]} : {
      devices: []
    };

    this.deviceFound = this.deviceFound.bind(this);
    if (props.BLE) this.props.BLE.loggy();
  }

  componentDidUpdate(prevProps) {
    console.log("BLE", this.props.BLE);
    if (prevProps.BLE !== this.props.BLE) {
      this.props.BLE.loggy();
    }
  }

  deviceFound(error, device) {
    console.log(device);
    this.props.BLE.connect();
  }

  listDevices() {
    return this.state.devices.map((device) => {
      return (<Device device={device} key={device.id} />);
    });
  }

  render() {
    return (
      <View>
        <ScrollView style={styles.scrollListStyle}>
          {this.listDevices()}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    BLE: state.BLE
  };
}

export default connect(mapStateToProps)(DeviceList);
