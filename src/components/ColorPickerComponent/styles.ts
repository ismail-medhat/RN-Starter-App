import { Colors, ScaleHeight, ScaleWidth } from "common";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: ScaleHeight(15),
  },
  signatureColor: {
    fontSize: ScaleWidth(16),
    fontWeight: "bold",
  },
  reset: {
    fontSize: ScaleWidth(13),
    color: Colors.primary,
    fontWeight: "700",
    textDecorationLine: "underline",
  },
  text: {
    fontSize: ScaleWidth(13),
    fontWeight: "400",
  },
  colorPicker: {
    width: "100%",
    alignSelf: "center",
    marginTop: ScaleHeight(21),
  },
  save: {
    marginTop: ScaleHeight(50),
  },
});
export default styles;
