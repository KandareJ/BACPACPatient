import { Dimensions, StyleSheet } from 'react-native';

export const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  drawer: {
    width: '60%',
    backgroundColor: 'white'
  }
});
