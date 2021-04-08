import React from 'react';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';

import TopBar from '../../../SharedComponents/TopBar';
import TestSelector from './TestSelector';
import { styles } from './styles';
import { testDescriptions } from './testDescriptions';
import { getExercise } from '../../../../logic/DatabaseProxy';
import { setExercise } from '../../../../actions';

const Tests = ({navigation, id, setExercise, exercises}) => {
  React.useEffect(() => {
    testDescriptions.map((test) => {
      getExercise(test.title, id).then((exerciseInfo) => {
        setExercise(test.title, exerciseInfo);
      });
    });
  }, []);

  const ProfileButton = () => {
    return (
      <TouchableOpacity onPress={()=>{navigation.push('Profile');}}>
        <View>
          <Image source={require('../../../../../assets/icons/person.png')} style={{width: 30, height: 30}} />
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TopBar title="Exercises" right={ProfileButton}>
      <View style={styles.bg}>
        <ScrollView style={styles.scroll}>
          {testDescriptions.map((t) => {
            const time = (exercises[t.title] && exercises[t.title][0]) ? exercises[t.title][0].time : null;
            console.log(t.title, time)
            return (
              <TestSelector key={t.title} test={{...t, time}} navigation={navigation} />
            );
          })}
        </ScrollView>
      </View>
    </TopBar>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.patientID,
    exercises: state.exercises
  };
}

export default connect(mapStateToProps, { setExercise })(Tests);
