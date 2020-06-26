import { Dimensions, StyleSheet } from 'react-native';

export const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  bar: {
    width,
    height: 70,
    backgroundColor: 'rgb(70,100,140)',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: .3,
    zIndex: 1
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25
  },
  image: {
    width: 23,
    height: 23
  },
  imageContainer: {
  },
  sideSpace: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerSpace: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
