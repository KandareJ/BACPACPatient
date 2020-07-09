import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from './styles';

export default class TopBar extends Component {
  constructor(props) {
    super(props);
    this.leftSide = this.leftSide.bind(this);
  }

  leftSide() {
    if (this.props.onMenuPress) {
      return (
        <TouchableOpacity style={styles.imageContainer} onPress={this.props.onMenuPress}>
          <Image style={styles.image} source={require('../../../assets/img/menuButton.png')} />
        </TouchableOpacity>
      );
    }
    else if (this.props.back) {
      <TouchableOpacity style={styles.imageContainer} onPress={this.props.back}>
        <Image style={styles.image} source={require('../../../assets/icons/arrow_back_ios.png')} />
      </TouchableOpacity>
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <SafeAreaView style={styles.topSection}/>
        <SafeAreaView style={styles.screenView}>
          <View style={styles.bar}>
            <View style={styles.sideSpace}>
              {this.leftSide()}
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
}
