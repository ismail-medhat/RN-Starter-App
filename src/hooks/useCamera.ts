import { useState } from "react";
import { Alert } from "react-native";
import { RNCamera, TakePictureOptions } from "react-native-camera";
import useCameraPermission from "./useCameraPermission";

export interface CameraResult {
  uri: string;
}

const useCamera = () => {
  const [isTakingPicture, setIsTakingPicture] = useState(false);
  const [cameraRef, setCameraRef] = useState<RNCamera | null>(null);
  const { cameraGranted } = useCameraPermission();

  const takePicture = async (): Promise<CameraResult | null> => {
    if (!cameraGranted) {
      Alert.alert(
        "Permission Required",
        "You need to grant camera permission to take pictures."
      );
      return null;
    }

    if (isTakingPicture) {
      return null; // Prevent taking pictures while another picture is being taken
    }

    setIsTakingPicture(true);
    try {
      const options: TakePictureOptions = {
        quality: 0.8, // Adjust the image quality as needed
        base64: false, // Set to true if you want the image in base64 format
      };

      const data = await cameraRef?.takePictureAsync(options);
      setIsTakingPicture(false);

      if (data?.uri) {
        return { uri: data.uri };
      } else {
        return null;
      }
    } catch (error) {
      setIsTakingPicture(false);
      console.warn("Error taking picture:", error);
      return null;
    }
  };

  return { cameraGranted, takePicture, isTakingPicture };
};

export default useCamera;
