import { View, StyleProp, ViewStyle, TextStyle } from "react-native";
import React, { Dispatch } from "react";
import styles from "./styles";
import { Button } from "components";
import { Colors } from "common";

type TTwoTabsProps = {
  firstTabTxt: string;
  secondTabTxt: string;
  activeTab: number;
  setActiveTab: Dispatch<number>;
  onSelectedTab?(): void;
  containerStyle?: StyleProp<ViewStyle>;
  withShadowStyle?: boolean;
  customSecondTabPress: boolean;
  onSecondTabPress(): void;
  disabled1?: boolean;
  disabled2?: boolean;
};

const TwoTabs: React.FC<TTwoTabsProps> = ({
  firstTabTxt,
  secondTabTxt,
  activeTab,
  setActiveTab,
  onSelectedTab,
  containerStyle,
  withShadowStyle = false,
  customSecondTabPress = false,
  onSecondTabPress,
  disabled1 = false,
  disabled2 = false,
}) => {
  return (
    <View
      style={[
        withShadowStyle ? styles.shadowStyle : styles.tabView,
        containerStyle,
      ]}
    >
      <Button
        text={firstTabTxt}
        style={activeTab == 0 ? styles.activeButton : styles.firstTabStyle}
        buttonTextStyle={{ color: activeTab == 0 ? Colors.white : Colors.grey }}
        onPress={() => {
          setActiveTab(0);
          onSelectedTab();
        }}
        isDisapled={disabled1}
      />
      <Button
        text={secondTabTxt}
        style={activeTab == 1 ? styles.activeButton : styles.secondTabStyle}
        buttonTextStyle={{ color: activeTab == 1 ? Colors.white : Colors.grey }}
        onPress={
          customSecondTabPress
            ? onSecondTabPress
            : () => {
                setActiveTab(1);
                onSelectedTab();
              }
        }
        isDisapled={disabled2}
      />
    </View>
  );
};

export default TwoTabs;
