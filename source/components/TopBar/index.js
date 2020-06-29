import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from './styles';

export default class TopBar extends Component {
  render() {
    if(this.props.onMenuPress) {
      return (
        <View style={{flex: 1}}>
          <SafeAreaView style={styles.topSection}/>

          <SafeAreaView style={styles.screenView}>
            <View style={styles.bar}>
              <View style={styles.sideSpace}>
                <TouchableOpacity style={styles.imageContainer} onPress={this.props.onMenuPress}>
                  <Image style={styles.image} source={require('../../../assets/img/menuButton.png')} />
                </TouchableOpacity>
              </View>
              <View style={styles.centerSpace}>
                <Text style={styles.title}>{this.props.title}</Text>
              </View>
              <View style={styles.sideSpace} />
            </View>

            <View style={styles.children}>
              {this.props.children}
            </View>
          </SafeAreaView>

          <SafeAreaView style={styles.bottomSection} />
        </View>
      );
    }
    else {
      return (
        <View style={{flex: 1}}>
          <SafeAreaView style={styles.topSection}/>

          <SafeAreaView style={styles.screenView}>
            <View style={styles.bar}>
              <View style={styles.sideSpace} />
              <View style={styles.centerSpace}>
                <Text style={styles.title}>{this.props.title}</Text>
              </View>
              <View style={styles.sideSpace} />
            </View>

            <View style={styles.children}>
              {this.props.children}
            </View>
          </SafeAreaView>

          <SafeAreaView style={styles.bottomSection} />
        </View>
      );
    }
  }
}
