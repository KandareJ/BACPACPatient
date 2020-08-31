import { Dimensions, StyleSheet } from 'react-native';

export const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  drawer: {
    width: '60%',
    backgroundColor: 'white'
  },
  drawerContents: {
    flex: 1
  },
  section: {
    marginBottom: 50,
    marginHorizontal: 10
  },
  sectionBody: {
    borderTopWidth: 1,
    borderTopColor: 'rgb(70,100,140)',
  },
  sectionTitle: {
    color: 'rgb(70,100,140)',
    fontWeight: '700'
  },
  icon: {
  },
  drawerTitle: {
    color: 'rgb(70,100,140)',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 15,
    marginHorizontal: 10,
  }
});

export const drawerOptions = {
  overlayColor: 'rgb(70,100,140)',
  drawerType: 'front',
  initialRouteName: 'BACPAC'
};
