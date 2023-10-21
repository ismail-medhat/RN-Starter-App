import React, { LegacyRef, useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Colors, ScaleHeight } from "common";
import {
  CustomBottomSheet,
  SigntaureCaptureComponent,
  ColorPickerComponent,
  TwoTabs,
} from "components";
import {
  ImagePickerResponse,
  launchImageLibrary,
} from "react-native-image-picker";
import SignatureCapture, {
  SignatureCaptureProps,
} from "react-native-signature-capture";
const HomeScreen: React.FC = () => {
  const [openSignature, setOpenSignature] = useState(false);
  const [openColorPick, setOpenColorPick] = useState(false);
  const [signatureColor, setSignatureColor] = useState(Colors.black);
  const [activeTab, setActiveTab] = useState(0);

  const signatureRef = useRef<SignatureCaptureProps | null>(null);

  // open signature
  const handleOpenSignature = () => {
    setOpenSignature(true);
  };
  const handleCloseSignature = () => {
    setOpenSignature(false);
  };

  const handleOnClear = () => {
    if (signatureRef.current) {
      signatureRef.current.resetImage();
    }
  };

  const onSelectColor = ({ hex }) => {
    setSignatureColor(hex);
  };
  const onSaveColorPick = () => {
    setOpenColorPick(false);
  };

  const onAddSignaturePress = () => {
    handleOpenSignature();
  };

  const onSaveSignature = () => {
    handleCloseSignature();
  };

  const openGallery = () => {
    const options: any = {
      mediaType: "photo",
      maxWidth: 600,
      maxHeight: 600,
      quality: 1,
      includeBase64: true,
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response?.error) {
        console.log("ImagePicker Error: ", response?.error);
      } else {
        console.log("ImagePicker assets: ", response.assets);
        let image = response?.assets[0]?.base64;
        // setSignature(image);
        console.log("Signture Image Res : ", image);
      }
    });
  };

  const onSaveEvent = (result: { encoded: string }) => {
    // setSignature(result?.encoded);
    console.log("Signture Image Base64 Res : ", result?.encoded);
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen!</Text>
      <CustomBottomSheet
        isOpen={openSignature}
        onClose={handleCloseSignature}
        height={ScaleHeight("65%")}
        dragFromTopOnly={true}
      >
        <>
          {openColorPick == false ? (
            <View style={styles.headerSheet}>
              <Text style={styles.addSignature}>{"Add Signature"}</Text>
              <TouchableOpacity onPress={handleOnClear}>
                <Text style={styles.clear}>{"Clear"}</Text>
              </TouchableOpacity>
            </View>
          ) : null}

          {openColorPick == false ? (
            <TwoTabs
              firstTabTxt={"Draw"}
              secondTabTxt={"Upload"}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              withShadowStyle
              customSecondTabPress
              onSecondTabPress={openGallery}
            />
          ) : null}

          {activeTab == 0 ? (
            <View>
              {openColorPick == false ? (
                <SigntaureCaptureComponent
                  text={"Save"}
                  signatureRef={signatureRef}
                  setOpenColorPick={() => setOpenColorPick(true)}
                  signatureColor={signatureColor}
                  onSaveEvent={onSaveEvent}
                  onDragEvent={() => console.log("dragged")}
                  handleOnClear={handleOnClear}
                  saveSignature={onSaveSignature}
                />
              ) : (
                <ColorPickerComponent
                  onComplete={onSelectColor}
                  onSave={onSaveColorPick}
                />
              )}
            </View>
          ) : null}
        </>
      </CustomBottomSheet>
    </View>
  );
};

export default HomeScreen;
