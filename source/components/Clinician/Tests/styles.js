import { StyleSheet, Dimensions } from 'react-native';
export const { width } = Dimensions.get('window');
const margin = 20;

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
    backgroundColor: '#f0f0f0',
    marginVertical: 15,
    borderRadius: 20,
    height: 360,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: .4,
    marginHorizontal: margin,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectorText: {
    fontSize: 25,
    fontWeight: '400'
  },
  selectorTextWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  image: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: width-2*margin,
    height: 300
  }
});
