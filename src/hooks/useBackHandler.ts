import {useEffect} from 'react';
import {BackHandler} from 'react-native';

const useBackHandler = (onBack: () => boolean) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onBack,
    );

    return () => {
      backHandler.remove();
    };
  }, [onBack]);
};

export default useBackHandler;
