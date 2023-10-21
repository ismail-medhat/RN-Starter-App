// useUploadImage.ts

import { useState, useEffect, useRef } from "react";
import { Linking, AppState } from "react-native";
import { request, RESULTS, PERMISSIONS } from "react-native-permissions";
import useHelper from "./useHelper";
const useCameraPermission = () => {
  const [cameraGranted, setCameraGranted] = useState<boolean>(false);
  const [cameraDenied, setCameraDenied] = useState<boolean>(false);
  const [notAppStateMode, setNotAppStateMode] = useState<boolean>(true);
  const { isIOS, goToAppSetting } = useHelper();
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        if (!cameraDenied && !cameraGranted && !notAppStateMode) {
          console.log("nextAppState :: ", nextAppState);
          askCameraPermissions();
        }
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, [cameraDenied, cameraGranted, notAppStateMode]);

  useEffect(() => {
    console.log("req camera permission first time");
    askCameraPermissions();
  }, []);

  const navToAppSettings = () => {
    if (cameraDenied) {
      askCameraPermissions();
    } else {
      goToAppSetting();
    }
  };

  const askCameraPermissions = () => {
    const persmission = isIOS
      ? PERMISSIONS.IOS.CAMERA
      : PERMISSIONS.ANDROID.CAMERA;
    request(persmission)
      .then((result) => {
        console.log("Persimssion CAMERA Req : ", result);
        if (result === RESULTS.GRANTED) {
          setCameraGranted(true);
          console.log("Persimssion CAMERA Req Successfully Grannted ");
        } else if (result === RESULTS.DENIED) {
          console.log("Persimssion CAMERA Denied ");
          setCameraGranted(false);
          setCameraDenied(true);
        } else if (result === RESULTS.BLOCKED) {
          console.log("Persimssion CAMERA Blocked ");
          setCameraGranted(false);
          setCameraDenied(false);
          setNotAppStateMode(false);
        }
      })
      .catch((err) => {
        console.log("Persimssion CAMERA Req Error : ", err);
      });
  };

  return { cameraGranted, navToAppSettings };
};

export default useCameraPermission;
