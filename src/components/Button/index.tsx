import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  ColorValue,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import { Colors } from "common";

type TButtonProps = {
  text: string;
  onPress: () => {};
  style?: StyleProp<ViewStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
  isDisapled?: boolean;
  disabledColor?: ColorValue;
  loading?: boolean;
};

const Button: React.FC<TButtonProps> = ({
  text = "Sign In",
  onPress,
  style,
  buttonTextStyle,
  isDisapled,
  disabledColor,
  loading,
}) => {
  return (
    <TouchableOpacity
      disabled={isDisapled ? true : false}
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor:
            disabledColor && isDisapled ? disabledColor : Colors.primary,
        },
        style,
      ]}
      activeOpacity={0.4}
    >
      {loading ? (
        <ActivityIndicator color={Colors.white} size={"small"} />
      ) : (
        <Text style={[styles.buttonText, buttonTextStyle]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
