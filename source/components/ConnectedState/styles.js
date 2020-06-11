import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  bgView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    marginVertical: -30
  },
  button: {
    marginTop: 50,
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
    flexDirection: 'row'
  },
  buttonPress: {
    marginTop: 50,
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
    opacity: .9
  },
  textView: {
    marginTop: 10,
    width: '75%'
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
