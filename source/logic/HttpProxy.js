import axios from 'axios';

const getURL = 'http://www.gutenberg.org/files/61085/61085-0.txt';

export const receiveData = (callback) => {
    axios.get(getURL).then(callback);
}

export const upload = () => {
  const BUCKET = 'BACPAC_TEST';
  const IAM_ACCESS_KEY = 'AKIARUKGOAEXJVEZCGTB';
  const IAM_ACCESS_SECRET = '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';

}
