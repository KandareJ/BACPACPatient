import { BleManager } from 'react-native-ble-plx';

const fakeIt = true;

export default class BLEProxy {
  // public
  constructor() {
    if (fakeIt) {
      // do nothing
    }
    else {
      this.manager = new BleManager();
    }
  }

  async scan(callback) {
    if (fakeIt) {
      callback(null, {name: "BACPAC", id: "asdf-ghjk-lmnb"})
    }
    else {
      console.log("SCANNING");
      const isOn = await this.manager.state();
      if (isOn !== 'PoweredOn') {
        const subscription = this.manager.onStateChange((state) => {
            if (state === 'PoweredOn') {
              subscription.remove();
                this.scan(callback);
            }
        }, true);
      }
      else {
        this.manager.startDeviceScan(null, null, callback);
      }
    }
  }

  connect() {
    if (fakeIt) {

    }
    else {
      this.manager.stopDeviceScan();
    }
  }

}
