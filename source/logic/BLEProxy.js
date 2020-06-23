import { BleManager } from 'react-native-ble-plx';

export default class BLEProxy {
  // public
  constructor() {
    this.manager = new BleManager();
  }

  loggy() {
    console.log("Hello from BLEProxy!");
  }

  async scan(callback) {
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

  connect() {
    this.manager.stopDeviceScan();
  }

}
