export const ADD_DEVICE = 'ADD_DEVICE';
export const FINISH_CONNECTING = 'FINISH_CONNECTING';

export const selectDevice = (uuid, name) => {
  return {
    type: ADD_DEVICE,
    payload: {
      uuid,
      name
    }
  }
}

export const finishConnecting = () => {
  return {
    type: FINISH_CONNECTING,
  }
}
