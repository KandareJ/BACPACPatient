import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import TopBar from '../../../SharedComponents/TopBar';
import PatientName from './PatientName';
import { getPatients, savePatients } from '../../../../logic/DatabaseProxy';
import { styles } from './styles';
import { setPatientID, clearExercise } from '../../../../actions';

const SelectPatient = ({ navigation, setPatientID, clearExercise }) => {
  let [patientInfo, setPatientInfo] = React.useState([]);
  React.useEffect(() => {
    getPatients().then((resp) => {setPatientInfo(resp)})
  }, [patientInfo]);

  const selectPatient = (id) => {
    navigation.push('Tests');
    setPatientID(id);
    clearExercise();
  }

  return (
    <TopBar title={'Select Patient'}>
      <ScrollView style={{backgroundColor: '#e3e3e3'}}>
        {patientInfo.map((x) => <PatientName patientInfo={x} onPress={selectPatient} key={x.first_name+x.last_name} />)}
        <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.push('Profile')}>
          <View style={styles.addIcon}>
            <Text style={styles.addIconText}>+</Text>
          </View>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </TopBar>
  );
};

const mapStateToProps = (state) => {
  return {
  };
}

export default connect(mapStateToProps, { setPatientID, clearExercise })(SelectPatient);
