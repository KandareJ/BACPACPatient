import { combineReducers } from 'redux';
import { ADD_DEVICE, FINISH_CONNECTING, REMOVE_DEVICE, CREATE_BLE_PROXY, SET_PATIENT_ID, SET_EXERCISE, CLEAR_EXERCISE } from '../actions';
import BLEProxy from '../logic/BLEProxy';

export const addedDeviceReducer = (last = null, action) => {
  console.log(action.payload);
  if (action.type === ADD_DEVICE) {
    return action.payload
  }
  else if (action.type === REMOVE_DEVICE) {
    return null;
  }
  else return last;
};

export const finishConnectingReducer = (last = true, action) => {
  if (action.type === FINISH_CONNECTING) return false;
  else if (action.type === REMOVE_DEVICE) {
    return true;
  }
  else return last;
}

export const createBLEProxyReducer = (last = null, action) => {
  if (action.type === CREATE_BLE_PROXY && last === null) {
    return new BLEProxy();
  }
  else return last;
}

export const setPatientIDReducer = (last = '', action) => {
  if (action.type === SET_PATIENT_ID) {
    return action.payload.id;
  }
  else return last;
}

export const setExerciseReducer = (last = {}, action) => {
  if (action.type === SET_EXERCISE) {
    return {
      ...last,
      [action.payload.title]: action.payload.data
    }
  }
  else if (action.type === CLEAR_EXERCISE) return {};
  else return last;
}

export default combineReducers({
  addedDevice: addedDeviceReducer,
  connecting: finishConnectingReducer,
  BLE: createBLEProxyReducer,
  patientID: setPatientIDReducer,
  exercises: setExerciseReducer,
});
