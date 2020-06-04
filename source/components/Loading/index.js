import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';
import { connect } from 'react-redux';
import { finishConnecting } from '../../actions';

class Loading extends Component {

  render() {
    setTimeout(this.props.finishConnecting, 2000);
    
    return(
      <View style={styles.bgView}>
        <Image source={require('../../../assets/img/loading.gif')} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps, { finishConnecting })(Loading);
