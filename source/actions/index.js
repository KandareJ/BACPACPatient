export const ADD_DEVICE = 'ADD_DEVICE';

export const selectDevice = (uuid, name) => {
  return {
    type: ADD_DEVICE,
    payload: {
      uuid,
      name
    }
  }
}
