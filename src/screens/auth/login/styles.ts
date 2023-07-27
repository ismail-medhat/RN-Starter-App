import {StyleSheet} from 'react-native';
import {Fonts, ScaleWidth, Colors, ScaleHeight} from 'common';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seoudiTxt: {
    color: Colors.black,
    fontSize: 30,
    fontFamily: Fonts.bold,
    letterSpacing: 2,
    textAlign: 'center',
  },
  closeBox: {
    position: 'absolute',
    left: ScaleHeight(20),
    top: ScaleHeight(4),
    width: ScaleWidth(30),
    height: ScaleHeight(30),
    zIndex: 4,
  },
  titleTxt: {
    color: Colors.black,
    fontSize: 25,
    fontFamily: Fonts.semi_bold,
    letterSpacing: 2,
    textAlign: 'center',
    paddingVertical: ScaleHeight(15),
    textTransform: 'uppercase',
  },
  subTitleTxt: {
    color: Colors.black,
    fontSize: 20,
    fontFamily: Fonts.regular,
    letterSpacing: 2,
    textAlign: 'center',
    paddingBottom: ScaleHeight(10),
  },
  socialBtnBox: {
    borderWidth: ScaleHeight(1),
    borderColor: Colors.black,
    borderRadius: ScaleWidth(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: ScaleWidth(30),
    paddingVertical: ScaleHeight(10),
    marginVertical: ScaleHeight(5),
  },
  socialBtnTxt: {
    color: Colors.black,
    fontSize: 16,
    fontFamily: Fonts.semi_bold,
    marginStart: ScaleWidth(15),
  },
  ploicyTxt: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    textAlign: 'center',
  },
  policyUndrline: {
    textDecorationLine: 'underline',
    textDecorationColor: Colors.lightGray,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    marginHorizontal: ScaleWidth(20),
    paddingTop: ScaleHeight(15),
    alignItems: 'center',
  },
});

export default styles;
