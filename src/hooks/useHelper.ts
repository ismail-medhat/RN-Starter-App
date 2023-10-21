import { Platform, I18nManager, Linking } from "react-native";

const useHelper = () => {
  const isIOS = Platform.OS === "ios" ? true : false;
  const isRTL = I18nManager.isRTL;
  const goToAppSetting = () => {
    if (isIOS) {
      Linking.openURL("app-settings:");
    } else {
      Linking.openSettings();
    }
  };
  return { isIOS, isRTL, goToAppSetting };
};

export default useHelper;
