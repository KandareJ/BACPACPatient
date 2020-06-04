import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeviceConnect from '../DeviceConnect/DeviceConnect';
import ConnectedDevice from '../ConnectedDevice/ConnectedDevice';
import Loading from '../Loading';

class Navigation extends Component {
  render() {
    return (this.props.device === null) ? (<DeviceConnect />) : (<Loading />);
  }
}

const mapStateToProps = (state) => {
  return {
    device: state.addedDevice
  };
}

export default connect(mapStateToProps)(Navigation);
