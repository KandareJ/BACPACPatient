import { combineReducers } from 'redux';
import { ADD_DEVICE } from '../actions';

const addedDeviceReducer = (last = null, action) => {
  if (action.type === ADD_DEVICE) {
    return action.payload
  }
  else return last;
};

export default combineReducers({
  addedDevice: addedDeviceReducer
});
