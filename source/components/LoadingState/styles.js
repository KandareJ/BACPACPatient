import { Dimensions, StyleSheet } from 'react-native';

export const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  bgView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  gif: {
    width,
    height: width
  }
});
