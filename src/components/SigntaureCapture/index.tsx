import React, { Dispatch, LegacyRef, RefAttributes } from "react";
import { View, TouchableOpacity, ColorValue } from "react-native";
import Button from "../Button";
import styles from "./styles";
import SignatureCapture, {
  SignatureCaptureProps,
} from "react-native-signature-capture";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScaleWidth } from "common";

type TSigntaureCaptureProps = {
  handleOnClear: Function;
  setOpenColorPick: Dispatch<ColorValue>;
  signatureColor: ColorValue;
  signatureRef: LegacyRef<SignatureCaptureProps>;
  onSaveEvent(result: any): any;
  onDragEvent(): void;
  text: string;
  clear?: boolean;
  saveSignature(): void;
  loading?: boolean;
};

const SigntaureCaptureComponent: React.FC<TSigntaureCaptureProps> = ({
  handleOnClear,
  setOpenColorPick,
  signatureColor,
  signatureRef,
  onSaveEvent,
  onDragEvent,
  text = "Save Signature",
  clear,
  saveSignature,
  loading = false,
}) => {
  return (
    <View>
      <View style={styles.signatureView}>
        <TouchableOpacity style={styles.radioButton} onPress={setOpenColorPick}>
          <Ionicons
            name={"radio-button-on"}
            size={ScaleWidth(23)}
            color={signatureColor}
          />
        </TouchableOpacity>
        <SignatureCapture
          style={styles.signature}
          ref={signatureRef}
          onSaveEvent={onSaveEvent}
          onDragEvent={onDragEvent}
          saveImageFileInExtStorage={false}
          showNativeButtons={false}
          showTitleLabel={false}
          minStrokeWidth={2}
          maxStrokeWidth={2}
          viewMode={"portrait"}
          showBorder={false}
          strokeColor={signatureColor}
          // maxSize={150}
        />
      </View>
      <Button
        onPress={() => {
          saveSignature();
          signatureRef.current?.saveImage();
        }}
        text={text}
        style={styles.button}
        loading={loading}
        isDisapled={loading}
      />
      {!clear ? null : (
        <Button
          text={"Clear"}
          style={styles.clear}
          buttonTextStyle={styles.buttonTextStyle}
          onPress={handleOnClear}
        />
      )}
    </View>
  );
};

export default SigntaureCaptureComponent;
