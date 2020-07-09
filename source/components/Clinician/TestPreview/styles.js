import { Dimensions, StyleSheet } from 'react-native';

export const { height, width } = Dimensions.get('window')

const aspectRatio = 9/16;

export const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   video: {
     width: width*.8,
     height: width*.8*aspectRatio,
     marginVertical: 30
   }
});
