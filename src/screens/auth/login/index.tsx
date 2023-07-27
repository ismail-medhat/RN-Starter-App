import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {ScreenContainer} from 'components';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors, Fonts, ScaleHeight, ScaleWidth} from 'common';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';
import ScreenNames from 'navigation/ScreenNames';
import SocialButton from './SocialButton';
import {useTranslation} from 'react-i18next';
import {googleSignInFun} from 'utils/socialLoginFun';
type ISLoginScreeenProps = {
  navigation: StackNavigationProp<ParamListBase>;
};
const LoginScreen: React.FC<ISLoginScreeenProps> = ({navigation}) => {
  const {t} = useTranslation();
  const navToBootomTabs = () => {
    console.log('first');
    navigation.navigate(ScreenNames.BottomTabs);
  };

  return (
    <ScreenContainer style={styles.container}>
      <View style={{flex: 1}}>
        <TouchableOpacity style={styles.closeBox} onPress={navToBootomTabs}>
          <Icon name={'close'} size={ScaleWidth(30)} />
        </TouchableOpacity>
        <View style={styles.subContainer}>
          <Text style={styles.seoudiTxt}>Seoudi</Text>
          <Text style={styles.titleTxt}>welcome to seoudi egypt</Text>
          <Text style={styles.subTitleTxt}>
            The trusted community of buyers and sellers
          </Text>

          <SocialButton
            icon={<Icon name={'google'} size={ScaleWidth(20)} />}
            title={t('googleLogin')}
            onClick={() => googleSignInFun()}
          />
          <SocialButton
            icon={<Icon name={'facebook-square'} size={ScaleWidth(20)} />}
            title={t('facebookLogin')}
            onClick={() => {}}
          />
          <SocialButton
            icon={<Icon name={'mail'} size={ScaleWidth(20)} />}
            title={t('emailLogin')}
            onClick={() => {}}
          />
          <SocialButton
            icon={<Icon name={'mobile1'} size={ScaleWidth(20)} />}
            title={t('phoneLogin')}
            onClick={() => {}}
          />
        </View>
        <View style={{alignSelf: 'center', position: 'absolute', bottom: 0}}>
          <Text style={styles.ploicyTxt}>
            if you countine, you are accepting
          </Text>
          <View style={styles.rowCenter}>
            <Text
              onPress={() => {}}
              style={[styles.ploicyTxt, styles.policyUndrline]}>
              seoudi Terms and Conditions
            </Text>
            <Text style={styles.ploicyTxt}> {'and '} </Text>
            <Text
              onPress={() => {}}
              style={[styles.ploicyTxt, styles.policyUndrline]}>
              Privacy Policy
            </Text>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default LoginScreen;
