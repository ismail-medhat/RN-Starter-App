import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";
import React, { useRef, useEffect } from "react";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import BottomSheet from "react-native-raw-bottom-sheet";
import { Colors, ScaleHeight } from "common";

type TCustomBottomSheetProps = {
  isOpen: boolean;
  onClose(): void;
  children: JSX.Element;
  height: number;
  containerStyle?: StyleProp<ViewStyle>;
  dragFromTopOnly?: boolean;
};

const CustomBottomSheet: React.FC<TCustomBottomSheetProps> = ({
  isOpen,
  onClose,
  children,
  height,
  containerStyle,
  dragFromTopOnly = false,
}) => {
  const bottomSheetRef = useRef<BottomSheet>(any);
  useEffect(() => {
    if (isOpen) {
      bottomSheetRef.current.open();
    } else {
      bottomSheetRef.current.close();
    }
  }, [isOpen]);

  const onSheetClosed = () => {
    bottomSheetRef.current.close();
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      height={height}
      duration={250}
      closeOnDragDown
      onClose={onClose}
      animationType="fade"
      dragFromTopOnly={dragFromTopOnly}
      customStyles={{
        container: {
          borderTopLeftRadius: ScaleHeight(10),
          borderTopRightRadius: ScaleHeight(10),
        },
        draggableIcon: {
          backgroundColor: Colors.white,
        },
      }}
    >
      <View style={[styles.sheetView, containerStyle]}>{children}</View>
    </BottomSheet>
  );
};

export default CustomBottomSheet;
