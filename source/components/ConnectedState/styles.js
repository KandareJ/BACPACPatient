import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  bgView: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1
  },
  image: {
    resizeMode: 'contain',
    flex: 1,
    marginTop: 10
  },
  button: {
    marginTop: 30,
    backgroundColor: 'rgb(70,100,140)',
    height: 70,
    width: '60%',
    marginHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#808080',
    shadowRadius: 7,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: .7,
    flexDirection: 'row',
    marginBottom: 70
  },
  buttonPress: {
    marginTop: 30,
    backgroundColor: 'rgb(70,100,140)',
    height: 70,
    width: '60%',
    marginHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#808080',
    shadowRadius: 7,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: .7,
    opacity: .9,
    marginBottom: 70
  },
  textView: {
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  textNotBold: {
    fontWeight: 'normal'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  pulse: {
    height: 30,
    width: 30,
    marginRight: 5
  }
});
