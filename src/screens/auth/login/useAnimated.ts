import {
  interpolate,
  SharedValue,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {Colors} from 'common';
export default function useAnimated() {
  const animated: SharedValue<number> = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(animated?.value ?? 0, [0, 1], [0, 0.5]),
      backgroundColor: Colors.black,
    };
  }, [animated]);

  return {
    animated,
    animatedStyle,
  };
}
