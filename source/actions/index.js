export const ADD_DEVICE = 'ADD_DEVICE';

export const addDevice = (uuid) => {
  return {
    type: ADD_DEVICE,
    payload: {
      uuid
    }
  }
}
