import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const PatientName = ({ patientInfo, onPress }) => {
  let dob = new Date(patientInfo.dob).toLocaleDateString();
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.name}>
      <Text style={styles.nameText}>{patientInfo.last_name}, {patientInfo.first_name}</Text>
      <Text style={styles.nameSubtext}>DOB: {dob}</Text>
      <Text style={styles.nameSubtext}>ID: {patientInfo.patient_id}</Text>
    </View>
    </TouchableOpacity>
  );
};

export default PatientName;
