export type apisTypes = {
  login: string;
  register: string;
  verifyEmail: string;
  resendVerifyCode: string;
  logout: string;
  forgetPassword: string;
  verifyCode: string;
  resetPassword: string;
  getAllMohafez: string;
};

export const APIS: apisTypes = {
  login: '/login',
  register: '/register',
  verifyEmail: '/verify-email',
  resendVerifyCode: '/resend-verify-code',
  logout: '/logout',
  forgetPassword: '/forget-password',
  verifyCode: '/verify-code',
  resetPassword: '/reset-password',
  getAllMohafez: '/mohafez-get-all',
};
