import { Dimensions, StyleSheet } from 'react-native';

export const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  drawer: {
    width: '60%',
    backgroundColor: 'white'
  }
});

export const drawerOptions = {
  overlayColor: 'rgb(70,100,140)',
  drawerType: 'front',
  initialRouteName: 'BACPAC'
};
