import { ScaleHeight, ScaleWidth } from "common";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerSheet: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: ScaleHeight(13),
  },
  addSignature: {
    fontSize: ScaleWidth(18),
    fontWeight: "bold",
  },
  clear: {
    fontSize: ScaleWidth(13),
    textDecorationLine: "underline",
  },
  buttonSave: {
    marginTop: ScaleHeight(20),
  },
  titleSheet: {
    fontSize: ScaleWidth(20),
    fontWeight: "700",
    marginVertical: ScaleHeight(10),
  },
});

export default styles;
