import { combineReducers } from 'redux';
import { ADD_DEVICE, FINISH_CONNECTING } from '../actions';

const addedDeviceReducer = (last = null, action) => {
  if (action.type === ADD_DEVICE) {
    return action.payload
  }
  else return last;
};

const finishConnectingReducer = (last = true, action) => {
  if (action.type === FINISH_CONNECTING) return false;
  else return last;
}

export default combineReducers({
  addedDevice: addedDeviceReducer,
  connecting: finishConnectingReducer
});
