import {StyleSheet, Platform} from 'react-native';
import {Colors, Fonts, ScaleHeight, ScaleWidth} from 'common';

export const styles = StyleSheet.create({
  rowStart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imgBox: {
    width: ScaleWidth(70),
    height: ScaleWidth(70),
    borderRadius: ScaleWidth(35),
    marginEnd: ScaleWidth(10),
    backgroundColor: Colors.lightBlueCard,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    width: ScaleWidth(50),
    height: ScaleWidth(50),
    borderRadius: ScaleWidth(25),
  },
  titleTxt: {
    fontSize: 22,
    color: Colors.black,
    fontFamily: Fonts.bold,
    letterSpacing: 1,
    paddingBottom: ScaleHeight(2),
  },
  subTitleTxt: {
    fontSize: 16,
    color: Colors.black,
    fontFamily: Fonts.semi_bold,
    textDecorationLine: 'underline',
    textShadowColor: Colors.lightGray,
  },
  firstLetter: {
    fontSize: 25,
    color: Colors.primary,
    fontFamily: Fonts.bold,
  },
});
