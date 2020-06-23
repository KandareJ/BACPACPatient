import * as reducer from '../../source/reducers';
import * as action from '../../source/actions';

describe('Reducer Tests', () => {
  it('addedDeviceReducer with ADD_DEVICE type', () => {
    const expectedResult = {
      uuid: 123,
      name: "bacpac"
    };

    const testAction = {
      type: action.ADD_DEVICE,
      payload: expectedResult
    }
		expect(reducer.addedDeviceReducer(undefined, testAction)).toEqual(expectedResult);
	});

  it('addedDeviceReducer with REMOVE_DEVICE type', () => {
    const testAction = {
      type: action.REMOVE_DEVICE
    }
		expect(reducer.addedDeviceReducer(undefined, testAction)).toBe(null);
	});

  it('addedDeviceReducer with random type', () => {
    const testAction = {
      type: "RANDOM"
    }
		expect(reducer.addedDeviceReducer(undefined, testAction)).toBe(null);
	});

  it('finishConnectingReducer with FINISH_CONNECTING type', () => {
    const testAction = {
      type: action.FINISH_CONNECTING
    }
		expect(reducer.finishConnectingReducer(undefined, testAction)).toBe(false);
	});

  it('finishConnectingReducer with REMOVE_DEVICE type', () => {
    const testAction = {
      type: action.REMOVE_DEVICE
    }
		expect(reducer.finishConnectingReducer(undefined, testAction)).toBe(true);
	});

  it('finishConnectingReducer with random type', () => {
    const testAction = {
      type: "RANDOM"
    }
		expect(reducer.finishConnectingReducer(undefined, testAction)).toBe(true);
	});

});
