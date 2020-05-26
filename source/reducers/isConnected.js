import { ADD_DEVICE } from '../actions';

export default isConnected = (last = null, action) => {
  if (action.type === ADD_DEVICE) {
    return { uuid: action.uuid }
  }
  else return last;
}
