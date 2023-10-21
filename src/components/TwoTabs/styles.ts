import { Colors, ScaleHeight, ScaleWidth } from "common";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  tabView: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: ScaleHeight(27),
  },
  shadowStyle: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: ScaleHeight(27),
    shadowColor: Colors.grey,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.84,
    elevation: 1,
  },
  activeButton: {
    width: ScaleWidth("43.5%"),
    borderRadius: ScaleHeight(10),
    alignSelf: "center",
  },
  secondTabStyle: {
    width: ScaleWidth("45%"),
    borderTopRightRadius: ScaleHeight(10),
    borderBottomRightRadius: ScaleHeight(10),
    borderRadius: 0,
    backgroundColor: Colors.white,
  },
  firstTabStyle: {
    width: ScaleWidth("45%"),
    borderTopLeftRadius: ScaleHeight(10),
    borderBottomLeftRadius: ScaleHeight(10),
    borderRadius: 0,
    backgroundColor: Colors.white,
  },
});
export default styles;
