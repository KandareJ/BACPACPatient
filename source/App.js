import React, { Component } from 'react'
import DeviceConnect from './components/DeviceConnect/DeviceConnect'
import { NavigationContainer } from '@react-navigation/native';
import ConnectedDevice from './components/ConnectedDevice/ConnectedDevice';

export default class App extends Component {
  render() {
    return(
      <NavigationContainer>
	<ConnectedDevice />
      </NavigationContainer>
    );
  }
};
