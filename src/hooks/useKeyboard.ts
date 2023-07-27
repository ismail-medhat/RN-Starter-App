// useKeyboard.ts

import {useEffect, useState} from 'react';
import {Keyboard, KeyboardEvent} from 'react-native';

interface KeyboardInfo {
  keyboardHeight: number;
  isKeyboardVisible: boolean;
}

const useKeyboard = (): KeyboardInfo => {
  const [keyboardInfo, setKeyboardInfo] = useState<KeyboardInfo>({
    keyboardHeight: 0,
    isKeyboardVisible: false,
  });

  const handleKeyboardShow = (event: KeyboardEvent) => {
    const keyboardHeight = event.endCoordinates.height;
    setKeyboardInfo({
      keyboardHeight,
      isKeyboardVisible: true,
    });
  };

  const handleKeyboardHide = () => {
    setKeyboardInfo({
      keyboardHeight: 0,
      isKeyboardVisible: false,
    });
  };

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener(
      'keyboardDidShow',
      handleKeyboardShow,
    );
    const keyboardHideListener = Keyboard.addListener(
      'keyboardDidHide',
      handleKeyboardHide,
    );

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  return keyboardInfo;
};

export default useKeyboard;
