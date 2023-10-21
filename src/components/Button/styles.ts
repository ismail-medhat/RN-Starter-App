import { StyleSheet } from 'react-native';
import { Colors, hp, wp } from '../../../constants';
import { ScaleHeight, ScaleWidth } from '../../../constants/foundation';

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    minHeight: 45,
    height: ScaleHeight(45),
    borderRadius: hp(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  buttonText: {
    fontSize: ScaleWidth(16),
    fontWeight: '700',
    color: Colors.white,
  },
});
