import React, { Component } from 'react';
import { connect } from 'react-redux';

import DisconnectedState from '../DisconnectedState';
import ConnectedState from '../ConnectedState';
import LoadingState from '../LoadingState';

class Navigation extends Component {
  render() {
    if (this.props.device === null) return (<DisconnectedState />);
    else if (this.props.connecting) return (<LoadingState />);
    else return (<ConnectedState />)
  }
}

const mapStateToProps = (state) => {
  return {
    device: state.addedDevice,
    connecting: state.connecting
  };
}

export default connect(mapStateToProps)(Navigation);
