import * as RNFS from 'react-native-fs';

const path = `${RNFS.DocumentDirectoryPath}/data.csv`;

export const write = (toWrite, callback) => {
    RNFS.exists(path).then((exists) => {
      if (exists) {
        RNFS.write(path, toWrite, -1, 'utf8').then(callback);
      }
      else {
        RNFS.writeFile(path, toWrite, 'utf8').then(callback);
      }
    });
}

export const read = (callback) => {
  RNFS.readFile(path, 'utf8').then(callback);
}

export const deleteFile = (callback) => {
  RNFS.unlink(path).then(callback);
}

export const uploadFile = (callback) => {
  
}
