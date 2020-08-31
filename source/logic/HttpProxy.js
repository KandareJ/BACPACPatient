import axios from 'axios';

const getURL = 'http://www.gutenberg.org/files/61085/61085-0.txt';

export const receiveData = (callback) => {
    axios.get(getURL).then(callback);
}

export const upload = () => {
  const BUCKET = 'BACPAC_TEST';
  const IAM_ACCESS_KEY = '';
  const IAM_ACCESS_SECRET = '';

}
