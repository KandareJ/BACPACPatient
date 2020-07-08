import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#e3e3e3',
    alignItems: 'center'
  },
  scroll: {
    flex: 1,
    width: '100%'
  },
  selector: {
    backgroundColor: 'white',
    height: 100,
    marginVertical: 15,
    borderRadius: 20,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: .4,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectorText: {
    fontSize: 25,
    fontWeight: '400'
  }
});
