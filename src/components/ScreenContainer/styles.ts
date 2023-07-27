import {StyleSheet, Platform} from 'react-native';
import {Colors, ScaleHeight} from 'common';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: Platform.OS === 'android' ? ScaleHeight(40) : 0,
  },
});
