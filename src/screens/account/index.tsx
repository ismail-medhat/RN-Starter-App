import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {ProfileHeader, ScreenContainer} from 'components';
import {Images, ScaleWidth} from 'common';
const AccountScreen: React.FC = () => {
  return (
    <ScreenContainer style={styles.container}>
      <View style={{paddingHorizontal: ScaleWidth(15)}}>
        <ProfileHeader isLoggedIn={false} />
      </View>
    </ScreenContainer>
  );
};

export default AccountScreen;
