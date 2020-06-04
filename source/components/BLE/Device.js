import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { selectDevice } from '../../actions';
import { connect } from 'react-redux';
import { styles } from './styles';

class Device extends Component {
  constructor(props) {
    super(props);

    this.devicePress = this.devicePress.bind(this);
  }

  devicePress() {
    this.props.selectDevice(this.props.device.id, this.props.device.name);
  }

  render() {
    return(
      <TouchableOpacity onPress={this.devicePress}>
        <View style={styles.device}>
          <Text style={styles.deviceName}>{this.props.device.name}</Text>
          <Text style={styles.deviceID}>{this.props.device.id}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps, { selectDevice })(Device);
