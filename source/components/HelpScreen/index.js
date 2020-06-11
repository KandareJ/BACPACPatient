import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import TopBar from '../TopBar';
import Button from '../Button';
import { styles } from './styles';
import { sync, push, battery, storage, issue } from './helpText';
import { removeDevice } from '../../actions';

class HelpScreen extends Component {
  render () {
    return (
      <View style={styles.layout}>
        <TopBar title={"Help"} />
        <ScrollView style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.boldText1}>Current Device: <Text style={styles.text1}>{this.props.device.name}</Text></Text>
            <Text style={styles.boldText1}>Device UUID: <Text style={styles.text1}>{this.props.device.uuid}</Text></Text>
            <View style={{...styles.center, marginTop: 15}}>
              <Button text={"Connect to Another Device"} onPress={this.props.removeDevice} />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.boldText2}>Sync: <Text style={styles.text2}>{sync}</Text></Text>
            <Text style={styles.boldText2}>Push: <Text style={styles.text2}>{push}</Text></Text>
            <Text style={styles.boldText2}>Battery: <Text style={styles.text2}>{battery}</Text></Text>
            <Text style={styles.boldText2}>Storage: <Text style={styles.text2}>{storage}</Text></Text>
            <Text style={styles.boldText2}>Issues: <Text style={styles.text2}>{issue}</Text></Text>

            <View style={{...styles.center, marginBottom: 50}}>
              <Button text={"Report an Issue"} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    device: state.addedDevice
  };
}

export default connect(mapStateToProps, { removeDevice })(HelpScreen);
