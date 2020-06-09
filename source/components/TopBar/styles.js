import { Dimensions, StyleSheet } from 'react-native';

export const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    left: 0,
    top: 0,
    width,
    height: 90,
    backgroundColor: 'rgb(70,100,140)',
    alignItems: 'center',
    justifyContent: 'flex-end',
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: .3
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 15
  }
})
