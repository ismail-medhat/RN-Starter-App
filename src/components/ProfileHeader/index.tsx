import {View, Text, Image, ImageProps} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';

import {Images} from 'common';

interface IAccountScreenProps {
  userName?: string;
  isLoggedIn?: boolean;
  userPhoto?: ImageProps;
}

const ProfileHeader: React.FC<IAccountScreenProps> = ({
  userName = '',
  isLoggedIn = true,
  userPhoto,
}) => {
  const {t} = useTranslation();
  return (
    <>
      {isLoggedIn ? (
        <View style={styles.rowStart}>
          {!userPhoto ? (
            <View style={styles.imgBox}>
              <Text style={styles.firstLetter}>
                {userName.charAt(0).toUpperCase()}
              </Text>
            </View>
          ) : (
            <View style={styles.imgBox}>
              <Image
                source={userPhoto}
                style={styles.imgStyle}
                resizeMode="cover"
              />
            </View>
          )}
          <View>
            <Text
              style={[
                styles.titleTxt,
                {textTransform: isLoggedIn ? 'capitalize' : 'lowercase'},
              ]}>
              {userName}
            </Text>
            <Text onPress={() => {}} style={styles.subTitleTxt}>
              {t('viewEditProfile')}
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.rowStart}>
          <View style={styles.imgBox}>
            <Image
              source={Images.profieImg}
              style={styles.imgStyle}
              resizeMode="cover"
            />
          </View>
          <View>
            <Text style={styles.titleTxt}> {t('login')}</Text>
            <Text onPress={() => {}} style={styles.subTitleTxt}>
              {t('loginToAccount')}
            </Text>
          </View>
        </View>
      )}
    </>
  );
};

export default ProfileHeader;
