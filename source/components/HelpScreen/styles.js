import { Dimensions, StyleSheet } from 'react-native';

export const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  section: {
    marginTop: 25
  },
  layout: {
    flex: 1
  },
  content: {
    flex: 1,
    marginTop: 90,
    paddingHorizontal: 20
  },
  center: {
    marginTop: 10,
    alignItems: 'center'
  },
  boldText1: {
    fontWeight: 'bold',
    fontSize: 25
  },
  text1: {
    fontWeight: 'normal',
    fontSize: 23
  },
  boldText2: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 20
  },
  text2: {
    fontWeight: 'normal',
    fontSize: 20
  }
});
