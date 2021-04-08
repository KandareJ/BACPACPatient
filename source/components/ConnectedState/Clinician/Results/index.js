import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { addExercise } from '../../../../logic/DatabaseProxy';
import { setExercise } from '../../../../actions';
import TopBar from '../../../SharedComponents/TopBar';
import Button from '../../../SharedComponents/Button';
import { styles } from './styles';

const reasons = [
  'example reason 1 detected in this test',
  'example reason 2 detected in this test',
  'example reason 3 detected in this test',
]

class Results extends Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
    this.done = this.done.bind(this);
  }

  back() {
    this.props.navigation.pop();
  }

  done() {
    const data = {
      time: new Date(),
      results: reasons,
    };

    this.props.setExercise(this.props.route.params.test.title, data);
    
    addExercise(this.props.route.params.test.title, this.props.id, data).then(() => {
      this.props.navigation.popToTop();
      this.props.navigation.push('Tests');
    });
  }

  generateList = () => {
    return reasons.map((x) => {
      return <Text style={styles.text} key={x}>- {x}</Text>
    })
  }

  render() {
    return(
      <TopBar title="Results" back={this.back}>
        <View style={styles.bg}>
            <ScrollView style={styles.scrollView}>
              <View style={styles.innerScroll}>
                {this.generateList()}
              </View>
            </ScrollView>
        </View>
        <View style={styles.done}>
          <Button text={"Done"} onPress={this.done} />
        </View>
      </TopBar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.patientID
  };
}

export default connect(mapStateToProps, { setExercise })(Results);
