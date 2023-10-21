import { StyleSheet, Text, View } from "react-native";
import { ScaleHeight, ScaleWidth, Colors } from "common";

const styles = StyleSheet.create({
  signatureView: {
    marginTop: ScaleHeight(20),
    height: ScaleHeight("30%"),
    backgroundColor: Colors.white,
    borderRadius: ScaleHeight(10),
    borderWidth: ScaleWidth(1),
    borderColor: Colors.lightGrey,
  },
  radioButton: {
    alignSelf: "flex-end",
    top: ScaleHeight(7),
    right: ScaleWidth(7),
    position: "absolute",
    zIndex: 1,
  },
  signature: {
    marginTop: ScaleHeight(5),
    height: ScaleHeight("28%"),
    justifyContent: "center",
  },
  button: {
    marginTop: ScaleHeight(31),
  },
  clear: {
    marginTop: ScaleHeight(18),
  },
  buttonTextStyle: {
    color: Colors.primary,
    textDecorationLine: "underline",
  },
});
export default styles;
