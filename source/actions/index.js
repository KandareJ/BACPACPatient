export const ADD_DEVICE = 'ADD_DEVICE';
export const REMOVE_DEVICE = 'REMOVE_DEVICE';
export const FINISH_CONNECTING = 'FINISH_CONNECTING';
export const CREATE_BLE_PROXY = 'CREATE_BLE_PROXY';
export const SET_PATIENT_ID = 'SET_PATIENT_ID';
export const SET_EXERCISE = 'SET_EXERCISE';
export const CLEAR_EXERCISE = 'CLEAR_EXERCISE';

export const selectDevice = (uuid, name) => {
  return {
    type: ADD_DEVICE,
    payload: {
      uuid,
      name
    }
  };
}

export const finishConnecting = () => {
  return {
    type: FINISH_CONNECTING,
  };
}

export const removeDevice = () => {
  return {
    type: REMOVE_DEVICE
  };
}

export const createBLEProxy = () => {
  return {
    type: CREATE_BLE_PROXY
  }
}

export const setPatientID = (id) => {
  return {
    type: SET_PATIENT_ID,
    payload: {
      id
    }
  };
};

export const setExercise = (title, data) => {
  return {
    type: SET_EXERCISE,
    payload: {
      title,
      data
    }
  };
};

export const clearExercise = () => {
  return {
    type: CLEAR_EXERCISE
  }
}