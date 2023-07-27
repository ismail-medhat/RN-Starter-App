import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    // '157055486823-a0mjfjfhkscpugt9ni18p2ugtmviemsg.apps.googleusercontent.com',
    '157055486823-6mpmiakd471f9qpfnrg4qmmh8vgsvr5l.apps.googleusercontent.com',
  offlineAccess: true,
  forceCodeForRefreshToken: true,
});

export const googleSignInFun = async () => {
  console.log('Start Google SignIn...');
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const userInfo = await GoogleSignin.signIn();
    console.log('Start Google SignIn userInfo :: ', userInfo);
  } catch (error: any) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
      console.log('Error Google SignIn userInfo :: ', error);
    }
  }
};

export const googleSignOutFun = async () => {
  console.log('Start Google SignOut...');
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
  } catch (error) {
    console.log('Error Google SignOut :: ', error);
  }
};
