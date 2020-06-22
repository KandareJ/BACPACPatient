export const ADD_DEVICE = 'ADD_DEVICE';
export const REMOVE_DEVICE = 'REMOVE_DEVICE';
export const FINISH_CONNECTING = 'FINISH_CONNECTING';
export const CREATE_BLE_PROXY = 'CREATE_BLE_PROXY';

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
