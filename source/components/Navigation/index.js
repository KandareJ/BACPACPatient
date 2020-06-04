import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeviceConnect from '../DeviceConnect/DeviceConnect';
import ConnectedDevice from '../ConnectedDevice/ConnectedDevice';

class Navigation extends Component {
  render() {
    console.log(this.props);
    return (
      <DeviceConnect />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    device: state.addedDevice
  };
}

export default connect(mapStateToProps)(Navigation);
