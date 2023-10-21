import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import ColorPicker, { Panel2 } from "reanimated-color-picker";
import { Colors } from "common";
import Button from "components/Button";

type TColorPickerProps = {
  onResetColorPicker?(): void;
  onSave(): void;
  onComplete({ hex }: { hex: any }): void;
};

const ColorPickerComponent: React.FC<TColorPickerProps> = ({
  onResetColorPicker,
  onSave,
  onComplete,
}) => {
  return (
    <View>
      <View style={styles.headerTitle}>
        <Text style={styles.signatureColor}>{"Signature Color"}</Text>
        <TouchableOpacity onPress={onResetColorPicker}>
          <Text style={styles.reset}>{"Reset"}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>
        {"choose your signature color that will be applied to all the reposts"}
      </Text>
      <ColorPicker
        style={styles.colorPicker}
        value="red"
        onComplete={onComplete}
      >
        <Panel2
          thumbSize={15}
          thumbColor={Colors.black}
          verticalChannel="brightness"
        />
      </ColorPicker>
      <Button text={"Save"} style={styles.save} onPress={onSave} />
    </View>
  );
};

export default ColorPickerComponent;
