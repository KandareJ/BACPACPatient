import AsyncStorage from '@react-native-community/async-storage';

export const saveSync = async () => {
  let time = Date.now();
  await AsyncStorage.setItem(`bacpac:client:lastSync`, JSON.stringify(time));
  return time;
}

export const getSync = async () => {
  return JSON.parse(await AsyncStorage.getItem(`bacpac:client:lastSync`));
}

export const clearSync = async () => {
  return AsyncStorage.removeItem(`bacpac:client:lastSync`);
}

export const saveProfile = async (profile, patient_id) => {
  await AsyncStorage.setItem(`bacpac:${patient_id}:profile`, JSON.stringify(profile));
  return 0;
}

export const getProfile = async (patient_id) => {
  let profile = await AsyncStorage.getItem(`bacpac:${patient_id}:profile`);
  return JSON.parse(profile);
}

export const getPatients = async () => {
  let patients = await AsyncStorage.getItem('bacpac:patients');
  if (patients === null) return [];
  return JSON.parse(patients);
}

export const savePatient = async (patient) => {
  let patients = await getPatients();
  patients.push(patient);
  await AsyncStorage.setItem('bacpac:patients', JSON.stringify(patients));
  return 0;
}

export const getExercise = async (exercise, patient_id) => {
  let res = await AsyncStorage.getItem(`bacpac:${patient_id}:${exercise}`);
  return JSON.parse(res);
}

export const addExercise = async (exercise, patient_id, data) => {
  let last = await getExercise(exercise, patient_id);
  let lastParsed = JSON.parse(last);
  lastParsed = (lastParsed) ? lastParsed : [];
  await AsyncStorage.setItem(`bacpac:${patient_id}:${exercise}`, JSON.stringify([data, ...lastParsed]));
  //optimize this last statement later on by appending instead of prepending
  return 0;
}
