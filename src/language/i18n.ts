import i18n from 'i18next';
import {useTranslation, initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

const getDeviceLanguage = () => {
  const locales = RNLocalize.getLocales();
  if (locales && locales.length > 0) {
    console.log('mobile Lang : ', locales[0].languageCode);
    return locales[0].languageCode;
  }
  console.log('mobile Lang defualt : en');
  return 'en';
};

let translations = {
  en: require('./en'),
  ar: require('./ar'),
};

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translations['en'],
    },
    ar: {
      translation: translations['ar'],
    },
  },
  lng: getDeviceLanguage(),
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

/* --------------------------------------------------------------- */
// How to use translation
// import { useTranslation } from "react-i18next";
// const { i18n, t } = useTranslation();

// let appLang = await AsyncStorage.getItem("language");
// if (appLang === "en") {
//   i18n.changeLanguage("en");
//   // console.log("i'm if", i18n.language);
//   dispatch(actionCreator.updateLanguage("en"));
// } else if (appLang === "ar") {
//   // console.log("i'm else if", i18n.language);
//   i18n.changeLanguage("ar");
//   dispatch(actionCreator.updateLanguage("ar"));
// } else {
//   // console.log("i'm else");
//   await AsyncStorage.setItem("language", "en");
//   i18n.changeLanguage("en");
//   dispatch(actionCreator.updateLanguage("en"));
// }

// textContent={t('Please wait')}
// ---------------------
// import RNRestart from "react-native-restart";
// import { I18nManager } from "react-native";

// const switchLanguage = async () => {
//   let currentLang = await AsyncStorage.getItem("language");
//   console.log("currentLang", currentLang);
//   setIsShowLanguage(false);
//   dispatch(actionCreator.updateLoaderStatus(true));
//   if (currentLang !== "en") {
//     await AsyncStorage.setItem("language", "en");
//     dispatch(actionCreator.updateLanguage("en"));
//     i18n.changeLanguage("en").then(() => {
//       I18nManager.forceRTL(false);
//       console.log("@@@@@@@@@@@@@@", I18nManager.isRTL);
//       setTimeout(() => {
//         RNRestart.Restart();
//       }, 100);
//     });
//   } else if (currentLang !== "ar") {
//     await AsyncStorage.setItem("language", "ar");
//     dispatch(actionCreator.updateLanguage("ar"));
//     i18n.changeLanguage("ar").then(() => {
//       I18nManager.forceRTL(true);
//       console.log("@@@@@@@@@@@@@@", I18nManager.isRTL, i18n.language);
//       setTimeout(() => {
//         RNRestart.Restart();
//       }, 100);
//     });
//   }
// };
