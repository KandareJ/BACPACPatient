import * as action from '../../source/actions';

describe('Action Creator Tests', () => {
  it('selectDevice no parameters', () => {
    const expectedAction = {
      type: action.ADD_DEVICE,
      payload: {
        uuid: undefined,
        name: undefined
      }
    }

		expect(action.selectDevice()).toEqual(expectedAction);
	});

  it('selectDevice with parameters', () => {
    const expectedAction = {
      type: action.ADD_DEVICE,
      payload: {
        uuid: 123,
        name: "bacpac"
      }
    }

		expect(action.selectDevice(expectedAction.payload.uuid, expectedAction.payload.name)).toEqual(expectedAction);
	});

  it('finishConnecting', () => {
    const expectedAction = { type: action.FINISH_CONNECTING }

		expect(action.finishConnecting()).toEqual(expectedAction);
	});

  it('removeDevice', () => {
    const expectedAction = { type: action.REMOVE_DEVICE }

		expect(action.removeDevice()).toEqual(expectedAction);
	});
});
