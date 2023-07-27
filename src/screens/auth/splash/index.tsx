import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import ScreenNames from 'navigation/ScreenNames';
import {ScreenContainer} from 'components';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {RootState} from 'store';

type ISplashScreenProps = {
  navigation: StackNavigationProp<ParamListBase>;
};

const SplashScreen: React.FC<ISplashScreenProps> = ({navigation}) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const {t} = useTranslation();
  React.useEffect(() => {
    setTimeout(() => {
      console.log('isLoggedIn :: ', isLoggedIn);
      if (isLoggedIn) {
        navigation.navigate(ScreenNames.BottomTabs);
      } else {
        navigation.navigate(ScreenNames.Login);
      }
    }, 1000);
  }, []);

  return (
    <ScreenContainer style={styles.container} isDarkStatusBar={false}>
      <Text style={styles.seoudiTxt}>{t('Seoudi')}</Text>
    </ScreenContainer>
  );
};

export default SplashScreen;
