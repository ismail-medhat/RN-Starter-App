import {Text, TouchableOpacity} from 'react-native';
import React, {JSX} from 'react';
import styles from './styles';

interface ISocialButtonProps {
  icon: JSX.Element;
  title: string;
  onClick: () => void;
}

const SocialButton: React.FC<ISocialButtonProps> = ({icon, title, onClick}) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.socialBtnBox}>
      {icon}
      <Text style={styles.socialBtnTxt}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SocialButton;
