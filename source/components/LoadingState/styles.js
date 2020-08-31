import { Dimensions, StyleSheet } from 'react-native';

export const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  bgView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  gif: {
    marginTop: 50,
    width,
    height: width,
  }
});
