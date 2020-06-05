import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import Device from './Device';
import { styles } from './styles';

export default class DeviceList extends Component {
  constructor() {
    super();
    this.devices = [
      { name: "BacPac Device 1", id: "1234-5678-90ab" },
      { name: "BacPac Device 2", id: "1234-5678-90ac" },
      { name: "BacPac Device 3", id: "1234-5678-90ad" },
      { name: "BacPac Device 4", id: "1234-5678-90ae" },
      { name: "BacPac Device 5", id: "1234-5678-90af" },
    ];
  }

  listDevices() {
    return this.devices.map((device) => {
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
