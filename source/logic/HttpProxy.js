import axios from 'axios';

const url = 'http://localhost:8080/sky/event/6W6tiq8UiVciHHgKVtAox8/eid/new/csv';
const getURL = 'http://localhost:8080/sky/cloud/6W6tiq8UiVciHHgKVtAox8/csv_test/dummydata';

export const receiveData = (callback) => {
    axios.get(getURL).then(callback);
  }


  export const sendCSV = (csv, callback) => {
    let formdata = new FormData();
    formdata.append(csv);

    axios({
      url,
      method: post,
      data: formdata
    }).then(callback);
  }
