import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeviceConnect from '../DeviceConnect/DeviceConnect';
import ConnectedDevice from '../ConnectedDevice/ConnectedDevice';

class Navigation extends Component {
  render() {
    return (this.props.device === null) ? (<DeviceConnect />) : (<ConnectedDevice />);
  }
}

const mapStateToProps = (state) => {
  return {
    device: state.addedDevice
  };
}

export default connect(mapStateToProps)(Navigation);
