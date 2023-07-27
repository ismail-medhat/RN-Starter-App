import {useEffect, useState} from 'react';
import {Platform, PermissionsAndroid, Alert} from 'react-native';
import {RNCamera, TakePictureOptions} from 'react-native-camera';

export interface CameraResult {
  uri: string;
}

const useCamera = () => {
  const [cameraPermission, setCameraPermission] = useState<boolean | null>(
    null,
  );
  const [isTakingPicture, setIsTakingPicture] = useState(false);
  const [cameraRef, setCameraRef] = useState<RNCamera | null>(null);

  useEffect(() => {
    // Check for camera permission on mount (only for Android)
    if (Platform.OS === 'android') {
      requestCameraPermission();
    } else {
      setCameraPermission(true);
    }
  }, []);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs access to your camera to take pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setCameraPermission(true);
      } else {
        setCameraPermission(false);
      }
    } catch (err) {
      console.warn('Error requesting camera permission:', err);
    }
  };

  const takePicture = async (): Promise<CameraResult | null> => {
    if (!cameraPermission) {
      Alert.alert(
        'Permission Required',
        'You need to grant camera permission to take pictures.',
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
        return {uri: data.uri};
      } else {
        return null;
      }
    } catch (error) {
      setIsTakingPicture(false);
      console.warn('Error taking picture:', error);
      return null;
    }
  };

  return {cameraPermission, cameraRef, takePicture, isTakingPicture};
};

export default useCamera;
