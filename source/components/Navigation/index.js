import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeviceConnect from '../DeviceConnect/DeviceConnect';
import ConnectedDevice from '../ConnectedDevice/ConnectedDevice';
import Loading from '../Loading';

class Navigation extends Component {
  render() {
    if (this.props.device === null) return (<DeviceConnect />);
    else if (this.props.connecting) return (<Loading />);
    else return (<ConnectedDevice />)
  }
}

const mapStateToProps = (state) => {
  return {
    device: state.addedDevice,
    connecting: state.connecting
  };
}

export default connect(mapStateToProps)(Navigation);
